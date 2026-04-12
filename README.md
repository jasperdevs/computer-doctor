<div align="center">
  <img src="./computerdoctor-v2.png" alt="computer-doctor graphic" width="220" />
  <h1>computer-doctor</h1>
  <p>A small skill pack for auditing machine health, security posture, update hygiene, and developer-tool setup.</p>
  <p>
    <a href="https://skills.sh/jasperdevs/computer-doctor">skills.sh</a>
    ·
    <a href="./evals/README.md">evals</a>
    ·
    <a href="./evals/sample-outputs.md">sample outputs</a>
    ·
    <a href="./LICENSE">MIT</a>
  </p>
</div>

`computer-doctor` gives you one broad machine-audit skill and three focused follow-ups. It is designed for inspection-first reviews: gather evidence, separate confirmed issues from suspicion, and recommend next steps without pretending to be a native security product.

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
```

Install `computer-doctor` when you want the broad pass first. If you already know you want the whole pack, use `--all`.

<details>
<summary>Install the focused skills or the full pack</summary>

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill security-scan
npx skills add https://github.com/jasperdevs/computer-doctor --skill devtools-audit
npx skills add https://github.com/jasperdevs/computer-doctor --skill update-audit
npx skills add https://github.com/jasperdevs/computer-doctor --all
```

</details>

## Commands

| Command | Use it for |
| --- | --- |
| `$computer-doctor` | A full machine review across security, startup behavior, performance, storage, software quality, updates, and developer tooling. |
| `$security-scan` | Endpoint protection, firewall status, suspicious processes, persistence, autoruns, risky permissions, and obvious malware signals. |
| `$devtools-audit` | PATH problems, shell setup, runtimes, SDKs, package managers, Git tooling, and dead or conflicting installs. |
| `$update-audit` | OS updates, outdated apps, drivers where visible, runtimes, package managers, and better replacement choices. |

## Example

```text
$computer-doctor audit this machine for security gaps, startup drag, storage pressure, and broken dev tooling
```

> [!NOTE]
> Each skill begins with `Choose a mode: Audit mode (recommended) or YOLO mode.` Audit mode inspects first and asks before making changes. YOLO mode keeps moving after that initial choice, but still follows the skill's safety boundaries.

> [!IMPORTANT]
> This repository ships prompt skills, not a native scanner. Results depend on the agent's permissions, the available host tools, and the evidence it can collect on the machine.

## Verification

```bash
node scripts/verify-pack.mjs
```

That script checks pack discovery through the `skills` CLI and confirms that each expected skill can be installed on its own.

See [evals/README.md](./evals/README.md) for the quality bar and [evals/sample-outputs.md](./evals/sample-outputs.md) for example report shapes.
