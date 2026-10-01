import { mkdir, writeFile } from "node:fs/promises"
import { collectSitemapRoutes } from "../src/lib/static-routes"
import { appRoutes } from "../src/routes"
import { publicBaseUrl } from "./build-context"

const OUTPUT_FILE = new URL("../dist/sitemap.xml", import.meta.url)

const routes = collectSitemapRoutes(appRoutes)

function canonicalPath(path: string): string {
  return path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`
}

const urls = routes
  .map(
    ({ path }) => `  <url>
    <loc>${new URL(canonicalPath(path), publicBaseUrl)}</loc>
  </url>`
  )
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await mkdir(new URL("../dist/", import.meta.url), {
  recursive: true,
})

await writeFile(OUTPUT_FILE, sitemap, "utf8")

console.log(`Generated sitemap.xml with ${routes.length} URLs`)
