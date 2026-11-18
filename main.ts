// Entry for news-image-20261117 (v3): emit the pre-rendered front page as
// /output/entry.png. The image is fixed at build time, so every run
// writes identical bytes. Node 22, standard library only, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const png: Buffer = readFileSync(join(here, "entry.png"));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);
