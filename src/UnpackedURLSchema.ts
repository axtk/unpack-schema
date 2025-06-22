import type {Schema} from './Schema';
import type {UnpackedSchema} from './UnpackedSchema';
import type {URLSchema} from './URLSchema';

type SafePick<T, K> = K extends keyof T ? NonNullable<T>[K] : undefined;

type R = Schema<Record<string, unknown>>;
type RX = Schema<Record<string, unknown> | undefined> | undefined;

export type UnpackedURLSchema<T extends URLSchema> = T extends null
    ? undefined
    : NonNullable<T> extends {params: R; query: R}
      ? {
            params: UnpackedSchema<SafePick<T, 'params'>>;
            query: UnpackedSchema<SafePick<T, 'query'>>;
        }
      : NonNullable<T> extends {params?: RX; query: R}
        ? {
              params?: UnpackedSchema<SafePick<T, 'params'>>;
              query: UnpackedSchema<SafePick<T, 'query'>>;
          }
        : NonNullable<T> extends {params: R; query?: RX}
          ? {
                params: UnpackedSchema<SafePick<T, 'params'>>;
                query?: UnpackedSchema<SafePick<T, 'query'>>;
            }
          : NonNullable<T> extends {
                  params?: RX;
                  query?: RX;
              }
            ? {
                  params?: UnpackedSchema<SafePick<T, 'params'>>;
                  query?: UnpackedSchema<SafePick<T, 'query'>>;
              }
            : undefined;
