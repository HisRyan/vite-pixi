import { ExtractPropTypes, Ref, VNode } from 'vue';
import { default as KtForm } from './KtForm';
import { FormProps } from 'ant-design-vue';

export type KtFormProps = ExtractPropTypes<typeof KtForm>;
export type IComponents = 'Input' | 'Select' | 'TimePicker' | 'DatePicker' | 'RangePicker';
export interface ISchemas {
    id?: string;
    /** label   */
    label: string;
    field: string;
    component: any;
    defaultValue?: any;
    placeholder?: string;
    required?: any;
    rules?: any[];
    isHide?: any;
    isHideFun?: any;
    trigger?: 'blur' | 'change' | ['change', 'blur'];
    disabled?: any;
    change?: (val: any) => void;
    componentProps?: any;
    tips?: any;
    tipsStyle?: Object;
    isSlots?: boolean;
    isOtherSlots?: boolean;
    itemSlots?: Record<string, VNode>;
    formItemProps?: Record<string, any>;
}
export type IFormData = {
    schemas: Array<ISchemas>;
    linkRules: Array<any>;
};
export interface ICreateformProps extends FormProps {
    footer?: boolean | undefined;
}
export interface IFormProps {
    schemas: Array<ISchemas>;
    linkRules?: Array<ILinkRules>;
    formProps?: ICreateformProps;
}
export interface IFormAction {
    submit(): Promise<any>;
    setFieldsValue<T>(values: T): void;
    resetFields(): void;
    setFieldValue(field: string, value: any): void;
    getFieldValue(field: string): any;
    setFieldHide(field: string, value: boolean): void;
    setFieldDisabled(field: string, value: boolean): void;
    setFieldOptions(field: string, value: any): void;
    setSava?: any;
}
export interface IUserForm {
    initForm: (instance: any) => void;
    methods: IFormAction;
    isInit: Ref<boolean>;
    modelValue: Ref<any>;
}
export interface IinstanceForm {
    methods: IFormAction & {
        setProps: (props: IFormProps) => void;
    };
    modelRef: Ref<any>;
}
interface ILinkRulesValue1 {
    /** 联动判断字段   */
    field: string;
    /** 联动判断规则 equal等于 max大于 min小于   */
    comparison: 'equal' | 'max' | 'min';
    /** 联动判断值   */
    value: any;
    /**  目标字段信息   */
    result: {
        /** 目标字段   */
        targetField: string;
        /** 目标字段是被设置属性还是设置值   */
        targetType: 'attribute';
        /** 目标字段被设置的属性 required必填 show展示 hide隐藏 disabled不可编辑 abled可编辑   */
        targetValue: 'required' | 'show' | 'hide' | 'disabled' | 'abled';
    };
}
interface ILinkRulesValue2 {
    /** 联动判断字段   */
    field: string;
    /** 联动判断规则 haveValue当有值的时候   */
    comparison: 'haveValue';
    /** 目标字段信息   */
    result: {
        /** 目标字段   */
        targetField: string;
        /** 目标字段是被设置属性还是设置值 attribute属性 value值   */
        targetType: 'attribute';
        /** 目标字段被设置的属性 required必填 show展示 hide隐藏 disabled不可编辑 abled可编辑   */
        targetValue: 'required' | 'show' | 'hide' | 'disabled' | 'abled';
    };
}
interface ILinkRulesValue3 {
    /** 联动判断字段   */
    field: string;
    /** 联动判断规则 equal等于 max大于 min小于   */
    comparison: 'equal' | 'max' | 'min';
    /** 联动判断值   */
    value: any;
    /** 目标字段信息   */
    result: {
        /** 目标字段   */
        targetField: string;
        /** 目标字段是被设置属性还是设置值   */
        targetType: 'value';
        /** 目标字段被设置的值   */
        targetValue: any;
    };
}
export type ILinkRules = ILinkRulesValue1 | ILinkRulesValue2 | ILinkRulesValue3;
export {};
