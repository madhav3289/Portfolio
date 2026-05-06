import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { roles } from '../data/portfolioData';

const RoleCard = ({ role, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [14, -14]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-14, 14]), {
    stiffness: 200,
    damping: 25,
  });
  const scale = useSpring(isHovered ? 1.04 : 1, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
      className="relative rounded-3xl overflow-visible cursor-pointer"
    >
      {/* Outer glow layer */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 rounded-3xl pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center, ${role.glow}, transparent 70%)`,
          filter: 'blur(16px)',
        }}
      />

      {/* Card background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-10 dark:opacity-20 rounded-3xl`}
        style={{ transform: 'translateZ(-8px)', transformStyle: 'preserve-3d' }}
      />

      <div
        className="relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-3xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image section */}
        <div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 h-56"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.img
            src={role.image}
            alt={role.title}
            animate={isHovered ? { scale: 1.07, y: -4 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
              transition: 'transform 0.4s ease',
            }}
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-slate-800 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="p-6"
          style={{
            transform: isHovered ? 'translateZ(12px)' : 'translateZ(0px)',
            transition: 'transform 0.4s ease',
            transformStyle: 'preserve-3d',
          }}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {role.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-mono mb-4">
            {role.description}
          </p>
          <div
            className="flex flex-wrap gap-2"
            style={{
              transform: isHovered ? 'translateZ(6px)' : 'translateZ(0px)',
              transition: 'transform 0.4s ease',
            }}
          >
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-lg font-mono"
                style={{
                  background: `${role.glow}20`,
                  border: `1px solid ${role.glow}`,
                  color: role.glow.replace('0.4)', '1)').replace('rgba', 'rgb').replace(', 0.4', ''),
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Inner glow on hover */}
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{ boxShadow: `inset 0 0 50px ${role.glow}` }}
        />
      </div>
    </motion.div>
  );
};

const RoleCardsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ perspective: '1200px' }}>
      <div className="absolute inset-0 mesh-bg" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 font-mono text-sm font-medium tracking-widest uppercase mb-3">— What I Do —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">My Roles</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, i) => (
            <RoleCard key={role.title} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCardsSection;
