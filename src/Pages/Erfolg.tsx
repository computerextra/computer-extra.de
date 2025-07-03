import AnimationLayout from "../Components/AnimationLayout";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Erfolg() {
  useTitle("Erfolg");
  return (
    <AnimationLayout>
      <MainLayout title="Erfolg" subtitle="">
        <div className="h-screen text-5xl font-bold text-center text-green-700">
          Wir haben Ihre Nachricht erhalten und werden uns mit Ihnen in
          Verbindung setzen.
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
