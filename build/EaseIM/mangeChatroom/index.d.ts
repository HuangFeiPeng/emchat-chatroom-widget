import { EasemobChat } from "easemob-websdk";
import { DisplayMessageType, ILoginUserInfo } from "../types/index";
export declare const useManageChatroom: () => {
    messageCollect: ({
        id: string;
        chatType: EasemobChat.ChatType;
        type: "txt";
        to: string;
        msg: string;
        from?: string | undefined;
        roomType?: boolean | undefined;
        group?: string | undefined;
        success?: ((data: EasemobChat.SendMsgResult) => void) | undefined;
        fail?: (() => void) | undefined;
        ext?: {
            [key: string]: any;
        } | undefined;
        msgConfig?: {
            allowGroupAck?: boolean | undefined;
            languages?: string[] | undefined;
        } | undefined;
        translations?: {
            translations: {
                text: string;
                to: string;
            }[];
            detectedLanguage: {
                language: string;
                score: number;
            };
        } | undefined;
        time: number;
        isChatThread?: boolean | undefined;
        reactions?: {
            reaction: string;
            count: number;
            op?: {
                operator: string;
                reactionType: "create" | "delete";
            }[] | undefined;
            userList: string[];
            isAddedBySelf?: boolean | undefined;
        } | undefined;
        chatThread?: {
            messageId: string;
            parentId: string;
            chatThreadName: {
                [x: number]: string;
                readonly length: number;
                readonly numberOfItems: number;
                appendItem: (newItem: string) => string;
                clear: () => void;
                getItem: (index: number) => string;
                initialize: (newItem: string) => string;
                insertItemBefore: (newItem: string, index: number) => string;
                removeItem: (index: number) => string;
                replaceItem: (newItem: string, index: number) => string;
                [Symbol.iterator]: () => IterableIterator<string>;
            };
        } | undefined;
        chatThreadOverview?: {
            id: string;
            parentId: string;
            name: string;
            lastMessage: {
                id: string;
                from: string;
                to: string;
                timestamp: number;
                payload: any;
            };
            createTimestamp: number;
            updateTimestamp: number;
            messageCount: number;
        } | undefined;
        onlineState?: EasemobChat.ONLINESTATETYPE | undefined;
        priority?: EasemobChat.MessagePriority | undefined;
        deliverOnlineOnly?: boolean | undefined;
        receiverList?: string[] | undefined;
    } | {
        id: string;
        type: "img";
        time: number;
        secret?: string | undefined;
        thumb?: string | undefined;
        thumb_secret?: string | undefined;
        isChatThread?: boolean | undefined;
        reactions?: {
            reaction: string;
            count: number;
            op?: {
                operator: string;
                reactionType: "create" | "delete";
            }[] | undefined;
            userList: string[];
            isAddedBySelf?: boolean | undefined;
        } | undefined;
        chatThread?: {
            messageId: string;
            parentId: string;
            chatThreadName: {
                [x: number]: string;
                readonly length: number;
                readonly numberOfItems: number;
                appendItem: (newItem: string) => string;
                clear: () => void;
                getItem: (index: number) => string;
                initialize: (newItem: string) => string;
                insertItemBefore: (newItem: string, index: number) => string;
                removeItem: (index: number) => string;
                replaceItem: (newItem: string, index: number) => string;
                [Symbol.iterator]: () => IterableIterator<string>;
            };
        } | undefined;
        chatThreadOverview?: {
            id: string;
            parentId: string;
            name: string;
            lastMessage: {
                id: string;
                from: string;
                to: string;
                timestamp: number;
                payload: any;
            };
            createTimestamp: number;
            updateTimestamp: number;
            messageCount: number;
        } | undefined;
        onlineState?: EasemobChat.ONLINESTATETYPE | undefined;
        priority?: EasemobChat.MessagePriority | undefined;
        deliverOnlineOnly?: boolean | undefined;
        receiverList?: string[] | undefined;
        thumbnailWidth?: number | undefined;
        thumbnailHeight?: number | undefined;
        chatType: EasemobChat.ChatType;
        to: string;
        file?: {
            url: string;
            filename: string;
            filetype: string;
            data: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
                stream: () => ReadableStream<Uint8Array>;
                text: () => Promise<string>;
            };
        } | undefined;
        width?: number | undefined;
        height?: number | undefined;
        file_length?: number | undefined;
        fileInputId?: string | undefined;
        from?: string | undefined;
        roomType?: boolean | undefined;
        group?: string | undefined;
        success?: ((data: EasemobChat.SendMsgResult) => void) | undefined;
        fail?: (() => void) | undefined;
        ext?: {
            [key: string]: any;
        } | undefined;
        url?: string | undefined;
        onFileUploadError?: ((err: EasemobChat.ErrorEvent) => void) | undefined;
        onFileUploadComplete?: ((data: EasemobChat.UploadFileResult) => void) | undefined;
        onFileUploadProgress?: ((data: ProgressEvent<EventTarget>) => void) | undefined;
        msgConfig?: {
            [key: string]: any;
        } | undefined;
        body?: {
            url: string;
            type: string;
            filename: string;
        } | undefined;
    })[];
    currentChatroomId: import("vue").Ref<string>;
    loginUserInfo: ILoginUserInfo;
    setCurrentChatroomId: (roomId: string) => void;
    sendDisplayMessage: (payload: EasemobChat.CreateMsgType) => Promise<unknown>;
    pushMessageToList: (message: DisplayMessageType) => void;
    setLoginUserInfo: (loginUserId: string) => Promise<void>;
};
