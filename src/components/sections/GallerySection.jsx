import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Offline Classroom',
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
    shapeClass: 'rounded-[4rem_0_4rem_0] border-4 border-black',
  },
  {
    id: 2,
    title: 'Live Analytics',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    shapeClass: 'rounded-full border-4 border-black',
  },
  {
    id: 3,
    title: 'Campaign Setup',
    src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop',
    shapeClass: 'rounded-[0_4rem_0_4rem] border-4 border-[var(--color-primary)]',
  },
  {
    id: 4,
    title: 'Mentorship',
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    shapeClass: 'rounded-[2rem] border-4 border-black -rotate-3',
  },
  {
    id: 5,
    title: 'Group Projects',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    shapeClass: 'rounded-full border-4 border-[var(--color-secondary)] aspect-square',
  },
  {
    id: 6,
    title: 'Mastery Batch',
    src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
    shapeClass: 'rounded-[3rem_3rem_0_0] border-4 border-black',
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-py bg-[#f8f9fa] relative overflow-hidden" aria-labelledby="gallery-heading">
      
      {/* SVG Background Decor */}
      <svg className="absolute top-10 left-10 text-[var(--color-primary)] opacity-20 animate-spin-slow" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L56.7844 32.8465L85.3553 14.6447L67.1535 43.2156L100 50L67.1535 56.7844L85.3553 85.3553L56.7844 67.1535L50 100L43.2156 67.1535L14.6447 85.3553L32.8465 56.7844L0 50L32.8465 43.2156L14.6447 14.6447L43.2156 32.8465L50 0Z" fill="currentColor"/>
      </svg>
      <svg className="absolute bottom-20 right-10 text-[var(--color-secondary)] opacity-40 animate-bounce" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="8" strokeDasharray="10 10"/>
      </svg>

      <Container>
        <SectionHeading
          eyebrow="Life at Flybit"
          title="See our classroom in action."
          subtitle="A glimpse into our offline training batches, practical sessions, and student activities."
          align="center"
          id="gallery-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto items-center">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
              className="relative group cursor-pointer"
            >
              {/* Brutalist Shadow Box */}
              <div className={`absolute inset-0 bg-black translate-x-3 translate-y-3 -z-10 ${img.shapeClass.split(' ').filter(c => c.startsWith('rounded')).join(' ')}`} />
              
              {/* Image Container with Custom Shape */}
              <div className={`relative overflow-hidden bg-white ${img.shapeClass} aspect-[4/3] w-full transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2`}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl font-800 text-white leading-tight uppercase tracking-wider">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
