import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, User, Phone, Mail, BookOpen } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const EnrollFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="enroll" className="section-py" aria-labelledby="enroll-heading">
      <Container>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Heading & Cutout Image */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <SectionHeading
              eyebrow="Admissions Open"
              title="Reserve Your Seat"
              subtitle="Fill out the form below to apply for the upcoming batch. Our team will contact you shortly with the complete details."
              dark={false}
              align="left"
              id="enroll-heading"
              className="lg:items-start"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block mt-12 w-full max-w-[320px] relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-secondary)] rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
              <img 
                src="/images/course-banner.png" 
                alt="Digital Marketing Mentorship" 
                className="w-full h-auto object-contain drop-shadow-[15px_15px_0px_var(--color-primary)] hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 w-full bg-white p-8 md:p-12 rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] mt-10 lg:mt-0"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 border-3 border-green-600 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_#16a34a]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-900 font-heading tracking-tight mb-4 text-black">Application Received!</h3>
                <p className="text-slate-600 text-lg max-w-md mx-auto font-500">
                  Thank you for your interest. Our academic counselor will call you within 24 hours to discuss the batch schedule and fee structure.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 btn border-2 border-black hover:bg-slate-100 font-700"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-800 text-slate-800 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl text-black font-600 focus:outline-none focus:ring-0 transition-all ${
                          errors.fullName ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-black'
                        }`}
                        {...register('fullName', { required: 'Full name is required' })}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-sm font-600 mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-800 text-slate-800 uppercase tracking-wide">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone size={18} className="text-slate-400" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl text-black font-600 focus:outline-none focus:ring-0 transition-all ${
                          errors.phone ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-black'
                        }`}
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9+\-\s()]{10,15}$/,
                            message: 'Please enter a valid phone number'
                          }
                        })}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm font-600 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-800 text-slate-800 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail size={18} className="text-slate-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl text-black font-600 focus:outline-none focus:ring-0 transition-all ${
                          errors.email ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-black'
                        }`}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm font-600 mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Course Interested */}
                  <div className="space-y-2">
                    <label htmlFor="course" className="block text-sm font-800 text-slate-800 uppercase tracking-wide">
                      Course Interested In
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <BookOpen size={18} className="text-slate-400" />
                      </div>
                      <select
                        id="course"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-300 rounded-xl text-black font-600 focus:outline-none focus:ring-0 focus:border-black transition-all appearance-none cursor-pointer"
                        {...register('course')}
                      >
                        <option value="Digital Marketing Mastery">Digital Marketing Mastery (Flagship)</option>
                        <option value="SEO Mastery">SEO Mastery</option>
                        <option value="Performance Marketing">Performance Marketing (Ads)</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary btn-lg w-full text-lg justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px]`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Apply Now <Send size={18} />
                      </span>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 font-500 mt-4">
                    By submitting this form, you agree to our privacy policy and consent to be contacted regarding our courses.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EnrollFormSection;
