import { cn } from "@/lib/utils";
import { MenuIcon, Phone } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const Links: {
  to?: string;
  label: string;
  children?: {
    to: string;
    label: string;
    text?: string;
  }[];
}[] = [
  {
    to: "/",
    label: "Startseite",
  },
  {
    to: "/Angebote",
    label: "Angebote",
  },
  {
    label: "Leistungen",
    children: [
      {
        label: "Webentwicklung & Hosting",
        to: "/Webentwicklung",
        text: "Innovative Konzepte für moderne Webseiten.",
      },
      {
        label: "PC Konfiguration",
        to: "/PC-Konfiguration",
        text: "Wir konfigurieren und bauen Ihren Traum-PC.",
      },
      {
        label: "Kommunikation",
        to: "/Kommunikation",
        text: "Maßgeschneiderte Kommunikationslösungen für Ihr Unternehmen.",
      },
      {
        label: "IT Security",
        to: "/IT-Security",
        text: "IT-, Daten- & Cybersicherheit",
      },
      {
        label: "Netzwerke",
        to: "/Netzwerke",
        text: "Die Zukunft der Vernetzung!",
      },
      {
        label: "Cloud Services",
        to: "/Cloud-Services",
        text: "Ab in die Cloud mit Microsoft 365",
      },
      {
        label: "Datenrettung",
        to: "/Datenrettung",
        text: "Datenrettungen von HDD bis Tapes, DSGVO-Konforme Datenlöschungen.",
      },
    ],
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
    label: "Kontakt",
    children: [
      {
        label: "Beratungstermin",
        to: "/Termin",
        text: "Buchen Sie sich einen Termin für eine Telekom-Beratung",
      },
      {
        label: "Kontaktformular",
        to: "/Kontakt",
        text: "Schreiben Sie uns eine Nachricht.",
      },
    ],
  },
  {
    label: "Gesetzliches",
    children: [
      {
        to: "/Impressum",
        label: "Impressum",
      },
      {
        to: "/Datenschutz",
        label: "Datenschutz",
      },
      {
        to: "/AGB",
        label: "AGB",
      },
    ],
  },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="z-50 ">
      <div className="container items-center hidden w-full mx-auto mt-5 lg:flex">
        <div className="flex justify-center w-full">
          <NavigationMenu
            viewport={false}
            className={cn(
              location.pathname === "/"
                ? "bg-white"
                : "dark bg-background text-slate-100",
              "rounded-2xl "
            )}
          >
            <NavigationMenuList>
              {Links.map((link, idx) => {
                if (link.children) {
                  return (
                    <NavigationMenuItem key={idx}>
                      <NavigationMenuTrigger>
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50">
                        <ul className="grid w-[300px] gap-4">
                          <li>
                            {link.children.map((child, cidx) => (
                              <NavigationMenuLink asChild key={cidx}>
                                <Link to={child.to}>
                                  <div className="font-medium">
                                    {child.label}
                                  </div>
                                  {child.text && (
                                    <div className="text-muted-foreground">
                                      {child.text}
                                    </div>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else if (link.to) {
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
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex justify-between w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
            >
              <MenuIcon
                className={cn(
                  "w-10 h-10",
                  location.pathname === "/"
                    ? "text-slate-100"
                    : "text-slate-900"
                )}
              />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="lg:hidden">
            <div className="grid gap-4 p-4">
              {Links.map((link, idx) => {
                if (link.children) {
                  return link.children.map((child, cidx) => (
                    <SheetClose asChild key={idx + "-" + cidx}>
                      <Link
                        to={child.to}
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                      >
                        {child.label}
                      </Link>
                    </SheetClose>
                  ));
                } else if (link.to) {
                  return (
                    <SheetClose asChild key={idx}>
                      <Link
                        to={link.to}
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                }
              })}
            </div>
          </SheetContent>
        </Sheet>
        <Button variant={"ghost"} className="lg:hidden" asChild>
          <a
            href="tel:0561601440"
            className={cn(
              "flex items-center gap-2",
              location.pathname === "/" ? "text-slate-100" : "text-slate-900"
            )}
          >
            <Phone
              className={cn(
                "w-5 h-5 ms-2",
                location.pathname === "/" ? "text-slate-100" : "text-slate-900"
              )}
            />{" "}
            0561/601440
          </a>
        </Button>
      </div>
    </div>
  );
}
