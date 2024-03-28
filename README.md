# ui5-types-wdi5-issue

This repository shows how something is behaving wrong in `@sapui5/types@1.122.1`.

To reproduce:
- `npm ci`
- `npm run ts-typecheck` -> see many issues (see [`out.log`](out.log))
- Downgrade to `1.122.0`
- `npm run ts-typecheck` -> see no issues
