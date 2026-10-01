import { appRoutes, type RouteHandle } from "@/routes"
import type { RouteObject } from "react-router"

type Routes = typeof appRoutes

type JoinPath<Parent extends string, Child extends string> = Parent extends "/"
  ? `/${Child}`
  : Parent extends ""
    ? `/${Child}`
    : `${Parent}/${Child}`

type ExtractRoutePaths<T, Parent extends string = ""> = T extends readonly [
  infer Head,
  ...infer Tail,
]
  ? ExtractSingleRoute<Head, Parent> | ExtractRoutePaths<Tail, Parent>
  : never

type ExtractSingleRoute<T, Parent extends string> = T extends {
  index: true
}
  ? Parent extends ""
    ? "/"
    : Parent
  : T extends {
        path: infer Path extends string
        children?: infer Children
      }
    ? Path extends "*"
      ? ExtractRoutePaths<Children, Parent>
      : | JoinPath<Parent, Path>
        | ExtractRoutePaths<Children, JoinPath<Parent, Path>>
    : T extends {
          children: infer Children
        }
      ? ExtractRoutePaths<Children, Parent>
      : never

export type AppHref = ExtractRoutePaths<Routes>

export type AppTo =
  | AppHref
  | {
      pathname: AppHref
      search?: string
      hash?: string
    }

export type NavigationRoute = {
  path: AppHref
  title: string
  order: number
  requiresAvailableJobs: boolean
}

export function href<T extends AppHref>(path: T): T {
  return path
}

export const navigationRoutes = collectNavigationRoutes(appRoutes).sort(
  (a, b) => a.order - b.order
)

function collectNavigationRoutes(
  routes: RouteObject[],
  parentPath = ""
): NavigationRoute[] {
  const result: NavigationRoute[] = []

  for (const route of routes) {
    let currentPath = parentPath

    if (route.index) {
      currentPath = parentPath || "/"
    } else if (route.path && route.path !== "*") {
      currentPath = `${parentPath}/${route.path}`.replace(/\/+/g, "/")
    }

    const handle = route.handle as RouteHandle | undefined

    if (handle?.navigation) {
      result.push({
        path: currentPath as AppHref,
        title: handle.navigation.title,
        order: handle.navigation.order,
        requiresAvailableJobs: handle.navigation.requiresAvailableJobs ?? false,
      })
    }

    if (route.children) {
      result.push(...collectNavigationRoutes(route.children, currentPath))
    }
  }

  return result
}
