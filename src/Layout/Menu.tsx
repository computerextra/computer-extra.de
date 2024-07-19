import { useState } from "react";
import { NavLink } from "react-router-dom";
import useScrollSpy from "../Hooks/useScrollSpy";
import routes from "../routes";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const { isScrolled } = useScrollSpy();

  return (
    <>
      {/* Normal Navigation */}
      <div className="hidden lg:block fixed z-50 top-0 w-full">
        <nav
          className={`flex max-w-[65%]  mx-auto mt-10 px-6 py-5 duration-500 transition-all ${
            isScrolled ? "bg-white/80 rounded-2xl ring-2" : "border-b"
          }`}
        >
          <NavLink to="/">
            <h1
              className={`text-2xl font-semibold envision duration-500 transition-all ${
                isScrolled ? "text-slate-600" : "text-white/90"
              } `}
            >
              CE
            </h1>
          </NavLink>
          <ul className="flex gap-8 w-full justify-center uppercase focus:underline">
            {routes.map(
              (route, idx) =>
                route.show && (
                  <li key={idx}>
                    <NavLink
                      className={`custom-nav hover-underline-animation   ${
                        isScrolled
                          ? "text-slate-600 after:bg-blue-600 decoration-blue-600"
                          : "text-white/90 after:bg-slate-300 decoration-slate-300"
                      }`}
                      to={route.path}
                      target={route.external ? "_blank" : "_self"}
                    >
                      {route.title}
                    </NavLink>
                  </li>
                )
            )}
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
              {routes.map(
                (route, idx) =>
                  route.show && (
                    <li className="menu-item" key={idx}>
                      <NavLink
                        to={route.path}
                        onClick={() => setOpen(false)}
                        target={route.external ? "_blank" : "_self"}
                      >
                        {route.title}
                      </NavLink>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
