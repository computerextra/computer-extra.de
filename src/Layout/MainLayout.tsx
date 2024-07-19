import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import VideoBackground from "../Components/VideoBackground";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  title: string;
  subtitle: string;
};

export default function MainLayout({ title, subtitle, children }: Props) {
  useEffect(() => {
    const videoBgElem = document.querySelector("#bgvid");
    if (videoBgElem == null) return;

    const videoHeight = videoBgElem.clientHeight;
    const windowHeight = window.innerHeight;
    // 60vh!
    const vh = (windowHeight / 100) * 60;

    // set height of bg to cover video
    const bgElem = document.querySelector("#contentbg") as HTMLElement;
    if (bgElem == null) return;

    bgElem.style.minHeight = `${videoHeight - vh}px`;
  }, []);

  return (
    <>
      {/* bg-blue-600/60 */}
      <VideoBackground title={title} />
      <div className="w-full min-h-screen relative z-30">
        <div
          className={`min-h-[60vh] ps-5 pe-5 lg:min-h-[80vh] 2xl:min-h-[60vh] flex flex-col text-center justify-center w-full z-20 ${
            title === "Leistungen" && "bg-black/30"
          }`}
        >
          <h1 className="text-5xl lg:text-9xl text-slate-100 font-bold hyphens-manual">
            {title}
          </h1>
          <h2 className="text-2xl font-semibold text-slate-100 pt-4">
            {subtitle}
          </h2>

          {(title === "404" || title === "Erfolg" || title === "Fehler") && (
            <NavLink
              to="/"
              className="p-6 bg-white w-max mx-auto mt-16 rounded-xl hover:underline focus:underline"
            >
              Zur Startseite
            </NavLink>
          )}
        </div>
        <div className="hidden lg:block w-[98%] mx-auto h-[2rem] bg-white/50 rounded-t-3xl"></div>
        <div
          className="w-full bg-white min-h-[45vh] rounded-t-3xl pt-5 pb-10"
          id="contentbg"
        >
          <div className="w-11/12 mx-auto rounded-t-xl pt-10 bg-white">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
