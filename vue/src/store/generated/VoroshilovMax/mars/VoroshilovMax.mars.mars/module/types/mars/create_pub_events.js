/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.mars.mars';
const baseCreatePubEvents = { id: 0, pubId: '', question: '', answers: '', premAmount: '', startTime: '', endTime: '', expertAmount: '', creator: '' };
export const CreatePubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.pubId !== '') {
            writer.uint32(18).string(message.pubId);
        }
        if (message.question !== '') {
            writer.uint32(26).string(message.question);
        }
        if (message.answers !== '') {
            writer.uint32(34).string(message.answers);
        }
        if (message.premAmount !== '') {
            writer.uint32(42).string(message.premAmount);
        }
        if (message.startTime !== '') {
            writer.uint32(50).string(message.startTime);
        }
        if (message.endTime !== '') {
            writer.uint32(58).string(message.endTime);
        }
        if (message.expertAmount !== '') {
            writer.uint32(66).string(message.expertAmount);
        }
        if (message.creator !== '') {
            writer.uint32(74).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.pubId = reader.string();
                    break;
                case 3:
                    message.question = reader.string();
                    break;
                case 4:
                    message.answers = reader.string();
                    break;
                case 5:
                    message.premAmount = reader.string();
                    break;
                case 6:
                    message.startTime = reader.string();
                    break;
                case 7:
                    message.endTime = reader.string();
                    break;
                case 8:
                    message.expertAmount = reader.string();
                    break;
                case 9:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreatePubEvents };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = String(object.pubId);
        }
        else {
            message.pubId = '';
        }
        if (object.question !== undefined && object.question !== null) {
            message.question = String(object.question);
        }
        else {
            message.question = '';
        }
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = String(object.answers);
        }
        else {
            message.answers = '';
        }
        if (object.premAmount !== undefined && object.premAmount !== null) {
            message.premAmount = String(object.premAmount);
        }
        else {
            message.premAmount = '';
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = String(object.startTime);
        }
        else {
            message.startTime = '';
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = String(object.endTime);
        }
        else {
            message.endTime = '';
        }
        if (object.expertAmount !== undefined && object.expertAmount !== null) {
            message.expertAmount = String(object.expertAmount);
        }
        else {
            message.expertAmount = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.question !== undefined && (obj.question = message.question);
        message.answers !== undefined && (obj.answers = message.answers);
        message.premAmount !== undefined && (obj.premAmount = message.premAmount);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.expertAmount !== undefined && (obj.expertAmount = message.expertAmount);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreatePubEvents };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = object.pubId;
        }
        else {
            message.pubId = '';
        }
        if (object.question !== undefined && object.question !== null) {
            message.question = object.question;
        }
        else {
            message.question = '';
        }
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = object.answers;
        }
        else {
            message.answers = '';
        }
        if (object.premAmount !== undefined && object.premAmount !== null) {
            message.premAmount = object.premAmount;
        }
        else {
            message.premAmount = '';
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = '';
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = object.endTime;
        }
        else {
            message.endTime = '';
        }
        if (object.expertAmount !== undefined && object.expertAmount !== null) {
            message.expertAmount = object.expertAmount;
        }
        else {
            message.expertAmount = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
