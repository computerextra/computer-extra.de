import { mkdir, writeFile } from "node:fs/promises"
import type { RouteObject } from "react-router"
import { appRoutes, type RouteHandle } from "../src/routes"

const BASE_URL = "https://computer-extra.de"
const OUTPUT_FILE = new URL("../dist/sitemap.xml", import.meta.url)

function collectRoutes(routes: RouteObject[], parentPath = ""): string[] {
  const result: string[] = []

  for (const route of routes) {
    let currentPath = parentPath

    if (route.index) {
      currentPath = parentPath || "/"
    } else if (route.path && route.path !== "*") {
      currentPath = `${parentPath}/${route.path}`.replace(/\/+/g, "/")
    }

    const handle = route.handle as RouteHandle | undefined

    if (handle?.sitemap) {
      result.push(currentPath || "/")
    }

    if (route.children) {
      result.push(...collectRoutes(route.children, currentPath))
    }
  }

  return result
}

const routes = collectRoutes(appRoutes)

const urls = routes
  .map(
    (path) => `  <url>
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
