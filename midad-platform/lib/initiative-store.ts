import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { initiatives as defaultInitiatives, type Initiative } from "@/lib/site-data";

const dataDirectory = path.join(process.cwd(), "data");
const initiativesFile = path.join(dataDirectory, "initiatives.json");

async function ensureStore() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(initiativesFile, "utf8");
  } catch {
    await writeFile(initiativesFile, JSON.stringify(defaultInitiatives, null, 2), "utf8");
  }
}

export async function readInitiatives(): Promise<Initiative[]> {
  await ensureStore();
  const contents = await readFile(initiativesFile, "utf8");
  return JSON.parse(contents) as Initiative[];
}

export async function writeInitiatives(items: Initiative[]) {
  await ensureStore();
  await writeFile(initiativesFile, JSON.stringify(items, null, 2), "utf8");
}
