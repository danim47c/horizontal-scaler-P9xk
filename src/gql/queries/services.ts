import { gql } from "graphql-request";

export default gql`
  query Services($where: ServiceListWhereInput) {
    services(where: $where) {
      nodes {
        id
        name
      }
    }
  }
`;
