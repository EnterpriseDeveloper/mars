import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCreatePrivEvents } from "./types/mars/tx";
import { MsgUpdateCreatePubEvents } from "./types/mars/tx";
import { MsgDeleteCreatePrivEvents } from "./types/mars/tx";
import { MsgCreateCreatePubEvents } from "./types/mars/tx";
import { MsgUpdateCreatePrivEvents } from "./types/mars/tx";
import { MsgDeleteCreatePubEvents } from "./types/mars/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateCreatePrivEvents: (data: MsgCreateCreatePrivEvents) => EncodeObject;
    msgUpdateCreatePubEvents: (data: MsgUpdateCreatePubEvents) => EncodeObject;
    msgDeleteCreatePrivEvents: (data: MsgDeleteCreatePrivEvents) => EncodeObject;
    msgCreateCreatePubEvents: (data: MsgCreateCreatePubEvents) => EncodeObject;
    msgUpdateCreatePrivEvents: (data: MsgUpdateCreatePrivEvents) => EncodeObject;
    msgDeleteCreatePubEvents: (data: MsgDeleteCreatePubEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
