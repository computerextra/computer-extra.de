import { NavLink } from "react-router-dom";
import { Angebot } from "../Hooks/useAngebote";
import GradientHeader from "./GradientHeader";

export default function AngebotsCard({ Angebot }: { Angebot: Angebot }) {
  const getDate = (date: string) => {
    const d = new Date(date);
    return new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours() + 2,
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()
    ).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isDisabled = () => {
    if (new Date(Angebot.date_stop) < new Date()) return true;
    if (new Date(Angebot.date_start) > new Date()) return true;
    return false;
  };
  return (
    <NavLink
      to={Angebot.link}
      target="_blank"
      onClick={(e) => isDisabled() && e.preventDefault()}
      className={`max-w-sm rounded-xl overflow-hidden shadow-lg ${
        isDisabled() ? "opacity-40" : "hover:shadow-2xl hover:scale-105"
      } transition-all duration-300 ease-in-out`}
    >
      <img
        className={`w-full ${isDisabled() ? "grayscale" : "grayscale-0"}`}
        src={`/Images/Angebote/${Angebot.image}`}
        alt={Angebot.title}
      />
      <div className="px-6 py-4">
        <GradientHeader fontSize="text-xl" paddingBottom="pb-2">
          {Angebot.title}
        </GradientHeader>
        <p className="text-base text-gray-700">{Angebot.subtitle || <br />}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-sm">
        Gültig: <br />
        {getDate(Angebot.date_start)} - {getDate(Angebot.date_stop)}
      </div>
    </NavLink>
  );
}
