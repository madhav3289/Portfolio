import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  SiJavascript, SiPython, SiReact, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit,
  SiGithub
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';

const iconMap = {
  java: { icon: FaJava, color: '#f89820' },
  python: { icon: SiPython, color: '#3776ab' },
  javascript: { icon: SiJavascript, color: '#f7df1e' },
  react: { icon: SiReact, color: '#61dafb' },
  html: { icon: SiHtml5, color: '#e34f26' },
  css: { icon: SiCss, color: '#1572b6' },
  nodejs: { icon: SiNodedotjs, color: '#3c873a' },
  express: { icon: SiExpress, color: '#aaa' },
  mysql: { icon: SiMysql, color: '#00758f' },
  mongodb: { icon: SiMongodb, color: '#4db33d' },
  git: { icon: SiGit, color: '#f05032' },
  github: { icon: SiGithub, color: '#aaa' },
  vscode: { icon: VscVscode, color: '#007acc' },
};

const SkillIcon = ({ iconType, name, color }) => {
  const entry = iconMap[iconType];
  if (!entry) return null;
  const Icon = entry.icon;
  const iconColor = entry.color || color;

  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [18, -18]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-18, 18]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center gap-2 cursor-default">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: '600px',
        }}
        animate={isHovered ? { y: -8, scale: 1.12 } : { y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
        whileHover={{}}
      >
        {/* Background */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-300"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${iconColor}22, ${iconColor}08)`,
            border: `1.5px solid ${iconColor}${isHovered ? '80' : '40'}`,
            boxShadow: isHovered
              ? `0 8px 30px ${iconColor}50, 0 0 20px ${iconColor}30, inset 0 0 20px ${iconColor}10`
              : `0 4px 20px ${iconColor}20`,
            transition: 'all 0.3s ease',
          }}
        />

        {/* Icon with depth pop */}
        <motion.div
          style={{
            transform: isHovered ? 'translateZ(16px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease',
          }}
          className="relative z-10"
        >
          <Icon size={30} style={{ color: iconColor }} />
        </motion.div>

        {/* Floating glow pulse */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${iconColor}40, transparent 70%)` }}
          />
        )}
      </motion.div>

      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-blue-400 transition-colors duration-200 text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
