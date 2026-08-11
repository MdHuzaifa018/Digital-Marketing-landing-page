import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < rating ? '#F59E0B' : 'none'}
        stroke={i < rating ? '#F59E0B' : '#CBD5E1'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="card h-full flex flex-col">
    <StarRating rating={testimonial.rating} />
    <blockquote className="mt-4 flex-1">
      <p className="text-[var(--color-text)] leading-relaxed text-[0.9375rem] italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </blockquote>
    <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center gap-3">
      {/* Avatar placeholder */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-700 text-sm flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
        aria-hidden="true"
      >
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <div className="font-600 text-sm text-[var(--color-text)]">{testimonial.name}</div>
        <div className="text-xs text-[var(--color-text-muted)]">{testimonial.role}</div>
        {testimonial.highlight && (
          <span className="inline-block mt-0.5 text-[0.7rem] font-600 text-[var(--color-primary)] bg-[var(--color-primary)]/8 px-2 py-0.5 rounded-full">
            {testimonial.highlight}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="section-py" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          eyebrow="Student Stories"
          title="What our students say."
          subtitle="Real experiences from students who trained at SkillEdge Digital."
          align="center"
          className="mb-14"
          id="testimonials-heading"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <p className="text-center text-xs text-[var(--color-text-muted)] mt-4 italic">
          * These are placeholder testimonials. Real student testimonials will be added before launch.
        </p>
      </Container>
    </section>
  );
};

export default Testimonials;
