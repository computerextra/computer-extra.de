import { Outlet } from "react-router";
import Navbar from "./components/navigation";

const navigationData = [
  {
    title: "Start",
    href: "/#Hero",
  },
  {
    title: "Angebote",
    href: "/#Angebote",
  },
  {
    title: "Leistungen",
    href: "/#Leistungen",
  },
  {
    title: "Partner",
    href: "/#Partner",
  },
  {
    title: "Team",
    href: "/#Team",
  },
  {
    title: "Jobs",
    href: "/Jobs",
  },
  {
    title: "Fernwartung",
    href: "/Fernwartung",
  },
  {
    title: "Kontakt",
    href: "/#Kontakt",
  },
];

export default function Layout() {
  return (
    <div className="container mx-auto">
      <div className="sticky top-0">
        <Navbar navigationData={navigationData} />
      </div>
      <Outlet />
    </div>
  );
}
