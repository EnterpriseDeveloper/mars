/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'VoroshilovMax.mars.mars';
const baseMsgCreateCreatePrivEvents = { creator: '', privId: '', question: '', answers: '', winner: '', loser: '' };
export const MsgCreateCreatePrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCreatePrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.privId !== undefined && (obj.privId = message.privId);
        message.question !== undefined && (obj.question = message.question);
        message.answers !== undefined && (obj.answers = message.answers);
        message.winner !== undefined && (obj.winner = message.winner);
        message.loser !== undefined && (obj.loser = message.loser);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCreatePrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
        return message;
    }
};
const baseMsgCreateCreatePrivEventsResponse = { id: 0 };
export const MsgCreateCreatePrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePrivEventsResponse };
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
        const message = { ...baseMsgCreateCreatePrivEventsResponse };
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
        const message = { ...baseMsgCreateCreatePrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateCreatePrivEvents = { creator: '', id: 0, privId: '', question: '', answers: '', winner: '', loser: '' };
export const MsgUpdateCreatePrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.privId !== '') {
            writer.uint32(26).string(message.privId);
        }
        if (message.question !== '') {
            writer.uint32(34).string(message.question);
        }
        if (message.answers !== '') {
            writer.uint32(42).string(message.answers);
        }
        if (message.winner !== '') {
            writer.uint32(50).string(message.winner);
        }
        if (message.loser !== '') {
            writer.uint32(58).string(message.loser);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCreatePrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.privId = reader.string();
                    break;
                case 4:
                    message.question = reader.string();
                    break;
                case 5:
                    message.answers = reader.string();
                    break;
                case 6:
                    message.winner = reader.string();
                    break;
                case 7:
                    message.loser = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCreatePrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.privId !== undefined && (obj.privId = message.privId);
        message.question !== undefined && (obj.question = message.question);
        message.answers !== undefined && (obj.answers = message.answers);
        message.winner !== undefined && (obj.winner = message.winner);
        message.loser !== undefined && (obj.loser = message.loser);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCreatePrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
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
        return message;
    }
};
const baseMsgUpdateCreatePrivEventsResponse = {};
export const MsgUpdateCreatePrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCreatePrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCreatePrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCreatePrivEventsResponse };
        return message;
    }
};
const baseMsgDeleteCreatePrivEvents = { creator: '', id: 0 };
export const MsgDeleteCreatePrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCreatePrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteCreatePrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCreatePrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteCreatePrivEventsResponse = {};
export const MsgDeleteCreatePrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCreatePrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteCreatePrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteCreatePrivEventsResponse };
        return message;
    }
};
const baseMsgCreateCreatePubEvents = { creator: '', pubId: '', question: '', answers: '', premAmount: '', startTime: '', endTime: '', expertAmount: '' };
export const MsgCreateCreatePubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCreatePubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.question !== undefined && (obj.question = message.question);
        message.answers !== undefined && (obj.answers = message.answers);
        message.premAmount !== undefined && (obj.premAmount = message.premAmount);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.expertAmount !== undefined && (obj.expertAmount = message.expertAmount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCreatePubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
        return message;
    }
};
const baseMsgCreateCreatePubEventsResponse = { id: 0 };
export const MsgCreateCreatePubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePubEventsResponse };
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
        const message = { ...baseMsgCreateCreatePubEventsResponse };
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
        const message = { ...baseMsgCreateCreatePubEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateCreatePubEvents = {
    creator: '',
    id: 0,
    pubId: '',
    question: '',
    answers: '',
    premAmount: '',
    startTime: '',
    endTime: '',
    expertAmount: ''
};
export const MsgUpdateCreatePubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.pubId !== '') {
            writer.uint32(26).string(message.pubId);
        }
        if (message.question !== '') {
            writer.uint32(34).string(message.question);
        }
        if (message.answers !== '') {
            writer.uint32(42).string(message.answers);
        }
        if (message.premAmount !== '') {
            writer.uint32(50).string(message.premAmount);
        }
        if (message.startTime !== '') {
            writer.uint32(58).string(message.startTime);
        }
        if (message.endTime !== '') {
            writer.uint32(66).string(message.endTime);
        }
        if (message.expertAmount !== '') {
            writer.uint32(74).string(message.expertAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCreatePubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.pubId = reader.string();
                    break;
                case 4:
                    message.question = reader.string();
                    break;
                case 5:
                    message.answers = reader.string();
                    break;
                case 6:
                    message.premAmount = reader.string();
                    break;
                case 7:
                    message.startTime = reader.string();
                    break;
                case 8:
                    message.endTime = reader.string();
                    break;
                case 9:
                    message.expertAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCreatePubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.question !== undefined && (obj.question = message.question);
        message.answers !== undefined && (obj.answers = message.answers);
        message.premAmount !== undefined && (obj.premAmount = message.premAmount);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.expertAmount !== undefined && (obj.expertAmount = message.expertAmount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCreatePubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
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
        return message;
    }
};
const baseMsgUpdateCreatePubEventsResponse = {};
export const MsgUpdateCreatePubEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCreatePubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCreatePubEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCreatePubEventsResponse };
        return message;
    }
};
const baseMsgDeleteCreatePubEvents = { creator: '', id: 0 };
export const MsgDeleteCreatePubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCreatePubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteCreatePubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCreatePubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteCreatePubEventsResponse = {};
export const MsgDeleteCreatePubEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCreatePubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteCreatePubEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteCreatePubEventsResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateCreatePrivEvents(request) {
        const data = MsgCreateCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Msg', 'CreateCreatePrivEvents', data);
        return promise.then((data) => MsgCreateCreatePrivEventsResponse.decode(new Reader(data)));
    }
    UpdateCreatePrivEvents(request) {
        const data = MsgUpdateCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Msg', 'UpdateCreatePrivEvents', data);
        return promise.then((data) => MsgUpdateCreatePrivEventsResponse.decode(new Reader(data)));
    }
    DeleteCreatePrivEvents(request) {
        const data = MsgDeleteCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Msg', 'DeleteCreatePrivEvents', data);
        return promise.then((data) => MsgDeleteCreatePrivEventsResponse.decode(new Reader(data)));
    }
    CreateCreatePubEvents(request) {
        const data = MsgCreateCreatePubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Msg', 'CreateCreatePubEvents', data);
        return promise.then((data) => MsgCreateCreatePubEventsResponse.decode(new Reader(data)));
    }
    UpdateCreatePubEvents(request) {
        const data = MsgUpdateCreatePubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Msg', 'UpdateCreatePubEvents', data);
        return promise.then((data) => MsgUpdateCreatePubEventsResponse.decode(new Reader(data)));
    }
    DeleteCreatePubEvents(request) {
        const data = MsgDeleteCreatePubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.mars.mars.Msg', 'DeleteCreatePubEvents', data);
        return promise.then((data) => MsgDeleteCreatePubEventsResponse.decode(new Reader(data)));
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
