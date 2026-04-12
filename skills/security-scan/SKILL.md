---
name: security-scan
description: Check antivirus coverage, suspicious processes, startup persistence, autoruns, risky permissions, and obvious malware signals without pretending to be a full forensic scan.
---

# Security Scan

Use this when the user wants a security-first pass instead of a full machine review.

## First Step: Pick A Mode

At the start of the interaction, ask the user to choose one mode:

- `Audit mode` (recommended): inspect first, report findings, ask before changing anything
- `YOLO mode`: still try to be safe, but carry out actions without asking again after the initial mode choice

If the user already picked a mode earlier in the same task, do not ask again.

## When To Use

- virus or malware check
- suspicious process review
- startup persistence review
- autorun or background-software concerns
- security posture check without broad performance/storage analysis

## What To Check

- antivirus or endpoint protection status
- firewall status
- suspicious processes
- autoruns and persistence
- risky permissions
- obvious unwanted software

## Rules

- be evidence-based and skeptical
- do not claim a machine is clean unless the available evidence supports that
- in Audit mode, ask before changing anything
- in YOLO mode, proceed without repeated approval, but still avoid reckless actions
- if confidence is limited, say so plainly

## Output

Report:

1. protection status
2. suspicious findings
3. confidence level
4. recommended next steps
5. whether deeper scanning is needed
6. approval-required changes in Audit mode

## Read Next

- `references/checklist.md`
- `references/report.md`
