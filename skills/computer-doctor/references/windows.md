# Windows Notes

Use this when the host is Windows.

## High-value surfaces

- Windows Update status
- Defender and Firewall status
- Startup Apps, Task Scheduler, Services, Run keys, and Startup folders
- storage pressure, temp growth, and large user directories
- Windows Terminal, PowerShell profiles, PATH order, and WSL presence
- winget, choco, scoop, Visual Studio Build Tools, and duplicate runtimes

## Good evidence

- startup item path, publisher, and startup impact
- service name, start mode, and binary path
- scheduled task trigger and action path
- PATH entries and obvious duplicates or dead paths
- `winget upgrade` or package-manager state
- top disk consumers

## Escalate findings quickly when

- Defender is disabled or unhealthy
- a task/service/autorun path looks suspicious
- startup drag is severe
- PATH/toolchain duplication is breaking commands
- disk headroom is critically low
