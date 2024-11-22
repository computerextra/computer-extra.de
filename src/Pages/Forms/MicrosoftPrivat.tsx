import AnimationLayout from "../../Components/AnimationLayout";
import useAnalytics from "../../Hooks/useAnalytics";
import useTitle from "../../Hooks/useTitle";
import MainLayout from "../../Layout/MainLayout";
import PrivateForm from "./PrivateForm";

export default function MicrosoftPrivat() {
  useTitle("Microsoft Privat Konto");
  useAnalytics("MS-Privat-Formular");

  return (
    <AnimationLayout>
      <MainLayout
        title="Microsoft Privat Konto"
        subtitle="Erstellen Sie hier einfach Ihr Microsoft Formular"
      >
        <div className="w-full p-5 text-center card h-fit md:p-12">
          <div className="lg:w-[50%] w-full mx-auto">
            <p className="py-2 text-xl font-semibold">
              Bitte füllen Sie das Angezeigte Formular mit Ihren Daten aus und
              klicken Sie auf Generieren. Es wird eine PDF erstellt, diese
              Unterzeichnen Sie bitte und senden sie uns per Mail zu. Falls es
              Ihnen nicht möglich ist, das Formular zu senden, bringen Sie es
              einfach mit. Bei Fragen wenden Sie sich gerne persönlich,
              telefonisch oder per Mail an uns.
            </p>
          </div>
          <PrivateForm version="MS" />
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
