import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../../config/contact';
import { useModal } from '../../context/ModalContext';

const CYCLING_WORDS = ['Marketing.', 'SEO.', 'Google Ads.', 'Social Media.'];

const whatsappMsg = "Hello! I'm interested in your Digital Marketing course in Lucknow. Please share details.";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[94dvh] flex flex-col justify-center overflow-hidden bg-white"
      style={{ paddingTop: 'calc(var(--navbar-h) + 2rem)', paddingBottom: '4rem' }}
      aria-label="Homepage hero"
    >
      {/* Stark Ambient Mesh Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Ambient Glow (Vibrant Accent) */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-vibrant rounded-full blur-[140px] pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-start gap-6 w-full text-left pt-10">
            
            {/* Location Pill */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-black text-[0.75rem] font-800 tracking-wider uppercase shadow-sm">
                <Sparkles size={14} className="text-pink-500" />
                Offline Training · Lucknow, UP
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={item} className="text-hero leading-[1.05] max-w-[850px] text-[var(--color-primary)] font-heading uppercase gsap-scrub-text">
              Learn{' '}
              <span className="relative inline-block align-bottom min-w-[200px] sm:min-w-[240px] md:min-w-[320px] h-[1.3em]" aria-live="polite">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="inline-block bg-[var(--color-secondary)] text-black px-4 py-1 border-2 border-black -skew-x-6 whitespace-nowrap shadow-[3px_3px_0px_#000000]"
                    style={{ WebkitTextFillColor: 'initial', color: 'black' }}
                  >
                    {CYCLING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              Build Real Skills.
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={item} className="text-subheading max-w-[550px] mt-2 font-500 text-slate-600">
              Master digital marketing through practical offline classroom training in Lucknow — real tools, live projects, personal mentorship, and job readiness.
            </motion.p>

            {/* Feature Checkmarks */}
            <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4 mt-4">
              {['100% Practical', 'Small Batch Sizes', 'Live Ad Campaigns'].map((feat) => (
                <span key={feat} className="inline-flex items-center gap-2.5 bg-white px-5 py-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000000] text-black text-sm sm:text-base font-900 uppercase tracking-wide">
                  <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0" /> {feat}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mt-6">
              <div className="flex gap-4">
                <button onClick={() => openModal()} className="btn btn-primary btn-lg">
                  <span>Enroll Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#contact" className="btn btn-secondary btn-lg hidden sm:inline-flex">
                  Contact Us
                </a>
              </div>
              
              {/* Urgency Badge */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg border border-red-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-xs font-800 uppercase tracking-wide">Special Offer: Limited Seats Left</span>
              </div>
              <a
                href={WHATSAPP_URL(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-black btn-lg flex items-center gap-2 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <FaWhatsapp size={20} className="text-[#25D366]" /> Talk to Mentor
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Vibrant Abstract 3D Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <motion.img 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
              alt="Digital Marketing Classroom" 
              className="w-full h-[500px] object-cover rounded-3xl border-4 border-black shadow-[12px_12px_0px_#000000]"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
