import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { COURSES } from '../../data/courses';
import { useModal } from '../../context/ModalContext';

const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState(0);
  const { openModal } = useModal();
  const curriculum = COURSES[0].curriculum;

  return (
    <section id="curriculum" className="section-py" aria-labelledby="curriculum-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="What You Will Learn"
            title="Industry-Ready Curriculum."
            subtitle="12 modules designed to take you from a beginner to a job-ready digital marketing expert."
            align="left"
            id="curriculum-heading"
          />

          <div className="mt-12 space-y-4">
            {curriculum.map((module, index) => {
              const isOpen = openModule === index;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border-2 border-black rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'bg-slate-50 shadow-[4px_4px_0px_#000000]' : 'bg-white hover:border-[var(--color-primary)]'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                    onClick={() => setOpenModule(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-900 font-heading text-[var(--color-primary)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`text-lg md:text-xl font-800 transition-colors ${isOpen ? 'text-black' : 'text-slate-800'}`}>
                        {module.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 md:px-6 pb-6 pt-2 border-t border-slate-200">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm md:text-base font-500 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-[var(--color-primary)] rounded-3xl border-3 border-black text-center shadow-[6px_6px_0px_#000000]"
          >
            <h3 className="text-2xl font-900 font-heading text-white mb-4">Want the detailed syllabus?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn bg-white text-black hover:bg-slate-100 btn-lg inline-flex shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-transparent">
                <Download size={20} className="mr-2" />
                Download Brochure
              </button>
              <button onClick={() => openModal()} className="btn bg-black text-white hover:bg-black/90 btn-lg inline-flex shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]">
                Enroll Now <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CurriculumSection;
