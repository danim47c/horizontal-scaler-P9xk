import { getSdk } from "./sdk";
import { GraphQLClient } from "graphql-request";
import { BACKBOARD_TOKEN } from "../constants";

const graphQLClient = new GraphQLClient(
  "https://backboard.railway.app/graphql",
  {
    headers: {
      authorization: `Bearer ${BACKBOARD_TOKEN}`,
    },
  },
);

export const sdk = getSdk(graphQLClient);
