import React from 'react';
import {
  SiReact, SiPython, SiTailwindcss, SiMongodb,
  SiNodedotjs, SiExpress, SiSpringboot, SiPostgresql,
  SiGooglegemini
} from 'react-icons/si';
import { TbBrandSocketIo } from 'react-icons/tb';

const tagIconMap = {
  'React': { icon: SiReact, color: '#61dafb' },
  'Python': { icon: SiPython, color: '#3776ab' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38bdf8' },
  'MongoDB': { icon: SiMongodb, color: '#4db33d' },
  'Gemini AI': { icon: SiGooglegemini, color: '#4285f4' },
  'Node.js': { icon: SiNodedotjs, color: '#3c873a' },
  'Express.js': { icon: SiExpress, color: '#aaa' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'WebSockets': { icon: TbBrandSocketIo, color: '#25c2a0' },
};

const ProjectTagIcon = ({ tag }) => {
  const entry = tagIconMap[tag];
  if (!entry) {
    return (
      <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono">
        {tag}
      </span>
    );
  }
  const Icon = entry.icon;
  return (
    <span
      className="flex items-center gap-1 text-xs px-2 py-1 rounded-md font-mono transition-all duration-200 hover:scale-105"
      style={{
        background: `${entry.color}18`,
        border: `1px solid ${entry.color}40`,
        color: entry.color,
      }}
      title={tag}
    >
      <Icon size={12} />
      {tag}
    </span>
  );
};

export default ProjectTagIcon;
