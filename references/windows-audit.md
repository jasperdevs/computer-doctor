# Windows Audit Notes

Use native Windows tools first. Adapt if PowerShell, CMD, WMI, or Defender surfaces are limited.

## Common inspection areas

- Windows version and update posture
- startup apps, scheduled tasks, services, and run-key persistence
- Defender, firewall, and obvious security-control gaps
- heavy background processes and auto-start software
- disk pressure, large directories, temp growth, and duplicate software
- PATH, shells, runtimes, SDKs, package managers, and developer tooling conflicts

## Good evidence to gather

- startup entry path and publisher
- task name, trigger, and executable path
- service name, start mode, and binary path
- signer information where available
- top storage consumers
- environment-variable and PATH state
