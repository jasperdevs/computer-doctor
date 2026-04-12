---
name: devtools-audit
description: Review shells, PATH, environment variables, runtimes, SDKs, package managers, Git tooling, and developer-tooling conflicts on a machine.
---

# Devtools Audit

Use this when the user wants a developer-tooling audit instead of a full machine review.

## First Step: Pick A Mode

At the start of the interaction, ask the user to choose one mode:

- `Audit mode` (recommended): inspect first, report findings, ask before changing anything
- `YOLO mode`: still try to be safe, but carry out actions without asking again after the initial mode choice

If the user already picked a mode earlier in the same task, do not ask again.

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
- in Audit mode, ask before changing anything
- in YOLO mode, proceed without repeated approval, but still avoid reckless actions

## Output

Report:

1. Broken or conflicting setup
2. Missing essentials
3. Cleanup opportunities
4. Practical improvements
5. Suggested standardization
6. approval-required changes in Audit mode

## Read Next

- `references/checklist.md`
- `references/report.md`
