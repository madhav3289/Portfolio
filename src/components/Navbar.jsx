import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../constants/ThemeContext';
import { navLinks } from '../data/portfolioData';
import logoImg from '../assets/images/logo.png';

const Navbar = () => {
  const { isDark, setIsDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a0f1e]/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-blue-500/40">
            <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-gradient">Madhav</span>
            <span className="text-slate-700 dark:text-slate-200"> Gupta</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 group font-mono"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </motion.button>
          ))}

          {/* Theme Toggle - Premium Pill */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center w-16 h-8 rounded-full p-1 transition-all duration-500 focus:outline-none overflow-hidden"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, #1e1b4b, #312e81)'
                : 'linear-gradient(135deg, #fef3c7, #fde68a)',
              border: isDark ? '1.5px solid rgba(139,92,246,0.5)' : '1.5px solid rgba(251,191,36,0.6)',
              boxShadow: isDark
                ? '0 0 12px rgba(139,92,246,0.35), inset 0 1px 0 rgba(255,255,255,0.05)'
                : '0 0 12px rgba(251,191,36,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
            aria-label="Toggle theme"
          >
            {isDark && (
              <>
                <span className="absolute left-2 top-1.5 w-0.5 h-0.5 rounded-full bg-purple-300 opacity-70" />
                <span className="absolute left-3.5 top-3.5 w-0.5 h-0.5 rounded-full bg-blue-300 opacity-50" />
              </>
            )}
            <motion.div
              animate={{ x: isDark ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-lg relative z-10"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #c4b5fd, #818cf8)'
                  : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                boxShadow: isDark
                  ? '0 2px 8px rgba(139,92,246,0.6)'
                  : '0 2px 8px rgba(245,158,11,0.6)',
              }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span key="moon" initial={{ rotate: -30, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 30, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }} className="text-[11px] leading-none select-none">🌙</motion.span>
                ) : (
                  <motion.span key="sun" initial={{ rotate: 30, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -30, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }} className="text-[11px] leading-none select-none">☀️</motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pointer-events-auto z-40 bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-slate-700 dark:text-slate-300 font-medium hover:text-blue-500 transition-colors py-1 font-mono"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
