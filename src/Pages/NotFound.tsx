import AnimationLayout from "../Components/AnimationLayout";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function NotFound() {
  useTitle("404");
  return (
    <AnimationLayout>
      <MainLayout title="404" subtitle="Seite nicht gefunden">
        <div className="h-screen text-5xl font-bold text-center text-red-700">
          Die gesuchte Seite konnte nicht gefunden werden.
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
