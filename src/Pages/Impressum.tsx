import AnimationLayout from "../Components/AnimationLayout";
import ImpressumText from "../Components/ImpressumText";
import useAnalytics from "../Hooks/useAnalytics";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Impressum() {
  useTitle("Impressum");
  useAnalytics("Impressum");
  return (
    <AnimationLayout>
      <MainLayout title="Impressum" subtitle="Angaben gemäß § 5 TMG">
        <div className="text-xl impressum">
          <ImpressumText />
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
