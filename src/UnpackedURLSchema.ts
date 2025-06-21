import type {UnpackedSchema} from './UnpackedSchema';
import type {URLSchema} from './URLSchema';

type R = Record<string, unknown>;

export type UnpackedURLSchema<T extends URLSchema> = T extends null
    ? undefined
    : NonNullable<T> extends {params: R; query: R}
      ? {
            params: UnpackedSchema<NonNullable<T>['params']>;
            query: UnpackedSchema<NonNullable<T>['query']>;
        }
      : NonNullable<T> extends {params?: R | undefined; query: R}
        ? {
              params?: UnpackedSchema<NonNullable<T>['params']>;
              query: UnpackedSchema<NonNullable<T>['query']>;
          }
        : NonNullable<T> extends {params: R; query?: R | undefined}
          ? {
                params: UnpackedSchema<NonNullable<T>['params']>;
                query?: UnpackedSchema<NonNullable<T>['query']>;
            }
          : NonNullable<T> extends {
                  params?: R | undefined;
                  query?: R | undefined;
              }
            ? {
                  params?: UnpackedSchema<NonNullable<T>['params']>;
                  query?: UnpackedSchema<NonNullable<T>['query']>;
              }
            : undefined;
