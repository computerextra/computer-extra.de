import { MenuIcon, Phone } from "lucide-react";
import { Link, Outlet } from "react-router";
import { Button } from "./components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";

const Links = [
  {
    to: "/",
    label: "Startseite",
    inMain: true,
  },
  {
    to: "/Angebote",
    label: "Angebote",
    inMain: true,
  },
  {
    to: "/Leistungen",
    label: "Leistungen",
    inMain: true,
  },
  {
    to: "/Partner",
    label: "Partner",
    inMain: true,
  },
  {
    to: "/Team",
    label: "Team",
    inMain: true,
  },
  {
    to: "/Jobs",
    label: "Jobs",
    inMain: true,
  },
  {
    to: "/Fernwartung",
    label: "Fernwartung",
    inMain: true,
  },
  {
    to: "/Termin",
    label: "Termin",
    inMain: false,
  },
  {
    to: "/Kontakt",
    label: "Kontakt",
    inMain: false,
  },
  {
    to: "/Impressum",
    label: "Impressum",
    inMain: false,
  },
  {
    to: "/Datenschutz",
    label: "Datenschutz",
    inMain: false,
  },
  {
    to: "/AGB",
    label: "AGB",
    inMain: false,
  },
];

export default function Layout() {
  return (
    <div>
      <div className="z-50 ">
        <div className="container mx-auto mt-5 hidden lg:flex w-full items-center">
          <div className="w-full flex justify-center">
            <NavigationMenu viewport={false} className="bg-white rounded-2xl">
              <NavigationMenuList>
                {Links.map((link, idx) => {
                  if (link.inMain)
                    return (
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuLink
                          asChild
                          className={navigationMenuTriggerStyle()}
                        >
                          <Link to={link.to}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                })}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Kontakt</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/Kontakt">
                            <div className="font-medium">Kontaktformular</div>
                            <div className="text-muted-foreground">
                              Schreiben Sie uns eine Nachricht.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/Termin">
                            <div className="font-medium">Beratungstermin</div>
                            <div className="text-muted-foreground">
                              Buchen Sie sich einen Termin für eine
                              Telekom-Beratung
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Gesetzliches</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/AGB">
                            <div className="font-medium">AGB</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/Impressum">
                            <div className="font-medium">Impressum</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/Datenschutz">
                            <div className="font-medium">Datenschutz</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0">
          <a
            href="tel:0561601440"
            className="flex items-center text-white gap-2 pt-5 pe-10"
          >
            <Phone className="h-5 w-5 text-white ms-2" /> 0561/601440
          </a>
        </div>

        <div className="flex w-full justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
              >
                <MenuIcon className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
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
          <Button variant={"ghost"} className="lg:hidden" asChild>
            <a
              href="tel:0561601440"
              className="flex items-center text-white gap-2"
            >
              <Phone className="h-5 w-5 text-white ms-2" /> 0561/601440
            </a>
          </Button>
        </div>
      </div>
      <div className="container mx-auto mt-10 text-white">
        <Outlet />
      </div>
    </div>
  );
}
