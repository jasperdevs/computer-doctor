import { execSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const repo = process.argv[2] ?? "https://github.com/jasperdevs/computer-doctor";
const expectedSkills = [
  "computer-doctor",
  "security-scan",
  "devtools-audit",
  "update-audit",
];

function run(command, options = {}) {
  return execSync(command, {
    stdio: "pipe",
    encoding: "utf8",
    ...options,
  });
}

function assertIncludes(text, needle, context) {
  if (!text.includes(needle)) {
    throw new Error(`Missing "${needle}" in ${context}`);
  }
}

console.log(`Verifying pack from ${repo}`);

const listOutput = run(`npx skills add ${repo} --list --full-depth`);
for (const skill of expectedSkills) {
  assertIncludes(listOutput, skill, "skills list output");
}
console.log("Skill discovery passed.");

for (const skill of expectedSkills) {
  const tempDir = mkdtempSync(join(tmpdir(), `computer-doctor-${skill}-`));
  try {
    run(
      `npx skills add ${repo} -y --agent codex --skill ${skill} --copy`,
      { cwd: tempDir }
    );
    console.log(`Install passed: ${skill}`);
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}

console.log("Pack verification passed.");
