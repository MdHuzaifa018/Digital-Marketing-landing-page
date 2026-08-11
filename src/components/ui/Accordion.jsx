import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (id) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id) => openItems.includes(id);

  return (
    <div className="accordion-list" role="list">
      {items.map((item) => (
        <div key={item.id} className="accordion-item" role="listitem">
          <button
            className="accordion-trigger"
            onClick={() => toggle(item.id)}
            aria-expanded={isOpen(item.id)}
            aria-controls={`accordion-content-${item.id}`}
            id={`accordion-trigger-${item.id}`}
          >
            <span>{item.question || item.title}</span>
            <span className="accordion-icon" style={{ transform: isOpen(item.id) ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
              <Plus size={18} strokeWidth={2.5} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {isOpen(item.id) && (
              <motion.div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.id}`}
                className="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="accordion-body">
                  {item.answer || item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
