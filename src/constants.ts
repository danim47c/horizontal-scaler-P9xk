export const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const BACKBOARD_TOKEN = getEnvVar("BACKBOARD_TOKEN");
export const SERVICE_NAME = getEnvVar("SERVICE_NAME");
export const PROJECT_ID = getEnvVar("RAILWAY_PROJECT_ID");
export const ENVIRONMENT_ID = getEnvVar("RAILWAY_ENVIRONMENT_ID");
export const SERVICE_ID = getEnvVar("RAILWAY_SERVICE_ID");
export const DOMAIN_ID = ENVIRONMENT_ID.split("-")[4];
export const CPU_MIN = Number(getEnvVar("CPU_MIN"));
export const CPU_MAX = Number(getEnvVar("CPU_MAX"));
export const MEMORY_MIN = Number(getEnvVar("MEMORY_MIN"));
export const MEMORY_MAX = Number(getEnvVar("MEMORY_MAX"));
