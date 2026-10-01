import { appRoutes, type RouteHandle } from "@/routes"
import { matchRoutes, useLocation, type RouteObject } from "react-router"

export function useRouteHandle(): RouteHandle | undefined {
  const location = useLocation()

  const matches = matchRoutes(appRoutes as RouteObject[], location)

  return [...(matches ?? [])]
    .reverse()
    .map((match) => match.route.handle as RouteHandle | undefined)
    .find((handle) => handle != null)
}
