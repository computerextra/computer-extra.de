import useScrollSpy from "@/hooks/useScrollSpy";
import { useState } from "react";

interface RouteProps {
  path: string;
  title: string;
}

const routes: RouteProps[] = [
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
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const { isScrolled } = useScrollSpy();

  return (
    <>
      {/* Normal Navigation */}
      <div className="fixed top-0 z-50 hidden w-full lg:block">
        <nav
          className={`mx-auto mt-10 flex max-w-[65%] px-6 py-5 transition-all duration-500 ${
            isScrolled ? "rounded-2xl bg-white/80 ring-2" : "border-b"
          }`}
        >
          <a href="/">
            <h1
              className={`envision text-2xl font-semibold transition-all duration-500 ${
                isScrolled ? "text-slate-600" : "text-white/90"
              } `}
            >
              CE
            </h1>
          </a>
          <ul className="flex w-full justify-center gap-8 uppercase focus:underline">
            {routes.map((route, idx) => (
              <li key={idx}>
                <a
                  className={`custom-nav hover-underline-animation ${
                    isScrolled
                      ? "text-slate-600 decoration-blue-600 after:bg-blue-600"
                      : "text-white/90 decoration-slate-300 after:bg-slate-300"
                  }`}
                  href={route.path}
                >
                  {route.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Mobile Navigation */}

      <div className="lg:hidden">
        <div className={`${open && "menu-open"} header`}>
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
                  <a href={route.path} onClick={() => setOpen(false)}>
                    {route.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
