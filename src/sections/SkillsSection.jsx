import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillIcon from '../components/SkillIcon';
import { technicalLanguages, technologiesFrameworks } from '../data/portfolioData';

const SkillCategory = ({ title, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white dark:bg-slate-800/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-blue-500/5 transition-all duration-300"
  >
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
      <span className="w-2 h-6 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-8 justify-center" style={{ perspective: '800px' }}>
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.07 }}
        >
          <SkillIcon {...skill} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-[#080d1a]/50 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <SectionTitle label="Skills" title="Tech Stack." subtitle="Technologies I work with regularly" />
        <div className="flex flex-col gap-8">
          <SkillCategory title="Technical Languages" skills={technicalLanguages} delay={0.1} />
          <SkillCategory title="Technologies & Frameworks" skills={technologiesFrameworks} delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
