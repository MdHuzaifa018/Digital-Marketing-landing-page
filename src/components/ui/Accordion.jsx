import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto" role="list">
      {items.map((item) => (
        <div 
          key={item.id} 
          className={`bg-white border-3 border-black rounded-2xl overflow-hidden transition-all duration-300 ${
            isOpen(item.id) 
              ? 'shadow-[6px_6px_0px_var(--color-primary)] -translate-y-1' 
              : 'shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1'
          }`} 
          role="listitem"
        >
          <button
            className="w-full flex items-center justify-between text-left p-6 sm:px-8 sm:py-6 cursor-pointer focus:outline-none"
            onClick={() => toggle(item.id)}
            aria-expanded={isOpen(item.id)}
            aria-controls={`accordion-content-${item.id}`}
            id={`accordion-trigger-${item.id}`}
          >
            <span className={`font-800 text-lg sm:text-xl pr-6 transition-colors ${isOpen(item.id) ? 'text-[var(--color-primary)]' : 'text-black'}`}>
              {item.question || item.title}
            </span>
            <span 
              className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 ${
                isOpen(item.id) ? 'bg-[var(--color-primary)] text-white rotate-45' : 'bg-slate-100 text-black rotate-0'
              }`}
            >
              <Plus size={20} strokeWidth={3} />
            </span>
          </button>
          
          <AnimatePresence initial={false}>
            {isOpen(item.id) && (
              <motion.div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="p-6 sm:px-8 sm:pb-8 pt-0 text-slate-700 font-500 text-[0.95rem] sm:text-base leading-relaxed">
                  <div className="w-full h-[2px] bg-slate-100 mb-6"></div>
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
