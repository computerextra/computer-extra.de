import useScrollSpy from "@/hooks/useScrollSpy.tsx"
import { cn } from "@/lib/utils.ts"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import { NavLink } from "react-router"

interface RouterProps {
  external?: boolean
  path: string
  title: string
}

const routes: RouterProps[] = [
  {
    path: "/",
    title: "Start",
  },
  {
    path: "/Leistungen",
    title: "Leistungen",
  },
  {
    external: true,
    path: "https://phonedocs.de/",
    title: "PhoneDocs",
  },
  {
    path: "/Partner",
    title: "Partner",
  },
  {
    path: "/Team",
    title: "Team",
  },
  {
    path: "/Jobs",
    title: "Jobs",
  },
  {
    path: "/Fernwartung",
    title: "Fernwartung",
  },
  {
    path: "/Termin",
    title: "Termin",
  },
]

type Job = {
  online: number | string
}

const jobsRoute = "/Jobs"

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

  const visibleRoutes = routes.filter(
    (route) => route.path !== jobsRoute || hasAvailableJobs
  )

  return (
    <Fragment>
      <DesktopNavigation routes={visibleRoutes} />
      <MobileNavigation routes={visibleRoutes} />
    </Fragment>
  )
}

function MobileNavigation({ routes }: { routes: RouterProps[] }) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="lg:hidden">
      <div className={cn("header", open && "menu-open")}>
        <div className="icon-container" onClick={() => setOpen(!open)}>
          <div id="menuicon">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
          </div>
        </div>
        <div className="mobile-menu">
          <ul className="menu">
            {routes.map((route, idx) => (
              <li className="menu-item" key={idx}>
                {route.external ? (
                  <a
                    id={"nav-item"}
                    href={route.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5"
                  >
                    {route.title}
                    <ExternalLink aria-hidden="true" className="size-4" />
                    <span className="sr-only">(externer Link)</span>
                  </a>
                ) : (
                  <NavLink
                    id={"nav-item"}
                    to={route.path}
                    onClick={() => {
                      document.body.scrollTop = 0
                      document.documentElement.scrollTop = 0

                      setOpen(false)
                    }}
                  >
                    {route.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DesktopNavigation({ routes }: { routes: RouterProps[] }) {
  const { isScrolled } = useScrollSpy()
  return (
    <div className={"fixed inset-x-0 top-5 z-1000 hidden w-screen lg:block"}>
      <nav
        className={cn(
          "mt-1ß mx-auto flex max-w-fit items-center justify-center gap-8 px-6 py-5 transition-all duration-500",
          isScrolled ? "rounded-2xl bg-white/80 ring-2" : "border-b"
        )}
      >
        <NavLink
          to={"/"}
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
        </NavLink>
        <ul
          className={
            "flex w-full justify-center gap-8 uppercase focus:underline"
          }
        >
          {routes.map((route, idx) => (
            <li key={idx}>
              {route.external ? (
                <a
                  href={route.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative inline-flex items-center gap-1.5 after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:transform-[scaleX(0)] after:transition-[transform] after:delay-250 after:ease-out after:content-[''] hover:after:origin-bottom-left hover:after:transform-[scaleX(1)]",
                    isScrolled
                      ? "text-slate-600 after:bg-blue-600"
                      : "text-white/90 after:bg-slate-300"
                  )}
                >
                  {route.title}
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                  <span className="sr-only">(externer Link)</span>
                </a>
              ) : (
                <NavLink
                  onClick={() => {
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                  }}
                  to={route.path}
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
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
