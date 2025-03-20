import { Ref } from 'vue';
import { ICreateformProps, IFormAction, ISchemas } from '../type';

interface IServiceMesaage {
    /**
     *  接口函数
     */
    api: (p?: any) => Promise<any> | undefined;
    /**
     * 成功返回消息
     */
    message?: string;
}
interface ICreateFormConfig {
    /**
     * 表单项
     * 渲染表单的数据
     *
     */
    schemas: ISchemas[];
    /**
     * 联动规则
     */
    linkRules?: any[];
    /**
     *  表单配置
     *  参看ant表单配置
     *  https://3x.antdv.com/components/form-cn#Form
     */
    formProps?: ICreateformProps;
    /**
     *  表单接口配置
     */
    service?: Record<string, IServiceMesaage>;
    /**
     *  重置表单前调用方法
     */
    beforeReset?: () => void;
    /**
     *   表单dom渲染完成后执行方法
     */
    afterInit?: (methods: IFormAction) => void;
    /**
     *  表单slot表单项挂载的响应值，可以同步到表单值，校验和提交无需赋值操作
     *
     */
    slotsValue?: Array<{
        field: string;
        value: Ref;
    }>;
    /**
     *  需要额外增加的请求参数，不计入表单检验，单独处理，检验，赋值和重置都需要手动处理
     */
    otherValue?: Record<string, any>;
}
export declare function useCreateForm({ schemas, linkRules, formProps, service, beforeReset, slotsValue, afterInit, }: ICreateFormConfig): {
    initForm: (instance: any) => void;
    methods: IFormAction;
    submitService: (type: string, otherValue?: Record<string, any>, isAdd?: boolean) => Promise<any>;
    resetForm: () => void;
    onSlotsWatch: () => void;
    formLoading: Ref<boolean>;
    formMode: Ref<string>;
};
export {};
