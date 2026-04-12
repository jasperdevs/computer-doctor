---
name: computer-doctor
description: Audit a computer as a full working environment across security, performance, configuration, startup behavior, installed software, developer tooling, and system health without making destructive changes by default.
---

# Computer Doctor

Perform a full audit of the current computer and software environment.

This skill is for broad machine review, not just OS settings. Inspect the computer as a real working environment: system configuration, internal settings, startup behavior, security posture, performance, storage, installed software, background processes, developer tooling, and quality-of-life improvements.

## Core Behavior

- Detect the environment first: operating system, shell, permissions, sandbox or VM or container or WSL status, and available tools.
- Adapt to the host system instead of assuming Windows, macOS, Linux, admin access, or specific package managers.
- Default to read-only auditing.
- Do not delete, move, overwrite, uninstall, disable, reset, or clean anything unless the user explicitly approves it.
- Prefer direct evidence and repeatable checks over guesses.
- Tailor recommendations to the observed machine and usage patterns.
- Be explicit about anything that could not be inspected because of permissions, tooling, or sandbox limits.

## What To Audit

### System configuration

- OS version and update state
- Important internal settings, not just GUI settings
- Power, privacy, reliability, and performance-related configuration

### Startup and background activity

- Startup and login items
- Services, daemons, scheduled tasks, cron jobs, launch agents, launch daemons, or platform equivalents
- Persistent background processes
- Heavy or unnecessary background activity

### Security and safety

- Antivirus or endpoint protection status
- Firewall status
- Suspicious files, processes, startup entries, persistence mechanisms, or risky permissions
- Signs of malware, unwanted software, or unsafe configuration
- Security-relevant update gaps

### Performance and stability

- CPU, RAM, disk, GPU, and thermals if available
- Storage pressure
- Heavy startup behavior
- Bloated or crash-prone software
- Obvious bottlenecks

### Storage hygiene

- Low disk headroom
- Large or bloated directories
- Caches, logs, temp files, duplicates, and obvious clutter
- Redundant or overlapping software

### Software ecosystem

- Installed apps and utilities
- Outdated, redundant, low-quality, or mismatched software
- Better alternatives where relevant, including open-source options

### Developer environment

- Shells and terminals
- PATH and environment variables
- Runtimes, SDKs, package managers, Git tooling, and language toolchains
- Broken, conflicting, or wasteful setup

### Network-related configuration

- DNS, proxy, VPN, adapter, or related software that looks clearly misconfigured, risky, or inefficient

## Safety Rules

- Default to read-only auditing.
- Never run broad cleanup or destructive commands.
- Never touch personal files, project folders, SSH keys, browser profiles, databases, cloud-sync folders, or external drives unless specifically approved.
- If a change could remove data, break workflows, or is difficult to undo, stop and ask first.
- Prefer reversible fixes and show the exact target of any suggested change.

## Audit Process

1. Detect the environment and constraints.
2. Inspect broadly, then go deeper where there are real signals.
3. Verify important findings with multiple checks when possible.
4. Prioritize high-impact issues over tiny tweaks.
5. Recommend improvements that fit the actual machine and usage patterns.
6. Do not make changes automatically unless the user explicitly approves them.

## Output Requirements

For every finding or recommendation, include:

- what was found
- why it matters
- evidence
- severity: critical, high, medium, or low
- confidence: high, medium, or low
- recommended fix
- whether it is safe to fix automatically, should require approval, or is informational only

## Output Format

1. Executive summary
2. Security findings
3. Performance findings
4. System and internal configuration findings
5. Startup and background findings
6. Software and app recommendations
7. Developer environment findings
8. Prioritized action plan
9. Limitations
