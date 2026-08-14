import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from '../components/sections/Hero';
import TrustStats from '../components/sections/TrustStats';
import MarqueeStrip from '../components/sections/MarqueeStrip';
import CoursePreview from '../components/sections/CoursePreview';
import CurriculumSection from '../components/sections/CurriculumSection';
import VideoShowcase from '../components/sections/VideoShowcase';
import GallerySection from '../components/sections/GallerySection';
import WhyUsPreview from '../components/sections/WhyUsPreview';
import Testimonials from '../components/sections/Testimonials';
import FAQPreview from '../components/sections/FAQPreview';
import ContactSection from '../components/sections/ContactSection';
import EnrollFormSection from '../components/sections/EnrollFormSection';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { Laptop, MessageSquare, Target, Trophy, ArrowUpRight, Globe2, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Select all sections that specify a target background color
    const colorSections = gsap.utils.toArray('[data-color]');
    
    colorSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to('body', { backgroundColor: section.dataset.color, duration: 0.8, ease: 'power2.out', overwrite: 'auto' }),
        onEnterBack: () => gsap.to('body', { backgroundColor: section.dataset.color, duration: 0.8, ease: 'power2.out', overwrite: 'auto' }),
      });
    });

    // 2. High-performance Smooth Reveal for generic elements
    ScrollTrigger.batch('.gsap-reveal', {
      interval: 0.1,
      batchMax: 3,
      onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out', overwrite: true }),
      onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, y: 30, overwrite: true })
    });
    // Set initial state for reveals
    gsap.set('.gsap-reveal', { autoAlpha: 0, y: 30 });

    // 3. Text color fill animation on scroll (Scrubbing effect)
    const scrubTexts = gsap.utils.toArray('.gsap-scrub-text');
    scrubTexts.forEach((text) => {
      gsap.to(text, {
        backgroundPositionX: '0%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          scrub: 1, // smooth scrubbing
          start: 'top 80%',
          end: 'bottom 40%',
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.to('body', { backgroundColor: '#ffffff', duration: 0 }); // reset on unmount
    };
  }, []);

  return (
    <>
      <SEO
        title="Digital Marketing Course in Lucknow"
        description="Learn digital marketing with practical offline training in Lucknow. Master SEO, Google Ads, Meta Ads, Social Media. Small batches, expert mentorship."
      />

      <div data-color="#ffffff">
        <Hero />
        <TrustStats />
        <MarqueeStrip />
      </div>

      <div data-color="#f8fafc">
        <WhyDigitalMarketing />
        <CoursePreview />
      </div>

      <div data-color="#ffffff">
        <CurriculumSection />
        {/* <VideoShowcase /> */}
        <LearningMethodology />
      </div>

      {/* <div data-color="#000000">
        <GallerySection />
      </div> */}

      <div data-color="#FCD34D"> {/* Tailwind amber-300 / secondary color */}
        <WhyUsPreview />
      </div>

      <div data-color="#ffffff">
        <Testimonials />
        <FAQPreview />
      </div>

      {/* <div data-color="#f8fafc">
        <EnrollFormSection />
      </div> */}
    </>
  );
};

const WhyDigitalMarketing = () => {
  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="why-dm-heading">
      {/* Huge Main Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 lg:opacity-60">
        <img 
          src="/images/course.png" 
          alt="Background Watermark" 
          className="w-full h-full object-cover lg:object-contain object-right drop-shadow-[0px_0px_50px_#ffffff]"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">The Career Opportunity</span>
          <h2 id="why-dm-heading" className="text-display mt-4 mb-4 gsap-scrub-text">
            Why Digital Marketing?
          </h2>
          <p className="text-[var(--color-text-muted)] text-subheading">
            The digital economy is expanding rapidly. Every business needs online visibility, creating a massive skill gap and infinite career opportunities.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento Box 1: Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card gsap-reveal lg:col-span-2 bg-black text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden relative border-2 border-black shadow-[6px_6px_0px_#000000]"
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-900 mb-4 text-white">High-Demand Skill</h3>
              <p className="text-slate-200 text-lg leading-relaxed font-500">
                Digital marketing is among India's fastest-growing career fields. Over 500,000 new positions are created annually across startups, agencies, and enterprise brands.
              </p>
            </div>
          </motion.div>

          {/* Bento Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card gsap-reveal bg-white text-black p-8 md:p-10 flex flex-col justify-between border-2 border-black shadow-[6px_6px_0px_#000000]"
          >
            <div>
              <div className="text-5xl lg:text-6xl font-heading mb-4 text-[var(--color-primary)]">5L+</div>
              <h3 className="text-xl font-900 text-black mb-2">New Jobs Yearly</h3>
              <p className="text-slate-800 font-500 text-base">The demand for skilled marketers heavily outweighs the supply in Tier-2 cities.</p>
            </div>
            <ArrowUpRight size={28} className="text-black mt-6 self-end" />
          </motion.div>

          {/* Bento Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card gsap-reveal bg-white text-black p-8 md:p-10 border-2 border-black shadow-[6px_6px_0px_#000000]"
          >
            <Globe2 size={36} className="text-[var(--color-primary)] mb-6" />
            <h3 className="text-xl font-900 text-black mb-2">Freelance Potential</h3>
            <p className="text-slate-800 font-500 text-base">
              Build your own client base. Work remotely with domestic and international clients without geographic limits.
            </p>
          </motion.div>

          {/* Bento Box 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bento-card gsap-reveal lg:col-span-2 p-8 md:p-10 bg-[var(--color-primary)] text-white border-2 border-black shadow-[6px_6px_0px_#000000]"
          >
            <h3 className="text-2xl md:text-3xl font-900 text-white mb-4 font-heading tracking-wide">Start your own agency.</h3>
            <p className="text-white text-lg max-w-lg font-500 leading-relaxed">
              Once you master the tools and strategies, the ultimate goal for many is building a scalable digital agency. We show you the exact blueprint.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LearningMethodology = () => {
  const steps = [
    { num: '01', icon: <Laptop size={24} />, title: 'Real Campaigns', desc: 'Set up live SEO audits, Google Ads, and Meta Pixel campaigns in class. No theory-only lectures.' },
    { num: '02', icon: <MessageSquare size={24} />, title: 'Live Doubt Clearing', desc: 'Ask questions directly in person. Get instant feedback and strategy fixes without waiting for forum replies.' },
    { num: '03', icon: <Target size={24} />, title: 'Small Batch Attention', desc: 'Batches are intentionally capped to guarantee individual, personalized feedback on your assignments.' },
    { num: '04', icon: <Trophy size={24} />, title: 'Portfolio Guidance', desc: 'Graduate with a verified project portfolio, resume optimization, and interview preparation.' },
  ];

  return (
    <section className="section-py" aria-labelledby="methodology-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4">
            <span className="eyebrow mb-6 inline-block">Methodology</span>
            <h2 id="methodology-heading" className="text-display mb-6 gsap-scrub-text">
              A practical approach to learning.
            </h2>
            <p className="text-slate-700 font-500 text-subheading mb-8">
              Four pillars that make offline training at Flybitfalcon Academy effective, practical, and heavily career-oriented.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bento-card gsap-reveal bg-white text-black p-8 border-2 border-black shadow-[4px_4px_0px_#000000] group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-secondary)] border-2 border-black text-black flex items-center justify-center font-bold shadow-[2px_2px_0px_#000]">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-heading font-900 text-black">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-900 text-xl text-black mb-3">{step.title}</h3>
                <p className="text-slate-800 font-500 leading-relaxed text-sm sm:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
