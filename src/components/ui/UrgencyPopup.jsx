import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const UrgencyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    // Initial delay before first popup (60 seconds)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 60000);

    // Recurring interval (every 90 seconds)
    const recurringTimer = setInterval(() => {
      setIsVisible(true);
      // Auto-hide after 8 seconds
      setTimeout(() => setIsVisible(false), 8000);
    }, 90000);

    // Auto-hide first popup after 8 seconds
    const hideInitialTimer = setTimeout(() => {
      setIsVisible(false);
    }, 68000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideInitialTimer);
      clearInterval(recurringTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] w-[calc(100%-3rem)] sm:w-[360px]"
        >
          <div className="bg-white border-3 border-black shadow-[6px_6px_0px_#000000] p-4 flex flex-col gap-3 rounded-2xl relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-50 opacity-50 pointer-events-none" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-slate-100 border border-black flex items-center justify-center hover:bg-slate-200 transition-colors z-10"
              aria-label="Close popup"
            >
              <X size={14} strokeWidth={3} />
            </button>

            <div className="flex gap-4 items-start relative z-10">
              <div className="w-12 h-12 bg-[#fff600] border-2 border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#000000] flex-shrink-0 animate-bounce" style={{ animationDuration: '2s' }}>
                <Flame size={24} className="text-red-500 fill-red-500" />
              </div>
              
              <div className="pr-4">
                <h4 className="font-900 text-sm uppercase tracking-wide text-black mb-1">
                  Hurry Up! 🔥
                </h4>
                <p className="text-xs font-600 text-slate-700 leading-tight">
                  Only <span className="text-red-600 font-900 text-[13px]">2 Seats Left</span> in the upcoming batch.
                </p>
                <button 
                  onClick={() => {
                    setIsVisible(false);
                    openModal();
                  }}
                  className="mt-3 text-xs font-900 uppercase bg-black text-white px-4 py-1.5 rounded-lg border-2 border-black hover:bg-white hover:text-black transition-colors"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UrgencyPopup;
