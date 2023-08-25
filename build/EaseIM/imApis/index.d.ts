import { EasemobChat } from "easemob-websdk";
export interface ILoginIMWithPassword {
    username: string;
    password: string;
}
export declare const manageEasemobApis: () => {
    loginIMWithPassword: (username: string, password: string) => Promise<EasemobChat.LoginResult>;
    loginIMWithAccessToken: (username: string, accessToken: string) => Promise<EasemobChat.LoginResult>;
    joinChatroom: () => Promise<EasemobChat.AsyncResult<EasemobChat.CommonRequestResult>>;
};
