import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.mars.mars";
export interface MsgCreateCreatePrivEvents {
    creator: string;
    privId: string;
    question: string;
    answers: string;
    winner: string;
    loser: string;
}
export interface MsgCreateCreatePrivEventsResponse {
    id: number;
}
export interface MsgUpdateCreatePrivEvents {
    creator: string;
    id: number;
    privId: string;
    question: string;
    answers: string;
    winner: string;
    loser: string;
}
export interface MsgUpdateCreatePrivEventsResponse {
}
export interface MsgDeleteCreatePrivEvents {
    creator: string;
    id: number;
}
export interface MsgDeleteCreatePrivEventsResponse {
}
export interface MsgCreateCreatePubEvents {
    creator: string;
    pubId: string;
    question: string;
    answers: string;
    premAmount: string;
    startTime: string;
    endTime: string;
    expertAmount: string;
}
export interface MsgCreateCreatePubEventsResponse {
    id: number;
}
export interface MsgUpdateCreatePubEvents {
    creator: string;
    id: number;
    pubId: string;
    question: string;
    answers: string;
    premAmount: string;
    startTime: string;
    endTime: string;
    expertAmount: string;
}
export interface MsgUpdateCreatePubEventsResponse {
}
export interface MsgDeleteCreatePubEvents {
    creator: string;
    id: number;
}
export interface MsgDeleteCreatePubEventsResponse {
}
export declare const MsgCreateCreatePrivEvents: {
    encode(message: MsgCreateCreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePrivEvents;
    fromJSON(object: any): MsgCreateCreatePrivEvents;
    toJSON(message: MsgCreateCreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePrivEvents>): MsgCreateCreatePrivEvents;
};
export declare const MsgCreateCreatePrivEventsResponse: {
    encode(message: MsgCreateCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePrivEventsResponse;
    fromJSON(object: any): MsgCreateCreatePrivEventsResponse;
    toJSON(message: MsgCreateCreatePrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePrivEventsResponse>): MsgCreateCreatePrivEventsResponse;
};
export declare const MsgUpdateCreatePrivEvents: {
    encode(message: MsgUpdateCreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEvents;
    fromJSON(object: any): MsgUpdateCreatePrivEvents;
    toJSON(message: MsgUpdateCreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCreatePrivEvents>): MsgUpdateCreatePrivEvents;
};
export declare const MsgUpdateCreatePrivEventsResponse: {
    encode(_: MsgUpdateCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEventsResponse;
    fromJSON(_: any): MsgUpdateCreatePrivEventsResponse;
    toJSON(_: MsgUpdateCreatePrivEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCreatePrivEventsResponse>): MsgUpdateCreatePrivEventsResponse;
};
export declare const MsgDeleteCreatePrivEvents: {
    encode(message: MsgDeleteCreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePrivEvents;
    fromJSON(object: any): MsgDeleteCreatePrivEvents;
    toJSON(message: MsgDeleteCreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCreatePrivEvents>): MsgDeleteCreatePrivEvents;
};
export declare const MsgDeleteCreatePrivEventsResponse: {
    encode(_: MsgDeleteCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePrivEventsResponse;
    fromJSON(_: any): MsgDeleteCreatePrivEventsResponse;
    toJSON(_: MsgDeleteCreatePrivEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCreatePrivEventsResponse>): MsgDeleteCreatePrivEventsResponse;
};
export declare const MsgCreateCreatePubEvents: {
    encode(message: MsgCreateCreatePubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEvents;
    fromJSON(object: any): MsgCreateCreatePubEvents;
    toJSON(message: MsgCreateCreatePubEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePubEvents>): MsgCreateCreatePubEvents;
};
export declare const MsgCreateCreatePubEventsResponse: {
    encode(message: MsgCreateCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEventsResponse;
    fromJSON(object: any): MsgCreateCreatePubEventsResponse;
    toJSON(message: MsgCreateCreatePubEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePubEventsResponse>): MsgCreateCreatePubEventsResponse;
};
export declare const MsgUpdateCreatePubEvents: {
    encode(message: MsgUpdateCreatePubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePubEvents;
    fromJSON(object: any): MsgUpdateCreatePubEvents;
    toJSON(message: MsgUpdateCreatePubEvents): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCreatePubEvents>): MsgUpdateCreatePubEvents;
};
export declare const MsgUpdateCreatePubEventsResponse: {
    encode(_: MsgUpdateCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePubEventsResponse;
    fromJSON(_: any): MsgUpdateCreatePubEventsResponse;
    toJSON(_: MsgUpdateCreatePubEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCreatePubEventsResponse>): MsgUpdateCreatePubEventsResponse;
};
export declare const MsgDeleteCreatePubEvents: {
    encode(message: MsgDeleteCreatePubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePubEvents;
    fromJSON(object: any): MsgDeleteCreatePubEvents;
    toJSON(message: MsgDeleteCreatePubEvents): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCreatePubEvents>): MsgDeleteCreatePubEvents;
};
export declare const MsgDeleteCreatePubEventsResponse: {
    encode(_: MsgDeleteCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePubEventsResponse;
    fromJSON(_: any): MsgDeleteCreatePubEventsResponse;
    toJSON(_: MsgDeleteCreatePubEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCreatePubEventsResponse>): MsgDeleteCreatePubEventsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
    UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>;
    DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>;
    CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>;
    UpdateCreatePubEvents(request: MsgUpdateCreatePubEvents): Promise<MsgUpdateCreatePubEventsResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteCreatePubEvents(request: MsgDeleteCreatePubEvents): Promise<MsgDeleteCreatePubEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
    UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>;
    DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>;
    CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>;
    UpdateCreatePubEvents(request: MsgUpdateCreatePubEvents): Promise<MsgUpdateCreatePubEventsResponse>;
    DeleteCreatePubEvents(request: MsgDeleteCreatePubEvents): Promise<MsgDeleteCreatePubEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
