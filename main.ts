import * as fs from "node:fs";
import * as path from "node:path";

// One Line, Big Laugh (v2) — "Reservations for One"
// A single original one-liner: a universal dinner standoff whose
// whole twist lands in the last two words. The program writes
// exactly one line (plus a trailing newline) to $OUTPUT_DIR/entry.txt.
const joke =
  'I asked my wife what she wanted for dinner. She said, "Surprise me." So I booked a table. For one.';

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(entryPath, joke + "\n");
