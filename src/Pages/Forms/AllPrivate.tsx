import AnimationLayout from "../../Components/AnimationLayout";
import useTitle from "../../Hooks/useTitle";
import MainLayout from "../../Layout/MainLayout";
import PrivateForm from "./PrivateForm";

export default function AllPrivate() {
  useTitle("Privaten Konten");

  return (
    <AnimationLayout>
      <MainLayout
        title="Online Konten"
        subtitle="Erstellen Sie hier einfach Ihre Datenschutz Formulare"
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
          <PrivateForm version="All" />
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
