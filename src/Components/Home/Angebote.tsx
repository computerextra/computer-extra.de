import sortBy from "sort-by";
import useAngebote from "../../Hooks/useAngebote";
import AngebotsCard from "../AngebotsCard";
import GradientHeader from "../GradientHeader";

export default function Angebote() {
  const { Angebote, angebotIsLoading } = useAngebote();

  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24 ">
      <GradientHeader>Angebote</GradientHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-10">
        {!angebotIsLoading &&
          Angebote?.sort(sortBy("date_start")).map((Angebot, idx) => {
            if (Angebot.anzeigen)
              return <AngebotsCard Angebot={Angebot} key={Angebot.id + idx} />;
          })}
      </div>
    </section>
  );
}
