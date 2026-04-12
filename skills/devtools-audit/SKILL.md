---
name: devtools-audit
description: Review shells, PATH, environment variables, runtimes, SDKs, package managers, Git tooling, and developer-tooling conflicts on a machine.
---

# Devtools Audit

Use this when the user wants a developer-tooling audit instead of a full machine review.

## When To Use

- broken shell or terminal setup
- PATH issues
- runtime or SDK conflicts
- package-manager sprawl
- Git or automation-tooling problems

## What To Check

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
5. Suggested standardization

## Read Next

- `references/checklist.md`
- `references/report.md`
