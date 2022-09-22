import { initSetup } from "./controllers/setup";
import { SERVICE_NAME } from "./constants";
import { getServices } from "./controllers/services";
import { getMetrics } from "./controllers/metrics";
import { MEMORY_MIN, MEMORY_MAX, CPU_MIN, CPU_MAX } from "./constants";

async function main() {
  if (SERVICE_NAME.length > 27) {
    throw new Error("Service name must be less than 27 characters");
  }
  await initSetup();
  const services = await getServices(`${SERVICE_NAME} #`);
  while (true) {
    let cpu = 0;
    let memory = 0;
    for (let service of services) {
      const metrics = await getMetrics(service.id);
      cpu += metrics.cpu;
      memory += metrics.memory;
    }
    if (services.length > 0) {
      cpu = cpu / services.length;
      memory = memory / services.length;
    }
    if (cpu > CPU_MAX || memory > MEMORY_MAX) {
      // scale up
    } else if (cpu < CPU_MIN && memory < MEMORY_MIN && services.length > 1) {
      // scale down
    }
    await new Promise((f) => setTimeout(f, 1000));
  }
}

main();
