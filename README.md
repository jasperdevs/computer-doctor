<div align="center">

# 🩺 computer-doctor

**Minimal `skills.sh`-style skill repo**

Full-system computer auditing for Codex and compatible agent-skill runtimes.

</div>

`skills.sh` commonly expects each skill to be a directory at the repository root containing a `SKILL.md` file. This repo now follows that shape with one skill directory: `computer-doctor/`.

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor --skill computer-doctor
```

## Layout

```text
computer-doctor/
├── computer-doctor/
│   ├── SKILL.md
│   ├── examples/
│   │   └── full-audit-request.md
│   └── references/
│       ├── audit-checklist.md
│       ├── report-template.md
│       └── safety-boundaries.md
├── LICENSE
└── README.md
```

## What It Does

The skill audits a machine as a working environment, including:

- security posture
- performance and storage pressure
- startup behavior and persistence
- installed software quality
- developer tooling and environment health

## Notes

- It defaults to read-only auditing.
- It should not delete, uninstall, disable, or clean anything without explicit approval.
- The `LICENSE` file is not a duplicate of GitHub metadata. GitHub shows license info because it detects that file.

## Manual Install

```bash
git clone https://github.com/jasperdevs/computer-doctor.git
mkdir -p ~/.codex/skills
cp -R computer-doctor/computer-doctor ~/.codex/skills/
```
