import { sdk } from "../gql/clients";
import {
  CreateCustomDomainMutation,
  DeleteCustomDomainMutation,
  ServiceDomainsQuery,
} from "../gql/sdk";
import { PROJECT_ID, ENVIRONMENT_ID } from "../constants";

export const getServiceDomains = async (
  serviceId: string,
): Promise<ServiceDomainsQuery["allCustomDomainsForEnvironment"]> => {
  return (
    await sdk.ServiceDomains({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: serviceId,
    })
  ).allCustomDomainsForEnvironment;
};

export const deleteCustomDomain = async (
  customDomainId: string,
): Promise<DeleteCustomDomainMutation> => {
  return await sdk.DeleteCustomDomain({
    customDomainId: customDomainId,
    projectId: PROJECT_ID,
    environmentId: ENVIRONMENT_ID,
  });
};

export const createCustomDomain = async (
  customDomain: string,
  serviceId: string,
): Promise<CreateCustomDomainMutation> => {
  return await sdk.CreateCustomDomain({
    projectId: PROJECT_ID,
    environmentId: ENVIRONMENT_ID,
    serviceId: serviceId,
    domain: customDomain,
  });
};
