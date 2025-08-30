import { Job } from "../types";

const roles = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "QA Engineer",
  "DevOps Engineer",
  "System Administrator",
  "Database Administrator",
  "Network Engineer",
  "Security Analyst",
  "Technical Writer",
  "Business Analyst",
  "Scrum Master",
  "Graphic Designer",
  "Web Developer",
  "Mobile Developer",
  "AI Researcher",
  "Machine Learning Engineer",
  "Cloud Architect",
  "IT Support Specialist"
];

const levels = ["Intern", "Junior", "Mid-level", "Senior", "Lead"];
const companies = [
  "TechCorp",
  "CodeWorks",
  "SkyNet",
  "CloudNine",
  "InnovateX",
  "DataMinds",
  "NextGen",
  "DevMasters",
  "AlphaBeta",
  "QuantumSoft"
];

const locations = [
  "Colombo",
  "Kandy",
  "Galle",
  "Jaffna",
  "Negombo",
  "Matara",
  "Kurunegala",
  "Batticaloa",
  "Anuradhapura",
  "Trincomalee"
];

export const dummyJobs: Job[] = (() => {
  const jobs: Job[] = [];
  const now = new Date().toISOString();
  let id = 1;

  roles.forEach((role, i) => {
    levels.forEach((level, j) => {
      jobs.push({
        id: id++,
        title: `${level} ${role}`,
        companyName: companies[(i + j) % companies.length],
        location: locations[(i * levels.length + j) % locations.length],
        salary: 50000 + ((i * levels.length + j) * 1000),
        jobPostedOn: now,
        hiringMultipleCandidates: (i + j) % 2 === 0 ? "Yes" : "No",
        niche: role
      });
    });
  });

  return jobs;
})();
