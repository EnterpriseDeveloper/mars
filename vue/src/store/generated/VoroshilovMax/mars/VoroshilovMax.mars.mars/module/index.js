// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCreatePrivEvents } from "./types/mars/tx";
import { MsgUpdateCreatePubEvents } from "./types/mars/tx";
import { MsgDeleteCreatePrivEvents } from "./types/mars/tx";
import { MsgCreateCreatePubEvents } from "./types/mars/tx";
import { MsgUpdateCreatePrivEvents } from "./types/mars/tx";
import { MsgDeleteCreatePubEvents } from "./types/mars/tx";
const types = [
    ["/VoroshilovMax.mars.mars.MsgCreateCreatePrivEvents", MsgCreateCreatePrivEvents],
    ["/VoroshilovMax.mars.mars.MsgUpdateCreatePubEvents", MsgUpdateCreatePubEvents],
    ["/VoroshilovMax.mars.mars.MsgDeleteCreatePrivEvents", MsgDeleteCreatePrivEvents],
    ["/VoroshilovMax.mars.mars.MsgCreateCreatePubEvents", MsgCreateCreatePubEvents],
    ["/VoroshilovMax.mars.mars.MsgUpdateCreatePrivEvents", MsgUpdateCreatePrivEvents],
    ["/VoroshilovMax.mars.mars.MsgDeleteCreatePubEvents", MsgDeleteCreatePubEvents],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateCreatePrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.mars.mars.MsgCreateCreatePrivEvents", value: data }),
        msgUpdateCreatePubEvents: (data) => ({ typeUrl: "/VoroshilovMax.mars.mars.MsgUpdateCreatePubEvents", value: data }),
        msgDeleteCreatePrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.mars.mars.MsgDeleteCreatePrivEvents", value: data }),
        msgCreateCreatePubEvents: (data) => ({ typeUrl: "/VoroshilovMax.mars.mars.MsgCreateCreatePubEvents", value: data }),
        msgUpdateCreatePrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.mars.mars.MsgUpdateCreatePrivEvents", value: data }),
        msgDeleteCreatePubEvents: (data) => ({ typeUrl: "/VoroshilovMax.mars.mars.MsgDeleteCreatePubEvents", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
