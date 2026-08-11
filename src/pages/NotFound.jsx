import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, BookOpen } from 'lucide-react';
import Container from '../components/ui/Container';
import SEO from '../components/common/SEO';
import { BRAND } from '../config/contact';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for doesn't exist. Return to the homepage or explore our courses."
      />

      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-secondary)]" style={{ paddingTop: 'var(--navbar-h)' }}>
        <Container narrow>
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* 404 Display */}
              <div
                className="text-[8rem] lg:text-[12rem] font-800 leading-none tracking-tighter mb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(124,58,237,0.15))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden="true"
              >
                404
              </div>

              <h1 className="text-heading mb-4">Looks like this page took a wrong turn.</h1>
              <p className="text-[var(--color-text-muted)] text-[1.0625rem] mb-10 max-w-md mx-auto">
                The page you're looking for doesn't exist. It may have been moved or the URL might be incorrect.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/" className="btn btn-primary btn-lg" id="404-home-btn">
                  <Home size={18} />
                  Back to Home
                </Link>
                <Link to="/courses" className="btn btn-secondary btn-lg" id="404-courses-btn">
                  <BookOpen size={18} />
                  Explore Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
