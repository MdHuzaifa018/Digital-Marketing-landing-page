import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { COURSES } from '../../data/courses';

const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState(0);
  const curriculum = COURSES[0].curriculum;

  return (
    <section id="curriculum" className="section-py" aria-labelledby="curriculum-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="What You Will Learn"
            title="Complete Course Curriculum"
            subtitle="Our flagship Digital Marketing Mastery program covers everything from fundamentals to advanced AI marketing."
            dark={false}
            id="curriculum-heading"
            align="center"
          />

          <div className="mt-12 space-y-4">
            {curriculum.map((item, index) => (
              <div 
                key={item.module}
                className={`border-2 border-black rounded-2xl overflow-hidden transition-all duration-300 ${openModule === index ? 'shadow-[6px_6px_0px_#000000] -translate-y-1' : 'hover:shadow-[4px_4px_0px_#000000]'}`}
              >
                <button
                  onClick={() => setOpenModule(openModule === index ? -1 : index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors ${openModule === index ? 'bg-[var(--color-bg-secondary)]' : 'bg-white hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-2xl md:text-3xl font-heading font-900 text-slate-300">
                      {item.module}
                    </span>
                    <h3 className="text-lg md:text-xl font-800 tracking-tight text-black">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    size={24} 
                    className={`text-slate-400 transition-transform duration-300 ${openModule === index ? 'rotate-180 text-black' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 pt-2 md:pl-[5.5rem] border-t-2 border-slate-100">
                        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                          {item.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 size={18} className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 font-500">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#enroll" className="btn btn-primary btn-lg inline-flex shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]">
              <BookOpen size={18} className="mr-2" /> Download Full Syllabus
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CurriculumSection;
