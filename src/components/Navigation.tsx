import useScrollSpy from "@/hooks/useScrollSpy.tsx"
import { cn } from "@/lib/utils.ts"
import { Fragment, useState } from "react"
import { NavLink } from "react-router"

interface RouterProps {
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

export const Navigation = () => {
  return (
    <Fragment>
      <DesktopNavigation />
      <MobileNavigation />
    </Fragment>
  )
}

function MobileNavigation() {
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
                <NavLink
                  id={"nav-item"}
                  to={route.path}
                  onClick={() => setOpen(false)}
                >
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DesktopNavigation() {
  const { isScrolled } = useScrollSpy()
  return (
    <div className={"fixed top-5 z-50 hidden w-full lg:block"}>
      <nav
        className={cn(
          "mt-1ß mx-auto flex max-w-[65%] px-6 py-5 transition-all duration-500",
          isScrolled ? "rounded-2xl bg-white/80 ring-2" : "border-b"
        )}
      >
        <NavLink
          to={"/"}
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
              <NavLink
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
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
