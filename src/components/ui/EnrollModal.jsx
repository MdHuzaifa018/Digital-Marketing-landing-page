import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, X, User, Phone, Mail, BookOpen, Briefcase } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { CONTACT } from '../../config/contact';

const EnrollModal = () => {
  const { isEnrollModalOpen, closeModal, prefilledCourse } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Set prefilled course when modal opens
  useEffect(() => {
    if (isEnrollModalOpen && prefilledCourse) {
      setValue('course', prefilledCourse);
    }
  }, [isEnrollModalOpen, prefilledCourse, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Construct WhatsApp Message
    const text = `Hello Grow Funda! I want to enroll in the ₹999 pre-enrollment.
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Course: ${data.course}
Experience: ${data.experience}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedText}`;

    // Simulate slight delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    closeModal();
    reset();
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border-3 border-black shadow-[12px_12px_0px_#000000] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Urgency Banner */}
            <div className="bg-[var(--color-secondary)]/20 border-b-2 border-black p-3 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <p className="text-xs sm:text-sm font-800 text-black uppercase tracking-wide">
                Hurry! <span className="text-[var(--color-primary)]">₹999 Pre-Enrollment</span> Open for First 15 Seats
              </p>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-black bg-[var(--color-bg-secondary)]">
              <div>
                <h3 className="text-2xl font-900 font-heading text-black">Start Your Journey</h3>
                <p className="text-sm font-500 text-slate-700 mt-1">Fill out the form and we'll connect on WhatsApp!</p>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-slate-100 transition-colors shadow-[2px_2px_0px_#000]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Form Area */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-700 text-black">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User size={18} />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-3 bg-white border-2 text-black font-500 rounded-xl outline-none transition-all duration-200 placeholder:text-slate-400 ${
                          errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-slate-300 focus:border-black focus:shadow-[4px_4px_0px_#000]'
                        }`}
                        {...register('fullName', { required: 'Name is required' })}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-xs font-600 mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-700 text-black">
                      WhatsApp Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone size={18} />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="9876543210"
                        className={`w-full pl-10 pr-4 py-3 bg-white border-2 text-black font-500 rounded-xl outline-none transition-all duration-200 placeholder:text-slate-400 ${
                          errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-slate-300 focus:border-black focus:shadow-[4px_4px_0px_#000]'
                        }`}
                        {...register('phone', {
                          required: 'WhatsApp number is required',
                          pattern: {
                            value: /^[0-9]{10,15}$/,
                            message: 'Enter a valid phone number',
                          },
                        })}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs font-600 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-700 text-black">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail size={18} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full pl-10 pr-4 py-3 bg-white border-2 text-black font-500 rounded-xl outline-none transition-all duration-200 placeholder:text-slate-400 ${
                        errors.email ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-slate-300 focus:border-black focus:shadow-[4px_4px_0px_#000]'
                      }`}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs font-600 mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Select Course */}
                  <div className="space-y-2">
                    <label htmlFor="course" className="block text-sm font-700 text-black">
                      Interested Course *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <BookOpen size={18} />
                      </div>
                      <select
                        id="course"
                        className={`w-full pl-10 pr-10 py-3 bg-white border-2 text-black font-500 rounded-xl outline-none transition-all duration-200 appearance-none ${
                          errors.course ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-slate-300 focus:border-black focus:shadow-[4px_4px_0px_#000]'
                        }`}
                        {...register('course', { required: 'Please select a course' })}
                      >
                        <option value="" disabled>Select a Course</option>
                        <option value="Advanced Digital Marketing">Advanced Digital Marketing</option>
                        <option value="SEO Mastery">SEO Mastery</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Google Ads Expert">Google Ads Expert</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                    {errors.course && <p className="text-red-500 text-xs font-600 mt-1">{errors.course.message}</p>}
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-700 text-black">
                      Current Status *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Briefcase size={18} />
                      </div>
                      <select
                        id="experience"
                        className={`w-full pl-10 pr-10 py-3 bg-white border-2 text-black font-500 rounded-xl outline-none transition-all duration-200 appearance-none ${
                          errors.experience ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-slate-300 focus:border-black focus:shadow-[4px_4px_0px_#000]'
                        }`}
                        {...register('experience', { required: 'Please select your status' })}
                      >
                        <option value="" disabled>Select Status</option>
                        <option value="Student / Fresher">Student / Fresher</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Business Owner">Business Owner</option>
                        <option value="Freelancer">Freelancer</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                    {errors.experience && <p className="text-red-500 text-xs font-600 mt-1">{errors.experience.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-4 group overflow-hidden bg-[var(--color-primary)] text-white font-900 font-heading tracking-wide text-lg sm:text-xl py-4 px-8 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connecting to WhatsApp...
                    </span>
                  ) : (
                    <>
                      <span>Submit & Chat on WhatsApp</span>
                      <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs font-600 text-slate-500 mt-3">
                  Your information is 100% secure. We don't spam.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;
