// This program carries two lines from the repo to the grader's output folder.
// It reads the entry next to this file, so it works wherever the repo is checked out.
// No trimming, no editing: the words on disk are the words that get judged.
// If the output folder is missing, it fails loudly instead of writing nowhere.
// The entry is short by design: two lines, one memory, no room for filler.
// A length guard keeps the entry inside the bounty limit before anything is written.
// Counting code points, not bytes, so an em dash counts the same as a letter.
// Nothing is trimmed or rewritten here; the file on disk is the final word.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const length = Array.from(text).length;
if (length > 280) {
  console.error(`Entry is ${length} characters, over the 280 limit`);
  process.exit(1);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
