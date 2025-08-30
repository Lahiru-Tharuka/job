export interface Job {
  id: number;
  title: string;
  companyName: string;
  location: string;
  salary: number;
  jobPostedOn: string;
  hiringMultipleCandidates: "Yes" | "No";
  niche: string;
}
