import { Reader, Writer } from 'protobufjs/minimal';
import { CreatePrivEvents } from '../mars/create_priv_events';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { CreatePubEvents } from '../mars/create_pub_events';
export declare const protobufPackage = "VoroshilovMax.mars.mars";
export interface QueryGetCreatePrivEventsRequest {
    id: number;
}
export interface QueryGetCreatePrivEventsResponse {
    CreatePrivEvents: CreatePrivEvents | undefined;
}
export interface QueryAllCreatePrivEventsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCreatePrivEventsResponse {
    CreatePrivEvents: CreatePrivEvents[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCreatePubEventsRequest {
    id: number;
}
export interface QueryGetCreatePubEventsResponse {
    CreatePubEvents: CreatePubEvents | undefined;
}
export interface QueryAllCreatePubEventsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCreatePubEventsResponse {
    CreatePubEvents: CreatePubEvents[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCreatePrivEventsRequest: {
    encode(message: QueryGetCreatePrivEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePrivEventsRequest;
    fromJSON(object: any): QueryGetCreatePrivEventsRequest;
    toJSON(message: QueryGetCreatePrivEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePrivEventsRequest>): QueryGetCreatePrivEventsRequest;
};
export declare const QueryGetCreatePrivEventsResponse: {
    encode(message: QueryGetCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePrivEventsResponse;
    fromJSON(object: any): QueryGetCreatePrivEventsResponse;
    toJSON(message: QueryGetCreatePrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePrivEventsResponse>): QueryGetCreatePrivEventsResponse;
};
export declare const QueryAllCreatePrivEventsRequest: {
    encode(message: QueryAllCreatePrivEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePrivEventsRequest;
    fromJSON(object: any): QueryAllCreatePrivEventsRequest;
    toJSON(message: QueryAllCreatePrivEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePrivEventsRequest>): QueryAllCreatePrivEventsRequest;
};
export declare const QueryAllCreatePrivEventsResponse: {
    encode(message: QueryAllCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePrivEventsResponse;
    fromJSON(object: any): QueryAllCreatePrivEventsResponse;
    toJSON(message: QueryAllCreatePrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePrivEventsResponse>): QueryAllCreatePrivEventsResponse;
};
export declare const QueryGetCreatePubEventsRequest: {
    encode(message: QueryGetCreatePubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePubEventsRequest;
    fromJSON(object: any): QueryGetCreatePubEventsRequest;
    toJSON(message: QueryGetCreatePubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePubEventsRequest>): QueryGetCreatePubEventsRequest;
};
export declare const QueryGetCreatePubEventsResponse: {
    encode(message: QueryGetCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePubEventsResponse;
    fromJSON(object: any): QueryGetCreatePubEventsResponse;
    toJSON(message: QueryGetCreatePubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePubEventsResponse>): QueryGetCreatePubEventsResponse;
};
export declare const QueryAllCreatePubEventsRequest: {
    encode(message: QueryAllCreatePubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePubEventsRequest;
    fromJSON(object: any): QueryAllCreatePubEventsRequest;
    toJSON(message: QueryAllCreatePubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePubEventsRequest>): QueryAllCreatePubEventsRequest;
};
export declare const QueryAllCreatePubEventsResponse: {
    encode(message: QueryAllCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePubEventsResponse;
    fromJSON(object: any): QueryAllCreatePubEventsResponse;
    toJSON(message: QueryAllCreatePubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePubEventsResponse>): QueryAllCreatePubEventsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a createPrivEvents by id. */
    CreatePrivEvents(request: QueryGetCreatePrivEventsRequest): Promise<QueryGetCreatePrivEventsResponse>;
    /** Queries a list of createPrivEvents items. */
    CreatePrivEventsAll(request: QueryAllCreatePrivEventsRequest): Promise<QueryAllCreatePrivEventsResponse>;
    /** Queries a createPubEvents by id. */
    CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse>;
    /** Queries a list of createPubEvents items. */
    CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePrivEvents(request: QueryGetCreatePrivEventsRequest): Promise<QueryGetCreatePrivEventsResponse>;
    CreatePrivEventsAll(request: QueryAllCreatePrivEventsRequest): Promise<QueryAllCreatePrivEventsResponse>;
    CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse>;
    CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
