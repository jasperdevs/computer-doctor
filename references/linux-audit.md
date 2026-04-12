# Linux Audit Notes

Use native tools that are actually present. Do not assume `systemd`, `apt`, `dnf`, or `snap`.

## Common inspection areas

- OS release and kernel version
- enabled services and timers
- login shells and environment files
- cron entries and user-level persistence
- package-manager health and duplicate runtimes
- disk pressure, large directories, caches, and logs
- firewall status and listening services

## Good evidence to gather

- service state
- package-manager inventory
- startup or timer definitions
- ownership and path of suspicious executables
- disk usage by top directories
