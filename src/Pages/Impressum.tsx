import AnimationLayout from "../Components/AnimationLayout";
import ImpressumText from "../Components/ImpressumText";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Impressum() {
  useTitle("Impressum");
  return (
    <AnimationLayout>
      <MainLayout title="Impressum" subtitle="">
        <div className="text-xl impressum">
          <ImpressumText />
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
