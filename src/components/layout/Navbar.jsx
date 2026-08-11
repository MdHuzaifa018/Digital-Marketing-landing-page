import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Target, Search, Share2, Layers } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from '../../config/contact';
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
        <div className="bg-black text-white text-center py-2 px-4 text-xs font-600 flex items-center justify-center gap-2">
          <span>🎓 New batch starting soon in Lucknow —</span>
          <button onClick={() => openModal()} className="underline font-700 text-white hover:text-white/80 transition-colors">
            Reserve your seat now →
          </button>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 pointer-events-none ${
          location.pathname === '/' ? 'top-2' : 'top-2'
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
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-black text-white"
            >
              <span className="font-800 text-sm leading-none">SE</span>
            </div>
            <span className="font-800 text-[1.05rem] text-[var(--color-text)] tracking-tight hidden sm:block">
              {BRAND.name}
            </span>
          </Link>

          {/* ── Desktop CTAs (WhatsApp & Enroll Now) ── */}
          <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[0.85rem] font-800 text-[var(--color-text)] bg-white border-2 border-black hover:bg-[var(--color-secondary)] hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all no-underline uppercase font-heading tracking-wide"
            >
              <FaWhatsapp size={18} className="text-[#22C55E] flex-shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button onClick={() => openModal()} className="btn btn-primary btn-sm font-heading tracking-wide uppercase shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-black rounded-xl" id="navbar-enroll-cta">
              Enroll Now
            </button>
          </div>
        </div>
      </header>

    </>
  );
};

export default Navbar;
