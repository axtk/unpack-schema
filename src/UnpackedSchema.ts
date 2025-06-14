import type {UnpackedYup, YupMin} from './shapes/Yup';
import type {UnpackedZodV3, ZodV3Min} from './shapes/ZodV3';
import type {UnpackedZodV4, ZodV4Min} from './shapes/ZodV4';

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
