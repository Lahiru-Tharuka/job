import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-700 dark:text-slate-300">
          Please login to view the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 rounded-3xl max-w-md w-full text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Welcome, {user.email}
        </h2>
        <p className="mb-6 text-slate-600 dark:text-slate-400">Role: {user.role}</p>
        <Button onClick={logout} className="px-8">
          Logout
        </Button>
      </motion.div>
    </div>
  );
};

export default Dashboard;

