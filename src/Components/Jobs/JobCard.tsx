import { Job } from "../../Hooks/useJobs";
import AusbildungsSection from "./AusbildungsSection";
import JobSection from "./JobSection";

export default function JobCard({ job }: { job: Job | undefined }) {
  if (job == null) return;
  switch (job.name) {
    case "Ausbildung":
      return <AusbildungsSection />;

    default:
      return <JobSection job={job.name} />;
  }
}
