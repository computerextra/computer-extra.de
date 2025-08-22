import { MenuIcon, Phone } from "lucide-react";
import { Link, Outlet } from "react-router";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";

const Links = [
  {
    to: "/",
    label: "Startseite",
  },
  {
    to: "/Leistungen",
    label: "Leistungen",
  },
  {
    to: "/Partner",
    label: "Partner",
  },
  {
    to: "/Team",
    label: "Team",
  },
  {
    to: "/Jobs",
    label: "Jobs",
  },
  {
    to: "/Fernwartung",
    label: "Fernwartung",
  },
  {
    to: "/Termin",
    label: "Termin",
  },
];

export default function Layout() {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-envision">CE</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {Links.map((link, idx) => (
              <Link
                to={link.to}
                key={idx}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-sm font-mdeium md:flex">
              <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a
                href="tel:0561601440"
                className="text-gray-500 dark:text-gray-400"
              >
                0561/601440
              </a>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full md:hidden"
                >
                  <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="md:hidden">
                <div className="grid gap-4 p-4">
                  {Links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.to}
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="container mx-auto mt-2">
        <Outlet />
      </div>
    </div>
  );
}
