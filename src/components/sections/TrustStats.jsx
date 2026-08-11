import { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Container from '../ui/Container';

const STATS = [
  { numericValue: 500, suffix: '+', label: 'Students Trained', precision: 0 },
  { numericValue: 10, suffix: '+', label: 'Modules Covered', precision: 0 },
  { numericValue: 4.9, suffix: '/5', label: 'Student Rating', precision: 1 },
  { numericValue: 100, suffix: '%', label: 'Practical Learning', precision: 0 },
];

const AnimatedCounter = ({ target, precision = 0 }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setCurrent(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {precision === 1 ? current.toFixed(1) : Math.round(current)}
    </span>
  );
};

const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 sm:p-10 flex flex-col items-center text-center rounded-2xl bg-white border-3 border-black shadow-[6px_6px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all duration-300"
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-heading text-[var(--color-primary)] leading-none tracking-normal mb-3">
        <AnimatedCounter target={stat.numericValue} precision={stat.precision} />
        {stat.suffix}
      </div>
      <div className="text-lg sm:text-xl font-heading text-black uppercase tracking-wider font-900">
        {stat.label}
      </div>
    </motion.div>
  );
};

const TrustStats = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-secondary)]" aria-label="Key statistics">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustStats;
