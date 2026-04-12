# Audit Checklist

Use this as the category map for a full-machine audit. Cover the broad surface first, then go deeper where evidence warrants it.

## 1. Environment and constraints

- Operating system and version
- Shell and available command tools
- Admin or sudo capability if present
- Sandbox, VM, WSL, container, or remote-session constraints
- What can and cannot be inspected safely

## 2. System configuration

- OS update state
- Power and performance profile
- Privacy and reliability-related settings
- Important internal configuration, not just GUI settings
- Environment variables that materially affect behavior

## 3. Startup and persistence

- Startup or login items
- Services and daemons
- Scheduled tasks, cron jobs, launch agents, launch daemons, or equivalents
- Unusual persistence mechanisms
- Background apps that start automatically

## 4. Security and safety

- Antivirus or endpoint protection status
- Firewall status
- Update gaps that materially affect security
- Suspicious processes or unsigned binaries if visible
- Risky permissions, unexpected autoruns, or unwanted software
- Signs that may suggest malware or persistence abuse

## 5. Performance and stability

- CPU, RAM, disk, and GPU pressure
- Disk headroom and I/O bottlenecks
- Heavy startup behavior
- Bloated, crash-prone, or wasteful software
- Thermal issues if available

## 6. Storage hygiene

- Large directories and obvious bloat
- Temp files, logs, caches, and installer leftovers
- Duplicate or overlapping tools
- Project and workspace sprawl if clearly visible

## 7. Software ecosystem

- Installed apps and utilities
- Outdated, redundant, or low-value software
- Quality-of-life opportunities based on observed usage
- Open-source replacements where genuinely better

## 8. Developer environment

- Shells and terminal setup
- PATH quality
- Runtimes, SDKs, package managers, and toolchains
- Conflicting or dead installs
- Git and automation tooling
- AI and local model workflow setup if present

## 9. Network-related configuration

- VPN, proxy, DNS, or adapter issues if visible
- Network-heavy background software
- Clearly unsafe or inefficient connectivity-related setup

## 10. Final triage

Prioritize:

1. security risks
2. reliability and performance bottlenecks
3. broken tooling
4. obvious clutter and redundancy
5. lower-impact polish
