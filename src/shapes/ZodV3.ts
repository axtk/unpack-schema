export type ZodV3Min = {
    _output: unknown;
};

export type ZodV3 = ZodV3Min & {
    parse: (value: unknown, options?: object | undefined) => unknown;
};

export type UnpackedZodV3<T extends ZodV3Min> = T['_output'];
