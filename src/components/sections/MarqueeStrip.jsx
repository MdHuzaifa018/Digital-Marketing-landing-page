import {
  Sparkles,
  Search,
  Target,
  FileText,
  TrendingUp,
  Zap,
  Bot,
  Layers,
} from 'lucide-react';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';

const MARQUEE_ITEMS = [
  { name: 'Digital Marketing', icon: <Sparkles className="text-blue-600 size-6" /> },
  { name: 'SEO Mastery', icon: <Search className="text-purple-600 size-6" /> },
  { name: 'Google Ads (PPC)', icon: <FaGoogle className="text-red-500 size-6" /> },
  { name: 'Meta Ads Manager', icon: <FaFacebook className="text-blue-600 size-6" /> },
  { name: 'Social Media Growth', icon: <FaInstagram className="text-pink-500 size-6" /> },
  { name: 'Content Marketing', icon: <FileText className="text-indigo-600 size-6" /> },
  { name: 'Web Analytics & GA4', icon: <TrendingUp className="text-emerald-600 size-6" /> },
  { name: 'Performance Marketing', icon: <Zap className="text-amber-500 size-6" /> },
  { name: 'AI Marketing Tools', icon: <Bot className="text-sky-600 size-6" /> },
  { name: 'Marketing Funnels', icon: <Layers className="text-purple-700 size-6" /> },
];

const MarqueeStrip = ({ dark = false, reverse = false }) => {
  // Duplicate items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className={`py-8 sm:py-12 overflow-hidden ${
        dark
          ? 'bg-black text-white'
          : 'bg-white text-black'
      }`}
      aria-hidden="true"
    >
      <div className="marquee-wrapper">
        <div className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}>
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3.5 px-7 py-3.5 rounded-2xl bg-slate-50 border-2 sm:border-3 border-black shadow-[4px_4px_0px_#000000] text-xl sm:text-2xl lg:text-3xl font-heading uppercase tracking-wider whitespace-nowrap text-black shrink-0"
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="font-heading tracking-wide leading-none">{item.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
