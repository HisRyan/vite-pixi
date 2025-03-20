export type Data = {
    total: number;
    list: any[];
};
export type Params = {
    current: number;
    pageSize: number;
    [key: string]: any;
};
export type Service<TData extends Data, TParams extends Params> = (args: TParams) => Promise<TData>;
