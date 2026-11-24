// This program carries two lines from the repo to the grader's output folder.
// It reads the entry next to this file, so it works wherever the repo is checked out.
// No trimming, no editing: the words on disk are the words that get judged.
// If the output folder is missing, it fails loudly instead of writing nowhere.
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
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
