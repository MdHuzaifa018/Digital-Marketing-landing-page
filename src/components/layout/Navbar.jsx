import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Target, Search, Share2, Layers, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND, CONTACT, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE, RAZORPAY_PRE_ENROLL_LINK } from '../../config/contact';
import { NAV_LINKS } from '../../data/navigation';
import { COURSES } from '../../data/courses';
import { useModal } from '../../context/ModalContext';

const COURSE_ICONS = {
  'digital-marketing-mastery': <Sparkles size={18} className="text-indigo-600" />,
  'seo-mastery': <Search size={18} className="text-blue-600" />,
  'google-ads-mastery': <Target size={18} className="text-amber-600" />,
  'meta-ads-mastery': <Layers size={18} className="text-purple-600" />,
  'social-media-marketing': <Share2 size={18} className="text-emerald-600" />,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setCoursesOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const whatsappUrl = WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <>
      {/* Top Announcement Bar (Home page only) */}
      {location.pathname === '/' && (
        <div className="bg-black text-white text-center py-2 px-2 text-xs font-600 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 min-h-[48px] sm:min-h-[40px]">
          <span>🎓 New batch starting soon in Lucknow —</span>
          <button onClick={() => openModal()} className="underline font-700 text-white hover:text-[var(--color-secondary)] transition-colors">
            Reserve your seat now →
          </button>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 pointer-events-none ${
          location.pathname === '/' && !scrolled ? 'top-[52px] sm:top-[44px]' : 'top-2'
        }`}
        role="banner"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between gap-6 w-full max-w-[1280px] mx-auto transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-2 border-black shadow-[4px_4px_0px_#000000] py-2.5 px-6 rounded-2xl'
              : 'py-2 px-4 sm:px-8'
          }`}
        >


          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline flex-shrink-0"
            aria-label={`${BRAND.name} — Home`}
          >
            <div className="h-10 w-10 overflow-hidden flex-shrink-0 flex items-center justify-center rounded-full bg-black border border-amber-400/40 shadow-sm">
              <img src="/logo.png" alt="Flybitfalcon Logo" className="h-full w-full object-cover object-center" />
            </div>
            <span className="font-800 text-[1.05rem] text-[var(--color-text)] tracking-tight hidden sm:block">
              {BRAND.name}
            </span>
          </Link>

          {/* ── Desktop CTAs (Support Phone, WhatsApp & Razorpay Pre-Enroll) ── */}
          <div className="flex items-center gap-2.5 flex-shrink-0 ml-auto">
            {/* Support Phone Link */}
            <a
              href={`tel:${CONTACT.supportPhone}`}
              title={`Call Support: ${CONTACT.supportPhone}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-[0.82rem] font-800 text-[var(--color-text)] bg-white border-2 border-black hover:bg-amber-100 transition-all no-underline shadow-[2px_2px_0px_#000]"
            >
              <PhoneCall size={15} className="text-amber-600 shrink-0" />
              <span>{CONTACT.supportPhone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-[0.85rem] font-800 text-[var(--color-text)] bg-white border-2 border-black hover:bg-[var(--color-secondary)] hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all no-underline uppercase font-heading tracking-wide"
            >
              <FaWhatsapp size={18} className="text-[#22C55E] flex-shrink-0" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Pre-Enrollment / Razorpay Link Button */}
            {RAZORPAY_PRE_ENROLL_LINK ? (
              <a
                href={RAZORPAY_PRE_ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm font-heading tracking-wide uppercase shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-black rounded-xl no-underline inline-flex items-center justify-center"
                id="navbar-pre-enroll-cta"
              >
                Pre-Enroll Now
              </a>
            ) : (
              <button onClick={() => openModal()} className="btn btn-primary btn-sm font-heading tracking-wide uppercase shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-black rounded-xl" id="navbar-enroll-cta">
                Pre-Enroll Now
              </button>
            )}
          </div>
        </div>
      </header>

    </>
  );
};

export default Navbar;
