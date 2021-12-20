/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { CreatePrivEvents } from '../mars/create_priv_events';
import { CreatePubEvents } from '../mars/create_pub_events';
export const protobufPackage = 'VoroshilovMax.mars.mars';
const baseGenesisState = { createPrivEventsCount: 0, createPubEventsCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.createPrivEventsList) {
            CreatePrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.createPrivEventsCount !== 0) {
            writer.uint32(16).uint64(message.createPrivEventsCount);
        }
        for (const v of message.createPubEventsList) {
            CreatePubEvents.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.createPubEventsCount !== 0) {
            writer.uint32(32).uint64(message.createPubEventsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.createPrivEventsList = [];
        message.createPubEventsList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.createPrivEventsList.push(CreatePrivEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.createPrivEventsCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.createPubEventsList.push(CreatePubEvents.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.createPubEventsCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.createPrivEventsList = [];
        message.createPubEventsList = [];
        if (object.createPrivEventsList !== undefined && object.createPrivEventsList !== null) {
            for (const e of object.createPrivEventsList) {
                message.createPrivEventsList.push(CreatePrivEvents.fromJSON(e));
            }
        }
        if (object.createPrivEventsCount !== undefined && object.createPrivEventsCount !== null) {
            message.createPrivEventsCount = Number(object.createPrivEventsCount);
        }
        else {
            message.createPrivEventsCount = 0;
        }
        if (object.createPubEventsList !== undefined && object.createPubEventsList !== null) {
            for (const e of object.createPubEventsList) {
                message.createPubEventsList.push(CreatePubEvents.fromJSON(e));
            }
        }
        if (object.createPubEventsCount !== undefined && object.createPubEventsCount !== null) {
            message.createPubEventsCount = Number(object.createPubEventsCount);
        }
        else {
            message.createPubEventsCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.createPrivEventsList) {
            obj.createPrivEventsList = message.createPrivEventsList.map((e) => (e ? CreatePrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.createPrivEventsList = [];
        }
        message.createPrivEventsCount !== undefined && (obj.createPrivEventsCount = message.createPrivEventsCount);
        if (message.createPubEventsList) {
            obj.createPubEventsList = message.createPubEventsList.map((e) => (e ? CreatePubEvents.toJSON(e) : undefined));
        }
        else {
            obj.createPubEventsList = [];
        }
        message.createPubEventsCount !== undefined && (obj.createPubEventsCount = message.createPubEventsCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.createPrivEventsList = [];
        message.createPubEventsList = [];
        if (object.createPrivEventsList !== undefined && object.createPrivEventsList !== null) {
            for (const e of object.createPrivEventsList) {
                message.createPrivEventsList.push(CreatePrivEvents.fromPartial(e));
            }
        }
        if (object.createPrivEventsCount !== undefined && object.createPrivEventsCount !== null) {
            message.createPrivEventsCount = object.createPrivEventsCount;
        }
        else {
            message.createPrivEventsCount = 0;
        }
        if (object.createPubEventsList !== undefined && object.createPubEventsList !== null) {
            for (const e of object.createPubEventsList) {
                message.createPubEventsList.push(CreatePubEvents.fromPartial(e));
            }
        }
        if (object.createPubEventsCount !== undefined && object.createPubEventsCount !== null) {
            message.createPubEventsCount = object.createPubEventsCount;
        }
        else {
            message.createPubEventsCount = 0;
        }
        return message;
    }
};
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
