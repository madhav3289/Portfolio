import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import SectionTitle from '../components/SectionTitle';

import pythonMLImg from '../assets/certificates/python-machine-learning-course.png';
import sihImg from '../assets/certificates/smart-india-hackathon.jpeg';
import nptelImg from '../assets/certificates/nptel-management-information-system.png';

const certData = [
  {
    title: 'Python Machine Learning Course',
    org: 'GLA University × Coding Blocks',
    subtitle: 'Python & Machine Learning Certification Program',
    image: pythonMLImg,
    color: 'from-blue-500 to-purple-600',
    glow: 'rgba(99,102,241,0.4)',
  },
  {
    title: 'Smart India Hackathon 2025',
    org: 'GLA University',
    subtitle: 'Internal Smart India Hackathon Participation Certificate',
    image: sihImg,
    color: 'from-orange-500 to-red-600',
    glow: 'rgba(239,68,68,0.4)',
  },
  {
    title: 'NPTEL Management Information System',
    org: 'NPTEL × IIT Kharagpur',
    subtitle: 'Elite Certification in Management Information System',
    image: nptelImg,
    color: 'from-green-500 to-teal-600',
    glow: 'rgba(20,184,166,0.4)',
  },
];

const CertificateModal = ({ cert, onClose }) => (
  <AnimatePresence>
    {cert && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div className="relative pointer-events-auto max-w-4xl w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors"
            >
              <HiX size={20} />
            </motion.button>

            <div
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ boxShadow: `0 0 60px ${cert.glow}` }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto max-h-[80vh] object-contain bg-white"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-bold text-white text-lg">{cert.title}</h3>
              <p className="text-slate-400 text-sm font-mono mt-1">{cert.org}</p>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const CertificateCard = ({ cert, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onClick(cert)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block bg-white dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-400"
      style={{
        boxShadow: hovered ? `0 20px 40px ${cert.glow}` : undefined,
      }}
    >
      <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        <motion.div
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-mono">
            Click to view
          </span>
        </motion.div>
      </div>

      <div className="p-6">
        <div
          className="inline-block px-2.5 py-1 rounded-md text-xs font-mono mb-3"
          style={{
            background: cert.glow.replace('0.4', '0.12'),
            color: cert.glow.replace('rgba', 'rgb').replace(', 0.4)', ')'),
          }}
        >
          {cert.org}
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors duration-200 mb-1 text-sm leading-snug">
          {cert.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {cert.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="section-padding bg-slate-50/50 dark:bg-[#080d1a]/50 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <SectionTitle label="Certificates" title="Achievements." subtitle="My certifications and accomplishments" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certData.map((cert, i) => (
            <CertificateCard key={cert.title} cert={cert} index={i} onClick={setActiveCert} />
          ))}
        </div>
      </div>

      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
};

export default CertificatesSection;
