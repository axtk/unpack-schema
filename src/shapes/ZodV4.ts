export type ZodV4Min = {
    _zod: {
        output: unknown;
    };
};

export type ZodV4 = ZodV4Min & {
    parse: (value: unknown, options?: object | undefined) => unknown;
};

export type UnpackedZodV4<T extends ZodV4Min> = T['_zod']['output'];
