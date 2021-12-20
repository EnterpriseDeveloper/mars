/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { CreatePrivEvents } from '../mars/create_priv_events';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { CreatePubEvents } from '../mars/create_pub_events';
export const protobufPackage = 'VoroshilovMax.mars.mars';
const baseQueryGetCreatePrivEventsRequest = { id: 0 };
export const QueryGetCreatePrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePrivEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCreatePrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCreatePrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetCreatePrivEventsResponse = {};
export const QueryGetCreatePrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.CreatePrivEvents !== undefined) {
            CreatePrivEvents.encode(message.CreatePrivEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePrivEvents = CreatePrivEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCreatePrivEventsResponse };
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            message.CreatePrivEvents = CreatePrivEvents.fromJSON(object.CreatePrivEvents);
        }
        else {
            message.CreatePrivEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.CreatePrivEvents !== undefined && (obj.CreatePrivEvents = message.CreatePrivEvents ? CreatePrivEvents.toJSON(message.CreatePrivEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCreatePrivEventsResponse };
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            message.CreatePrivEvents = CreatePrivEvents.fromPartial(object.CreatePrivEvents);
        }
        else {
            message.CreatePrivEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePrivEventsRequest = {};
export const QueryAllCreatePrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePrivEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCreatePrivEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePrivEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePrivEventsResponse = {};
export const QueryAllCreatePrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.CreatePrivEvents) {
            CreatePrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePrivEventsResponse };
        message.CreatePrivEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePrivEvents.push(CreatePrivEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCreatePrivEventsResponse };
        message.CreatePrivEvents = [];
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            for (const e of object.CreatePrivEvents) {
                message.CreatePrivEvents.push(CreatePrivEvents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.CreatePrivEvents) {
            obj.CreatePrivEvents = message.CreatePrivEvents.map((e) => (e ? CreatePrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.CreatePrivEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePrivEventsResponse };
        message.CreatePrivEvents = [];
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            for (const e of object.CreatePrivEvents) {
                message.CreatePrivEvents.push(CreatePrivEvents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetCreatePubEventsRequest = { id: 0 };
export const QueryGetCreatePubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePubEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCreatePubEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCreatePubEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetCreatePubEventsResponse = {};
export const QueryGetCreatePubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.CreatePubEvents !== undefined) {
            CreatePubEvents.encode(message.CreatePubEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePubEvents = CreatePubEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCreatePubEventsResponse };
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            message.CreatePubEvents = CreatePubEvents.fromJSON(object.CreatePubEvents);
        }
        else {
            message.CreatePubEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.CreatePubEvents !== undefined && (obj.CreatePubEvents = message.CreatePubEvents ? CreatePubEvents.toJSON(message.CreatePubEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCreatePubEventsResponse };
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            message.CreatePubEvents = CreatePubEvents.fromPartial(object.CreatePubEvents);
        }
        else {
            message.CreatePubEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePubEventsRequest = {};
export const QueryAllCreatePubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePubEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCreatePubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePubEventsResponse = {};
export const QueryAllCreatePubEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.CreatePubEvents) {
            CreatePubEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePubEventsResponse };
        message.CreatePubEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePubEvents.push(CreatePubEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCreatePubEventsResponse };
        message.CreatePubEvents = [];
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            for (const e of object.CreatePubEvents) {
                message.CreatePubEvents.push(CreatePubEvents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.CreatePubEvents) {
            obj.CreatePubEvents = message.CreatePubEvents.map((e) => (e ? CreatePubEvents.toJSON(e) : undefined));
        }
        else {
            obj.CreatePubEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePubEventsResponse };
        message.CreatePubEvents = [];
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            for (const e of object.CreatePubEvents) {
                message.CreatePubEvents.push(CreatePubEvents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreatePrivEvents(request) {
        const data = QueryGetCreatePrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Query', 'CreatePrivEvents', data);
        return promise.then((data) => QueryGetCreatePrivEventsResponse.decode(new Reader(data)));
    }
    CreatePrivEventsAll(request) {
        const data = QueryAllCreatePrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Query', 'CreatePrivEventsAll', data);
        return promise.then((data) => QueryAllCreatePrivEventsResponse.decode(new Reader(data)));
    }
    CreatePubEvents(request) {
        const data = QueryGetCreatePubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Query', 'CreatePubEvents', data);
        return promise.then((data) => QueryGetCreatePubEventsResponse.decode(new Reader(data)));
    }
    CreatePubEventsAll(request) {
        const data = QueryAllCreatePubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Query', 'CreatePubEventsAll', data);
        return promise.then((data) => QueryAllCreatePubEventsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
