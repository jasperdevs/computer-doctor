# macOS Audit Notes

Use native macOS tooling where possible. Do not assume Homebrew is installed.

## Common inspection areas

- macOS version and update posture
- login items and launch agents or daemons
- background items and menu bar utilities
- storage pressure and large user directories
- firewall and security settings that are visible without invasive changes
- installed developer tools, shells, runtimes, and package managers

## Good evidence to gather

- launch agent or daemon paths
- app bundle locations and signer information where available
- large directories and caches
- shell init files and PATH state
- resource-heavy background apps
