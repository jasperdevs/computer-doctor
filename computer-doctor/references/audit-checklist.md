# Audit Checklist

Cover the broad surface first, then go deeper where evidence justifies it.

## Environment

- OS and version
- shell and available tools
- permissions and elevation limits
- sandbox, VM, WSL, container, or remote-session constraints

## System configuration

- update state
- power and performance profile
- important internal settings
- environment variables that materially affect behavior

## Startup and persistence

- startup or login items
- services and daemons
- scheduled tasks, cron jobs, launch agents, launch daemons, or equivalents
- unusual persistence mechanisms

## Security and safety

- antivirus or endpoint protection status
- firewall status
- suspicious files, processes, or autoruns
- risky permissions
- signs of malware or unwanted software

## Performance and stability

- CPU, RAM, disk, and GPU pressure
- storage headroom
- heavy startup behavior
- bloated or crash-prone software

## Software ecosystem

- outdated or redundant apps
- overlapping utilities
- open-source replacements where genuinely better

## Developer environment

- shells and terminals
- PATH and environment variables
- runtimes, SDKs, package managers, and toolchains
- broken, conflicting, or dead installs
