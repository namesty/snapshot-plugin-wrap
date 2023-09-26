import { gql } from "graphql-request";

export const GET_PROPOSAL = gql`
  query getProposal($id: String) {
    proposals(where: { id: $id }) {
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
      type
      scores
      author
      space {
        id
        name
      }
    }
  }
`;
