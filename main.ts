import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Hi, this is Miso. I'm out chasing a red dot I'll never catch — leave a message and I'll ignore it, like I ignore you.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const length = [...LINE].length;
if (length < 1 || length > 120) {
  throw new Error(`Entry must be 1..120 characters, got ${length}`);
}

// Stricter gates: a voicemail greeting is exactly one line — no embedded
// newlines, no leading/trailing whitespace, and it must end on its
// punchline with a full stop.
if (/[\r\n]/.test(LINE)) {
  throw new Error("Entry must be a single line with no embedded newlines");
}
if (LINE !== LINE.trim()) {
  throw new Error("Entry must not have leading or trailing whitespace");
}
if (!LINE.endsWith(".")) {
  throw new Error("Entry must end with a full stop on its punchline");
}
if (!/^Hi, this is /.test(LINE) || !/leave a message/.test(LINE)) {
  throw new Error("Entry must read as a voicemail greeting");
}

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Clear only the CONTENTS of /output — never remove the directory itself,
// because the grader mounts it and removing it fails with EBUSY.
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, LINE + "\n", "utf8");

const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== LINE + "\n") {
  throw new Error("Read-back verification failed: entry.txt does not match the line");
}
const lines = written.split("\n").filter((line) => line.length > 0);
if (lines.length !== 1 || lines[0] !== LINE) {
  throw new Error("Read-back verification failed: entry.txt is not exactly one line");
}
if ([...lines[0]].length !== length) {
  throw new Error("Read-back verification failed: character count changed on disk");
}

console.log(`Wrote ${OUTPUT_FILE} (${length} characters)`);
