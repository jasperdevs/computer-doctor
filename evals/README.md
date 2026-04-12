# Evals

This folder exists to make the pack easier to evaluate and maintain.

## What it covers

- quality criteria for each skill
- sample output shapes
- a deterministic verification command for pack discovery/install

## Verification

Run:

```bash
node scripts/verify-pack.mjs
```

That checks:

1. the pack is discoverable through the `skills` CLI
2. all expected commands are present
3. each command can be installed on its own

## Quality bar

A good skill response should:

- choose the correct mode first
- stay within the command boundary
- separate evidence from inference
- prioritize high-impact findings
- avoid pretending confidence is higher than it is
