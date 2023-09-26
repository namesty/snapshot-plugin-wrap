import {
  Args_createProposal,
  Args_findProposalById,
  Args_findProposals,
  Args_getFollowedSpaces,
  Args_voteProposal,
  CoreClient,
  Module,
  Proposal,
  ProposalType as WrapProposalType,
  ProposalState as WrapProposalState,
  ProposalTypeEnum,
  ProposalWithVotes,
  Space,
  manifest,
  ProposalStateEnum,
} from "./wrap";

import { ethers } from "ethers";
import snapshot from "@snapshot-labs/snapshot.js";
import { PluginFactory, PluginPackage } from "@polywrap/plugin-js";
import request from "graphql-request";
import { GET_PROPOSALS } from "./queries/GET_PROPOSALS";
import {
  GetFollowsArgs,
  GetFollowsDTO,
  GetProposalArgs,
  GetProposalDTO,
  GetProposalsArgs,
  GetProposalsDTO,
  GetSpacesArgs,
  GetSpacesDTO,
  GetVotesArgs,
  GetVotesDTO,
} from "./dtos/queries.dto";
import { GET_FOLLOWS } from "./queries/GET_FOLLOWS";
import { GET_PROPOSAL } from "./queries/GET_PROPOSAL";
import { GET_VOTES } from "./queries/GET_VOTES";
import { GET_SPACES } from "./queries/GET_SPACES";
import { ProposalState, ProposalType } from "./dtos/proposal.dto";

export interface SnapshotPluginConfig {
  isProduction: boolean;
  web3Provider: ethers.providers.Web3Provider;
  appName: string;
}

export class SnapshotPlugin extends Module<SnapshotPluginConfig> {
  private _apiUrl: string;
  private _client;
  private _web3Provider: ethers.providers.Web3Provider;
  private _appName: string;

  constructor(config: SnapshotPluginConfig) {
    super(config);

    this._apiUrl = config.isProduction
      ? "https://hub.snapshot.org/graphql"
      : "https://testnet.snapshot.org/graphql";

    this._client = new snapshot.Client712(this._apiUrl);
    this._web3Provider = config.web3Provider;
    this._appName = config.appName;
  }

  private _mapEnumToProposalState(type: WrapProposalState): ProposalState {
    switch (type) {
      case ProposalStateEnum.CREATED:
      case "CREATED":
        return ProposalState.CREATED;
      case ProposalStateEnum.ACTIVE:
      case "ACTIVE":
        return ProposalState.ACTIVE;
      case ProposalStateEnum.CLOSED:
      case "CLOSED":
        return ProposalState.CLOSED;
    }
  }

  private _mapProposalStateToEnum(type: ProposalState): WrapProposalState {
    switch (type) {
      case ProposalState.CREATED:
        return ProposalStateEnum.CREATED;
      case ProposalState.ACTIVE:
        return ProposalStateEnum.ACTIVE;
      case ProposalState.CLOSED:
        return ProposalStateEnum.CLOSED;
    }
  }

  private _mapEnumToProposalType(type: WrapProposalType): ProposalType {
    switch (type) {
      case ProposalTypeEnum.SINGLE_CHOICE:
      case "SINGLE_CHOICE":
        return "single-choice";
      case ProposalTypeEnum.APPROVAL:
      case "APPROVAL":
        return "approval";
      case ProposalTypeEnum.QUADRATIC:
      case "QUADRATIC":
        return "quadratic";
      case ProposalTypeEnum.RANKED_CHOICE:
      case "RANKED_CHOICE":
        return "ranked-choice";
      case ProposalTypeEnum.WEIGHTED:
      case "WEIGHTED":
        return "weighted";
      case ProposalTypeEnum.BASIC:
      case "BASIC":
        return "basic";
    }
  }

  private _mapProposalTypeToEnum(type: ProposalType): WrapProposalType {
    switch (type) {
      case "single-choice":
        return ProposalTypeEnum.SINGLE_CHOICE;
      case "approval":
        return ProposalTypeEnum.APPROVAL;
      case "quadratic":
        return ProposalTypeEnum.QUADRATIC;
      case "ranked-choice":
        return ProposalTypeEnum.RANKED_CHOICE;
      case "weighted":
        return ProposalTypeEnum.WEIGHTED;
      case "basic":
        return ProposalTypeEnum.BASIC;
    }
  }

  async getUserFollowedSpaces(userAddress: string): Promise<string[]> {
    const followsDto = await request<GetFollowsDTO, GetFollowsArgs>(
      this._apiUrl,
      GET_FOLLOWS,
      {
        follower: userAddress,
      }
    );

    const spaceIds = followsDto.follows.map((follow) => follow.space.id);

    return spaceIds;
  }

  async findProposals(
    args: Args_findProposals,
    client: CoreClient,
    env?: null | undefined
  ): Promise<Proposal[]> {
    const result = await request<GetProposalsDTO, GetProposalsArgs>(
      this._apiUrl,
      GET_PROPOSALS,
      {
        author: args.author ?? undefined,
        state: args.state
          ? this._mapEnumToProposalState(args.state)
          : undefined,
        spaces: args.spaceIds ?? undefined,
      }
    );

    return result.proposals.map((proposal) => ({
      id: proposal.id,
      title: proposal.title,
      body: proposal.body,
      choices: proposal.choices,
      start: proposal.start,
      end: proposal.end,
      type: this._mapProposalTypeToEnum(proposal.type),
      snapshot: proposal.snapshot,
      state: this._mapProposalStateToEnum(proposal.state),
      author: proposal.author,
      created: proposal.created,
      spaceId: proposal.space.id,
    }));
  }
  async findProposalById(
    args: Args_findProposalById,
    client: CoreClient,
    env?: null | undefined
  ): Promise<ProposalWithVotes | null> {
    const result = await request<GetProposalDTO, GetProposalArgs>(
      this._apiUrl,
      GET_PROPOSAL,
      {
        id: args.id,
      }
    );

    if (!result.proposals.length) {
      return null;
    }

    const proposal = result.proposals[0];

    const votes = await request<GetVotesDTO, GetVotesArgs>(
      this._apiUrl,
      GET_VOTES,
      {
        proposalId: proposal.id,
      }
    );

    return {
      id: proposal.id,
      title: proposal.title,
      body: proposal.body,
      choices: proposal.choices,
      start: proposal.start,
      end: proposal.end,
      snapshot: proposal.snapshot,
      state: this._mapProposalStateToEnum(proposal.state),
      type: this._mapProposalTypeToEnum(proposal.type),
      author: proposal.author,
      created: proposal.created,
      spaceId: proposal.space.id,
      votes: votes.votes.map((vote) => ({
        id: vote.id,
        voter: vote.voter,
        votingPower: vote.vp.toString(),
        created: vote.created,
        proposalId: proposal.id,
        choice: Object.entries(vote.choice)
          .filter(([_, value]) => !!value)
          .map(([choice]) => choice),
        spaceId: proposal.space.id,
      })),
    };
  }
  async getFollowedSpaces(
    args: Args_getFollowedSpaces,
    client: CoreClient,
    env?: null | undefined
  ): Promise<Space[]> {
    const signerAddress = await this._web3Provider.getSigner().getAddress();
    const spaceIds = await this.getUserFollowedSpaces(signerAddress);

    const result = await request<GetSpacesDTO, GetSpacesArgs>(
      this._apiUrl,
      GET_SPACES,
      {
        ids: spaceIds,
      }
    );

    return result.spaces.map((space) => ({
      id: space.id,
      name: space.name,
      about: space.about,
      network: space.network,
      symbol: space.symbol,
      members: space.members,
      admins: space.admins,
    }));
  }
  async createProposal(
    args: Args_createProposal,
    client: CoreClient,
    env?: null | undefined
  ): Promise<string> {
    const signerAddress = await this._web3Provider.getSigner().getAddress();
    const currentBlock = await this._web3Provider.getBlockNumber();

    const receipt = await this._client.proposal(
      this._web3Provider,
      signerAddress,
      {
        space: args.spaceId,
        type: this._mapEnumToProposalType(args.type),
        title: args.title,
        body: args.body,
        choices: args.choices,
        start: args.start,
        end: args.end,
        snapshot: args.snapshot ?? currentBlock,
        plugins: JSON.stringify({}),
        app: this._appName,
        discussion: args.discussion,
      }
    );

    return JSON.stringify(receipt);
  }
  async voteProposal(
    args: Args_voteProposal,
    client: CoreClient,
    env?: null | undefined
  ): Promise<string> {
    const signerAddress = await this._web3Provider.getSigner().getAddress();

    const proposal = await this.findProposalById(
      { id: args.proposalId },
      client,
      env
    );

    if (!proposal) {
      throw new Error(`Proposal with id ${args.proposalId} not found.`);
    }

    const receipt = await this._client.vote(this._web3Provider, signerAddress, {
      space: proposal.spaceId,
      proposal: args.proposalId,
      type: this._mapEnumToProposalType(proposal.type),
      choice: args.choice,
      reason: args.reason,
      app: this._appName,
    });

    return JSON.stringify(receipt);
  }
}

export const snapshotPlugin: PluginFactory<SnapshotPluginConfig> = (
  config: SnapshotPluginConfig
) => {
  return new PluginPackage(new SnapshotPlugin(config), manifest);
};

export const plugin = SnapshotPlugin;
