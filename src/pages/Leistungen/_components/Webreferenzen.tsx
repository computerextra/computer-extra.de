import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";

type Referenz = {
  id: string;
  Name: string;
  Webseite: string;
  Bild: string;
  Online: number;
};

export default function Webreferenzen() {
  const [Referenzen, setReferenzen] = useState<Array<Referenz> | undefined>(
    undefined,
  );

  const getReferenzen = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Referenz> }>(
      "https://api.computer-extra.de/referenzen.php",
    );

    if (res.data.data) setReferenzen(res.data.data);
  });

  useEffect(() => {
    getReferenzen();
  }, []);

  return (
    <div className="my-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {Referenzen?.map((Referenz, idx) => {
        if (Referenz.Online == 1)
          return (
            <div
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm grayscale transition-all duration-300 ease-in-out hover:scale-105 hover:grayscale-0"
              key={idx}
            >
              <a
                className="inline-flex w-full flex-1 flex-col items-center justify-center"
                href={Referenz.Webseite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Screenshot"
                  className="object-cover"
                  height="200"
                  src={Referenz.Bild}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="flex flex-1 flex-col justify-center p-4 text-center">
                  <h3 className="text-xl font-bold">{Referenz.Name}</h3>
                  <p className="mt-1 text-base text-gray-500">
                    {Referenz.Webseite.replace("https://", "")
                      .replace("www.", "")
                      .replace(/\/$/, "")}
                  </p>
                </div>
              </a>
            </div>
          );
      })}
    </div>
  );
}
