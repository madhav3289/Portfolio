import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import SectionTitle from '../components/SectionTitle';
import ProjectTagIcon from '../components/ProjectTagIcon';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-400"
    >
      {/* Project Header - Colorful Banner */}
      <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        <span className="text-7xl opacity-80 select-none">{project.emoji}</span>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '25px 25px',
          }}
        />
        {/* Theme badge */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-mono">
          {project.theme}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <ProjectTagIcon key={tag} tag={tag} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-200"
          >
            <SiGithub size={15} />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-blue-500/20"
            >
              <HiExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle label="Projects" title="My Work." subtitle="Projects I've built with passion" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
