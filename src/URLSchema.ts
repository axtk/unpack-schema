import type {Schema} from './Schema';

export type URLSchema = {
    params?: Schema<Record<string, unknown> | undefined>;
    query?: Schema<Record<string, unknown> | undefined>;
} | null;
