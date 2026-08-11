import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Accordion from '../ui/Accordion';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '../../data/faq';

const FAQPreview = () => {
  const previewFaqs = FAQS.slice(0, 4);

  return (
    <section className="section-py" aria-labelledby="faq-preview-heading">
      <Container narrow>
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions."
            subtitle="Quick answers to what students ask most before enrolling."
            align="center"
            id="faq-preview-heading"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Accordion items={previewFaqs} />
        </motion.div>

        <div className="text-center mt-10">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-600 text-[var(--color-primary)] hover:gap-3 transition-all duration-200 no-underline"
          >
            View All FAQs <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FAQPreview;
