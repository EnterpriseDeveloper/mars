import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.mars.mars";
export interface CreatePrivEvents {
    id: number;
    privId: string;
    question: string;
    answers: string;
    winner: string;
    loser: string;
    creator: string;
}
export declare const CreatePrivEvents: {
    encode(message: CreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CreatePrivEvents;
    fromJSON(object: any): CreatePrivEvents;
    toJSON(message: CreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<CreatePrivEvents>): CreatePrivEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
