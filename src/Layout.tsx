import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export default function Layout() {
  return (
    <div>
      <div className="absolute top-0 z-100 lg:left-[50%] lg:translate-x-[-50%]">
        <Navigation />
      </div>
      <div className="text-slate-900 ">
        <Outlet />
      </div>
    </div>
  );
}
