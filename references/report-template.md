# Report Template

Use this structure in the final audit response.

## 1. Executive summary

- Top 5 to 10 highest-impact findings
- Short note on overall machine health
- Short note on major limitations

## 2. Security findings

For each item:
- title
- what was found
- why it matters
- evidence
- severity
- confidence
- recommended fix
- action class

## 3. Performance findings

Highlight startup drag, storage pressure, heavy background activity, and hardware bottlenecks.

## 4. System and internal configuration findings

Include non-obvious system behavior, environment variables, internal settings, and misconfigurations.

## 5. Startup and background findings

Call out autoruns, services, scheduled tasks, daemons, and other persistent behavior worth attention.

## 6. Software and app recommendations

- outdated or redundant software
- better alternatives
- open-source replacements when appropriate
- recommendations tied to observed usage, not generic lists

## 7. Developer environment findings

Include runtimes, toolchains, shell setup, PATH issues, conflicts, and missing essentials.

## 8. Prioritized action plan

- do first
- do next
- optional improvements

## 9. Limitations

- what was not inspectable
- what extra access or tools would improve confidence

## Action class values

- safe to fix automatically
- should ask before changing
- informational only
