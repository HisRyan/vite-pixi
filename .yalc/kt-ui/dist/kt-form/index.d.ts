import { App, Plugin } from 'vue';
import { useForm } from './plugins/useForm';
import { useCreateForm } from './plugins/useCreateForm';

export type { ISchemas, ILinkRules, ICreateformProps } from './type';
declare const installKtUi: (app: App) => void;
export { useForm, useCreateForm, installKtUi };
declare const _default: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{}>> & {
        "onInit-form"?: ((...args: any[]) => any) | undefined;
    }, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "init-form"[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{}>> & {
        "onInit-form"?: ((...args: any[]) => any) | undefined;
    }, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{}>> & {
        "onInit-form"?: ((...args: any[]) => any) | undefined;
    }, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{}>> & {
    "onInit-form"?: ((...args: any[]) => any) | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "init-form"[], "init-form", {}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Plugin));
export default _default;
