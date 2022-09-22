import { sdk } from "../gql/clients";
import { ServicesQuery } from "../gql/sdk";
import {
  DOMAIN_ID,
  ENVIRONMENT_ID,
  PROJECT_ID,
  SERVICE_NAME,
} from "../constants";
import { add } from "./traefik";

export const getAllServices = async (): Promise<
  ServicesQuery["services"]["nodes"]
> => {
  return (
    await sdk.Services({
      where: {
        projectId: PROJECT_ID,
      },
    })
  ).services.nodes;
};

export const getServices = async (
  serviceNameContains: string
): Promise<ServicesQuery["services"]["nodes"]> => {
  const nodes = (
    await sdk.Services({
      where: {
        projectId: PROJECT_ID,
      },
    })
  ).services.nodes;
  let services: ServicesQuery["services"]["nodes"] = [];
  for (let node of nodes) {
    if (node.name.includes(serviceNameContains)) {
      services.push(node);
    }
  }
  return services;
};

export const updateServiceName = async (
  serviceId: string,
  name: string
): Promise<void> => {
  await sdk.UpdateServiceName({
    projectId: PROJECT_ID,
    serviceId: serviceId,
    name: name,
  });
};

export const getServiceIdByName = (
  name: string,
  services: ServicesQuery["services"]["nodes"]
): string => {
  for (let service of services) {
    if (service.name === name) {
      return service.id;
    }
  }
  throw new Error(`Service ${name} not found`);
};

export const mirrorService = async (
  sourceServiceId: string,
  services: ServicesQuery["services"]["nodes"]
) => {
  const serviceId = (
    await sdk.CreateService({
      projectId: PROJECT_ID,
      name: `${SERVICE_NAME} #${services.length + 1}`,
      source: {},
    })
  ).createService.id;
  const sourceService = (
    await sdk.Service({
      serviceId: sourceServiceId,
    })
  ).service;
  const service = await sdk.UpdateService({
    serviceId: serviceId,
    projectId: PROJECT_ID,
    ...sourceService,
  });

  const variables = (
    await sdk.DecryptedVariablesForService({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: sourceServiceId,
    })
  ).decryptedVariablesForService;
  await sdk.VariablesSetFromObject({
    projectId: PROJECT_ID,
    environmentId: ENVIRONMENT_ID,
    serviceId: serviceId,
    variables: variables,
  });
  try {
    await sdk.ServiceDomainCreate({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: serviceId,
    });
  } catch (_) {}
  await sdk.SetDomainForEnvironment({
    projectId: PROJECT_ID,
    environmentId: ENVIRONMENT_ID,
    serviceId: serviceId,
    domain: `${DOMAIN_ID}-${SERVICE_NAME}${services.length + 1}.up.railway.app`,
  });

  add();
  return service.updateService;
};

export const deleteMirror = async (
  services: ServicesQuery["services"]["nodes"]
) => {
  const service = services[services.length - 1];
  await sdk.DeleteService({
    projectId: PROJECT_ID,
    serviceId: service.id,
  });
};
