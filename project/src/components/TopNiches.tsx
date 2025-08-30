import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Cloud,
  Settings,
  Smartphone,
} from "lucide-react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      icon: <Code2 />,
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      service: "Web Development",
      icon: <Globe />,
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      service: "Data Science",
      icon: <Database />,
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      service: "Cloud Computing",
      icon: <Cloud />,
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      service: "DevOps",
      icon: <Settings />,
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: 6,
      service: "Mobile App Development",
      icon: <Smartphone />,
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Top Niches
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore the most in-demand career paths and find opportunities that match your expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="group relative"
            >
              <div className="card-modern p-8 h-full relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <div className="text-white text-2xl">
                      {service.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.service}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopNiches;