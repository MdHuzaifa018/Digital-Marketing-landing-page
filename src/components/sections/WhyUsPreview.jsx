import { motion } from 'framer-motion';
import { Users, Wrench, BookOpen, Trophy, MessageSquare, Star } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';

const REASONS = [
  {
    icon: <Wrench size={22} />,
    title: 'LIVE CLIENT PROJECTS',
    desc: 'Work on practical projects based on real business requirements.',
  },
  {
    icon: <Users size={22} />,
    title: 'AGENCY-STYLE LEARNING',
    desc: 'Understand how a real marketing agency operates—from getting a client to delivering the project.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'BUILD YOUR PORTFOLIO',
    desc: 'Build practical work that you can showcase to potential clients or employers.',
  },
  {
    icon: <Star size={22} />,
    title: 'AI + MODERN MARKETING',
    desc: 'Use AI tools for content, research, copywriting, planning and productivity.',
  },
  {
    icon: <Trophy size={22} />,
    title: 'FREELANCING & CLIENT ACQUISITION',
    desc: 'Learn Instagram, LinkedIn, WhatsApp, cold outreach, local business prospecting and freelancing fundamentals.',
  },
];

const WhyUsPreview = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24" aria-labelledby="why-us-heading">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Grow Funda Academy"
            title={<>What makes Grow Funda<br />different.</>}
            subtitle="Agency-style training with live projects and portfolio building."
            dark={false}
            align="left"
            id="why-us-heading"
          />
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex-shrink-0"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-base font-900 bg-white border-3 border-black px-6 py-3.5 shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-black transition-all duration-200 no-underline uppercase font-heading tracking-wide"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 bg-white border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 group"
            >
              <div className="w-14 h-14 border-2 border-black bg-[var(--color-primary)] flex items-center justify-center text-white mb-6 rounded-xl shadow-[3px_3px_0px_#000]">
                {reason.icon}
              </div>
              <h3 className="text-black font-heading font-900 text-xl sm:text-2xl mb-3">{reason.title}</h3>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-500">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsPreview;
