import type {Yup} from './shapes/Yup';
import type {ZodV3} from './shapes/ZodV3';
import type {ZodV4} from './shapes/ZodV4';

export type Schema<T = unknown> = ZodV4<T> | ZodV3<T> | Yup<T>;
