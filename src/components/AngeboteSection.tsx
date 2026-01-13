import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";
import sortBy from "sort-by";
import GradientHeader from "./ui/GradientHeader.astro";

type Angebot = {
  id: string;
  title: string;
  subtitle: string;
  date_start: string;
  date_stop: string;
  link: string;
  image: string;
  anzeigen: number;
};

const getDate = (date: string) => {
  const d = new Date(date);
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours() + 2,
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds(),
  ).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function AngeboteSection() {
  const [Angebote, setAngebote] = useState<Array<Angebot> | undefined>(
    undefined,
  );

  const getAngebote = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Angebot> }>(
      "https://api.computer-extra.de/angebote.php",
    );
    if (res.data.data) {
      setAngebote(res.data.data);
    }
  });

  useEffect(() => {
    getAngebote();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 2xl:grid-cols-4">
      {Angebote?.sort(sortBy("date_start")).map((Angebot, idx) => {
        if (Angebot.anzeigen == 1)
          return <AngebotsCard Angebot={Angebot} key={Angebot.id + idx} />;
      })}
    </div>
  );
}

function AngebotsCard({ Angebot }: { Angebot: Angebot }) {
  const isDisabled = () => {
    if (new Date(Angebot.date_stop) < new Date()) return true;
    if (new Date(Angebot.date_start) > new Date()) return true;
    return false;
  };

  return (
    <a
      href={Angebot.link}
      target="_blank"
      onClick={(e) => isDisabled() && e.preventDefault()}
      className={`max-w-sm overflow-hidden rounded-xl shadow-lg ${
        isDisabled() ? "opacity-40" : "hover:scale-105 hover:shadow-2xl"
      } transition-all duration-300 ease-in-out`}
    >
      <img
        className={`w-full ${isDisabled() ? "grayscale" : "grayscale-0"}`}
        src={`/Images/Angebote/${Angebot.image}`}
        alt={Angebot.title}
      />
      <div className="px-6 py-4">
        <h2 className="bg-linear-to-br from-blue-900 to-blue-500 bg-clip-text pb-2 text-xl font-bold hyphens-manual text-transparent">
          {Angebot.title}
        </h2>
        <p className="text-base text-gray-700">{Angebot.subtitle || <br />}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-sm">
        Gültig: <br />
        {getDate(Angebot.date_start)} - {getDate(Angebot.date_stop)}
      </div>
    </a>
  );
}
