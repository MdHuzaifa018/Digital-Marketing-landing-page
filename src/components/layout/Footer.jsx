import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Container from '../ui/Container';
import { BRAND, CONTACT, SOCIAL, WHATSAPP_URL } from '../../config/contact';
import { COURSES } from '../../data/courses';

const Footer = () => {
  const whatsappUrl = WHATSAPP_URL(
    "Hello! I have a question about SkillEdge Digital courses in Lucknow."
  );

  return (
    <footer className="bg-black text-white relative overflow-hidden" role="contentinfo">
      
      {/* Brutalist top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-secondary)]"></div>

      {/* Oversized Branding Top Section */}
      <div className="pt-24 pb-12 border-b border-white/10 relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
              <h2 className="text-[clamp(3rem,8vw,8rem)] font-900 leading-none tracking-tighter uppercase mb-4">
                {BRAND.name}.
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed font-500">
                Building real digital marketers in Lucknow through hardcore practical offline training.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram size={20} />, href: SOCIAL.instagram, label: 'Instagram' },
                { icon: <FaFacebookF size={18} />, href: SOCIAL.facebook, label: 'Facebook' },
                { icon: <FaYoutube size={20} />, href: SOCIAL.youtube, label: 'YouTube' },
                { icon: <FaLinkedinIn size={18} />, href: SOCIAL.linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Links Section */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-4">
              <h3 className="text-xs font-800 text-white uppercase tracking-widest mb-6">Lucknow Institute</h3>
              <ul className="flex flex-col gap-4 text-slate-400 font-500">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-slate-500 mt-1 flex-shrink-0" />
                  <span>{CONTACT.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-slate-500 flex-shrink-0" />
                  <span>{CONTACT.timings}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-500 flex-shrink-0" />
                  <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 mt-2">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-2 rounded-full text-sm font-700 hover:bg-[#22C55E]/20 transition-colors">
                    <FaWhatsapp size={16} /> Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 lg:col-start-6">
              <h3 className="text-xs font-800 text-white uppercase tracking-widest mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-3 font-500">
                {[
                  { label: 'Home', href: '#' },
                  { label: 'Our Courses', href: '#courses' },
                  { label: 'Why Choose Us', href: '#why-us' },
                  { label: 'Contact Us', href: '#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-slate-400 hover:text-white hover:underline transition-all">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-xs font-800 text-white uppercase tracking-widest mb-6">Offline Programs</h3>
              <ul className="flex flex-col gap-3 font-500">
                {COURSES.map((course) => (
                  <li key={course.slug}>
                    <Link to={`/courses/${course.slug}`} className="text-slate-400 hover:text-white hover:underline transition-all">
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Legal */}
      <div className="border-t border-white/10 pt-8 pb-16 relative z-10">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 text-xs font-500 text-slate-500 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <p className="mt-2 text-slate-500">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            
            <div className="flex flex-col items-center mt-6 pt-6 border-t border-white/5 w-full max-w-md mx-auto">
              <p className="flex items-center gap-1.5 text-[0.95rem] text-slate-400">
                Made with <span className="text-red-500 text-lg animate-pulse mx-0.5">❤️</span> by <span className="font-800 text-white tracking-wide">Huzaif Sheikh</span>
              </p>
              
              <div className="flex items-center gap-3 mt-4">
                <a 
                  href="https://wa.me/8434890116" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-green-500 hover:border-green-500 hover:text-white flex items-center justify-center transition-all duration-300 group"
                >
                  <FaWhatsapp size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/huzaif-sheikh-6443a6330/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-300 group"
                >
                  <FaLinkedinIn size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://latest-portfolio-huzaif-sheikh.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Portfolio"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white flex items-center justify-center transition-all duration-300 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
    </footer>
  );
};

export default Footer;
