export enum ProposalState {
  CREATED = "created",
  ACTIVE = "active",
  CLOSED = "closed",
}

export interface ProposalDTO {
  id: string;
  title: string;
  network: string;
  body: string;
  choices: string[];
  start: number;
  end: number;
  link: string;
  created: number;
  discussion: string;
  snapshot: number;
  state: ProposalState;
  scores: number[];
  author: string;
  space: {
    id: string;
    name: string;
  };
}
