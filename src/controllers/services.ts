import { sdk } from "../gql/clients";
import { ServicesQuery } from "../gql/sdk";
import { PROJECT_ID } from "../constants";

export const getServices = async (
  projectId: string,
): Promise<ServicesQuery["services"]["nodes"]> => {
  return (
    await sdk.Services({
      where: {
        projectId: projectId,
      },
    })
  ).services.nodes;
};

export const updateServiceName = async (
  serviceId: string,
  name: string,
): Promise<void> => {
  await sdk.UpdateService({
    projectId: PROJECT_ID,
    serviceId: serviceId,
    name: name,
  });
};

export const getServiceIdByName = (
  name: string,
  services: ServicesQuery["services"]["nodes"],
): string => {
  for (let service of services) {
    if (service.name === name) {
      return service.id;
    }
  }
  throw new Error(`Service ${name} not found`);
};
