---
name: virus-scan
description: Deprecated compatibility alias for security-scan. Run the same security-first audit after asking the user to choose Audit mode or YOLO mode.
---

# Virus Scan (Deprecated)

Use this only for backward compatibility. Prefer `$security-scan`.

## First Step: Pick A Mode

At the start of the interaction, ask the user to choose one mode:

Ask exactly:
`Choose a mode: Audit mode (recommended) or YOLO mode.`

- `Audit mode` (recommended): inspect first, report findings, ask before changing anything
- `YOLO mode`: still try to be safe, but carry out actions without asking again after the initial mode choice

If the user already picked a mode earlier in the same task, do not ask again.

## Behavior

This deprecated alias should run the same security-first pass as `$security-scan`:

- antivirus or endpoint protection status
- firewall status
- suspicious processes
- autoruns and persistence
- risky permissions
- obvious unwanted software

## Rules

- state that `$security-scan` is the preferred command name
- be evidence-based and skeptical
- do not claim a machine is clean unless the available evidence supports that
- in Audit mode, ask before changing anything
- in YOLO mode, proceed without repeated approval, but still avoid reckless actions
- if confidence is limited, say so plainly

## Output

Report:

1. protection status
2. highest-risk findings
3. whether deeper scanning is needed
4. approval-required changes in Audit mode
