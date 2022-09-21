import { sdk } from "../gql/clients";
import { ServicesQuery } from "../gql/sdk";

export const getServices = async (
  projectId: string,
): Promise<ServicesQuery["services"]["nodes"]> => {
  const vars = {
    where: {
      projectId: projectId,
    },
  };
  return (await sdk.Services(vars)).services.nodes;
};
