import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EnrollModal from '../components/ui/EnrollModal';
import UrgencyPopup from '../components/ui/UrgencyPopup';
import BackToTop from '../components/ui/BackToTop';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainLayout = ({ children }) => {
  const lenisRef = useRef(null);
  const location = useLocation();

  // Initialize Lenis smooth scroll and GSAP ScrollTrigger
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
      });

      lenisRef.current = lenis;

      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      return () => {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
      };
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Refresh ScrollTrigger after route change and scroll reset
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[var(--navbar-h)] relative z-10" id="main-content">
        {children}
      </main>
      <Footer />
      
      {/* Global Modals & Popups */}
      <EnrollModal />
      <UrgencyPopup />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
