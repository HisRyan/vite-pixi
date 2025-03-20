export declare function useForm(props: any): {
    initForm: (instance: any) => void;
    methods: {
        submit: () => any;
        setFieldsValue: (value: any) => void;
        resetFields: () => void;
        setFieldValue: (field: string, value: any) => void;
    };
    formValue: import('vue').ComputedRef<any>;
};
