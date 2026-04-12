# macOS Notes

Use this when the host is macOS.

## High-value surfaces

- Software Update status
- Login Items and LaunchAgents/LaunchDaemons
- Activity Monitor for heavy background processes
- disk pressure, caches, and large user directories
- zsh/bash profiles, PATH, and shell initialization
- Homebrew, Xcode Command Line Tools, runtimes, and duplicate toolchains

## Good evidence

- login item names and bundle paths
- launch agent/daemon plist paths
- `brew outdated` and package state
- shell profile files and PATH order
- large cache or support directories

## Escalate findings quickly when

- login/background items are excessive or suspicious
- Homebrew or runtime tooling is broken or badly duplicated
- storage pressure is high
- update posture is clearly behind
