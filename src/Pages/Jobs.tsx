import { useState } from "react";
import AnimationLayout from "../Components/AnimationLayout";
import JobCard from "../Components/Jobs/JobCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import useJobs, { Job } from "../Hooks/useJobs";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Jobs() {
  useTitle("Jobs");

  const { Jobs, jobsIsLoading } = useJobs();

  const [selected, setSelected] = useState<Job | undefined>(undefined);

  return (
    <AnimationLayout>
      <MainLayout
        title="Stellenangebote"
        subtitle="Wir suchen derzeit Verstärkung für unser Team!"
      >
        <section className="min-h-[38vh]">
          {jobsIsLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {Jobs?.map((j) => {
                if (j.online) {
                  return (
                    <button
                      key={j.id}
                      onClick={() => setSelected(j)}
                      className="relative w-full px-10 py-5 m-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                        {j.name}
                      </span>
                    </button>
                  );
                }
              })}
            </div>
          )}
          <JobCard job={selected} />
        </section>
      </MainLayout>
    </AnimationLayout>
  );
}
