import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiArrowDown } from 'react-icons/hi';
import resumePDF from '../assets/resume/resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Madhav_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/70 z-40"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  Resume
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-800">
                <div className="p-4 md:p-6">
                  <div className="rounded-lg bg-white dark:bg-slate-900 shadow-md overflow-hidden">
                    <iframe
                      src={resumePDF}
                      className="w-full h-[600px] md:h-[700px] border-0"
                      title="Resume PDF"
                    />
                  </div>
                </div>
              </div>

              {/* Footer with Action Buttons */}
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-slate-700 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  Close
                </button>

                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <HiArrowDown size={16} className="rotate-180" />
                  Download
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
