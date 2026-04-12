<div align="center">
  <img src="./computerdoctor-v2.png" alt="computer-doctor graphic" width="220" />
  <h1>computer-doctor</h1>
  <p>A small skill pack for auditing machine health across security, startup, performance, storage, software quality, updates, and developer-tool setup.</p>
</div>

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --all
```

<details>
<summary>Install one skill at a time</summary>

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
npx skills add https://github.com/jasperdevs/computer-doctor --skill security-scan
npx skills add https://github.com/jasperdevs/computer-doctor --skill devtools-audit
npx skills add https://github.com/jasperdevs/computer-doctor --skill update-audit
```

</details>

## Commands

| Command | Use it for | skills.sh |
| --- | --- | --- |
| `$computer-doctor` | A full machine review across security, startup behavior, performance, storage, software quality, updates, and developer tooling. | [open](https://skills.sh/jasperdevs/computer-doctor/computer-doctor) |
| `$security-scan` | Endpoint protection, firewall status, suspicious processes, persistence, autoruns, risky permissions, and obvious malware signals. | [open](https://skills.sh/jasperdevs/computer-doctor/security-scan) |
| `$devtools-audit` | PATH problems, shell setup, runtimes, SDKs, package managers, Git tooling, and dead or conflicting installs. | [open](https://skills.sh/jasperdevs/computer-doctor/devtools-audit) |
| `$update-audit` | OS updates, outdated apps, drivers where visible, runtimes, package managers, and better replacement choices. | [open](https://skills.sh/jasperdevs/computer-doctor/update-audit) |

> [!NOTE]
> Each skill begins with `Choose a mode: Audit mode (recommended) or YOLO mode.` Audit mode inspects first and asks before making changes. YOLO mode keeps moving after that initial choice, but still follows the skill's safety boundaries.

> [!IMPORTANT]
> This repository ships prompt skills, not a native scanner. Results depend on the agent's permissions, the available host tools, and the evidence it can collect on the machine.
