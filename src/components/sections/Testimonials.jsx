import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        fill={i < rating ? '#F59E0B' : 'none'}
        stroke={i < rating ? '#F59E0B' : '#CBD5E1'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="h-full flex flex-col p-8 bg-white rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] relative group hover:-translate-y-2 transition-transform duration-300">
    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote size={60} className="text-[var(--color-primary)]" />
    </div>
    
    <StarRating rating={testimonial.rating} />
    
    <blockquote className="flex-1 mb-8">
      <p className="text-black font-600 text-lg sm:text-xl leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </blockquote>
    
    <div className="flex items-center gap-4 mt-auto">
      {/* Avatar placeholder */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-900 text-xl border-2 border-black flex-shrink-0 shadow-[2px_2px_0px_#000000]"
        style={{ background: 'var(--color-primary)' }}
        aria-hidden="true"
      >
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <div className="font-800 text-black text-lg">{testimonial.name}</div>
        <div className="text-sm font-600 text-slate-500">{testimonial.role}</div>
        {testimonial.highlight && (
          <span className="inline-block mt-1 text-[0.7rem] font-800 tracking-wider uppercase text-black bg-[var(--color-secondary)] border border-black px-2.5 py-0.5 rounded-full">
            {testimonial.highlight}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Student Success"
              title={<>Don't just take our<br />word for it.</>}
              subtitle="Real experiences from students who transformed their careers with Flybitfalcon."
              align="left"
              id="testimonials-heading"
            />
          </div>
          
          {/* Custom Navigation Arrows */}
          <div className="flex gap-4 self-start md:self-end">
            <button 
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 rounded-full border-2 border-black bg-white text-black flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-slate-100 transition-all z-10"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 rounded-full border-2 border-black bg-[var(--color-primary)] text-white flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:brightness-110 transition-all z-10"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            onSwiper={setSwiper}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'swiper-custom-bullet',
              bulletActiveClass: 'swiper-custom-bullet-active',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-16 px-2 pt-2 -mx-2"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
