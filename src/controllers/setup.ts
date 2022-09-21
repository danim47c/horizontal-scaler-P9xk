import {
  SERVICE_NAME,
  PROJECT_ID,
  ENVIRONMENT_ID,
  SERVICE_ID,
} from "../constants";
import { getServices } from "./services";
import { ServicesQuery } from "../gql/sdk";
import { sdk } from "../gql/clients";
export const initSetup = async () => {
  const services = await getServices(PROJECT_ID);
  if (!isSetupComplete(services)) {
    const serviceId = getServiceIdByName(SERVICE_NAME, services);
    const domains = await sdk.ServiceDomains({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: serviceId,
    });
    const serviceDomains =
      domains.allCustomDomainsForEnvironment.serviceDomains;
    const customDomains = domains.allCustomDomainsForEnvironment.customDomains;
    
    for (let customDomain of customDomains) {
      await sdk.DeleteCustomDomain({
        customDomainId: customDomain.id,
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
      });
      await sdk.CreateCustomDomain({
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
        serviceId: SERVICE_ID,
        domain: customDomain.domain,
      });
    }

    for (let serviceDomain of serviceDomains) {
      await sdk.ServiceDomainDelete({
        serviceDomainDeleteId: serviceDomain.id,
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
      });
      if (!process.env.RAILWAY_STATIC_URL) {
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
        domain: serviceDomain.domain,
      });
    }
  }
};

const isSetupComplete = (
  services: ServicesQuery["services"]["nodes"]
): boolean => {
  for (let service of services) {
    if (service.name === `${SERVICE_NAME}1`) {
      return true;
    }
  }
  return false;
};

const getServiceIdByName = (
  name: string,
  services: ServicesQuery["services"]["nodes"]
): string => {
  for (let service of services) {
    if (service.name === name) {
      return service.id;
    }
  }
  return "";
};
