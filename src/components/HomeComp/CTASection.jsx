import React, { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiBarChart2, FiUsers, FiMail, FiXCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Web3Forms submission
    const formData = new FormData();
    formData.append('access_key', 'a2511336-0d67-4ff3-863d-6feee061652f'); // Your actual access key
    formData.append('email', email);
    formData.append('from_name', 'Marketing Newsletter Subscription');
    formData.append('subject', 'New Newsletter Subscriber');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError(data.message || 'Submission failed. Please try again.');
        console.error('Submission failed:', data);
      }
    } catch (error) {
      setError('Network error occurred. Please check your connection and try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const statItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      className="py-16 sm:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Floating cards background */}
          <div className="hidden lg:block absolute -top-20 -left-20 w-64 h-64 rounded-2xl bg-[#2F2D73]/10 blur-xl opacity-70"></div>
          <div className="hidden lg:block absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-red-600/10 blur-xl opacity-70"></div>

          {/* Main content */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200"
            variants={item}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left text content */}
              <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
                <motion.div variants={item}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2F2D73]/10 text-[#2F2D73] mb-4">
                    <FiMail className="mr-2" /> Join Our Community
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-black mb-4 leading-tight"
                  variants={item}
                >
                  Transform Your Marketing Strategy
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-700 mb-8"
                  variants={item}
                >
                  Get actionable insights, exclusive content, and expert tips delivered weekly to your inbox.
                </motion.p>

                {error && (
                  <motion.div
                    className="bg-red-50 border border-red-100 p-4 rounded-lg flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiXCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-red-800">Submission Error</h4>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                    <button 
                      onClick={() => setError(null)}
                      className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}

                {submitted ? (
                  <motion.div
                    className="bg-green-50 border border-green-100 p-4 rounded-lg flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">Thank you for subscribing!</h4>
                      <p className="text-green-600 text-sm">We've sent a confirmation to your email.</p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-2xl"
                    variants={item}
                  >
                    <input type="hidden" name="access_key" value="735efc9c-d698-420a-86ee-72b8a78779e4" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="hidden" name="from_name" value="Marketing Newsletter Subscription" />
                    <input type="hidden" name="subject" value="New Newsletter Subscriber" />
                    
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-3.5 rounded-lg border border-gray-300 focus:border-[#2F2D73] focus:ring-2 focus:ring-[#2F2D73]/20 outline-none transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`px-6 py-3.5 ${
                        isLoading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-[#2F2D73] hover:bg-[#1E1D4E]'
                      } text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm hover:shadow-md min-w-[150px]`}
                    >
                      {isLoading ? (
                        'Submitting...'
                      ) : (
                        <>
                          Subscribe Now
                          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}

                <motion.p
                  className="text-gray-600 text-sm mt-4"
                  variants={item}
                >
                  We respect your privacy. Unsubscribe anytime.
                </motion.p>
              </div>

              {/* Right stats content */}
              <div className="lg:col-span-2 bg-gray-50 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={container}
                >
                  <motion.div
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
                    variants={statItem}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#2F2D73]/10 rounded-lg text-[#2F2D73]">
                        <FiUsers className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">Community</span>
                    </div>
                    <div className="text-3xl font-bold text-black">3,500+</div>
                    <p className="text-gray-600 text-sm mt-1">Marketing professionals</p>
                  </motion.div>

                  <motion.div
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
                    variants={statItem}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-red-600/10 rounded-lg text-red-600">
                        <FiBarChart2 className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">Open Rate</span>
                    </div>
                    <div className="text-3xl font-bold text-black">98%</div>
                    <p className="text-gray-600 text-sm mt-1">Industry leading</p>
                  </motion.div>

                  <motion.div
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 col-span-2"
                    variants={statItem}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 bg-red-600/10 rounded-lg text-red-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-black">Premium Content</h4>
                        <p className="text-gray-600 text-sm mt-1">Exclusive resources for subscribers</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div> 
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;