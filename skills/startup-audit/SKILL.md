---
name: startup-audit
description: Review startup items, login items, services, scheduled tasks, launch agents, daemons, and persistent background processes to find waste, clutter, or suspicious behavior.
---

# Startup Audit

Use this when the user wants a focused review of startup behavior and background persistence.

## Check

- startup or login items
- services and daemons
- scheduled tasks, cron jobs, launch agents, or launch daemons
- apps that auto-start
- heavy or suspicious background processes

## Rules

- Focus on impact: performance drag, clutter, or suspicious persistence
- Separate ordinary background noise from genuinely worth-fixing behavior
- Do not disable or remove anything without approval

## Output

Report:

1. Biggest startup drag
2. Persistent background items worth attention
3. Suspicious persistence if any
4. Recommended cleanup or follow-up
