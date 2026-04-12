---
name: computer-doctor
description: Audit a computer as a working environment across security, performance, startup behavior, installed software, storage, and developer tooling without making destructive changes by default.
---

# Computer Doctor

Use this when the user wants a broad machine audit.

## What It Covers

This is the top-level command for checking the computer as a whole working environment:

- security posture
- startup and background activity
- performance bottlenecks
- storage pressure
- software quality
- developer tooling health

## When To Use

- full machine check
- setup review
- general performance and security review
- broad audit before cleanup or optimization decisions

## Rules

- Detect the environment first: OS, shell, permissions, runtime boundaries, and available tools
- Default to read-only auditing
- Do not delete, move, overwrite, uninstall, disable, reset, or clean anything unless the user explicitly approves it
- Prefer direct evidence over guesses
- Clearly separate confirmed issues from suspicion

## Workflow

1. Detect environment and limits.
2. Inspect the machine broadly using `references/audit-checklist.md`.
3. Apply `references/safety-boundaries.md`.
4. Report findings using `references/report-template.md`.

## Output

Report:

1. executive summary
2. highest-impact findings
3. security findings
4. performance findings
5. startup and background findings
6. software and developer environment findings
7. prioritized action plan
8. limitations

## Companion Commands

Use the narrower commands when the user wants a focused pass:

- `$security-scan`
- `$startup-audit`
- `$devtools-audit`

## Read Next

- `references/audit-checklist.md`
- `references/safety-boundaries.md`
- `references/report-template.md`
