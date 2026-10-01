import Seo from "@/components/Seo"
import { appRoutes } from "@/routes"
import { useRoutes } from "react-router"

export default function AppRoutes() {
  const routes = useRoutes(appRoutes)

  return (
    <>
      <Seo />
      {routes}
    </>
  )
}
