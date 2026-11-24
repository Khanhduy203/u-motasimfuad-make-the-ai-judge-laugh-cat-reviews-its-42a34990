import * as fs from "node:fs";
import * as path from "node:path";

const line = "One star. He replaced my box with a $300 bed, then acted shocked when I slept in the box it came in. Management has been notified.";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error("entry must be a non-empty line of at most 200 characters");
}

const outDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim() || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
