import {
  SERVICE_NAME,
  PROJECT_ID,
  ENVIRONMENT_ID,
  SERVICE_ID,
  DOMAIN_ID,
} from "../constants";
import { getAllServices, updateServiceName } from "./services";
import { ServicesQuery } from "../gql/sdk";
import { sdk } from "../gql/clients";
import {
  deleteCustomDomain,
  getServiceDomains,
  createCustomDomain,
} from "./domains";
import { getServiceIdByName } from "./services";
import { initTraefik } from "./traefik";

export const initSetup = async () => {
  const services = await getAllServices(PROJECT_ID);
  if (!isSetupComplete(services)) {
    const serviceId = getServiceIdByName(SERVICE_NAME, services);
    const domains = await getServiceDomains(serviceId);
    const customDomains = domains.customDomains;
    const serviceDomain = domains.serviceDomains[0].domain;

    // Setup custom domain
    for (let customDomain of customDomains) {
      await deleteCustomDomain(customDomain.id);
      await createCustomDomain(customDomain.domain, SERVICE_ID);
    }
    // Setup static url
    await sdk.SetDomainForEnvironment({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: serviceId,
      domain: `${DOMAIN_ID}-${SERVICE_NAME}1.up.railway.app`,
    });
    if (!process.env.RAILWAY_STATIC_URL && customDomains.length === 0) {
      await sdk.ServiceDomainCreate({
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
        serviceId: SERVICE_ID,
      });
    }
    await sdk.SetDomainForEnvironment({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: SERVICE_ID,
      domain: serviceDomain,
    });
    // Setup service name
    await updateServiceName(SERVICE_ID, `${SERVICE_NAME}-gtwy`);
    await updateServiceName(serviceId, `${SERVICE_NAME} #1`);
  }
  // Setup traefik
  await initTraefik();
};

const isSetupComplete = (
  services: ServicesQuery["services"]["nodes"],
): boolean => {
  for (let service of services) {
    if (service.name === `${SERVICE_NAME} #1`) {
      return true;
    }
  }
  return false;
};
