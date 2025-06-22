import type {UnpackedYup, YupMin} from './shapes/Yup';
import type {UnpackedZodV3, ZodV3Min} from './shapes/ZodV3';
import type {UnpackedZodV4, ZodV4Min} from './shapes/ZodV4';

export type UnpackedSchema<
    T,
    PresumedType = unknown,
    UnrecognizedFallback = unknown,
    UndefinedFallback = undefined,
> = T extends undefined
  ? UndefinedFallback
  : T extends ZodV4Min<PresumedType>
    ? UnpackedZodV4<T>
    : T extends ZodV3Min<PresumedType>
      ? UnpackedZodV3<T>
      : T extends YupMin<PresumedType>
        ? UnpackedYup<T>
        : UnrecognizedFallback;
