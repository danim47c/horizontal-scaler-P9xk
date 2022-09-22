import { initSetup } from "./controllers/setup";
import { SERVICE_NAME } from "./constants";

async function main() {
  if (SERVICE_NAME.length > 27) {
    throw new Error("Service name must be less than 27 characters");
  }
  await initSetup();
}

main();
