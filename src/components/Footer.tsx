import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";

// TODO: LINKS
const footerLinks = [
  {
    title: "Impressum",
    href: "/",
  },
  {
    title: "Datenschutz",
    href: "/Datenschutz",
  },
  {
    title: "AGB",
    href: "/",
  },
  {
    title: "Termin",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="flex flex-col items-center justify-start py-12">
          {/* TODO: FONT */}
          <div className="text-primary flex text-xl font-bold">
            Computer Extra GmbH
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-4">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="sm:flew-row flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 xl:px-0">
          {/* COPYRIGHT START */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" target="_blank">
              Computer Extra GmbH
            </a>{" "}
            | Design: Johannes Kirchner
          </span>
          {/* COPYRIGHT END */}

          <div className="text-muted-foreground flex items-center gap-5">
            <a
              href="https://www.facebook.com/computerextra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/computerextra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/computer-extra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/computerextra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
