import { NavLink } from "react-router-dom";
import AnimationLayout from "../Components/AnimationLayout";
import DatenschutzText from "../Components/DatenschutzText";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Datenschutz() {
  useTitle("Datenschutzerklärung");
  return (
    <AnimationLayout>
      <MainLayout title="Datenschutz&shy;erklärung" subtitle="">
        <div className="flex items-center w-full my-5">
          <NavLink
            to="https://dsgvo3.ds-manager.net/computerextra/onlinevt.html?key=6ThOZSR1cvQCMdES"
            target="_blank"
            className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Auftragsdatenverarbeitungsvertrag
            </span>
          </NavLink>
        </div>
        <div className="text-xl datenschutz">
          <DatenschutzText />
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
