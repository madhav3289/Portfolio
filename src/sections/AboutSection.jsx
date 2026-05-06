import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const stats = [
  { value: '900+', label: 'Problems Solved' },
  { value: '65+', label: 'Contests' },
  { value: '3+', label: 'Projects Built' },
  { value: 'GLA', label: 'University' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-[#080d1a]/50 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-56 h-56 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <SectionTitle label="About Me" title="Introduction." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {[
              "Hello, I'm Madhav Gupta, a Computer Science and Engineering student at GLA University with a strong focus on software development and problem solving. I am deeply interested in building efficient, scalable, and user-friendly applications using modern technologies.",
              "My core strength lies in Data Structures and Algorithms, where I have solved over 900 problems and participated in 65+ contests across platforms like LeetCode and Codeforces. This consistent practice has helped me develop strong analytical thinking and optimization skills.",
              "Beyond problem solving, I actively work on real-world projects that combine different domains of technology. I have built machine learning-based systems as well as full-stack applications, focusing on clean architecture, scalability, and seamless user experience.",
              "I am continuously working on improving my technical skills, exploring new technologies, and applying my knowledge to build impactful solutions while growing as a developer."
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="text-slate-600 dark:text-slate-300 leading-relaxed text-base"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800/60 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-mono">{stat.label}</div>
              </motion.div>
            ))}

            {/* University Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/25"
            >
              <div className="font-bold text-lg mb-1">GLA University</div>
              <div className="text-blue-100 text-sm font-mono">B.Tech Computer Science & Engineering</div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-ping-slow" />
                <span className="text-xs text-blue-100 font-mono">Currently Pursuing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
