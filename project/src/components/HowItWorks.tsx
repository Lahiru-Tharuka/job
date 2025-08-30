import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Search, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus />,
      title: "Create an Account",
      description:
        "Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or applying for jobs. Customize your profile to highlight your skills or requirements.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Search />,
      title: "Post or Browse Jobs",
      description:
        "Employers can post detailed job descriptions, and job seekers can browse a comprehensive list of available positions. Utilize filters to find jobs that match your skills and preferences.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Heart />,
      title: "Hire or Get Hired",
      description:
        "Employers can shortlist candidates and extend job offers. Job seekers can review job offers and accept positions that align with their career goals.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get started in three simple steps and transform your career journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 h-full border border-white/20 hover:border-white/30 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300`}
                >
                  <div className="text-white text-3xl">
                    {step.icon}
                  </div>
                </motion.div>

                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm mr-4`}>
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/50 to-transparent" />
                )}

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;