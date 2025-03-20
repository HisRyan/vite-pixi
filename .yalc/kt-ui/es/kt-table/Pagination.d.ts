declare const KtPagination: import('vue').DefineComponent<{
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
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:current"[], "update:current", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
}, {}>;
export default KtPagination;
