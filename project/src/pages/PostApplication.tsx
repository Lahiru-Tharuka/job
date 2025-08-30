import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const PostApplication = () => {
  const { jobId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for job ${jobId}!`);
    setName("");
    setEmail("");
    setCoverLetter("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 rounded-3xl w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Apply for Job</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <textarea
          placeholder="Cover letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-32"
        />
        <Button type="submit" className="w-full py-3">
          Submit Application
        </Button>
      </motion.form>
    </div>
  );
};

export default PostApplication;

