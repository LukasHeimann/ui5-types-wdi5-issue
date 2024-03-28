# ui5-types-wdi5-issue

This repository shows how something is behaving wrong in `@sapui5/types@1.122.1`.

In combination with wdi5, you have different settings for the tsconfig, as the runtime is in fact node 20 and not a browser -- only with these settings, the problem occurs:
- `moduleResolution` is `Node16` instead of `node`
- `module` is `Node16` instead of `es2022`

`@sapui5/types@1.122.0` is not affected, so this either is a change in the generation of the types, or something new that corresponds to only some libraries having been lifted to 1.122.1, while others are still at 1.122.0, which the list of files with errors from `tsc` suggests.

To reproduce:
- `npm ci`
- `npm run ts-typecheck` -> see many issues (see [`out.log`](out.log))
- Downgrade to `1.122.0`
- `npm run ts-typecheck` -> see no issues
