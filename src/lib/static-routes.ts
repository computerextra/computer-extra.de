import type { RouteHandle } from "@/routes"
import type { RouteObject } from "react-router"

export type StaticRoute = {
  path: string
  handle: RouteHandle
}

export function collectSitemapRoutes(
  routes: RouteObject[],
  parentPath = ""
): StaticRoute[] {
  return collectRoutes(routes, parentPath, (handle) => handle.sitemap === true)
}

export function collectPrerenderRoutes(
  routes: RouteObject[],
  parentPath = ""
): StaticRoute[] {
  return collectRoutes(
    routes,
    parentPath,
    (handle, route) => route.path !== "*" && handle.seo != null
  )
}

function collectRoutes(
  routes: RouteObject[],
  parentPath: string,
  include: (handle: RouteHandle, route: RouteObject) => boolean
): StaticRoute[] {
  const result: StaticRoute[] = []

  for (const route of routes) {
    let currentPath = parentPath

    if (route.index) {
      currentPath = currentPath || "/"
    } else if (route.path && route.path !== "*") {
      currentPath = `${parentPath}/${route.path}`.replace(/\/+/g, "/")
    }

    const handle = route.handle as RouteHandle | undefined

    if (handle && include(handle, route)) {
      result.push({
        path: currentPath || "/",
        handle,
      })
    }

    if (route.children) {
      result.push(...collectRoutes(route.children, currentPath, include))
    }
  }

  return result
}

export function getNotFoundHandle(
  routes: RouteObject[]
): RouteHandle | undefined {
  for (const route of routes) {
    if (route.path === "*") {
      return route.handle as RouteHandle | undefined
    }

    if (route.children) {
      const handle = getNotFoundHandle(route.children)

      if (handle) return handle
    }
  }

  return undefined
}
