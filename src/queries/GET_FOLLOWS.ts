import { gql } from "graphql-request";

export const GET_FOLLOWS = gql`
  query getFollows($follower: String!) {
    follows(where: { follower: $follower }) {
      id
      follower
      space {
        id
      }
    }
  }
`;
