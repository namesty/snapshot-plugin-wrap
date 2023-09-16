import { gql } from "graphql-request";

export const GET_PROPOSAL = gql`
  query getProposal($id: String, $titleContains: String) {
    proposals(where: { id: $id, title_contains: $titleContains }) {
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
