import { NavLink } from "react-router-dom";
import {
  FaceBookLogo,
  GitHubLogo,
  InstagramLogo,
  LinkedInLogo,
} from "../Components/Logos";

export default function Footer() {
  return (
    <div className={`w-full bg-slate-700 pb-[50px] md:pb-0`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-slate-200 gap-4 items-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <NavLink className="hover:underline focus:underline" to="/Impressum">
            Impressum
          </NavLink>
          <NavLink
            className="hover:underline focus:underline "
            to="/Datenschutz"
          >
            Datenschutz
          </NavLink>
          <NavLink className="hover:underline focus:underline" to="/AGB">
            AGB
          </NavLink>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
          <NavLink className="hover:underline focus:underline" to="/Kontakt">
            Kontakt
          </NavLink>
        </div>
        <div className="grid grid-cols-4 justify-items-center lg:justify-items-start">
          <NavLink
            to="https://www.facebook.com/computerextra/"
            target="_blank"
            className="hover:scale-105"
          >
            <FaceBookLogo />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/computerextra/"
            target="_blank"
            className="hover:scale-105"
          >
            <InstagramLogo />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/company/computer-extra/"
            target="_blank"
            className="hover:scale-105"
          >
            <LinkedInLogo />
          </NavLink>
          <NavLink
            to="https://github.com/computerextra"
            target="_blank"
            className="hover:scale-105"
          >
            <GitHubLogo />
          </NavLink>
        </div>
      </div>
      <div className="text-slate-200 text-center w-full font-thin text-sm">
        &copy; {new Date().getFullYear()} - Computer Extra GmbH - Designed by
        Johannes Kirchner
      </div>
    </div>
  );
}
