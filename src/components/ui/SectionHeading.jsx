import { motion } from 'framer-motion';

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
  animate = true,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';

  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
      }
    : {};

  return (
    <Wrapper className={`flex flex-col gap-3 ${alignClass} ${className}`} {...wrapperProps}>
      {eyebrow && (
        <span
          className="eyebrow uppercase font-heading tracking-widest text-sm"
          style={dark ? {
            color: '#fff',
            background: 'var(--color-primary)',
            borderColor: '#000',
            borderWidth: '2px',
          } : {
            color: '#000',
            background: 'var(--color-secondary)',
            borderColor: '#000',
            borderWidth: '2px',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading font-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase ${align === 'center' ? 'text-center' : ''} ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-subheading max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${
            dark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
};

export default SectionHeading;
