import competitiveProgrammerImg from '../assets/images/competitive-programmer.png';
import fullStackDeveloperImg from '../assets/images/full-stack-developer.png';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'LeetCode', url: 'https://leetcode.com/u/madhav_g/', icon: 'leetcode' },
  { label: 'Codeforces', url: 'https://codeforces.com/profile/madhav3289', icon: 'codeforces' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/madhav-gupta-032b03354', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/madhav3289', icon: 'github' },
  { label: 'Gmail', url: 'mailto:madhavguptadavfps1234@gmail.com', icon: 'gmail' },
];

export const typingTexts = [
  'Competitive Programmer',
  'Full Stack Developer',
  'Problem Solver',
];

export const roles = [
  {
    title: 'Competitive Programmer',
    image: competitiveProgrammerImg,
    description: '900+ problems solved across LeetCode & Codeforces',
    tags: ['DSA', 'Algorithms', 'LeetCode', 'Codeforces'],
    gradient: 'from-purple-600 via-blue-600 to-indigo-800',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    title: 'Full Stack Developer',
    image: fullStackDeveloperImg,
    description: 'Building scalable web applications with modern tech',
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    gradient: 'from-blue-600 via-cyan-500 to-blue-800',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
];

export const technicalLanguages = [
  { name: 'Java', color: '#f89820', iconType: 'java' },
  { name: 'Python', color: '#3776ab', iconType: 'python' },
  { name: 'JavaScript', color: '#f7df1e', iconType: 'javascript' },
];

export const technologiesFrameworks = [
  { name: 'React.js', color: '#61dafb', iconType: 'react' },
  { name: 'HTML5', color: '#e34f26', iconType: 'html' },
  { name: 'CSS3', color: '#1572b6', iconType: 'css' },
  { name: 'Node.js', color: '#3c873a', iconType: 'nodejs' },
  { name: 'Express.js', color: '#ffffff', iconType: 'express' },
  { name: 'MySQL', color: '#00758f', iconType: 'mysql' },
  { name: 'MongoDB', color: '#4db33d', iconType: 'mongodb' },
  { name: 'Git', color: '#f05032', iconType: 'git' },
  { name: 'GitHub', color: '#ffffff', iconType: 'github' },
  { name: 'VS Code', color: '#007acc', iconType: 'vscode' },
];

export const projects = [
  {
    title: 'Green Grow: Crop Recommendation System',
    description:
      'Built a machine learning-powered Flask web application to recommend optimal crops based on soil nutrients, rainfall, and climatic conditions. Trained and deployed a classification model using scikit-learn for backend integration. Structured the project with a modular and scalable architecture.',
    live: 'https://green-grow-nine.vercel.app/',
    github: 'https://github.com/madhav3289/GreenGrow',
    tags: ['React', 'Python', 'Tailwind CSS', 'MongoDB', 'Gemini AI'],
    theme: 'Agriculture / Smart Farming',
    gradient: 'from-green-500 to-emerald-700',
    emoji: '🌱',
  },
  {
    title: 'Scriptlify: AI-Powered eBook Creator',
    description:
      'Built a MERN-based application to generate, structure, and export complete eBooks using AI assistance. Integrated Google Gemini AI for content generation. Developed backend services with JWT authentication and REST APIs.',
    live: 'https://scriptlify.vercel.app/',
    github: 'https://github.com/madhav3289/Scriptlify',
    tags: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind CSS'],
    theme: 'AI / Software Development',
    gradient: 'from-blue-500 to-violet-700',
    emoji: '📚',
  },
  {
    title: 'CDRN — Community Disaster Response Network',
    description:
      'A full-stack real-time disaster response platform with role-based dashboards for Citizens, Volunteers, and Authorities. Enables live incident reporting, task assignment, and emergency alerts using WebSockets. Built with a scalable architecture integrating React frontend, Spring Boot backend, and PostgreSQL database.',
    live: null,
    github: 'https://github.com/madhav3289/CDRN',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
    theme: 'Emergency Response / Disaster Coordination',
    gradient: 'from-red-500 to-orange-700',
    emoji: '🚨',
  },
];

export const certificates = [
  {
    title: 'Certificate of Achievement',
    issuer: 'Google',
    description: 'View certificate on Google Drive',
    link: 'https://drive.google.com/drive/folders/1cCnosM9v18xn_IIK5PE_-6nfyNDO-tgR',
    color: 'from-blue-500 to-green-500',
    icon: '🏆',
  },
  {
    title: 'Technical Certification',
    issuer: 'Coursera',
    description: 'View certificate on Google Drive',
    link: 'https://drive.google.com/drive/folders/1cCnosM9v18xn_IIK5PE_-6nfyNDO-tgR',
    color: 'from-purple-500 to-blue-500',
    icon: '📜',
  },
  {
    title: 'Programming Certificate',
    issuer: 'Platform',
    description: 'View certificates on Google Drive',
    link: 'https://drive.google.com/drive/folders/1cCnosM9v18xn_IIK5PE_-6nfyNDO-tgR',
    color: 'from-orange-500 to-red-500',
    icon: '🎓',
  },
];
