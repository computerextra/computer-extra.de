import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export default function Layout() {
  return (
    <div>
      <div className="z-100">
        <Navigation />
      </div>
      <div className="text-slate-900 ">
        <Outlet />
      </div>
    </div>
  );
}
