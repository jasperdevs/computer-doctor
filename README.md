<div align="center">

# 🩺 computer-doctor

<img src="./computerdoctor-v2.png" alt="computer-doctor graphic" width="250" />

*Skills for auditing computer health, security, updates, and developer tools.*

[![skills.sh](https://img.shields.io/badge/skills.sh-live-111827)](https://skills.sh/jasperdevs/computer-doctor/computer-doctor)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jasperdevs/computer-doctor?style=flat)](https://github.com/jasperdevs/computer-doctor/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/jasperdevs/computer-doctor?style=flat)](https://github.com/jasperdevs/computer-doctor/commits/main)

</div>

## 🤖 Installation Prompt

> (GIVE THIS TO AI OPTIONALLY)

```text
Install skills from https://github.com/jasperdevs/computer-doctor using the `skills` CLI. Install `computer-doctor` for a broad machine audit, or install `security-scan`, `devtools-audit`, or `update-audit` for focused checks.
```

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
```

## Slash Commands

| Command | What it does |
| --- | --- |
| `$computer-doctor` | Runs a broad audit across security, startup behavior, performance, storage, software, updates, and developer tooling. |
| `$security-scan` | Checks antivirus coverage, suspicious processes, persistence, autoruns, and obvious malware signals. |
| `$devtools-audit` | Reviews shells, PATH, environment variables, runtimes, SDKs, package managers, Git tooling, and developer-tool conflicts. |
| `$update-audit` | Reviews updates, outdated tools, drivers, runtimes, package managers, and upgrade opportunities. |

Use `$computer-doctor` for a broad pass.
Use the focused commands when you already know which area you want to inspect.

## Install Individual Skills

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
npx skills add https://github.com/jasperdevs/computer-doctor --skill security-scan
npx skills add https://github.com/jasperdevs/computer-doctor --skill devtools-audit
npx skills add https://github.com/jasperdevs/computer-doctor --skill update-audit
npx skills add https://github.com/jasperdevs/computer-doctor --all
```

## Modes

| Mode | What it does |
| --- | --- |
| `Audit mode` | Inspects first, reports findings, and asks before making changes. Recommended. |
| `YOLO mode` | Still tries to be safe, but acts without asking again after the initial mode choice. |

## Why Use It

Use these when you want a clean machine audit without digging through settings, startup apps, storage, and tool setup by hand.

> [!NOTE]
> (short) These skills start by asking whether you want `Audit mode` or `YOLO mode`. Audit mode is recommended. YOLO mode still tries to be safe, but acts without asking again. It is still just a prompt, though, so if the AI goes rogue, even if that is unlikely, you are still taking a chance.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=jasperdevs/computer-doctor&type=Date)](https://star-history.com/#jasperdevs/computer-doctor&Date)
