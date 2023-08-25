declare const _default: import("vue").DefineComponent<{
    username: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    password: {
        type: StringConstructor;
        default: string;
    };
    accessToken: {
        type: StringConstructor;
        default: string;
    };
    chatroomId: {
        type: StringConstructor;
        default: string;
        required: true;
    };
}, {
    loginIM: () => Promise<void>;
    closeIM: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    username: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    password: {
        type: StringConstructor;
        default: string;
    };
    accessToken: {
        type: StringConstructor;
        default: string;
    };
    chatroomId: {
        type: StringConstructor;
        default: string;
        required: true;
    };
}>>, {
    username: string;
    password: string;
    accessToken: string;
    chatroomId: string;
}, {}>;
export default _default;
