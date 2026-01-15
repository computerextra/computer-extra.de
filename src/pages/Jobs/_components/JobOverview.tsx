import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";
import JobCard from "./JobCard";

export type Job = {
  id: string;
  name: string;
  online: number;
  Aufgaben: string;
  Beschreibung: string | null;
  Profil: string | null;
  isAusbilung: number;
};

export default function JobOverview() {
  const [Jobs, setJobs] = useState<Array<Job> | undefined>(undefined);
  const [selected, setSelected] = useState<Job | undefined>(undefined);

  const getJobs = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Job> }>(
      "https://api.computer-extra.de/jobs.php",
    );
    if (res.data.data) {
      setJobs(res.data.data);
    }
  });

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className="min-h-[38vh]">
      {Jobs?.map((j) => {
        if (j.online == 1 && j.isAusbilung == 0) {
          return (
            <button
              key={j.id}
              onClick={() => setSelected(j)}
              className="group relative m-2 w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 px-10 py-5 font-medium text-gray-600 shadow-inner"
            >
              <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
              <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
                {j.name}
              </span>
            </button>
          );
        }
      })}
      {Jobs?.map((j) => {
        if (j.online == 1 && j.isAusbilung == 1) {
          return (
            <button
              key={j.id}
              onClick={() => setSelected(j)}
              className="group relative m-2 w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 px-10 py-5 font-medium text-gray-600 shadow-inner"
            >
              <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
              <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
                Ausbildung - {j.name}
              </span>
            </button>
          );
        }
      })}

      <JobCard Job={selected} />
    </section>
  );
}
