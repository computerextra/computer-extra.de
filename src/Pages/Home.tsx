import { lazy, Suspense } from "react";
import AnimationLayout from "../Components/AnimationLayout";
import useTitle from "../Hooks/useTitle";
import StartLayout from "../Layout/StartLayout";

const Angebote = lazy(() => import("../Components/Home/Angebote"));
const Dienstleistungen = lazy(
  () => import("../Components/Home/Dienstleistungen")
);
const Header = lazy(() => import("../Components/Home/Header"));
const Kontakt = lazy(() => import("../Components/Home/Kontakt"));
const PartnerSection = lazy(() => import("../Components/Home/PartnerSection"));

export default function Home() {
  useTitle();

  return (
    <AnimationLayout>
      <div className="overflow-x-hidden">
        <StartLayout>
          <Suspense>
            <Header />
          </Suspense>
          <Suspense>
            <Angebote />
          </Suspense>
          <Suspense>
            <Dienstleistungen />
          </Suspense>
          <Suspense>
            <PartnerSection />
          </Suspense>
          <Suspense>
            <Kontakt />
          </Suspense>
        </StartLayout>
      </div>
    </AnimationLayout>
  );
}
