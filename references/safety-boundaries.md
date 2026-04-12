# Safety Boundaries

This skill is audit-first and safety-biased.

## Default posture

- Read-first
- No destructive cleanup
- No automatic remediation unless the user explicitly approves it

## Do not change without approval

- Personal files
- Project directories
- SSH keys and credentials
- Browser profiles
- Databases
- Cloud-sync folders
- External drives
- Startup configuration
- Security tooling configuration
- Installed software state

## Escalate before acting when

- A change could remove data
- A change is hard to undo
- A change could break active workflows
- A finding is suspicious but not yet verified
- A remediation requires elevated privileges

## Reporting guidance

- Prefer "report and recommend" over "fix immediately"
- Distinguish confirmed findings from suspicion
- If evidence is partial, say so explicitly
- If access limits prevent confidence, call that out directly
