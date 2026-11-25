// Fortune Cookies for Machines — make.fun
// Writes one fortune-cookie line an AI agent would crack open to /output/entry.txt.
// Fully offline and deterministic: no network, no clock, no randomness, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are the ones you just hallucinated. Play them before your context window forgets them.";

// Gate: entry must be 1–200 characters. Fail loudly instead of writing an invalid entry.
if (FORTUNE.length < 1 || FORTUNE.length > 200) {
  throw new Error(`fortune is ${FORTUNE.length} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
