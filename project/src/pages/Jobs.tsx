import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Filter, Calendar, DollarSign, Building2 } from "lucide-react";
import Button from "../components/ui/Button";
import { Job } from "../types";
import { dummyJobs } from "../data/jobs";

const Jobs = () => {
  const [city, setCity] = useState("All");
  const [niche, setNiche] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  const cities = [
    "All",
    "Colombo",
    "Kandy",
    "Galle",
    "Jaffna",
    "Negombo",
    "Anuradhapura",
    "Ratnapura",
    "Trincomalee",
    "Batticaloa",
    "Matara",
    "Kurunegala",
    "Badulla",
    "Puttalam",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Ampara",
    "Hambantota",
    "Kalutara",
    "Mannar",
    "Kilinochchi",
  ];

  const nichesArray = [
    "All",
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  useEffect(() => {
    setJobs(dummyJobs);
    setFilteredJobs(dummyJobs);
  }, []);

  const handleSearch = () => {
    const filtered = jobs.filter((job) => {
      const matchCity = city === "All" || job.location === city;
      const matchNiche = niche === "All" || job.niche === niche;
      const keyword = searchKeyword.toLowerCase();
      const matchKeyword =
        keyword === "" ||
        job.title.toLowerCase().includes(keyword) ||
        job.companyName.toLowerCase().includes(keyword);
      return matchCity && matchNiche && matchKeyword;
    });
    setFilteredJobs(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Discover Amazing Jobs
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Find your perfect career opportunity from thousands of listings
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="glass rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, skills..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={handleSearch} className="h-full px-8 py-4">
                  Search Jobs
                </Button>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 px-4 py-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="sticky top-24 space-y-6">
              <div className="card-modern p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Jobs
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      >
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Job Category
                    </label>
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Jobs Grid */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredJobs && filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    className="card-modern p-6 group relative overflow-hidden"
                  >
                    {/* Job type badge */}
                    <div className="flex justify-between items-start mb-4">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          job.hiringMultipleCandidates === "Yes"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {job.hiringMultipleCandidates === "Yes"
                          ? "Multiple Positions"
                          : "Single Position"}
                      </motion.span>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {job.title}
                      </h3>

                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{job.companyName}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Rs. {job.salary}/month
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Posted on {new Date(job.jobPostedOn).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button
                        href={`/post/application/${job.id}`}
                        size="sm"
                        className="group-hover:shadow-lg transition-shadow duration-200"
                      >
                        Apply Now
                      </Button>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-full flex flex-col items-center justify-center py-20"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center mb-6">
                    <Search className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    No jobs found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-center max-w-md">
                    Try adjusting your search criteria or browse all available positions
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

