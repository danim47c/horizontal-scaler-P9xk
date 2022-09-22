import { initSetup } from "./controllers/setup";
import { SERVICE_NAME } from "./constants";
import {
  deleteMirror,
  getServiceIdByName,
  getServices,
  mirrorService,
} from "./controllers/services";
import { getMetrics } from "./controllers/metrics";
import { MEMORY_MIN, MEMORY_MAX, CPU_MIN, CPU_MAX } from "./constants";
import { sleep } from "../util/util";

async function main() {
  if (SERVICE_NAME.length > 27) {
    throw new Error("Service name must be less than 27 characters");
  }
  await initSetup();
  const services = await getServices(`${SERVICE_NAME} #`);
  const serviceId = getServiceIdByName(SERVICE_NAME, services);
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
      const service = await mirrorService(serviceId, services);
      services.push(service);
      sleep(3);
    } else if (cpu < CPU_MIN && memory < MEMORY_MIN && services.length > 1) {
      await deleteMirror(services);
      sleep(3);
    }
    sleep(1);
  }
}

main();
