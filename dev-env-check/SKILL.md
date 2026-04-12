---
name: dev-env-check
description: Review shells, PATH, environment variables, runtimes, SDKs, package managers, Git tooling, and developer setup conflicts on a machine.
---

# Dev Env Check

Use this when the user wants a developer-focused audit instead of a full machine review.

## Check

- shells and terminal setup
- PATH quality
- environment variables
- runtimes and SDKs
- package managers
- Git and automation tooling
- conflicting, dead, or duplicate installs

## Rules

- Prefer concrete setup issues over generic advice
- Flag broken or conflicting developer tooling first
- Recommend improvements that fit the tools already present on the machine

## Output

Report:

1. Broken or conflicting setup
2. Missing essentials
3. Cleanup opportunities
4. Practical improvements
