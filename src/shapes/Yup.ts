export type YupMin<T = unknown> = {
    __outputType: T;
};

export type Yup<T = unknown> = YupMin<T> & {
    cast: (value: unknown, options?: object | undefined) => unknown;
};

export type UnpackedYup<T extends YupMin> = T['__outputType'];
