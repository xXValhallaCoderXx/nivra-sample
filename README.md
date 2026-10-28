# Nivra sample

A small public repository for trying [Nivra](https://github.com/xXValhallaCoderXx/nivra-orchestrator)'s sandbox check.
It is a few plain files: a tiny module that converts workout loads between kilograms and pounds, and its tests. Nothing
needs installing.

## Trying it with Nivra

1. Clone it. On Windows, clone it inside WSL.
   ```bash
   git clone https://github.com/xXValhallaCoderXx/nivra-sample.git
   ```
2. In Nivra, **Add** the folder.
3. Press **Explain**, and allow sharing for this project when asked. The answer cites the lines the model was shown.
4. Under **Sandbox check**, press **Preview the check** to see exactly what would be uploaded, then **Upload and check**.
   Nivra uploads this commit's files to a Nebius sandbox and runs its own fixed steps there, with networking off.
   Nothing comes back to your folder.

Use the commit the testing instructions name, so what you upload is what was checked.

## The code

- `src/units.js`: converts a load between kilograms and pounds, and formats it for display.
- `test/units.test.js`: its tests, with Node's own test runner: `node --test` (Node 20 or later).

## Licence

MIT. See [LICENSE](LICENSE).
