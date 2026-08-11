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
            eyebrow="Flagship Program"
            title="Digital Marketing Mastery"
            subtitle="The only course you need to launch a high-paying career or scale your own business. 100% practical, offline training."
            align="center"
            id="courses-preview-heading"
            spotlight={true}
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
