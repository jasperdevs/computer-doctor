---
name: security-scan
description: Check antivirus coverage, suspicious processes, startup persistence, autoruns, risky permissions, and obvious malware signals without pretending to provide a full forensic scan.
---

# Security Scan

Use this when the user wants a security-first pass instead of a full machine review.

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
- do not delete, quarantine, disable, or uninstall anything without approval
- if confidence is limited, say so plainly

## Output

Report:

1. protection status
2. suspicious findings
3. confidence level
4. recommended next steps

## Read Next

- `references/checklist.md`
- `references/report.md`
