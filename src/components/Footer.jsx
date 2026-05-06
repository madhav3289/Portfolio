import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodeforces, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  { icon: SiLeetcode, href: 'https://leetcode.com/u/madhav_g/', color: '#FFA116', label: 'LeetCode' },
  { icon: SiCodeforces, href: 'https://codeforces.com/profile/madhav3289', color: '#1F8ACB', label: 'Codeforces' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/madhav-gupta-032b03354', color: '#0A66C2', label: 'LinkedIn' },
  { icon: SiGithub, href: 'https://github.com/madhav3289', color: '#aaa', label: 'GitHub' },
  { icon: MdEmail, href: 'mailto:madhavguptadavfps1234@gmail.com', color: '#EA4335', label: 'Gmail' },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-bold text-lg text-gradient">Madhav Gupta</span>
          <p className="text-sm text-slate-400 dark:text-slate-500 font-mono mt-1">
            Computer Science & Engineering @ GLA University
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, color, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={label}
            >
              <Icon size={16} style={{ color }} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500 font-mono text-center md:text-right">
          © {new Date().getFullYear()} Madhav Gupta. <br className="md:hidden" />
          Built with React & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
