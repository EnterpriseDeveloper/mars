/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.mars.mars';
const baseCreatePrivEvents = { id: 0, privId: '', question: '', answers: '', winner: '', loser: '', creator: '' };
export const CreatePrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.privId !== '') {
            writer.uint32(18).string(message.privId);
        }
        if (message.question !== '') {
            writer.uint32(26).string(message.question);
        }
        if (message.answers !== '') {
            writer.uint32(34).string(message.answers);
        }
        if (message.winner !== '') {
            writer.uint32(42).string(message.winner);
        }
        if (message.loser !== '') {
            writer.uint32(50).string(message.loser);
        }
        if (message.creator !== '') {
            writer.uint32(58).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.privId = reader.string();
                    break;
                case 3:
                    message.question = reader.string();
                    break;
                case 4:
                    message.answers = reader.string();
                    break;
                case 5:
                    message.winner = reader.string();
                    break;
                case 6:
                    message.loser = reader.string();
                    break;
                case 7:
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
        const message = { ...baseCreatePrivEvents };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = String(object.privId);
        }
        else {
            message.privId = '';
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
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = String(object.winner);
        }
        else {
            message.winner = '';
        }
        if (object.loser !== undefined && object.loser !== null) {
            message.loser = String(object.loser);
        }
        else {
            message.loser = '';
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
        message.privId !== undefined && (obj.privId = message.privId);
        message.question !== undefined && (obj.question = message.question);
        message.answers !== undefined && (obj.answers = message.answers);
        message.winner !== undefined && (obj.winner = message.winner);
        message.loser !== undefined && (obj.loser = message.loser);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreatePrivEvents };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = object.privId;
        }
        else {
            message.privId = '';
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
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        else {
            message.winner = '';
        }
        if (object.loser !== undefined && object.loser !== null) {
            message.loser = object.loser;
        }
        else {
            message.loser = '';
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
