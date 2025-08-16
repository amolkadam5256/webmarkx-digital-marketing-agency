import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);


  const features = [
    {
      title: "Innovative Solutions",
      icon: "💡",
      description: "Cutting-edge digital marketing strategies that leverage AI, automation, and creative thinking to put you ahead of competitors.",
      benefits: [
        "AI-powered analytics",
        "Automation integration",
        "Creative campaign strategies"
      ],
      bgImage: "bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
    },
    {
      title: "Customized Approach",
      icon: "✂️",
      description: "Tailored solutions designed specifically for your business goals, audience, and industry challenges.",
      benefits: [
        "Personalized strategy sessions",
        "Industry-specific solutions",
        "Custom reporting dashboards"
      ],
      bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
    },
    {
      title: "Experienced Team",
      icon: "👥",
      description: "Digital natives with 12+ years experience who eat, sleep, and breathe digital marketing excellence.",
      benefits: [
        "Certified professionals",
        "Diverse expertise",
        "Continuous training"
      ],
      bgImage: "bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
    },
    {
      title: "Proven Track Record",
      icon: "📈",
      description: "Trusted by 500+ brands across industries to deliver measurable ROI and business growth.",
      benefits: [
        "Case studies available",
        "Client testimonials",
        "Performance guarantees"
      ],
      bgImage: "bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80')]"
    },
    {
      title: "Collaborative Partnership",
      icon: "🤝",
      description: "We become an extension of your team, working closely to align with your vision and objectives.",
      benefits: [
        "Dedicated account managers",
        "Regular strategy meetings",
        "Transparent communication"
      ],
      bgImage: "bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
    },
    {
      title: "Continuous Support",
      icon: "🛟",
      description: "Ongoing optimization, monthly reporting, and 24/7 support to ensure your success never stops.",
      benefits: [
        "24/7 technical support",
        "Monthly performance reviews",
        "Continuous A/B testing"
      ],
      bgImage: "bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setActiveFeature(prev => (prev === features.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, features.length]);

  const nextFeature = () => {
    setIsAutoRotating(false);
    setActiveFeature(prev => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setIsAutoRotating(false);
    setActiveFeature(prev => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#2F2D73] opacity-10"></div>
        <div className="absolute bottom-10 -right-20 w-64 h-64 md:w-80 md:h-80 rounded-full bg-red-100 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black"
          >
            Why <span className="text-[#2F2D73]">Choose</span> <span className="text-red-600">WebMarkx</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-800"
          >
            Choose us for innovative digital marketing solutions tailored to your needs.
          </motion.p>
        </div>

        {/* Mobile Layout (stacked) */}
        <div className="lg:hidden flex flex-col space-y-8">
          {/* Left Side - Static Display */}
          <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2D73] mb-4 sm:mb-6">Our Differentiators</h3>
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`w-full p-3 sm:p-4 rounded-lg ${activeFeature === index
                    ? 'bg-gradient-to-r from-[#2F2D73] to-red-600 text-white shadow-md'
                    : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">{feature.title}</h3>
                      <p className="text-xs sm:text-sm mt-1 opacity-80">
                        {feature.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Active Feature */}
          <div className={`${features[activeFeature].bgImage} w-full h-64 sm:h-80 bg-cover bg-center rounded-xl overflow-hidden shadow-lg relative`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 w-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#2F2D73] to-red-600 text-white text-xl">
                    {features[activeFeature].icon}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevFeature}
                      className="p-1 sm:p-2 rounded-full bg-[#2F2D73]/10 hover:bg-[#2F2D73]/20 text-[#2F2D73] transition-all"
                    >
                      <FiArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                    <button
                      onClick={nextFeature}
                      className="p-1 sm:p-2 rounded-full bg-[#2F2D73]/10 hover:bg-[#2F2D73]/20 text-[#2F2D73] transition-all"
                    >
                      <FiArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2F2D73] mb-2">{features[activeFeature].title}</h3>
                <p className="text-gray-800 text-sm sm:text-base mb-3">{features[activeFeature].description}</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-[#2F2D73] to-red-600 h-full rounded-full"
                    style={{ width: `${(activeFeature + 1) * (100 / features.length)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (side by side) */}
        <div className="hidden lg:block relative h-[600px] lg:h-[700px]">
          {/* Left Side - Static Display */}
          <div className="absolute left-0 top-0 w-1/2 h-full pr-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-[#2F2D73] mb-6">Our Differentiators</h3>
              <div className="space-y-4 h-[calc(100%-60px)] overflow-y-auto no-scrollbar">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`w-full p-4 rounded-lg ${activeFeature === index
                      ? 'bg-gradient-to-r from-[#2F2D73] to-red-600 text-white shadow-md'
                      : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <p className="text-sm mt-1 opacity-80">
                          {feature.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Active Feature */}
          <div className={`${features[activeFeature].bgImage} absolute right-0 top-0 w-1/2 h-full bg-cover bg-center rounded-2xl overflow-hidden shadow-xl`}>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg w-full max-w-lg border border-gray-200">
                <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#2F2D73] to-red-600 text-white text-2xl">
                    {features[activeFeature].icon}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevFeature}
                      className="p-2 rounded-full bg-[#2F2D73]/10 hover:bg-[#2F2D73]/20 text-[#2F2D73] transition-all"
                    >
                      <FiArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextFeature}
                      className="p-2 rounded-full bg-[#2F2D73]/10 hover:bg-[#2F2D73]/20 text-[#2F2D73] transition-all"
                    >
                      <FiArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-[#2F2D73]">{features[activeFeature].title}</h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  {features[activeFeature].description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {features[activeFeature].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-800">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm uppercase tracking-wider text-gray-800">
                      Feature {activeFeature + 1} of {features.length}
                    </span>
                    <span className="text-[#2F2D73] font-medium">
                      {Math.round(((activeFeature + 1) / features.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#2F2D73] to-red-600 h-2 rounded-full"
                      style={{ width: `${(activeFeature + 1) * (100 / features.length)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;