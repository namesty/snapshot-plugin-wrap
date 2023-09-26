import {
  PolywrapClientConfigBuilder,
  IWrapPackage,
  PolywrapClient,
} from "@polywrap/client-js";
import { snapshotPlugin } from "../";
import { ethers } from "ethers";
import { Proposal, ProposalStateEnum, Space } from "../wrap";

describe("e2e", () => {
  let client: PolywrapClient;
  const uri = "ens/sampleplugin.eth";

  beforeAll(() => {
    // Add the samplePlugin to the PolywrapClient
    const config = new PolywrapClientConfigBuilder()
      .addDefaults()
      .setPackage(
        uri,
        snapshotPlugin({
          isProduction: true,
          appName: "sampleApp",
          web3Provider: new ethers.providers.InfuraProvider(
            "mainnet",
            "c909dc21639c4027a1b8b39e522e6c7b"
          ) as any,
        }) as IWrapPackage
      )
      .build();

    client = new PolywrapClient(config);
  });

  it("Find created proposals in spaces", async () => {
    const result = await client.invoke<Proposal[]>({
      uri,
      method: "findProposals",
      args: {
        state: ProposalStateEnum.ACTIVE,
        spaceIds: ["yam.eth", "lido-snapshot.eth"],
      },
    });

    if (!result.ok) {
      console.log(result.error);
      throw new Error("Error invoking findProposals");
    }

    expect(result.ok).toBeTruthy();
    expect(result.value).toBeTruthy();

    result.value.forEach((proposal) => {
      expect(proposal.state).toEqual(ProposalStateEnum.ACTIVE);
      expect(["yam.eth", "lido-snapshot.eth"]).toContain(proposal.spaceId);
    });
  });

  it("Find proposal by ID", async () => {
    const result = await client.invoke<Proposal>({
      uri,
      method: "findProposalById",
      args: {
        id: "0x0e2905ded918a6b13914342985fa82b3940e3228f81888c2fcf1000122f28422",
      },
    });

    if (!result.ok) {
      console.log(result.error);
      throw new Error("Error invoking findProposalById");
    }

    expect(result.ok).toBeTruthy();
    expect(result.value).toBeTruthy();

    expect(result.value.id).toBe(
      "0x0e2905ded918a6b13914342985fa82b3940e3228f81888c2fcf1000122f28422"
    );
  });

  it("Get followed spaces", async () => {
    const result = await client.invoke<Space[]>({
      uri,
      method: "getFollowedSpaces",
      args: {
        user: "0xc8ce740210b4b0e21a5628a42d59dc674170ed6d",
      },
    });

    if (!result.ok) {
      console.log(result.error);
      throw new Error("Error invoking getFollowedSpaces");
    }

    expect(result.ok).toBeTruthy();
    expect(result.value).toBeTruthy();
    expect(result.value.length).toBeTruthy();
  });
});
