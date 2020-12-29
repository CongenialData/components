## Scripts

console.log(')

- `check-format`: Format code with Prettier and list only changed files
- `check-types`: Validates TypeScript types
- `format`: Format all code with Prettier
- `lint`: https://tsdx.io/api-reference#code-tsdx-lint-code
- `prettier`: Format code with Prettier and list both changed and un-changed files
- `validate`: Run multiple scripts in parallell to make sure everything is ok

## Commit

It is possible to cmmit code, even if it isn't valid lint. Husky runs on `pre-commit` with some scripts defined in package.json.
When commiting code following scripts run: `check-types`, `lint` and `prettier`.

## Push

It is not possible to push any code if there is an lint-, type- or a build error.

Runs multiple scripts in parallel. If one script failes, everything fails. This is used when pushing code to make sure everything is working as it should. If one of the parallell scripts fails, this script will fail.

Example: `check-types`, `check-format`and `build` could succeed, but `lint` doesn't. This will cause `validate` to fail and an error is thrown.
When pushing code the `validate` script is run.
