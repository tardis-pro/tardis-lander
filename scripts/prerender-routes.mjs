import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

const routes = [
  "/",
  "/maps",
  "/about",
  "/pricing",
  "/resources",
  "/glossary",
  "/case-studies",
  "/compare",
  "/compare/tardis-maps-vs-mapbox",
  "/compare/navratna-vs-crewai-vs-langgraph",
  "/compare/best-gis-development-companies",
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

const routeMeta = {
  "/": {
    title: "TARDIS Solutions - GIS, AI, and EdTech Development Company",
    description: "TARDIS Solutions builds fast, privacy-first GIS systems, AI tools, and adaptive learning platforms for teams solving complex problems.",
  },
  "/maps": {
    title: "TARDIS Maps - Geo-Intelligence at Planetary Scale | TARDIS Solutions",
    description: "Search-first geospatial intelligence platform for high-volume spatial datasets, real-time layers, and operational mapping workflows.",
  },
  "/about": {
    title: "About TARDIS Solutions | GIS, AI, and Engineering Team",
    description: "Learn how TARDIS Solutions builds production-grade GIS systems, AI orchestration platforms, and adaptive learning software.",
  },
  "/pricing": {
    title: "Pricing | TARDIS Solutions",
    description: "Pricing for fixed-scope 14-day offerings and milestone-based GIS, AI, and platform engineering engagements.",
  },
  "/resources": {
    title: "Resources | TARDIS Solutions",
    description: "Docs, repositories, ecosystem links, and reference properties including scribe and music.tardis.digital.",
  },
  "/glossary": {
    title: "Glossary | GIS, AI, and Platform Definitions",
    description: "Direct-answer definitions for search-first mapping, multi-agent orchestration, production readiness, and related terms.",
  },
  "/case-studies": {
    title: "Case Studies | TARDIS Solutions",
    description: "Representative delivery examples across geospatial operations, AI infrastructure, and adaptive learning platforms.",
  },
  "/compare": {
    title: "Compare | TARDIS Solutions",
    description: "Comparison guides for GIS platforms, AI orchestration frameworks, and custom engineering partner selection.",
  },
  "/compare/tardis-maps-vs-mapbox": {
    title: "TARDIS Maps vs Mapbox (2026) | TARDIS Solutions",
    description: "Detailed comparison between search-first TARDIS Maps and Mapbox's tile-first mapping approach.",
  },
  "/compare/navratna-vs-crewai-vs-langgraph": {
    title: "Navratna vs CrewAI vs LangGraph (2026) | TARDIS Solutions",
    description: "Framework and delivery model comparison for production multi-agent AI orchestration.",
  },
  "/compare/best-gis-development-companies": {
    title: "Best GIS Development Companies (2026) | TARDIS Solutions",
    description: "Ranked shortlist of geospatial engineering companies with fit notes and transparent criteria.",
  },
  "/offerings/production-gravity": {
    title: "Production Infrastructure for Startups | Tardis",
    description: "Production-ready infrastructure in 14 days, fixed price Rs 1.5L. No bloat, no scope creep, just decisive outcomes.",
  },
  "/offerings/failure-first-architecture": {
    title: "Failure-First Reliability Sprint | Tardis",
    description: "Design systems that fail safely and recover quickly in 14 days. Reliability architecture for high-pressure startup launches.",
  },
  "/offerings/security-without-theater": {
    title: "Security Without Theater | Tardis",
    description: "Practical DevSecOps controls that reduce risk while preserving shipping speed. 14-day fixed-scope security sprint.",
  },
  "/offerings/platform-extraction": {
    title: "Platform Extraction for Product Teams | Tardis",
    description: "Extract reusable platform primitives from shipping codebases and reduce duplicated engineering effort.",
  },
  "/offerings/data-reality-check": {
    title: "Data Reality Check | Tardis",
    description: "Assess data quality, lineage, and decision risk before scaling analytics or AI workflows.",
  },
  "/offerings/scale-without-regret": {
    title: "Scale Without Regret | Tardis",
    description: "Capacity, reliability, and architecture hardening for teams outgrowing initial infrastructure assumptions.",
  },
  "/offerings/truth-on-the-map": {
    title: "Truth on the Map | Tardis",
    description: "GIS data quality and spatial visualization consulting for teams that need decision-grade map outputs.",
  },
  "/offerings/maps-that-executives-understand": {
    title: "Maps That Executives Understand | Tardis",
    description: "Translate dense geospatial analytics into strategic map views leaders can act on quickly.",
  },
  "/offerings/boundaries-truth-disputes": {
    title: "Boundaries, Truth, and Disputes | Tardis",
    description: "Boundary and spatial evidence support for teams handling territory, compliance, and geospatial disputes.",
  },
  "/offerings/spatial-risk-exposure": {
    title: "Spatial Risk Exposure | Tardis",
    description: "Geospatial risk modeling for infrastructure, finance, logistics, and climate-sensitive operations.",
  },
  "/offerings/satellite-signal-extraction": {
    title: "Satellite Signal Extraction | Tardis",
    description: "Extract actionable patterns from satellite imagery with robust geospatial and remote-sensing pipelines.",
  },
  "/offerings/spatial-feasibility-test": {
    title: "Spatial Feasibility Test | Tardis",
    description: "Rapid geospatial feasibility assessment before product, operations, or infrastructure commitments.",
  },
};

function applyMeta(templateHtml, routePath) {
  const canonicalUrl = `https://tardis.digital${routePath === "/" ? "/" : routePath}`;
  const meta = routeMeta[routePath] ?? routeMeta["/"];
  return templateHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${meta.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${meta.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${meta.description}" />`);
}

const html = await readFile(indexPath, "utf8");
const entryServerPath = path.join(distDir, "server", "entry-server.js");
const { render } = await import(pathToFileURL(entryServerPath).href);

await Promise.all(
  routes.map(async (routePath) => {
    const rendered = render(routePath);
    const routeTemplate = applyMeta(html, routePath);
    const routeHtml = routeTemplate.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    const destinationDir = path.join(distDir, routePath.replace(/^\//, ""));
    await mkdir(destinationDir, { recursive: true });
    await writeFile(path.join(destinationDir, "index.html"), routeHtml, "utf8");
  })
);
