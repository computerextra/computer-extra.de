import { MenuIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

const navigationData = [
  {
    title: "Startseite",
    href: "/",
  },
  {
    title: "Angebote",
    href: "/Angebote",
  },
  {
    title: "Leistungen",
    href: "/Leistungen",
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
    href: "/Kontakt",
  },
];

export default function Layout() {
  return (
    <div className="container mx-auto grid grid-rows-[1fr_auto_1fr] gap-6">
      <header className="sticky mt-6 z-50">
        <NavigationBar />
      </header>
      <main>
        <Card className="min-h-[80vh]">
          <CardContent>
            <Outlet />
          </CardContent>
        </Card>
      </main>
      <footer>
        <Card>
          <CardContent>
            <div>FOOTER</div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}

function NavigationBar() {
  const firstHalf = navigationData.slice(0, navigationData.length / 2);
  const secondHalf = navigationData.slice(
    navigationData.length / 2,
    navigationData.length
  );

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between gap-8">
          <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
            {firstHalf.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className="hover:text-primary max-md:hidden"
              >
                {item.title}
              </NavLink>
            ))}

            <NavLink className={"font-envision text-2xl"} to={"/"}>
              CE
            </NavLink>

            {secondHalf.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className="hover:text-primary max-md:hidden"
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="md:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuGroup>
                  {navigationData.map((item, index) => (
                    <DropdownMenuItem key={index}>
                      <NavLink to={item.href}>{item.title}</NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
