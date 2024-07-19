import AnimationLayout from "../Components/AnimationLayout";
import useAnalytics from "../Hooks/useAnalytics";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Erfolg() {
  useTitle("Fehler");
  useAnalytics("Fehler");
  return (
    <AnimationLayout>
      <MainLayout title="Fehler" subtitle="Da hat etwas nicht funktioniert!">
        <div className="h-screen text-5xl font-bold text-center text-red-700">
          Leider konnte Ihre Mail nicht verschickt werden. <br />
          Bitte prüfen Sie Ihre Eingaben und versuchen Sie es später noch
          einmal. <br />
          Sie können uns auch innerhalb unserer Öffnungszeiten telefonisch
          erreichen.
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
