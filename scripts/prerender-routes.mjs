import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

const routes = [
  "/",
  "/maps",
  "/offerings/production-gravity",
  "/offerings/failure-first-architecture",
  "/offerings/security-without-theater",
  "/offerings/platform-extraction",
  "/offerings/data-reality-check",
  "/offerings/scale-without-regret",
  "/offerings/truth-on-the-map",
  "/offerings/maps-that-executives-understand",
  "/offerings/boundaries-truth-disputes",
  "/offerings/spatial-risk-exposure",
  "/offerings/satellite-signal-extraction",
  "/offerings/spatial-feasibility-test",
];

const html = await readFile(indexPath, "utf8");

await Promise.all(
  routes.map(async (routePath) => {
    if (routePath === "/") {
      return;
    }

    const destinationDir = path.join(distDir, routePath.replace(/^\//, ""));
    await mkdir(destinationDir, { recursive: true });
    await writeFile(path.join(destinationDir, "index.html"), html, "utf8");
  })
);
