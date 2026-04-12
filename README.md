<div align="center">

# 🩺 computer-doctor

<img src="./assets/computerdoctor-v2.png" alt="computer-doctor graphic" width="220" />

*Skills for checking computer health, malware signals, startup drag, and developer setup.*

[![skills.sh](https://img.shields.io/badge/skills.sh-live-111827)](https://skills.sh/jasperdevs/computer-doctor/computer-doctor)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jasperdevs/computer-doctor?style=flat)](https://github.com/jasperdevs/computer-doctor/stargazers)

</div>

## Discover

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --list
```

## Quick Start

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
```

## Slash Commands

| Command | What it does |
| --- | --- |
| `$computer-doctor` | Runs a broad audit across security, startup behavior, performance, storage, software, and developer tooling. |
| `$virus-scan` | Checks antivirus coverage, suspicious processes, persistence, autoruns, and obvious malware signals. |
| `$startup-audit` | Reviews startup items, login items, services, scheduled tasks, launch agents, daemons, and background processes. |
| `$dev-env-audit` | Reviews the developer environment: shells, PATH, environment variables, runtimes, SDKs, package managers, and Git tooling. |

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
npx skills add https://github.com/jasperdevs/computer-doctor --skill virus-scan
npx skills add https://github.com/jasperdevs/computer-doctor --skill startup-audit
npx skills add https://github.com/jasperdevs/computer-doctor --skill dev-env-audit
npx skills add https://github.com/jasperdevs/computer-doctor --all
```

## Why Use It

Use these when you want to check a machine fast without manually digging through settings, startup apps, storage, and shell setup.

- security posture
- startup and background activity
- performance bottlenecks
- storage pressure
- software quality
- developer tooling health

> [!NOTE]
> These skills are read-first by default and should not make destructive changes unless you explicitly approve them, however its just a prompt, so if the AI goes rogue even though its unlikely, remember you are taking a chance.

## Installation Prompt

```text
Install one or more skills from https://github.com/jasperdevs/computer-doctor using the `skills` CLI. First run `npx skills add https://github.com/jasperdevs/computer-doctor --list`, then install the commands you want, such as `computer-doctor`, `virus-scan`, `startup-audit`, or `dev-env-audit`.
```
