import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import CourseCard from '../ui/CourseCard';
import { COURSES } from '../../data/courses';

const CoursePreview = () => {
  // Show top 3 courses on homepage
  const featured = COURSES.slice(0, 3);

  const flagshipCourse = COURSES[0];

  return (
    <section id="courses" className="pt-24 sm:pt-32 pb-16 sm:pb-24" aria-labelledby="courses-preview-heading">
      <Container>
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Flagship Practical Program"
            title="Master Digital Marketing"
            subtitle="Complete practical offline training program in Lucknow — real tools, live campaigns, 1-on-1 mentorship, and job readiness."
            align="center"
            id="courses-preview-heading"
          />
        </div>

        <div className="max-w-5xl mx-auto px-2">
          {flagshipCourse && <CourseCard course={flagshipCourse} index={0} />}
        </div>
      </Container>
    </section>
  );
};

export default CoursePreview;
