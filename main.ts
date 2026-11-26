// Laugh Track: The Crypto Trading Joke Contest
// Writes one funny line about crypto trading life to the output text file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, setup then twist, punchline at the end.
const JOKE =
  "My trading strategy: buy the dip, watch it dip again, then call it a long-term investment.";

// The gate: 1 to 200 UTF-8 characters, not only whitespace.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${chars}`);
}

// Output folder from the environment (MAKEFUN_OUTPUT_DIR first, then
// OUTPUT_DIR), falling back to the default /output folder.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
