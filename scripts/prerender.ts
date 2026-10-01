import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import {
  collectPrerenderRoutes,
  getNotFoundHandle,
  type StaticRoute,
} from "../src/lib/static-routes"
import { appRoutes } from "../src/routes"

const BASE_URL = "https://computer-extra.de"

const rootDirectory = path.resolve(import.meta.dirname, "..")
const distDirectory = path.join(rootDirectory, "dist")
const serverDirectory = path.join(rootDirectory, "dist-ssr")
const serverEntry = path.join(serverDirectory, "entry-server.js")
const templateFile = path.join(distDirectory, "index.html")

const template = await readFile(templateFile, "utf8")

const serverModule = (await import(serverEntry)) as {
  render: (url: string) => Promise<string>
}

const routes = collectPrerenderRoutes(appRoutes)

for (const route of routes) {
  const seo = route.handle.seo

  if (!seo) {
    throw new Error(`Missing SEO configuration for ${route.path}`)
  }

  const content = await serverModule.render(route.path)
  const html = createHtml(template, content, route.path, seo)

  const outputFile =
    route.path === "/"
      ? path.join(distDirectory, "index.html")
      : path.join(
          distDirectory,
          ...route.path.split("/").filter(Boolean),
          "index.html"
        )

  await mkdir(path.dirname(outputFile), {
    recursive: true,
  })

  await writeFile(outputFile, html, "utf8")

  console.log(`Prerendered ${route.path}`)
}

const notFoundHandle = getNotFoundHandle(appRoutes)

if (!notFoundHandle?.seo) {
  throw new Error("Missing SEO configuration for 404 route")
}

const notFoundPath = "/404"
const content = await serverModule.render("/__not-found__")

const html = createHtml(template, content, notFoundPath, notFoundHandle.seo)

await writeFile(path.join(distDirectory, "404.html"), html, "utf8")

console.log("Prerendered 404")

await rm(serverDirectory, {
  recursive: true,
  force: true,
})

console.log(`Prerendered ${routes.length} routes`)

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function createHtml(
  template: string,
  content: string,
  routePath: string,
  seo: NonNullable<StaticRoute["handle"]["seo"]>
): string {
  const canonicalUrl = new URL(routePath, BASE_URL).toString()

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${content}</div>`
  )

  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>${escapeHtml(seo.title)}</title>`
  )

  const head = [
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${
      seo.index === false ? "noindex, nofollow" : "index, follow"
    }" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(
      seo.description
    )}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Computer Extra GmbH" />`,
  ].join("\n    ")

  return html.replace("</head>", `    ${head}\n  </head>`)
}
