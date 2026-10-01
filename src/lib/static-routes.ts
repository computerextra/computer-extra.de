import type { RouteHandle } from "@/routes"
import type { RouteObject } from "react-router"

export type StaticRoute = {
  path: string
  handle: RouteHandle
}

export function collectStaticRoutes(
  routes: RouteObject[],
  parentPath = ""
): StaticRoute[] {
  const result: StaticRoute[] = []

  for (const route of routes) {
    let currentPath = parentPath

    if (route.index) {
      currentPath = parentPath || "/"
    } else if (route.path && route.path !== "*") {
      currentPath = `${parentPath}/${route.path}`.replace(/\/+/g, "/")
    }

    const handle = route.handle as RouteHandle | undefined

    if (handle?.sitemap) {
      result.push({
        path: currentPath || "/",
        handle,
      })
    }

    if (route.children) {
      result.push(...collectStaticRoutes(route.children, currentPath))
    }
  }

  return result
}
