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
    <section id="curriculum" className="section-py relative overflow-hidden" aria-labelledby="curriculum-heading">
      <Container>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start max-w-7xl mx-auto">
          
          {/* Left Column: Heading & Cutout Image */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left sticky top-24 min-w-0 w-full overflow-visible">
            <SectionHeading
              eyebrow="What You Will Learn"
              title="Industry-Ready Curriculum."
              subtitle="12 modules designed to take you from a beginner to a job-ready digital marketing expert."
              align="center"
              className="lg:!items-start lg:!text-left w-full"
              id="curriculum-heading"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block my-8 lg:my-12 w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[420px] xl:max-w-[460px] relative mx-auto lg:mx-0"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)] rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              <img 
                src="/images/course.png" 
                alt="Digital Marketing Syllabus" 
                className="w-full h-auto object-contain drop-shadow-[10px_10px_0px_var(--color-secondary)] lg:drop-shadow-[15px_15px_0px_var(--color-secondary)] hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-3 w-full mt-10 lg:mt-0 min-w-0">
            <div className="space-y-4 w-full">
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
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-sm font-900 font-heading text-[var(--color-primary)] shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`text-base sm:text-lg md:text-xl font-800 transition-colors min-w-0 break-words ${isOpen ? 'text-black' : 'text-slate-800'}`}>
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
        </div>
      </Container>
    </section>
  );
};

export default CurriculumSection;
