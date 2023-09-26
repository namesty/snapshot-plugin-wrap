import { gql } from "graphql-request";

export const GET_PROPOSALS = gql`
  query getProposals($state: String, $spaces: [String!], $author: String) {
    proposals(where: { state: $state, space_in: $spaces, author: $author }) {
      id
      title
      network
      body
      choices
      start
      end
      link
      type
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
