import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Offline Classroom Training',
    category: 'Classroom',
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 aspect-[16/10]',
  },
  {
    id: 2,
    title: 'Live Analytics & Campaign Setup',
    category: 'Practical Session',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 aspect-square',
  },
  {
    id: 3,
    title: 'One-on-One Mentorship',
    category: 'Mentorship',
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 aspect-square',
  },
  {
    id: 4,
    title: 'Digital Marketing Mastery Batch',
    category: 'Workshops',
    src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 aspect-[16/10]',
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-py text-white" aria-labelledby="gallery-heading">
      <Container>
        <SectionHeading
          eyebrow="Life at SkillEdge"
          title={<>Behind the scenes.<br />Real classes, real people.</>}
          subtitle="Take a look at our state-of-the-art classroom in Lucknow where the magic of practical digital marketing happens."
          dark={true}
          id="gallery-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${img.span} group relative rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-800 uppercase tracking-wider mb-3">
                  {img.category}
                </span>
                <h3 className="text-xl font-800 text-white leading-tight">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
