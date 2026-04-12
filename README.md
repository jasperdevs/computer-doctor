<div align="center">

# 🩺 computer-doctor

**Minimal single-skill repo for `skills.sh` and Codex**

Full-system computer auditing for Codex and compatible agent-skill runtimes.

</div>

## Install

```bash
npx skills add https://github.com/jasperdevs/computer-doctor
```

## What It Does

The skill audits a machine as a working environment, including:

- security posture
- performance and storage pressure
- startup behavior and persistence
- installed software quality
- developer tooling and environment health

## Manual Install

```bash
git clone https://github.com/jasperdevs/computer-doctor.git
mkdir -p ~/.codex/skills
cp -R computer-doctor ~/.codex/skills/
```
