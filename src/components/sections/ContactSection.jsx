import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { BRAND, CONTACT, SOCIAL, WHATSAPP_URL } from '../../config/contact';

const ContactSection = () => {
  const whatsappUrl = WHATSAPP_URL("Hello! I have a question about the Digital Marketing courses. Can you help?");

  return (
    <section id="contact" className="section-py" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title={<>Ready to start your<br />career in Digital Marketing?</>}
          subtitle="Reach out — we typically respond within a few hours. Drop by our center in Lucknow or contact us online."
          dark={false}
          id="contact-heading"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-12">
          {[
            {
              icon: <FaWhatsapp size={24} className="text-[#25D366]" />,
              label: 'WhatsApp',
              value: 'Chat with us',
              href: whatsappUrl,
              external: true,
              highlight: true,
            },
            {
              icon: <Phone size={24} className="text-black" />,
              label: 'Phone',
              value: CONTACT.phone,
              href: `tel:${CONTACT.phone}`,
              external: false,
            },
            {
              icon: <Mail size={24} className="text-black" />,
              label: 'Email',
              value: CONTACT.email,
              href: `mailto:${CONTACT.email}`,
              external: false,
            },
            {
              icon: <Clock size={24} className="text-black" />,
              label: 'Timings',
              value: CONTACT.timings,
              href: null,
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bento-card text-center p-8 ${item.highlight ? 'border-[#25D366]/30 bg-[#25D366]/5' : ''}`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <div className="text-xs font-800 uppercase tracking-widest text-slate-400 mb-2">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="font-700 text-black hover:text-[var(--color-primary)] transition-colors no-underline text-lg"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-700 text-black text-lg">{item.value}</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Address & Directions */}
          <div className="bento-card p-10 bg-[var(--color-bg-secondary)]">
            <span className="eyebrow mb-4 inline-block">Location</span>
            <h2 className="text-3xl font-800 tracking-tight mb-8">Find us in Lucknow.</h2>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black flex-shrink-0 border border-slate-200 shadow-[3px_3px_0px_#000]">
                <MapPin size={24} />
              </div>
              <div>
                <div className="font-800 text-lg mb-1">{BRAND.name}</div>
                <p className="text-slate-600 text-base leading-relaxed font-500">{CONTACT.address}</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-black bg-white h-[300px] flex items-center justify-center shadow-[6px_6px_0px_#000]">
              {CONTACT.mapEmbed ? (
                <iframe
                  src={CONTACT.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SkillEdge Digital location on Google Maps"
                />
              ) : (
                <div className="text-center text-slate-400 text-sm p-8 font-500">
                  <MapPin size={32} className="mx-auto mb-3 opacity-40" />
                  <p>Google Maps will be embedded here once the address is confirmed.</p>
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="bento-card p-10 bg-black text-white border-black shadow-[6px_6px_0px_#000]">
            <span className="eyebrow mb-4 inline-block bg-white/10 text-white border-white/20">Follow Us</span>
            <h2 className="text-3xl font-800 tracking-tight mb-8">Connect online.</h2>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Instagram', href: SOCIAL.instagram, icon: <FaInstagram size={22} />, color: '#E1306C' },
                { label: 'Facebook', href: SOCIAL.facebook, icon: <FaFacebookF size={22} />, color: '#1877F2' },
                { label: 'YouTube', href: SOCIAL.youtube, icon: <FaYoutube size={22} />, color: '#FF0000' },
                { label: 'LinkedIn', href: SOCIAL.linkedin, icon: <FaLinkedinIn size={22} />, color: '#0077B5' },
                { label: 'WhatsApp', href: whatsappUrl, icon: <FaWhatsapp size={22} />, color: '#25D366' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all no-underline group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ color: social.color, backgroundColor: `${social.color}20` }}>
                    {social.icon}
                  </div>
                  <span className="font-700 text-lg text-white group-hover:translate-x-1 transition-transform">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
