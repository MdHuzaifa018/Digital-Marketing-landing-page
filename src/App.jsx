import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from './layouts/MainLayout';

// Eager load: Home (critical path)
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Page transition wrapper
const PageWrapper = ({ children }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return children;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

// Loading fallback
const PageLoading = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-label="Loading page">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-[var(--color-text-muted)]">Loading...</span>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
