import usePartner from "@/hooks/usePartner";
import sortBy from "sort-by";

export default function PartnerCard() {
  const { Partner } = usePartner();
  return (
    <div className="mb-10 grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-5">
      {Partner?.sort(sortBy("name")).map((p, idx) => {
        return (
          <a key={p.id + idx} href={p.link} target="_blank">
            <div className="customHover text-center">
              <img
                src={"https://bilder.computer-extra.de/data/Partner/" + p.image}
                height={200}
                width={200}
                className="scale-100 rounded-full ring-2 grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:scale-[1.2] md:hover:shadow-xl md:hover:grayscale-0 xl:grayscale"
                alt={p.name}
              />
              <span className="text-xl">{p.name}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
