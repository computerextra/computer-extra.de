import type { appRoutes } from "@/routes"

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

export function href<T extends AppHref>(path: T): T {
  return path
}
