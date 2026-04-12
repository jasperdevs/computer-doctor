# Repo Guidance

This repository packages the `computer-doctor` skill as a standalone skill repo.

## Source of truth

- `SKILL.md` is the canonical runtime artifact.
- `README.md` is for humans: overview, install, usage, and repo presentation.
- `references/` contains platform-specific audit guidance and report structure.
- `examples/` contains realistic invocation examples.

## Editing rules

- Keep the skill non-destructive by default.
- Preserve the cross-platform posture: do not hard-code one operating system into the main workflow.
- Add platform-specific details in `references/`, not by bloating `SKILL.md`.
- If you change the workflow or output contract in `SKILL.md`, update the README to match.
- Prefer concrete, repeatable checks over vague advisory language.
