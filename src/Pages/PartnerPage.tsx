import { NavLink } from "react-router-dom";
import sortBy from "sort-by";
import AnimationLayout from "../Components/AnimationLayout";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAnalytics from "../Hooks/useAnalytics";
import usePartner from "../Hooks/usePartner";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function PartnerPage() {
  useTitle("Partner");
  useAnalytics("Partner");
  const { Partner, partnerIsLoading } = usePartner();

  return (
    <AnimationLayout>
      <MainLayout
        title="Partner"
        subtitle="Wir pflegen eine partnerschaftliche Zusammenarbeit mit unseren Partnern. Auf Vertrauen und Transparenz legen wir großen Wert - denn im Miteinander liegt unsere Stärke."
      >
        <>
          {partnerIsLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid justify-items-center grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
              {Partner?.sort(sortBy("name")).map((p, idx) => {
                return (
                  <NavLink key={p.id + idx} to={p.link} target="_blank">
                    <div className="text-center customHover">
                      <img
                        src={`/Images/Partner/${p.image}`}
                        height={200}
                        width={200}
                        className="rounded-full ring-2 grayscale-0 xl:grayscale md:hover:grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:shadow-xl md:hover:scale-[1.2] scale-100"
                        alt={p.name}
                      />
                      <span className="text-xl">{p.name}</span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}
        </>
      </MainLayout>
    </AnimationLayout>
  );
}
