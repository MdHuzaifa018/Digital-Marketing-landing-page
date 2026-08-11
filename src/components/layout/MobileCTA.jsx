import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from '../../config/contact';

const MobileCTA = () => {
  const whatsappUrl = WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <div
      className="mobile-cta-bar"
      role="complementary"
      aria-label="Quick enrollment actions"
    >
      <div className="flex-1 min-w-0 overflow-hidden">
        <p className="text-[0.75rem] font-600 text-[var(--color-text)] leading-tight truncate">
          Digital Marketing Course
        </p>
        <p className="text-[0.7rem] text-[var(--color-text-muted)] leading-tight">
          Offline · Lucknow
        </p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Talk on WhatsApp"
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(34,197,94,0.1)', color: '#16A34A', border: '1px solid rgba(34,197,94,0.2)' }}
        >
          <FaWhatsapp size={17} />
        </a>
        <Link to="/enroll" className="btn btn-primary btn-sm flex-shrink-0" id="mobile-cta-enroll">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default MobileCTA;
