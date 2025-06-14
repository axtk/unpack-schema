export type ZodV3Min<T = unknown> = {
    _output: T;
};

export type ZodV3<T = unknown> = ZodV3Min<T> & {
    parse: (value: unknown, options?: object | undefined) => T;
};

export type UnpackedZodV3<T extends ZodV3Min> = T['_output'];
