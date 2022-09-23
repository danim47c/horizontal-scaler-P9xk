import { initSetup } from "./controllers/setup";
import { SERVICE_MAX, SERVICE_MIN, SERVICE_NAME } from "./constants";
import {
  deleteMirror,
  getServiceIdByName,
  getServices,
  mirrorService,
} from "./controllers/services";
import { getMetrics } from "./controllers/metrics";
import { MEMORY_MIN, MEMORY_MAX, CPU_MIN, CPU_MAX } from "./constants";
import { sleep } from "./util/util";

async function main() {
  if (SERVICE_NAME.length > 27) {
    throw new Error("Service name must be less than 27 characters");
  }
  await initSetup();
  const services = await getServices(`${SERVICE_NAME} #`);
  services.sort(function (x, y) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  });
  const serviceId = getServiceIdByName(`${SERVICE_NAME} #1`, services);
  for (let i = services.length; i < SERVICE_MIN; i++) {
    const service = await mirrorService(serviceId, services);
    services.push(service);
  }
  while (true) {
    let cpu = 0;
    let memory = 0;
    for (let service of services) {
      const metrics = await getMetrics(service.id);
      cpu += metrics.cpu;
      memory += metrics.memory;
    }
    if (services.length > 0) {
      cpu = (cpu / services.length) * 100;
      memory = memory / services.length;
    }
    console.log(cpu, memory);
    if (
      (cpu > CPU_MAX || memory > MEMORY_MAX) &&
      services.length < SERVICE_MAX
    ) {
      const service = await mirrorService(serviceId, services);
      services.push(service);
    } else if (
      cpu < CPU_MIN &&
      memory < MEMORY_MIN &&
      services.length > SERVICE_MIN
    ) {
      await deleteMirror(services);
      services.pop();
    }
    await sleep(1);
  }
}

main();
