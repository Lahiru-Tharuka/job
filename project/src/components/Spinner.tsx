import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[525px]">
      <div className="relative">
        {/* Main spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-200 dark:border-slate-700 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full"
        />
        
        {/* Inner spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 w-12 h-12 border-2 border-purple-200 dark:border-slate-600 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 w-12 h-12 border-2 border-transparent border-t-purple-600 dark:border-t-purple-400 rounded-full"
        />

        {/* Center dot */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-6 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"
        />
      </div>
    </div>
  );
};

export default Spinner;