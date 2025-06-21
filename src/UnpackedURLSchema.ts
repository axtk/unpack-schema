import type {Schema} from './Schema';
import type {UnpackedSchema} from './UnpackedSchema';
import type {URLSchema} from './URLSchema';

type R = Schema<Record<string, unknown>>;
type RX = Schema<Record<string, unknown> | undefined>;

export type UnpackedURLSchema<T extends URLSchema> = T extends null
    ? undefined
    : NonNullable<T> extends {params: R; query: R}
      ? {
            params: UnpackedSchema<NonNullable<T>['params']>;
            query: UnpackedSchema<NonNullable<T>['query']>;
        }
      : NonNullable<T> extends {params?: RX; query: R}
        ? {
              params?: UnpackedSchema<NonNullable<T>['params']>;
              query: UnpackedSchema<NonNullable<T>['query']>;
          }
        : NonNullable<T> extends {params: R; query?: RX}
          ? {
                params: UnpackedSchema<NonNullable<T>['params']>;
                query?: UnpackedSchema<NonNullable<T>['query']>;
            }
          : NonNullable<T> extends {
                  params?: RX;
                  query?: RX;
              }
            ? {
                  params?: UnpackedSchema<NonNullable<T>['params']>;
                  query?: UnpackedSchema<NonNullable<T>['query']>;
              }
            : undefined;
