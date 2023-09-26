import { Variables } from "graphql-request";
import { FollowDTO } from "./follow.dto";
import { ProposalDTO } from "./proposal.dto";
import { SpaceDTO } from "./space.dto";
import { VoteDTO } from "./vote.dto";

export interface GetSpacesArgs extends Variables {
  ids: string[];
}

export interface GetSpacesDTO {
  spaces: SpaceDTO[];
}

export interface GetProposalArgs extends Variables {
  id?: string;
}

export interface GetProposalDTO {
  proposals: ProposalDTO[];
}

export interface GetVotesArgs extends Variables {
  proposalId: string;
}

export interface GetVotesDTO {
  votes: VoteDTO[];
}

export interface GetFollowsArgs extends Variables {
  follower: string;
}

export interface GetFollowsDTO {
  follows: FollowDTO[];
}

export interface GetProposalsArgs extends Variables {
  spaces?: string[];
  state?: string;
  author?: string;
}

export interface GetProposalsDTO {
  proposals: ProposalDTO[];
}
