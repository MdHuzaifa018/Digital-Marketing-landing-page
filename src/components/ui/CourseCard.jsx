import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const CourseCard = ({ course, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl mx-auto bg-white border-3 border-black rounded-3xl shadow-[8px_8px_0px_#000000] p-6 sm:p-10 lg:p-12 flex flex-col gap-8 my-4"
    >
      {/* Top Header Pill Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-slate-200">
        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-900 bg-[var(--color-secondary)] text-black border-2 border-black uppercase tracking-wider shadow-[2px_2px_0px_#000000] rounded-lg font-heading">
          <Sparkles size={16} />
          {course.badge || 'FLAGSHIP PRACTICAL PROGRAM'}
        </span>
        
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-900 text-black">
          <span className="inline-flex items-center gap-1.5 bg-slate-100 px-4 py-2 rounded-xl border-2 border-black">
            <Clock size={16} className="text-[var(--color-primary)] flex-shrink-0" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-100 px-4 py-2 rounded-xl border-2 border-black">
            <MapPin size={16} className="text-[var(--color-active-red)] flex-shrink-0" />
            {course.mode}
          </span>
        </div>
      </div>

      {/* Main Body: Poster + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Course Poster */}
        <div className="lg:col-span-5 relative rounded-2xl border-3 border-black overflow-hidden shadow-[4px_4px_0px_#000000] bg-[var(--color-secondary)]">
          <img
            src={course.image || '/images/course_dm.png'}
            alt={course.title}
            onError={(e) => { e.currentTarget.src = '/images/course_dm.png'; }}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        {/* Course Details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-900 text-black leading-none mb-4">
              {course.title}
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-500">
              {course.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h5 className="text-xs font-900 tracking-widest text-slate-400 uppercase mb-3">Key Highlights:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-700 text-black">
              {course.outcomes?.slice(0, 4).map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h5 className="text-xs font-900 tracking-widest text-slate-400 uppercase mb-3">Tools Mastered:</h5>
            <div className="flex flex-wrap gap-2">
              {course.tools?.map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-slate-100 text-black font-700 text-xs sm:text-sm rounded-lg border border-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Row */}
      <div className="pt-6 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="text-xs font-900 tracking-widest text-slate-400 uppercase block mb-1">Batch Details & Fee</span>
          <div className="flex items-baseline gap-2 justify-center sm:justify-start">
            <span className="text-2xl sm:text-3xl font-heading font-900 text-black">{course.price}</span>
            <span className="text-xs sm:text-sm text-slate-600 font-600">({course.priceNote})</span>
          </div>
        </div>

        <a
          href="#enroll"
          className="btn btn-primary btn-lg w-full sm:w-auto text-base sm:text-lg font-900 uppercase tracking-wide px-8 py-4"
        >
          Enroll Now <ArrowRight size={20} />
        </a>
      </div>

    </motion.div>
  );
};

export default CourseCard;

