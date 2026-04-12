# Linux Notes

Use this when the host is Linux.

## High-value surfaces

- distro update status
- systemd services and timers
- cron jobs and user-level persistence
- disk pressure, logs, and large directories
- shell init files and PATH order
- apt, dnf, pacman, snap, flatpak, and language-tool managers

## Good evidence

- enabled service/timer names
- cron entries and executable paths
- package-manager health and outdated packages
- shell init files and duplicate PATH entries
- top disk consumers and log growth

## Escalate findings quickly when

- critical packages or security updates are overdue
- suspicious persistence appears in timers, services, or cron
- package-manager conflicts are breaking tooling
- disk or log growth is out of control
