import { gql } from "graphql-request";

export const GET_SPACES = gql`
  query getSpaces($ids: [String!]!) {
    spaces(where: { id_in: $ids }) {
      id
      name
      about
      network
      symbol
      admins
      members
    }
  }
`;
