export type ZodV4Min<T = unknown> = {
    _zod: {
        output: T;
    };
};

export type ZodV4<T = unknown> = ZodV4Min<T> & {
    parse: (value: unknown, options?: object | undefined) => T;
};

export type UnpackedZodV4<T extends ZodV4Min> = T['_zod']['output'];
