import { Outlet } from "react-router";
import Navbar from "./components/ui/navigation";

const navigationData = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contacts",
    href: "#",
  },
];

export default function Layout() {
  return (
    <div className="container mx-auto">
      <Navbar navigationData={navigationData} />
      <Outlet />
    </div>
  );
}
