import React, { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiBarChart2, FiUsers, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
          <div className="hidden lg:block absolute -top-20 -left-20 w-64 h-64 rounded-2xl bg-blue-50/50 blur-xl opacity-70"></div>
          <div className="hidden lg:block absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-pink-50/50 blur-xl opacity-70"></div>
          
          {/* Main content */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
            variants={item}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left text content */}
              <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
                <motion.div variants={item}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                    <FiMail className="mr-2" /> Join Our Community
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                  variants={item}
                >
                  Transform Your Marketing Strategy
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8"
                  variants={item}
                >
                  Get actionable insights, exclusive content, and expert tips delivered weekly to your inbox.
                </motion.p>

                {submitted ? (
                  <motion.div 
                    className="bg-green-50 border border-green-100 p-4 rounded-lg flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <FiCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">Thank you for subscribing!</h4>
                      <p className="text-green-600 text-sm">Check your email for confirmation.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-2xl"
                    variants={item}
                  >
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-3.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm hover:shadow-md"
                    >
                      Subscribe Now
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                )}

                <motion.p 
                  className="text-gray-500 text-sm mt-4"
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
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <FiUsers className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-500">Community</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">3,500+</div>
                    <p className="text-gray-500 text-sm mt-1">Marketing professionals</p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
                    variants={statItem}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-lg text-green-600">
                        <FiBarChart2 className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-500">Open Rate</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">98%</div>
                    <p className="text-gray-500 text-sm mt-1">Industry leading</p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 col-span-2"
                    variants={statItem}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg text-purple-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Premium Content</h4>
                        <p className="text-gray-500 text-sm mt-1">Exclusive resources for subscribers</p>
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