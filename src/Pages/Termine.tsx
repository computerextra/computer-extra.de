import { NavLink } from "react-router-dom";
import AnimationLayout from "../Components/AnimationLayout";
import GradientHeader from "../Components/GradientHeader";
import { ExternalLink } from "../Components/Logos";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Termine() {
  useTitle("Termine");
  return (
    <AnimationLayout>
      <MainLayout
        title="Telekom Beratung"
        subtitle="Buchen Sie sich einen Telekom Beratungtermin"
      >
        <div className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24 flex items-center">
          <a
            href="https://my.meetergo.com/comp_ex/beratung"
            target="_blank"
            className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Jetzt einen Termin buchen* <ExternalLink />
            </span>
          </a>
          {/* <p className="text-2xl">
            Leider ist es uns aus technischen Gründen nicht möglich, unser
            Termin Buchungstool anzubieten. Bitte rufen Sie uns für eine
            Terminabsprache unter der{" "}
            <a
              href="tel:0561601440"
              className="font-semibold underline hover:text-blue-600"
            >
              0561 / 60144 - 0
            </a>{" "}
            an.
          </p> */}
        </div>

        <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24 ">
          <GradientHeader>* Informationen</GradientHeader>
          <p className="text-lg">
            Bitte beachten Sie, dass die verlinkte Seite auf ein externes
            Unternehmen verlinkt. Weitere Informationen finden Sie in unserer{" "}
            <NavLink className="text-blue-600 underline" to="/Datenschutz">
              Datenschutzerklärung
            </NavLink>
            . Falls Sie dies dennoch nicht wünschen, rufen Sie uns bitte unter
            der bekannten Rufnummer an und wir buchen den Termin mit Ihnen.
          </p>
        </section>
      </MainLayout>
    </AnimationLayout>
  );
}
