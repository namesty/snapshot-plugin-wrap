import { gql } from "graphql-request";

export const GET_PROPOSALS = gql`
  query getProposals($state: String, $spaces: [String!], titleContains: String) {
    proposals(where: { state: $state, space_in: $spaces, title_contains: $titleContains }) {
      id
      title
      network
      body
      choices
      start
      end
      link
      created
      discussion
      snapshot
      state
      scores
      author
      space {
        id
        name
      }
    }
  }
`;
