import { gql } from "graphql-request";

export const GET_VOTES = gql`
  query getProposal($proposalId: String!) {
    votes(where: { proposal: $proposalId }) {
      id
      voter
      created
      choice
      vp
    }
  }
`;
