import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const load = (file) => import(pathToFileURL(path.join(root, "node_modules/vinext/dist", file)).href);
const { appRouter } = await load("routing/app-router.js");
const { loadNextConfig, resolveNextConfig } = await load("config/next-config.js");
const { staticExportApp } = await load("build/static-export.js");
const config = await resolveNextConfig(await loadNextConfig(root), root);
const basePath = config.basePath;
assert.match(basePath, /^\/[a-zA-Z0-9_-]+$/, "A single GitHub Pages repository path is required.");
const routes = await appRouter(path.join(root, "app"), config.pageExtensions);

// vinext beta.2 prerenders unprefixed URLs even when the server uses basePath.
// Render the real hosted URLs, then remove only the repository directory from
// the output location. Links and asset URLs retain their correct public prefix.
const staging = path.join(root, "dist", "pages-prerender");
const result = await staticExportApp({
  routes: routes.map((route) => ({ ...route, pattern: `${basePath}${route.pattern}`.replace(/\/?$/, "/") })),
  appDir: path.join(root, "app"),
  rscBundlePath: path.join(root, "dist", "server", "index.js"),
  outDir: staging,
  config,
});
assert.deepEqual(result.errors, [], "All pages must render successfully.");
const rendered = path.join(staging, basePath.slice(1));
const output = path.join(root, "dist", "client");
await fs.cp(rendered, output, { recursive: true });
for (const route of routes) {
  const page = path.join(output, route.pattern.slice(1), "index.html");
  const html = await fs.readFile(page, "utf8");
  assert.match(html, /E-sone/, `${route.pattern} must contain the website content.`);
  assert.match(html, /<html[^>]*lang="ja"/, `${route.pattern} must be Japanese HTML.`);
  // This brochure site uses native links and details menus, not client state.
  // Keep navigation fully static so Pages never needs a server-side RSC request.
  const staticHtml = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel="modulepreload")[^>]*>/gi, "");
  await fs.writeFile(page, staticHtml);
}
await fs.writeFile(path.join(output, ".nojekyll"), "");
console.log(`Verified ${routes.length} static pages for ${basePath}.`);
