<div align="center">

# 🩺 computer-doctor

**A Codex skill for full-system computer audits**

Audit a machine like a real working environment: setup, security, startup behavior, background processes, performance, storage, installed software, and developer tooling.

</div>

## What It Does

`computer-doctor` is a read-first audit skill. It is built for users who want more than a Windows Settings walkthrough or a narrow virus scan.

It helps Codex inspect:

- system and internal configuration
- startup items and persistent background activity
- security posture and suspicious signals
- performance bottlenecks and storage pressure
- installed software quality and redundancy
- developer environment health
- useful app and open-source replacement recommendations

## Design Goals

- broad, practical machine review
- evidence over guesswork
- high-impact findings first
- cross-platform mindset
- no destructive changes by default

## Repo Structure

```text
computer-doctor/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── full-system-audit.md
├── references/
│   ├── audit-checklist.md
│   ├── report-template.md
│   └── safety-boundaries.md
├── LICENSE
└── README.md
```

## Installation

Clone into your Codex skills directory:

```bash
git clone https://github.com/jasperdevs/computer-doctor.git
```

Or copy the folder into your skills directory manually.

## Usage

Invoke it by name:

```text
$computer-doctor
```

Then ask for a broad machine audit, for example:

```text
$computer-doctor

Perform a full audit of this computer as a working environment. Check setup quality, security, startup behavior, background processes, performance, storage, installed software, and developer tooling. Default to read-only auditing and do not make destructive changes unless explicitly approved.
```

## Safety Model

This skill is intentionally conservative.

- It defaults to read-only auditing
- It should not uninstall, disable, reset, clean, or delete anything without explicit approval
- It should report uncertainty and permission limits instead of bluffing

## Why The Supporting Files Exist

This repo is structured like a reusable skill package, not just a lone prompt file.

- `SKILL.md` keeps the runtime instructions lean
- `references/` holds detailed guidance without bloating the main skill body
- `examples/` shows how to invoke the skill cleanly
- `agents/openai.yaml` makes the skill present better in skill UIs

## Status

The repo is public and now packaged as a proper standalone skill foundation. The next layer of improvement would be adding platform-specific helper scripts only if repeated real-world use shows they are actually needed.
