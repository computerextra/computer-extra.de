import usePartner, { type Partner } from "@/hooks/usePartner";
import sortBy from "sort-by";

export default function PartnerSelection() {
  const { Partner } = usePartner();

  const getRandomPartner = (anzahl: number) => {
    const tmp: Array<Partner> = [];

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
    <div className="mb-10 grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-5">
      {getRandomPartner(5)
        .sort(sortBy("name"))
        .map((p, idx) => (
          <a key={p.id + idx} href={p.link} target="_blank">
            <img
              src={`https://bilder.computer-extra.de/data/Partner/${p.image}`}
              height={200}
              width={200}
              className="scale-100 rounded-full ring-2 grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.2] hover:shadow-xl hover:grayscale-0 xl:grayscale"
              alt={p.name}
            />
          </a>
        ))}
    </div>
  );
}
