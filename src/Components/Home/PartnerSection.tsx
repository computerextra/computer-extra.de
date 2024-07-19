import { NavLink } from "react-router-dom";
import sortBy from "sort-by";
import usePartner, { Partner } from "../../Hooks/usePartner";
import GradientHeader from "../GradientHeader";
import HomeBtn from "../HomeBtn";

export default function PartnerSection() {
  const { Partner, partnerIsLoading } = usePartner();

  const getRandomPartner = (anzahl: number): Partner[] => {
    const tmp: Partner[] = [];

    if (Partner) {
      for (let i = 0; i < anzahl; i++) {
        const random = Math.floor(Math.random() * Partner.length);
        if (!tmp.includes(Partner[random])) tmp.push(Partner[random]);
        else i--;
      }
    }
    return tmp;
  };
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24 ">
      <GradientHeader>Partner</GradientHeader>
      <div className="grid justify-items-center grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        {!partnerIsLoading &&
          getRandomPartner(5)
            .sort(sortBy("name"))
            .map((p, idx) => (
              <NavLink key={p.id + idx} to={p.link} target="_blank">
                <img
                  src={`/Images/Partner/${p.image}`}
                  height={200}
                  width={200}
                  className="rounded-full ring-2 grayscale-0 xl:grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.2] scale-100"
                  alt={p.name}
                />
              </NavLink>
            ))}
      </div>
      <HomeBtn to="/Partner" content="Alle Partner ansehen" />
    </section>
  );
}
