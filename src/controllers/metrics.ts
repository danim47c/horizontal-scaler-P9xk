import { sdk } from "../gql/clients";
import { PROJECT_ID, ENVIRONMENT_ID } from "../constants";

export const getMetrics = async (
  serviceId: string,
): Promise<
  {
    cpu: number;
    memory: number;
  }
> => {
  let cpu = 0;
  let memory = 0;
  const deployments = (
    await sdk.MetricsForService({
      projectId: PROJECT_ID,
      environmentId: ENVIRONMENT_ID,
      serviceId: serviceId,
      // Last 1 minute
      startDate: new Date(Date.now() - 60000).toISOString(),
    })
  ).metricsForService.deployments;
  if (deployments.length > 0 && deployments[0].metrics.length > 0) {
    const metrics = deployments[0].metrics;
    cpu = metrics.at(-1)!.cpuPercentVCPU ?? 0;
    memory =
      (metrics.at(-1)!.memoryUsageBytes / metrics.at(-1)!.memoryLimitBytes) *
      100;
  }
  return { cpu: cpu, memory: memory };
};
