/// NOTE: This is an auto-generated file.
///       All modifications will be overwritten.

// @ts-ignore
import * as Types from "./types";

// @ts-ignore
import { CoreClient, MaybeAsync } from "@polywrap/core-js";
import { PluginModule } from "@polywrap/plugin-js";

export interface Args_findProposals {
  state?: Types.ProposalState | null;
  author?: Types.String | null;
  spaceIds?: Array<Types.String> | null;
}

export interface Args_findProposalById {
  id: Types.String;
}

export interface Args_getFollowedSpaces {
}

export interface Args_createProposal {
  spaceId: Types.String;
  type: Types.ProposalType;
  title: Types.String;
  body: Types.String;
  choices: Array<Types.String>;
  start: Types.Int;
  end: Types.Int;
  snapshot?: Types.Int | null;
  discussion: Types.String;
}

export interface Args_voteProposal {
  proposalId: Types.String;
  choice: Types.Int;
  reason: Types.String;
}

export abstract class Module<TConfig> extends PluginModule<TConfig> {
  abstract findProposals(
    args: Args_findProposals,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Array<Types.Proposal>>;

  abstract findProposalById(
    args: Args_findProposalById,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.ProposalWithVotes | null>;

  abstract getFollowedSpaces(
    args: Args_getFollowedSpaces,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Array<Types.Space>>;

  abstract createProposal(
    args: Args_createProposal,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.String>;

  abstract voteProposal(
    args: Args_voteProposal,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.String>;
}
