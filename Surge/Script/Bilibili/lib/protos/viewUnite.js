// @generated by protobuf-ts 2.9.0 with parameter output_javascript_es2019
// @generated from protobuf file "protos/viewUnite.proto" (package "viewunite.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../google/protobuf/any.js";
/**
 * @generated from protobuf enum viewunite.v1.TabType
 */
export var TabType;
(function (TabType) {
    /**
     * @generated from protobuf enum value: TAB_NONE = 0;
     */
    TabType[TabType["TAB_NONE"] = 0] = "TAB_NONE";
    /**
     * 详情 Tab
     *
     * @generated from protobuf enum value: TAB_INTRODUCTION = 1;
     */
    TabType[TabType["TAB_INTRODUCTION"] = 1] = "TAB_INTRODUCTION";
    /**
     * 评论区 Tab
     *
     * @generated from protobuf enum value: TAB_REPLY = 2;
     */
    TabType[TabType["TAB_REPLY"] = 2] = "TAB_REPLY";
    /**
     * OGV 活动信息 Tab
     *
     * @generated from protobuf enum value: TAB_OGV_ACTIVITY = 3;
     */
    TabType[TabType["TAB_OGV_ACTIVITY"] = 3] = "TAB_OGV_ACTIVITY";
})(TabType || (TabType = {}));
/**
 * @generated from protobuf enum viewunite.v1.ModuleType
 */
export var ModuleType;
(function (ModuleType) {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    ModuleType[ModuleType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from protobuf enum value: OGV_INTRODUCTION = 1;
     */
    ModuleType[ModuleType["OGV_INTRODUCTION"] = 1] = "OGV_INTRODUCTION";
    /**
     * @generated from protobuf enum value: OGV_TITLE = 2;
     */
    ModuleType[ModuleType["OGV_TITLE"] = 2] = "OGV_TITLE";
    /**
     * @generated from protobuf enum value: UGC_HEADLINE = 3;
     */
    ModuleType[ModuleType["UGC_HEADLINE"] = 3] = "UGC_HEADLINE";
    /**
     * @generated from protobuf enum value: UGC_INTRODUCTION = 4;
     */
    ModuleType[ModuleType["UGC_INTRODUCTION"] = 4] = "UGC_INTRODUCTION";
    /**
     * @generated from protobuf enum value: KING_POSITION = 5;
     */
    ModuleType[ModuleType["KING_POSITION"] = 5] = "KING_POSITION";
    /**
     * @generated from protobuf enum value: MASTER_USER_LIST = 6;
     */
    ModuleType[ModuleType["MASTER_USER_LIST"] = 6] = "MASTER_USER_LIST";
    /**
     * @generated from protobuf enum value: STAFFS = 7;
     */
    ModuleType[ModuleType["STAFFS"] = 7] = "STAFFS";
    /**
     * @generated from protobuf enum value: HONOR = 8;
     */
    ModuleType[ModuleType["HONOR"] = 8] = "HONOR";
    /**
     * @generated from protobuf enum value: OWNER = 9;
     */
    ModuleType[ModuleType["OWNER"] = 9] = "OWNER";
    /**
     * @generated from protobuf enum value: PAGE = 10;
     */
    ModuleType[ModuleType["PAGE"] = 10] = "PAGE";
    /**
     * @generated from protobuf enum value: ACTIVITY_RESERVE = 11;
     */
    ModuleType[ModuleType["ACTIVITY_RESERVE"] = 11] = "ACTIVITY_RESERVE";
    /**
     * @generated from protobuf enum value: LIVE_ORDER = 12;
     */
    ModuleType[ModuleType["LIVE_ORDER"] = 12] = "LIVE_ORDER";
    /**
     * @generated from protobuf enum value: POSITIVE = 13;
     */
    ModuleType[ModuleType["POSITIVE"] = 13] = "POSITIVE";
    /**
     * @generated from protobuf enum value: SECTION = 14;
     */
    ModuleType[ModuleType["SECTION"] = 14] = "SECTION";
    /**
     * @generated from protobuf enum value: RELATE = 15;
     */
    ModuleType[ModuleType["RELATE"] = 15] = "RELATE";
    /**
     * @generated from protobuf enum value: PUGV = 16;
     */
    ModuleType[ModuleType["PUGV"] = 16] = "PUGV";
    /**
     * @generated from protobuf enum value: COLLECTION_CARD = 17;
     */
    ModuleType[ModuleType["COLLECTION_CARD"] = 17] = "COLLECTION_CARD";
    /**
     * @generated from protobuf enum value: ACTIVITY = 18;
     */
    ModuleType[ModuleType["ACTIVITY"] = 18] = "ACTIVITY";
    /**
     * @generated from protobuf enum value: CHARACTER = 19;
     */
    ModuleType[ModuleType["CHARACTER"] = 19] = "CHARACTER";
    /**
     * @generated from protobuf enum value: FOLLOW_LAYER = 20;
     */
    ModuleType[ModuleType["FOLLOW_LAYER"] = 20] = "FOLLOW_LAYER";
    /**
     * @generated from protobuf enum value: OGV_SEASONS = 21;
     */
    ModuleType[ModuleType["OGV_SEASONS"] = 21] = "OGV_SEASONS";
    /**
     * @generated from protobuf enum value: UGC_SEASON = 22;
     */
    ModuleType[ModuleType["UGC_SEASON"] = 22] = "UGC_SEASON";
    /**
     * @generated from protobuf enum value: OGV_LIVE_RESERVE = 23;
     */
    ModuleType[ModuleType["OGV_LIVE_RESERVE"] = 23] = "OGV_LIVE_RESERVE";
    /**
     * @generated from protobuf enum value: COMBINATION_EPISODE = 24;
     */
    ModuleType[ModuleType["COMBINATION_EPISODE"] = 24] = "COMBINATION_EPISODE";
    /**
     * @generated from protobuf enum value: SPONSOR = 25;
     */
    ModuleType[ModuleType["SPONSOR"] = 25] = "SPONSOR";
    /**
     * @generated from protobuf enum value: ACTIVITY_ENTRANCE = 26;
     */
    ModuleType[ModuleType["ACTIVITY_ENTRANCE"] = 26] = "ACTIVITY_ENTRANCE";
    /**
     * @generated from protobuf enum value: THEATRE_HOT_TOPIC = 27;
     */
    ModuleType[ModuleType["THEATRE_HOT_TOPIC"] = 27] = "THEATRE_HOT_TOPIC";
    /**
     * @generated from protobuf enum value: RELATED_RECOMMEND = 28;
     */
    ModuleType[ModuleType["RELATED_RECOMMEND"] = 28] = "RELATED_RECOMMEND";
    /**
     * @generated from protobuf enum value: PAY_BAR = 29;
     */
    ModuleType[ModuleType["PAY_BAR"] = 29] = "PAY_BAR";
    /**
     * @generated from protobuf enum value: BANNER = 30;
     */
    ModuleType[ModuleType["BANNER"] = 30] = "BANNER";
    /**
     * @generated from protobuf enum value: AUDIO = 31;
     */
    ModuleType[ModuleType["AUDIO"] = 31] = "AUDIO";
    /**
     * @generated from protobuf enum value: AGG_CARD = 32;
     */
    ModuleType[ModuleType["AGG_CARD"] = 32] = "AGG_CARD";
    /**
     * @generated from protobuf enum value: SINGLE_EP = 33;
     */
    ModuleType[ModuleType["SINGLE_EP"] = 33] = "SINGLE_EP";
    /**
     * @generated from protobuf enum value: LIKE_COMMENT = 34;
     */
    ModuleType[ModuleType["LIKE_COMMENT"] = 34] = "LIKE_COMMENT";
    /**
     * @generated from protobuf enum value: ATTENTION_RECOMMEND = 35;
     */
    ModuleType[ModuleType["ATTENTION_RECOMMEND"] = 35] = "ATTENTION_RECOMMEND";
    /**
     * @generated from protobuf enum value: COVENANTER = 36;
     */
    ModuleType[ModuleType["COVENANTER"] = 36] = "COVENANTER";
})(ModuleType || (ModuleType = {}));
/**
 * @generated from protobuf enum viewunite.v1.RelateCardType
 */
export var RelateCardType;
(function (RelateCardType) {
    /**
     * @generated from protobuf enum value: CARD_TYPE_UNKNOWN = 0;
     */
    RelateCardType[RelateCardType["CARD_TYPE_UNKNOWN"] = 0] = "CARD_TYPE_UNKNOWN";
    /**
     * @generated from protobuf enum value: AV = 1;
     */
    RelateCardType[RelateCardType["AV"] = 1] = "AV";
    /**
     * @generated from protobuf enum value: BANGUMI = 2;
     */
    RelateCardType[RelateCardType["BANGUMI"] = 2] = "BANGUMI";
    /**
     * @generated from protobuf enum value: RESOURCE = 3;
     */
    RelateCardType[RelateCardType["RESOURCE"] = 3] = "RESOURCE";
    /**
     * @generated from protobuf enum value: GAME = 4;
     */
    RelateCardType[RelateCardType["GAME"] = 4] = "GAME";
    /**
     * @generated from protobuf enum value: CM_TYPE = 5;
     */
    RelateCardType[RelateCardType["CM_TYPE"] = 5] = "CM_TYPE";
    /**
     * @generated from protobuf enum value: LIVE = 6;
     */
    RelateCardType[RelateCardType["LIVE"] = 6] = "LIVE";
    /**
     * @generated from protobuf enum value: AI_RECOMMEND = 7;
     */
    RelateCardType[RelateCardType["AI_RECOMMEND"] = 7] = "AI_RECOMMEND";
    /**
     * @generated from protobuf enum value: BANGUMI_AV = 8;
     */
    RelateCardType[RelateCardType["BANGUMI_AV"] = 8] = "BANGUMI_AV";
    /**
     * @generated from protobuf enum value: BANGUMI_UGC = 9;
     */
    RelateCardType[RelateCardType["BANGUMI_UGC"] = 9] = "BANGUMI_UGC";
    /**
     * @generated from protobuf enum value: SPECIAL = 10;
     */
    RelateCardType[RelateCardType["SPECIAL"] = 10] = "SPECIAL";
})(RelateCardType || (RelateCardType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RelateCard$Type extends MessageType {
    constructor() {
        super("viewunite.v1.RelateCard", [
            { no: 1, name: "relate_card_type", kind: "enum", T: () => ["viewunite.v1.RelateCardType", RelateCardType] }
        ]);
    }
    create(value) {
        const message = { relateCardType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* viewunite.v1.RelateCardType relate_card_type */ 1:
                    message.relateCardType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* viewunite.v1.RelateCardType relate_card_type = 1; */
        if (message.relateCardType !== 0)
            writer.tag(1, WireType.Varint).int32(message.relateCardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.RelateCard
 */
export const RelateCard = new RelateCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Relates$Type extends MessageType {
    constructor() {
        super("viewunite.v1.Relates", [
            { no: 1, name: "cards", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RelateCard }
        ]);
    }
    create(value) {
        const message = { cards: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated viewunite.v1.RelateCard cards */ 1:
                    message.cards.push(RelateCard.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated viewunite.v1.RelateCard cards = 1; */
        for (let i = 0; i < message.cards.length; i++)
            RelateCard.internalBinaryWrite(message.cards[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.Relates
 */
export const Relates = new Relates$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommonModule$Type extends MessageType {
    constructor() {
        super("viewunite.v1.CommonModule", [
            { no: 1, name: "type", kind: "enum", T: () => ["viewunite.v1.ModuleType", ModuleType] },
            { no: 22, name: "relates", kind: "message", oneof: "data", T: () => Relates }
        ]);
    }
    create(value) {
        const message = { type: 0, data: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* viewunite.v1.ModuleType type */ 1:
                    message.type = reader.int32();
                    break;
                case /* viewunite.v1.Relates relates */ 22:
                    message.data = {
                        oneofKind: "relates",
                        relates: Relates.internalBinaryRead(reader, reader.uint32(), options, message.data.relates)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* viewunite.v1.ModuleType type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* viewunite.v1.Relates relates = 22; */
        if (message.data.oneofKind === "relates")
            Relates.internalBinaryWrite(message.data.relates, writer.tag(22, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.CommonModule
 */
export const CommonModule = new CommonModule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IntroductionTab$Type extends MessageType {
    constructor() {
        super("viewunite.v1.IntroductionTab", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "modules", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CommonModule }
        ]);
    }
    create(value) {
        const message = { title: "", modules: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* repeated viewunite.v1.CommonModule modules */ 2:
                    message.modules.push(CommonModule.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* repeated viewunite.v1.CommonModule modules = 2; */
        for (let i = 0; i < message.modules.length; i++)
            CommonModule.internalBinaryWrite(message.modules[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.IntroductionTab
 */
export const IntroductionTab = new IntroductionTab$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TabModule$Type extends MessageType {
    constructor() {
        super("viewunite.v1.TabModule", [
            { no: 1, name: "tab_type", kind: "enum", T: () => ["viewunite.v1.TabType", TabType] },
            { no: 2, name: "introduction", kind: "message", oneof: "tab", T: () => IntroductionTab }
        ]);
    }
    create(value) {
        const message = { tabType: 0, tab: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* viewunite.v1.TabType tab_type */ 1:
                    message.tabType = reader.int32();
                    break;
                case /* viewunite.v1.IntroductionTab introduction */ 2:
                    message.tab = {
                        oneofKind: "introduction",
                        introduction: IntroductionTab.internalBinaryRead(reader, reader.uint32(), options, message.tab.introduction)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* viewunite.v1.TabType tab_type = 1; */
        if (message.tabType !== 0)
            writer.tag(1, WireType.Varint).int32(message.tabType);
        /* viewunite.v1.IntroductionTab introduction = 2; */
        if (message.tab.oneofKind === "introduction")
            IntroductionTab.internalBinaryWrite(message.tab.introduction, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.TabModule
 */
export const TabModule = new TabModule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Tab$Type extends MessageType {
    constructor() {
        super("viewunite.v1.Tab", [
            { no: 1, name: "tab_module", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TabModule }
        ]);
    }
    create(value) {
        const message = { tabModule: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated viewunite.v1.TabModule tab_module */ 1:
                    message.tabModule.push(TabModule.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated viewunite.v1.TabModule tab_module = 1; */
        for (let i = 0; i < message.tabModule.length; i++)
            TabModule.internalBinaryWrite(message.tabModule[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.Tab
 */
export const Tab = new Tab$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CM$Type extends MessageType {
    constructor() {
        super("viewunite.v1.CM", [
            { no: 1, name: "cm_under_player", kind: "message", T: () => Any },
            { no: 2, name: "ads_control", kind: "message", T: () => Any },
            { no: 3, name: "source_content", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value) {
        const message = { sourceContent: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Any cm_under_player */ 1:
                    message.cmUnderPlayer = Any.internalBinaryRead(reader, reader.uint32(), options, message.cmUnderPlayer);
                    break;
                case /* google.protobuf.Any ads_control */ 2:
                    message.adsControl = Any.internalBinaryRead(reader, reader.uint32(), options, message.adsControl);
                    break;
                case /* repeated google.protobuf.Any source_content */ 3:
                    message.sourceContent.push(Any.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* google.protobuf.Any cm_under_player = 1; */
        if (message.cmUnderPlayer)
            Any.internalBinaryWrite(message.cmUnderPlayer, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any ads_control = 2; */
        if (message.adsControl)
            Any.internalBinaryWrite(message.adsControl, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Any source_content = 3; */
        for (let i = 0; i < message.sourceContent.length; i++)
            Any.internalBinaryWrite(message.sourceContent[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.CM
 */
export const CM = new CM$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ViewUniteReply$Type extends MessageType {
    constructor() {
        super("viewunite.v1.ViewUniteReply", [
            { no: 5, name: "tab", kind: "message", T: () => Tab },
            { no: 7, name: "cm", kind: "message", T: () => CM }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* viewunite.v1.Tab tab */ 5:
                    message.tab = Tab.internalBinaryRead(reader, reader.uint32(), options, message.tab);
                    break;
                case /* viewunite.v1.CM cm */ 7:
                    message.cm = CM.internalBinaryRead(reader, reader.uint32(), options, message.cm);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* viewunite.v1.Tab tab = 5; */
        if (message.tab)
            Tab.internalBinaryWrite(message.tab, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* viewunite.v1.CM cm = 7; */
        if (message.cm)
            CM.internalBinaryWrite(message.cm, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message viewunite.v1.ViewUniteReply
 */
export const ViewUniteReply = new ViewUniteReply$Type();
