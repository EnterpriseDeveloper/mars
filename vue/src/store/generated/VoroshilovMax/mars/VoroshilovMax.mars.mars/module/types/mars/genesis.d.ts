import { Writer, Reader } from 'protobufjs/minimal';
import { CreatePrivEvents } from '../mars/create_priv_events';
import { CreatePubEvents } from '../mars/create_pub_events';
export declare const protobufPackage = "VoroshilovMax.mars.mars";
/** GenesisState defines the mars module's genesis state. */
export interface GenesisState {
    createPrivEventsList: CreatePrivEvents[];
    createPrivEventsCount: number;
    createPubEventsList: CreatePubEvents[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    createPubEventsCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
