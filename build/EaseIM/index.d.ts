import { EasemobChat } from "easemob-websdk";
export declare let EMClient: EasemobChat.Connection;
export declare const EMCreateMessage: typeof EasemobChat.Message.create;
export declare const initEMClient: (appKey: string) => EasemobChat.Connection;
