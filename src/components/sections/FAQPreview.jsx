import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Accordion from '../ui/Accordion';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '../../data/faq';

const FAQPreview = () => {
  return (
    <section id="faq" className="section-py" aria-labelledby="faq-heading">
      <Container narrow>
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions."
            subtitle="Quick answers to what students ask most before enrolling."
            align="center"
            id="faq-heading"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Accordion items={FAQS} />
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQPreview;
