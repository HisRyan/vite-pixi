import { Plugin } from 'vue';

declare const _default: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        current: {
            type: NumberConstructor;
            default: () => number;
        };
        pageSize: {
            type: NumberConstructor;
            default: () => number;
        };
        total: {
            type: NumberConstructor;
            default: () => number;
        };
    }>> & {
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:current"[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        current: {
            type: NumberConstructor;
            default: () => number;
        };
        pageSize: {
            type: NumberConstructor;
            default: () => number;
        };
        total: {
            type: NumberConstructor;
            default: () => number;
        };
    }>> & {
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }, {
        current: number;
        pageSize: number;
        total: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        current: {
            type: NumberConstructor;
            default: () => number;
        };
        pageSize: {
            type: NumberConstructor;
            default: () => number;
        };
        total: {
            type: NumberConstructor;
            default: () => number;
        };
    }>> & {
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        current: number;
        pageSize: number;
        total: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    current: {
        type: NumberConstructor;
        default: () => number;
    };
    pageSize: {
        type: NumberConstructor;
        default: () => number;
    };
    total: {
        type: NumberConstructor;
        default: () => number;
    };
}>> & {
    "onUpdate:current"?: ((...args: any[]) => any) | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:current"[], "update:current", {
    current: number;
    pageSize: number;
    total: number;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Plugin));
export default _default;
