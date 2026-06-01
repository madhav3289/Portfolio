import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';

const contactItems = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'madhavguptadavfps1234@gmail.com',
    href: 'mailto:madhavguptadavfps1234@gmail.com',
    color: '#EA4335',
    gradient: 'from-red-500 to-orange-500',
    description: 'Drop me an email anytime',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'madhavgupta3289',
    href: 'https://linkedin.com/in/madhavgupta3289',
    color: '#0A66C2',
    gradient: 'from-blue-600 to-blue-400',
    description: 'Connect with me professionally',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'madhav3289',
    href: 'https://github.com/madhav3289',
    color: '#fff',
    gradient: 'from-slate-700 to-slate-500',
    description: 'Check out my code',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-4xl mx-auto relative">
        <SectionTitle label="Contact" title="Get In Touch." subtitle="Have a project in mind? Let's build something great together." />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-slate-800/60 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.label}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-2 break-all">{item.value}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{item.description}</p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-2xl shadow-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to Collaborate?</h3>
          <p className="text-blue-100 mb-6 font-mono text-sm">
            I'm currently open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:madhavguptadavfps1234@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MdEmail size={18} />
            Say Hello 👋
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
