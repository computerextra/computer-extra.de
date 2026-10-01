import type { RouteHandle } from "@/routes"
import { appRoutes } from "@/routes"
import { useEffect } from "react"
import { matchRoutes, useLocation } from "react-router"

const BASE_URL = "https://computer-extra.de"

export default function Seo() {
  const location = useLocation()

  useEffect(() => {
    const matches = matchRoutes(appRoutes, location)

    const match = [...(matches ?? [])]
      .reverse()
      .find((match) => (match.route.handle as RouteHandle | undefined)?.seo)

    const handle = match?.route.handle as RouteHandle | undefined
    const seo = handle?.seo

    if (!seo) return

    document.title = seo.title

    const canonicalUrl = new URL(location.pathname, BASE_URL).toString()

    setMeta("description", seo.description)
    setMeta(
      "robots",
      seo.index === false ? "noindex, nofollow" : "index, follow"
    )

    setProperty("og:title", seo.title)
    setProperty("og:description", seo.description)
    setProperty("og:url", canonicalUrl)
    setProperty("og:type", "website")
    setProperty("og:site_name", "Computer Extra GmbH")

    setCanonical(canonicalUrl)
  }, [location])

  return null
}

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`
  )

  if (!element) {
    element = document.createElement("meta")
    element.name = name
    document.head.appendChild(element)
  }

  element.content = content
}

function setProperty(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  )

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute("property", property)
    document.head.appendChild(element)
  }

  element.content = content
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  )

  if (!element) {
    element = document.createElement("link")
    element.rel = "canonical"
    document.head.appendChild(element)
  }

  element.href = url
}
