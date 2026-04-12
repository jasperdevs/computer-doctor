# computer-doctor

`computer-doctor` is a Codex skill for doing a full-computer audit without defaulting to destructive changes.

It is designed for broad machine review across:

- system configuration
- startup behavior and persistent background activity
- security posture and suspicious signals
- performance and storage pressure
- installed software and open-source replacements
- developer tooling and environment health

## Intent

This skill should inspect the machine as a whole working environment, not just OS settings. It should gather evidence, rank findings by impact, and recommend practical improvements without deleting, uninstalling, or changing things unless the user explicitly approves it.

## Install

Copy this folder into your Codex skills directory and invoke it by name:

```text
$computer-doctor
```

## Status

Initial version. The auditing flow is intentionally read-first and safety-biased.
