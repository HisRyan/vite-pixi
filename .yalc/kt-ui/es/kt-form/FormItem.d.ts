import { PropType } from 'vue';
import { ISchemas } from './type';

declare const KtFormItem: import('vue').DefineComponent<{
    schema: {
        type: PropType<ISchemas>;
        required: true;
    };
    modelForm: {
        type: ObjectConstructor;
        required: true;
    };
    componentMap: {
        type: PropType<Map<any, any>>;
        required: true;
        default: () => Map<any, any>;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    schema: {
        type: PropType<ISchemas>;
        required: true;
    };
    modelForm: {
        type: ObjectConstructor;
        required: true;
    };
    componentMap: {
        type: PropType<Map<any, any>>;
        required: true;
        default: () => Map<any, any>;
    };
}>>, {
    componentMap: Map<any, any>;
}, {}>;
export default KtFormItem;
