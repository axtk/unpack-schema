export type YupMin = {
    __outputType: unknown;
};

export type Yup = YupMin & {
    cast: (value: unknown, options?: object | undefined) => unknown;
};

export type UnpackedYup<T extends YupMin> = T['__outputType'];
