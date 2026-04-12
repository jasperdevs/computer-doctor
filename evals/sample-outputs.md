# Sample Outputs

These are short examples of the output style the pack should aim for.

## computer-doctor

```text
Executive summary
- Defender disabled
- Startup drag from 6 heavy background apps
- PATH contains dead Python and Node entries

Highest-impact findings
- Defender is disabled
  Evidence: Windows Security shows real-time protection off
  Confidence: high
  Why it matters: removes the main built-in security layer
  Recommended next step: re-enable Defender or confirm another endpoint tool is intentional
```

## security-scan

```text
Protection status
- Defender healthy
- Firewall enabled on all profiles

Highest-risk findings
- Scheduled task launches an unsigned executable from AppData
  Evidence: task action path + unsigned binary
  Confidence: medium
  Why it matters: suspicious persistence pattern
  Recommended next step: inspect the binary hash and installation source
```

## devtools-audit

```text
Broken or conflicting setup
- PATH includes two dead Python entries and three Node managers

Missing essentials
- Git is present, but no default editor is configured

Practical improvements
- Remove dead PATH entries
- standardize on one Node manager
```

## update-audit

```text
Critical updates
- OS is behind on security updates

Outdated tools worth attention
- Homebrew packages are stale
- global npm tools include abandoned packages

Replacements or better choices
- replace low-value updater utility with native package-manager workflow
```
