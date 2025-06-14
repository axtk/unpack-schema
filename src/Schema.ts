import type {ZodV3} from './shapes/ZodV3';
import type {ZodV4} from './shapes/ZodV4';
import type {Yup} from './shapes/Yup';

export type Schema = ZodV4 | ZodV3 | Yup;
