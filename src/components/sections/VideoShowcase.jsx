import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const VIDEOS = [
  {
    id: 'classroom-demo',
    title: 'Inside Our Offline Classroom in Lucknow',
    subtitle: 'See how students build live Google & Meta Ads campaigns in person with 1-on-1 mentor guidance.',
    youtubeId: 'dQw4w9WgXcQ', // Replace with client's actual YouTube Video ID
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    tag: 'Live Class Tour',
    duration: '08:45',
    featured: true,
  },
  {
    id: 'student-review-1',
    title: 'Student Success Story: From Fresher to Digital Marketer',
    subtitle: 'Hear Rahul share his journey of learning SEO, Performance Marketing, and getting hired.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    tag: 'Student Review',
    duration: '04:12',
  },
  {
    id: 'live-campaign-demo',
    title: 'How We Set Up Meta Ads Pixel & Lead Funnels',
    subtitle: 'A practical sneak peek into our advanced Facebook & Instagram advertising module.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tag: 'Practical Demo',
    duration: '06:30',
  },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const mainVideo = VIDEOS[0];
  const sideVideos = VIDEOS.slice(1);

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="video-section-heading">
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Real Classroom Experience"
            title="Watch Us In Action"
            subtitle="Take a visual tour of our offline Lucknow campus, see live campaign setups, and hear real student reviews."
            align="center"
            id="video-section-heading"
          />
        </div>

        {/* Video Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Main Large Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border-3 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000000] hover:shadow-[4px_4px_0px_#0038ff] hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
            onClick={() => setActiveVideo(mainVideo)}
          >
            {/* Video Thumbnail Box (Full Bleed) */}
            <div className="relative w-full aspect-video bg-black overflow-hidden border-b-3 border-black group-hover:border-[var(--color-primary)] transition-colors duration-300">
              <img
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag & Duration */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 bg-[var(--color-secondary)] text-black border-2 border-black text-xs font-900 uppercase font-heading tracking-wider rounded-md shadow-[2px_2px_0px_#000]">
                  {mainVideo.tag}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 z-10">
                <span className="px-3 py-1 bg-black text-white text-xs font-800 rounded-md border border-white/30 backdrop-blur-sm">
                  {mainVideo.duration}
                </span>
              </div>

              {/* Big Animated Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-secondary)] text-black border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  <Play size={32} className="ml-1 fill-current" />
                </div>
              </div>
            </div>

            {/* Video Title & Meta (Proper Padding) */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-center">
              <div className="flex items-center gap-2 text-xs font-800 text-[var(--color-primary)] uppercase tracking-wider mb-2">
                <FaYoutube className="text-red-600 size-5" />
                <span>Featured Video</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-900 text-black leading-tight mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {mainVideo.title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-500 line-clamp-2">
                {mainVideo.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Right Side Video List Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {sideVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                onClick={() => setActiveVideo(video)}
                className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_#000000] hover:shadow-[4px_4px_0px_#0038ff] hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row lg:flex-col group"
              >
                {/* Small Thumbnail */}
                <div className="relative w-full sm:w-48 lg:w-full aspect-video border-b-3 sm:border-b-0 sm:border-r-3 lg:border-r-0 lg:border-b-3 border-black overflow-hidden bg-black flex-shrink-0 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                      <Play size={18} className="ml-0.5 fill-current" />
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[0.7rem] font-800 rounded backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                  <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-[var(--color-primary)] border border-slate-300 text-[0.7rem] font-800 uppercase tracking-wider rounded self-start mb-2 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)] transition-colors">
                    {video.tag}
                  </span>
                  <h4 className="font-heading font-900 text-lg sm:text-xl text-black leading-snug mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-500 line-clamp-2">
                    {video.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>

      {/* YouTube / Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-4 border-black rounded-3xl overflow-hidden w-full max-w-4xl shadow-[12px_12px_0px_#000000] relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 bg-[var(--color-secondary)] border-b-3 border-black">
                <div className="flex items-center gap-2">
                  <FaYoutube className="text-red-600 size-6" />
                  <span className="font-heading font-900 text-lg text-black uppercase tracking-wider">
                    {activeVideo.tag}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-10 h-10 rounded-xl bg-white text-black border-2 border-black flex items-center justify-center font-900 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_#000]"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Iframe / Video Box */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              </div>

              {/* Modal Footer Info */}
              <div className="p-6 bg-white border-t-3 border-black">
                <h3 className="font-heading font-900 text-2xl text-black mb-2">
                  {activeVideo.title}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base font-500">
                  {activeVideo.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;
