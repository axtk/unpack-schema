# unpack-schema

*Define and extract Zod or Yup schema types without importing those packages*

🔹 Define types accepting schemas created with Zod or Yup in an abstract way without importing those packages:

```ts
import type {Schema} from 'unpack-schema';

type ParamsShape = Record<string, unknown>;
type Params = Schema<ParamsShape>;
```

🔹 Extract types from Zod/Yup schemas without importing `.infer` or `InferType` of those packages:

```ts
import type {UnpackedSchema} from 'unpack-schema';

function process(params: UnpackedSchema<Params, ParamsShape>) {
    // ...
}
```