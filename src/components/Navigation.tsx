import AppNavLink from "@/components/AppNavLink"
import useScrollSpy from "@/hooks/useScrollSpy.tsx"
import { navigationRoutes, type NavigationRoute } from "@/lib/routes"
import { cn } from "@/lib/utils.ts"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"

type Job = {
  online: number | string
}

const Navigation = () => {
  const [hasAvailableJobs, setHasAvailableJobs] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    axios
      .get<{ success: boolean; data?: Job[] }>(
        "https://api.computer-extra.de/jobs.php",
        { signal: controller.signal }
      )
      .then((response) => {
        setHasAvailableJobs(
          response.data.success === true &&
            response.data.data?.some((job) => Number(job.online) === 1) === true
        )
      })
      .catch((error: unknown) => {
        if (!axios.isCancel(error)) {
          setHasAvailableJobs(false)
        }
      })

    return () => controller.abort()
  }, [])

  const visibleRoutes = navigationRoutes.filter(
    (route) => !route.requiresAvailableJobs || hasAvailableJobs
  )

  return (
    <Fragment>
      <DesktopNavigation routes={visibleRoutes} />
      <MobileNavigation routes={visibleRoutes} />
    </Fragment>
  )
}

function MobileNavigation({ routes }: { routes: NavigationRoute[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <div className={cn("header", open && "menu-open")}>
        <div
          className="icon-container"
          onClick={() => setOpen((current) => !current)}
        >
          <div id="menuicon">
            <div className="bar bar1" />
            <div className="bar bar2" />
          </div>
        </div>

        <div className="mobile-menu">
          <ul className="menu">
            {routes.map((route) => (
              <li className="menu-item" key={route.path}>
                <AppNavLink
                  id="nav-item"
                  to={route.path}
                  onClick={() => {
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    setOpen(false)
                  }}
                >
                  {route.title}
                </AppNavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DesktopNavigation({ routes }: { routes: NavigationRoute[] }) {
  const { isScrolled } = useScrollSpy()

  return (
    <div className="fixed inset-x-0 top-5 z-1000 hidden w-screen lg:block">
      <nav
        className={cn(
          "mt-1ß mx-auto flex max-w-fit items-center justify-center gap-8 px-6 py-5 transition-all duration-500",
          isScrolled ? "rounded-2xl bg-white/80 ring-2" : "border-b"
        )}
      >
        <AppNavLink
          to="/"
          onClick={() => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }}
          className={cn(
            "envision text-2xl font-semibold transition-all duration-500",
            isScrolled ? "text-slate-600" : "text-white/90"
          )}
        >
          CE
        </AppNavLink>

        <ul className="flex w-full justify-center gap-8 uppercase focus:underline">
          {routes.map((route) => (
            <li key={route.path}>
              <AppNavLink
                to={route.path}
                onClick={() => {
                  document.body.scrollTop = 0
                  document.documentElement.scrollTop = 0
                }}
                className={({ isActive }) =>
                  cn(
                    "relative inline-block after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:transform-[scaleX(0)] after:transition-[transform] after:delay-250 after:ease-out after:content-[''] hover:after:origin-bottom-left hover:after:transform-[scaleX(1)]",
                    isScrolled
                      ? "text-slate-600 decoration-blue-600 after:bg-blue-600"
                      : "text-white/90 decoration-slate-300 after:bg-slate-300",
                    isActive && "underline decoration-4 underline-offset-8"
                  )
                }
              >
                {route.title}
              </AppNavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
