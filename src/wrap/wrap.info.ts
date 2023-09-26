/// NOTE: This is an auto-generated file.
///       All modifications will be overwritten.
import { WrapManifest } from "@polywrap/wrap-manifest-types-js"

export const manifest: WrapManifest = {
  name: "Sample",
  type: "plugin",
  version: "0.1",
  abi: {
  "enumTypes": [
    {
      "constants": [
        "SINGLE_CHOICE",
        "APPROVAL",
        "QUADRATIC",
        "RANKED_CHOICE",
        "WEIGHTED",
        "BASIC"
      ],
      "kind": 8,
      "type": "ProposalType"
    },
    {
      "constants": [
        "CREATED",
        "ACTIVE",
        "CLOSED"
      ],
      "kind": 8,
      "type": "ProposalState"
    }
  ],
  "moduleType": {
    "kind": 128,
    "methods": [
      {
        "arguments": [
          {
            "enum": {
              "kind": 16384,
              "name": "state",
              "type": "ProposalState"
            },
            "kind": 34,
            "name": "state",
            "type": "ProposalState"
          },
          {
            "kind": 34,
            "name": "author",
            "scalar": {
              "kind": 4,
              "name": "author",
              "type": "String"
            },
            "type": "String"
          },
          {
            "array": {
              "item": {
                "kind": 4,
                "name": "spaceIds",
                "required": true,
                "type": "String"
              },
              "kind": 18,
              "name": "spaceIds",
              "scalar": {
                "kind": 4,
                "name": "spaceIds",
                "required": true,
                "type": "String"
              },
              "type": "[String]"
            },
            "kind": 34,
            "name": "spaceIds",
            "type": "[String]"
          }
        ],
        "kind": 64,
        "name": "findProposals",
        "required": true,
        "return": {
          "array": {
            "item": {
              "kind": 8192,
              "name": "findProposals",
              "required": true,
              "type": "Proposal"
            },
            "kind": 18,
            "name": "findProposals",
            "object": {
              "kind": 8192,
              "name": "findProposals",
              "required": true,
              "type": "Proposal"
            },
            "required": true,
            "type": "[Proposal]"
          },
          "kind": 34,
          "name": "findProposals",
          "required": true,
          "type": "[Proposal]"
        },
        "type": "Method"
      },
      {
        "arguments": [
          {
            "kind": 34,
            "name": "id",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "id",
              "required": true,
              "type": "String"
            },
            "type": "String"
          }
        ],
        "kind": 64,
        "name": "findProposalById",
        "required": true,
        "return": {
          "kind": 34,
          "name": "findProposalById",
          "object": {
            "kind": 8192,
            "name": "findProposalById",
            "type": "ProposalWithVotes"
          },
          "type": "ProposalWithVotes"
        },
        "type": "Method"
      },
      {
        "kind": 64,
        "name": "getFollowedSpaces",
        "required": true,
        "return": {
          "array": {
            "item": {
              "kind": 8192,
              "name": "getFollowedSpaces",
              "required": true,
              "type": "Space"
            },
            "kind": 18,
            "name": "getFollowedSpaces",
            "object": {
              "kind": 8192,
              "name": "getFollowedSpaces",
              "required": true,
              "type": "Space"
            },
            "required": true,
            "type": "[Space]"
          },
          "kind": 34,
          "name": "getFollowedSpaces",
          "required": true,
          "type": "[Space]"
        },
        "type": "Method"
      },
      {
        "arguments": [
          {
            "kind": 34,
            "name": "spaceId",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "spaceId",
              "required": true,
              "type": "String"
            },
            "type": "String"
          },
          {
            "enum": {
              "kind": 16384,
              "name": "type",
              "required": true,
              "type": "ProposalType"
            },
            "kind": 34,
            "name": "type",
            "required": true,
            "type": "ProposalType"
          },
          {
            "kind": 34,
            "name": "title",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "title",
              "required": true,
              "type": "String"
            },
            "type": "String"
          },
          {
            "kind": 34,
            "name": "body",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "body",
              "required": true,
              "type": "String"
            },
            "type": "String"
          },
          {
            "array": {
              "item": {
                "kind": 4,
                "name": "choices",
                "required": true,
                "type": "String"
              },
              "kind": 18,
              "name": "choices",
              "required": true,
              "scalar": {
                "kind": 4,
                "name": "choices",
                "required": true,
                "type": "String"
              },
              "type": "[String]"
            },
            "kind": 34,
            "name": "choices",
            "required": true,
            "type": "[String]"
          },
          {
            "kind": 34,
            "name": "start",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "start",
              "required": true,
              "type": "Int"
            },
            "type": "Int"
          },
          {
            "kind": 34,
            "name": "end",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "end",
              "required": true,
              "type": "Int"
            },
            "type": "Int"
          },
          {
            "kind": 34,
            "name": "snapshot",
            "scalar": {
              "kind": 4,
              "name": "snapshot",
              "type": "Int"
            },
            "type": "Int"
          },
          {
            "kind": 34,
            "name": "discussion",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "discussion",
              "required": true,
              "type": "String"
            },
            "type": "String"
          }
        ],
        "kind": 64,
        "name": "createProposal",
        "required": true,
        "return": {
          "kind": 34,
          "name": "createProposal",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "createProposal",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        "type": "Method"
      },
      {
        "arguments": [
          {
            "kind": 34,
            "name": "proposalId",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "proposalId",
              "required": true,
              "type": "String"
            },
            "type": "String"
          },
          {
            "kind": 34,
            "name": "choice",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "choice",
              "required": true,
              "type": "Int"
            },
            "type": "Int"
          },
          {
            "kind": 34,
            "name": "reason",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "reason",
              "required": true,
              "type": "String"
            },
            "type": "String"
          }
        ],
        "kind": 64,
        "name": "voteProposal",
        "required": true,
        "return": {
          "kind": 34,
          "name": "voteProposal",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "voteProposal",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        "type": "Method"
      }
    ],
    "type": "Module"
  },
  "objectTypes": [
    {
      "kind": 1,
      "properties": [
        {
          "kind": 34,
          "name": "id",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "id",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "name",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "name",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "about",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "about",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "network",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "network",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "symbol",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "symbol",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "array": {
            "item": {
              "kind": 4,
              "name": "members",
              "required": true,
              "type": "String"
            },
            "kind": 18,
            "name": "members",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "members",
              "required": true,
              "type": "String"
            },
            "type": "[String]"
          },
          "kind": 34,
          "name": "members",
          "required": true,
          "type": "[String]"
        },
        {
          "array": {
            "item": {
              "kind": 4,
              "name": "admins",
              "required": true,
              "type": "String"
            },
            "kind": 18,
            "name": "admins",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "admins",
              "required": true,
              "type": "String"
            },
            "type": "[String]"
          },
          "kind": 34,
          "name": "admins",
          "required": true,
          "type": "[String]"
        }
      ],
      "type": "Space"
    },
    {
      "kind": 1,
      "properties": [
        {
          "kind": 34,
          "name": "id",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "id",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "title",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "title",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "body",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "body",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "array": {
            "item": {
              "kind": 4,
              "name": "choices",
              "required": true,
              "type": "String"
            },
            "kind": 18,
            "name": "choices",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "choices",
              "required": true,
              "type": "String"
            },
            "type": "[String]"
          },
          "kind": 34,
          "name": "choices",
          "required": true,
          "type": "[String]"
        },
        {
          "kind": 34,
          "name": "start",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "start",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "end",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "end",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "snapshot",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "snapshot",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "enum": {
            "kind": 16384,
            "name": "state",
            "required": true,
            "type": "ProposalState"
          },
          "kind": 34,
          "name": "state",
          "required": true,
          "type": "ProposalState"
        },
        {
          "kind": 34,
          "name": "author",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "author",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "created",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "created",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "spaceId",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "spaceId",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "array": {
            "item": {
              "kind": 8192,
              "name": "votes",
              "required": true,
              "type": "Vote"
            },
            "kind": 18,
            "name": "votes",
            "object": {
              "kind": 8192,
              "name": "votes",
              "required": true,
              "type": "Vote"
            },
            "required": true,
            "type": "[Vote]"
          },
          "kind": 34,
          "name": "votes",
          "required": true,
          "type": "[Vote]"
        },
        {
          "enum": {
            "kind": 16384,
            "name": "type",
            "required": true,
            "type": "ProposalType"
          },
          "kind": 34,
          "name": "type",
          "required": true,
          "type": "ProposalType"
        }
      ],
      "type": "ProposalWithVotes"
    },
    {
      "kind": 1,
      "properties": [
        {
          "kind": 34,
          "name": "id",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "id",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "title",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "title",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "body",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "body",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "array": {
            "item": {
              "kind": 4,
              "name": "choices",
              "required": true,
              "type": "String"
            },
            "kind": 18,
            "name": "choices",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "choices",
              "required": true,
              "type": "String"
            },
            "type": "[String]"
          },
          "kind": 34,
          "name": "choices",
          "required": true,
          "type": "[String]"
        },
        {
          "kind": 34,
          "name": "start",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "start",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "end",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "end",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "snapshot",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "snapshot",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "enum": {
            "kind": 16384,
            "name": "state",
            "required": true,
            "type": "ProposalState"
          },
          "kind": 34,
          "name": "state",
          "required": true,
          "type": "ProposalState"
        },
        {
          "kind": 34,
          "name": "author",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "author",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "created",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "created",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "spaceId",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "spaceId",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "enum": {
            "kind": 16384,
            "name": "type",
            "required": true,
            "type": "ProposalType"
          },
          "kind": 34,
          "name": "type",
          "required": true,
          "type": "ProposalType"
        }
      ],
      "type": "Proposal"
    },
    {
      "kind": 1,
      "properties": [
        {
          "kind": 34,
          "name": "id",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "id",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "voter",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "voter",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "votingPower",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "votingPower",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "kind": 34,
          "name": "created",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "created",
            "required": true,
            "type": "Int"
          },
          "type": "Int"
        },
        {
          "kind": 34,
          "name": "proposalId",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "proposalId",
            "required": true,
            "type": "String"
          },
          "type": "String"
        },
        {
          "array": {
            "item": {
              "kind": 4,
              "name": "choice",
              "required": true,
              "type": "String"
            },
            "kind": 18,
            "name": "choice",
            "required": true,
            "scalar": {
              "kind": 4,
              "name": "choice",
              "required": true,
              "type": "String"
            },
            "type": "[String]"
          },
          "kind": 34,
          "name": "choice",
          "required": true,
          "type": "[String]"
        },
        {
          "kind": 34,
          "name": "spaceId",
          "required": true,
          "scalar": {
            "kind": 4,
            "name": "spaceId",
            "required": true,
            "type": "String"
          },
          "type": "String"
        }
      ],
      "type": "Vote"
    }
  ],
  "version": "0.1"
}
}
