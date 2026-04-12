<div align="center">

# 🩺 computer-doctor

<img src="./assets/computerdoctor-v2.png" alt="computer-doctor graphic" width="250" />

*Skills for checking computer health, security, startup drag, and developer setup.*

[![skills.sh](https://img.shields.io/badge/skills.sh-live-111827)](https://skills.sh/jasperdevs/computer-doctor/computer-doctor)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jasperdevs/computer-doctor?style=flat)](https://github.com/jasperdevs/computer-doctor/stargazers)

</div>

## 🤖 Installation Prompt

> (GIVE THIS TO AI OPTIONALLY)

```text
Install skills from https://github.com/jasperdevs/computer-doctor using the `skills` CLI. Install `computer-doctor` for a broad machine audit, or install `security-scan`, `startup-audit`, or `dev-env-audit` for focused checks.
```

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --all
```

## Slash Commands

| Command | What it does |
| --- | --- |
| `$computer-doctor` | Runs a broad audit across security, startup behavior, performance, storage, software, and developer tooling. |
| `$security-scan` | Checks antivirus coverage, suspicious processes, persistence, autoruns, and obvious malware signals. |
| `$startup-audit` | Reviews startup items, login items, services, scheduled tasks, launch agents, daemons, and background processes. |
| `$dev-env-audit` | Reviews shells, PATH, environment variables, runtimes, SDKs, package managers, Git tooling, and setup conflicts. |

## Install Individual Skills

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
npx skills add https://github.com/jasperdevs/computer-doctor --skill security-scan
npx skills add https://github.com/jasperdevs/computer-doctor --skill startup-audit
npx skills add https://github.com/jasperdevs/computer-doctor --skill dev-env-audit
```

## Why Use It

Use these when you want a clean machine audit without digging through settings, startup apps, storage, and shell setup by hand.

> [!NOTE]
> These skills are read-first by default and should not make destructive changes unless you explicitly approve them, however its just a prompt, so if the AI goes rogue even though its unlikely, remember you are taking a chance.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=jasperdevs/computer-doctor&type=Date)](https://star-history.com/#jasperdevs/computer-doctor&Date)
