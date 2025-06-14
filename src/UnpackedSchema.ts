import type {ZodV3Min, UnpackedZodV3} from './shapes/ZodV3';
import type {ZodV4Min, UnpackedZodV4} from './shapes/ZodV4';
import type {YupMin, UnpackedYup} from './shapes/Yup';

export type UnpackedSchema<
    T,
    UndefinedFallback = undefined,
    UnrecognizedFallback = undefined,
> = T extends undefined
    ? UndefinedFallback
    : T extends ZodV4Min
      ? UnpackedZodV4<T>
      : T extends ZodV3Min
        ? UnpackedZodV3<T>
        : T extends YupMin
          ? UnpackedYup<T>
          : UnrecognizedFallback;
