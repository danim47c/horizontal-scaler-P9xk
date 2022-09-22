import { stringify } from "yaml";
import { writeFile } from "fs/promises";
import { getServices } from "./services";
import { DOMAIN_ID, SERVICE_NAME } from "../constants";

const TRAEFIK_CONF: TraefikConf = {
  http: {
    routers: {
      r1: {
        rule: "!Host(`google.com`)",
        service: "s1",
      },
    },
    services: {
      s1: {
        loadBalancer: {
          passHostHeader: false,
          servers: [],
        },
      },
    },
  },
};

export const initTraefik = async () => {
  let servers: { url: string }[] = [];
  let count = 0;
  const services = await getServices(`${SERVICE_NAME} #`);

  services.forEach(() => {
    count++;
    servers.push({
      url: `https://${DOMAIN_ID}-${SERVICE_NAME}${count}.up.railway.app`,
    });
  });

  TRAEFIK_CONF.http.services.s1.loadBalancer.servers = servers;
  writeFile("/etc/traefik/traefik-conf.yml", stringify(TRAEFIK_CONF));
};

interface TraefikConf {
  http: {
    routers: {
      r1: {
        rule: string;
        service: string;
      };
    };
    services: {
      s1: {
        loadBalancer: {
          passHostHeader: boolean;
          servers: {
            url: string;
          }[];
        };
      };
    };
  };
}
