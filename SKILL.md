---
name: computer-doctor
description: Audit a computer as a full working environment across security, performance, configuration, startup behavior, installed software, developer tooling, and system health without making destructive changes by default.
metadata:
  short-description: Full-system computer audit
---

# Computer Doctor

Use this skill when the user wants a broad audit of their computer, not just a settings walkthrough.

This skill inspects the machine as a whole working environment: system configuration, startup behavior, persistent background activity, security posture, performance, storage, installed software, developer tooling, and quality-of-life improvements.

## Use When

- The user wants a full computer audit
- The user wants setup, security, performance, and software reviewed together
- The user wants recommendations based on how the machine appears to be used
- The user wants suspicious processes, persistence, or malware signals checked without defaulting to destructive cleanup

## Do Not Use When

- The user only wants one specific bug fixed
- The user only wants a single app configured
- The user wants broad cleanup or automatic optimization without inspection first

## Core Rules

- Detect the environment first: OS, shell, permissions, sandbox or VM or container or WSL status, and available tools
- Adapt to the host instead of assuming Windows, macOS, Linux, admin access, or package managers
- Default to read-only auditing
- Do not delete, move, overwrite, uninstall, disable, reset, or clean anything unless the user explicitly approves it
- Prefer direct evidence and repeatable checks over guesses
- Focus on high-impact findings rather than minor tweaks
- Tailor recommendations to the machine's observed usage patterns
- Clearly separate confirmed issues from suspicion
- State what could not be inspected because of permissions, tooling, or sandbox limits

## Workflow

### 1. Detect environment and limits

- Confirm OS, shell, available tools, permissions, and runtime boundaries
- Note any missing access that will limit inspection depth

### 2. Inspect the machine by category

Cover the audit areas in `references/audit-checklist.md`.

Go deeper when signals justify it, especially for:
- suspicious persistence
- heavy startup behavior
- storage pressure
- broken developer tooling
- outdated or redundant software

### 3. Apply safety boundaries

Follow `references/safety-boundaries.md`.

If an action could remove data, break workflows, or is hard to undo, stop and ask first.

### 4. Report findings clearly

Use the structure in `references/report-template.md`.

For every finding or recommendation, include:
- what was found
- why it matters
- evidence
- severity: critical, high, medium, or low
- confidence: high, medium, or low
- recommended fix
- whether it is safe to fix automatically, should require approval, or is informational only

## Read Next

- `references/audit-checklist.md`
- `references/safety-boundaries.md`
- `references/report-template.md`
- `examples/full-system-audit.md`
