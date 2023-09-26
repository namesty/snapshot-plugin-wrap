/// NOTE: This is an auto-generated file.
///       All modifications will be overwritten.

// @ts-ignore
import * as Types from "./";

// @ts-ignore
import {
  CoreClient,
  InvokeResult,
  Uri,
} from "@polywrap/core-js";

export type UInt = number;
export type UInt8 = number;
export type UInt16 = number;
export type UInt32 = number;
export type Int = number;
export type Int8 = number;
export type Int16 = number;
export type Int32 = number;
export type Bytes = Uint8Array;
export type BigInt = string;
export type BigNumber = string;
export type Json = string;
export type String = string;
export type Boolean = boolean;

/// Env START ///
/// Env END ///

/// Objects START ///
export interface Space {
  id: Types.String;
  name: Types.String;
  about: Types.String;
  network: Types.String;
  symbol: Types.String;
  members: Array<Types.String>;
  admins: Array<Types.String>;
}

export interface ProposalWithVotes {
  id: Types.String;
  title: Types.String;
  body: Types.String;
  choices: Array<Types.String>;
  start: Types.Int;
  end: Types.Int;
  snapshot: Types.Int;
  state: Types.String;
  author: Types.String;
  created: Types.Int;
  spaceId: Types.String;
  votes: Array<Types.Vote>;
  type: Types.ProposalType;
}

export interface Proposal {
  id: Types.String;
  title: Types.String;
  body: Types.String;
  choices: Array<Types.String>;
  start: Types.Int;
  end: Types.Int;
  snapshot: Types.Int;
  state: Types.String;
  author: Types.String;
  created: Types.Int;
  spaceId: Types.String;
  type: Types.ProposalType;
}

export interface Vote {
  id: Types.String;
  voter: Types.String;
  votingPower: Types.String;
  created: Types.Int;
  proposalId: Types.String;
  choice: Array<Types.String>;
  spaceId: Types.String;
}

/// Objects END ///

/// Enums START ///
export enum ProposalTypeEnum {
  SINGLE_CHOICE,
  APPROVAL,
  QUADRATIC,
  RANKED_CHOICE,
  WEIGHTED,
  BASIC,
}

export type ProposalTypeString =
  | "SINGLE_CHOICE"
  | "APPROVAL"
  | "QUADRATIC"
  | "RANKED_CHOICE"
  | "WEIGHTED"
  | "BASIC"

export type ProposalType = ProposalTypeEnum | ProposalTypeString;

/// Enums END ///

/// Imported Objects START ///

/// Imported Objects END ///

/// Imported Modules START ///

/// Imported Modules END ///
