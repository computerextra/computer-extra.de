import { NavLink } from "react-router-dom";

export default function Kontakt() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-tl-3xl rounded-tr-3xl min-h-[20vh] ">
      <h2 className="text-white font-bold text-6xl text-center pt-[15rem]">
        Kontaktieren Sie uns
      </h2>
      <p className="text-white font-semibold text-4xl text-center pt-10">
        Erzählen Sie uns von Ihnen - gemeinsam machen wir den Unterschied
      </p>
      <div className="w-full min-h-[20vh] flex justify-center items-center">
        <NavLink
          to="/Kontakt"
          className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Schreiben Sie uns
          </span>
        </NavLink>
      </div>
    </section>
  );
}
