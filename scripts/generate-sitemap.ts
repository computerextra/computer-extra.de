import { mkdir, writeFile } from "node:fs/promises"
import { collectStaticRoutes } from "../src/lib/static-routes"
import { appRoutes } from "../src/routes"

const BASE_URL = "https://computer-extra.de"
const OUTPUT_FILE = new URL("../dist/sitemap.xml", import.meta.url)

const routes = collectStaticRoutes(appRoutes)

const urls = routes
  .map(
    ({ path }) => `  <url>
    <loc>${new URL(path, BASE_URL)}</loc>
  </url>`
  )
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await mkdir(new URL("../dist/", import.meta.url), { recursive: true })
await writeFile(OUTPUT_FILE, sitemap, "utf8")

console.log(`Generated sitemap.xml with ${routes.length} URLs`)
