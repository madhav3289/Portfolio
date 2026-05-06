import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SiLeetcode, SiCodeforces, SiGithub
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiArrowDown } from 'react-icons/hi';
import { socialLinks, typingTexts } from '../data/portfolioData';
import mainImage from '../assets/images/main-image.png';
import ResumeModal from '../components/ResumeModal';

const socialIcons = {
  leetcode: { icon: SiLeetcode, color: '#FFA116' },
  codeforces: { icon: SiCodeforces, color: '#1F8ACB' },
  linkedin: { icon: FaLinkedin, color: '#0A66C2' },
  github: { icon: SiGithub, color: '#aaaaaa' },
  gmail: { icon: MdEmail, color: '#EA4335' },
};

const TypingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const textsRef = React.useRef(texts);

  useEffect(() => {
    const allTexts = textsRef.current;
    const currentText = allTexts[currentIndex];
    let timeout;

    if (isTyping) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % allTexts.length);
          setIsTyping(true);
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentIndex]);

  return (
    <span className="text-gradient font-mono">
      {displayText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative mesh-bg"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping-slow" />
              <span className="text-sm font-mono text-blue-400">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-700 dark:text-slate-200">Hi, I am</span>
                <br />
                <span className="text-gradient">Madhav.</span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 h-8"
            >
              I'm a <TypingText texts={typingTexts} />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap relative z-10"
            >
              {socialLinks.map((social) => {
                const entry = socialIcons[social.icon];
                if (!entry) return null;
                const Icon = entry.icon;
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: `${entry.color}18`,
                        border: `1.5px solid ${entry.color}40`,
                        boxShadow: `0 4px 15px ${entry.color}20`,
                      }}
                      title={social.label}
                    >
                      <Icon size={18} style={{ color: entry.color }} />
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <motion.button
                onClick={() => setIsResumeModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <HiArrowDown size={16} className="rotate-[-135deg]" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-90 translate-y-8" />

              <motion.img
                src={mainImage}
                alt="Madhav Gupta"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(59,130,246,0.3))' }}
              />

              {/* Floating stats badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-6 top-1/3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl font-bold text-blue-500">900+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Problems Solved</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-2 bottom-1/3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl font-bold text-green-500">65+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Contests</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 cursor-pointer"
            onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs font-mono">scroll down</span>
            <HiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
};

export default HeroSection;