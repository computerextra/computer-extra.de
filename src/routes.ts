import {
  AGB,
  Auftragsverarbeitung,
  Datenschutz,
  Erfolg,
  Fehler,
  Fernwartung,
  Home,
  Impressum,
  Jobs,
  Kontakt,
  Leistungen,
  NotFound,
  OEM,
  PartnerPage,
  TeamPage,
} from "./Pages";
import DatenschutzNext from "./Pages/DatenschutzNext";
import Termine from "./Pages/Termine";

type RouteProps = {
  path: string;
  element: () => JSX.Element;
  title: string;
  show: boolean;
  external?: boolean;
};

const routes: RouteProps[] = [
  {
    path: "/",
    element: Home,
    title: "Start",
    show: true,
  },
  {
    path: "https://shop.computer-extra.de/",
    element: Leistungen,
    title: "Shop",
    show: true,
    external: true,
  },
  {
    path: "/Leistungen",
    element: Leistungen,
    title: "Leistungen",
    show: true,
  },
  {
    path: "/Partner",
    element: PartnerPage,
    title: "Partner",
    show: true,
  },
  {
    path: "/Team",
    element: TeamPage,
    title: "Team",
    show: true,
  },
  {
    path: "/Jobs",
    element: Jobs,
    title: "Jobs",
    show: true,
  },
  {
    path: "/Fernwartung",
    element: Fernwartung,
    title: "Fernwartung",
    show: true,
  },
  {
    path: "/Termin",
    element: Termine,
    title: "Termin",
    show: true,
  },
  {
    path: "/AGB",
    element: AGB,
    title: "AGB",
    show: false,
  },
  {
    path: "/Auftragsverarbeitung",
    element: Auftragsverarbeitung,
    title: "Auftragsverarbeitung",
    show: false,
  },

  {
    path: "/Datenschutz",
    element: Datenschutz,
    title: "Datenschutz",
    show: false,
  },
  {
    path: "/Impressum",
    element: Impressum,
    title: "Impressum",
    show: false,
  },
  {
    path: "/Kontakt",
    element: Kontakt,
    title: "Kontakt",
    show: false,
  },
  {
    path: "/Erfolg",
    element: Erfolg,
    title: "Erfolg",
    show: false,
  },
  {
    path: "/Fehler",
    element: Fehler,
    title: "Fehler",
    show: false,
  },
  {
    path: "/OEM",
    element: OEM,
    title: "OEM",
    show: false,
  },
  {
    path: "/termin",
    element: Termine,
    title: "Termine",
    show: false,
  },
  {
    path: "/DatenschutzNextCloud",
    element: DatenschutzNext,
    title: "Datenschutz NextCloud",
    show: false,
  },
  {
    path: "*",
    element: NotFound,
    title: "404",
    show: false,
  },
];

export default routes;
