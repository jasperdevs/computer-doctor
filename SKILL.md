---
name: computer-doctor
description: Audit a computer as a full working environment across security, performance, configuration, startup behavior, installed software, developer tooling, and system health without making destructive changes by default.
---

# Computer Doctor

Use this skill when the user wants a full-computer audit, not just a settings walkthrough.

Audit the machine as a real working environment:

- system and internal configuration
- startup items and persistent background activity
- security posture and suspicious signals
- performance bottlenecks and storage pressure
- installed software quality and redundancy
- developer environment health
- useful app and open-source replacement recommendations

## Rules

- Detect the environment first: OS, shell, permissions, runtime boundaries, and available tools
- Adapt to the host instead of assuming Windows, macOS, Linux, admin access, or package managers
- Default to read-only auditing
- Do not delete, move, overwrite, uninstall, disable, reset, or clean anything unless the user explicitly approves it
- Prefer evidence and repeatable checks over guesses
- Focus on high-impact findings
- Clearly separate confirmed findings from suspicion
- State what could not be inspected because of permissions, tooling, or sandbox limits

## Workflow

1. Detect environment and limits.
2. Inspect the machine broadly using the checklist in `references/audit-checklist.md`.
3. Apply the guardrails in `references/safety-boundaries.md`.
4. Report findings using `references/report-template.md`.

## Output

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
- `examples/full-audit-request.md`
