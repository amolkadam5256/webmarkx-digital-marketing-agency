import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const OurBenefits = () => {
  const benefits = {
    title: "WHY CHOOSE US",
    heading: "Amplify Your Digital Presence",
    subtitle: "Innovative solutions that drive measurable results and growth",
    stats: [
      { name: "Lead Generation", value: 90, color: "#FF4D4D" },
      { name: "Customer Engagement", value: 100, color: "#2F2D73" },
      { name: "ROI Improvement", value: 95, color: "#FF4D4D" },
      { name: "Cost Efficiency", value: 85, color: "#2F2D73" },
    ],
    features: [
      {
        title: "Data-Driven Approach",
        icon: "📈",
        description: "AI-powered analytics for precision targeting",
      },
      {
        title: "24/7 Support",
        icon: "🛠️",
        description: "Dedicated team always ready to assist",
      },
      {
        title: "Custom Strategies",
        icon: "✨",
        description: "Tailored solutions for your unique needs",
      },
      {
        title: "Proven Results",
        icon: "🏆",
        description: "Track record of successful campaigns",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.4 },
    },
  };

  const statBarVariants = {
    hidden: { width: 0 },
    visible: (value) => ({
      width: `${value}%`,
      transition: { duration: 1.5, ease: "anticipate" },
    }),
  };

  return (
    <section className="relative py-16 md:py-24">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4D4D] rounded-full blur-[90px] opacity-10 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#2F2D73] rounded-full blur-[100px] opacity-10 -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full blur-[60px] opacity-5 -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Heading Section - Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            <motion.span
              className="inline-block px-4 py-1 bg-[#FF4D4D]/10 text-[#FF4D4D] rounded-full text-sm font-semibold mb-1"
              variants={itemVariants}
            >
              {benefits.title}
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2"
              variants={itemVariants}
            >
              {benefits.heading}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              variants={itemVariants}
            >
              {benefits.subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Content Section - Image Left, Content Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center"
        >
          {/* Left Side - Image */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration for digital growth"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-5 right-5 bg-white px-5 py-2 rounded-2xl shadow-xl border border-gray-100"
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-2xl text-red-600">100%</p>
                    <p className="text-gray-600 text-lg font-bold">Growth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Stats in Creative Layout */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {benefits.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 p-4 md:p-5 rounded-xl hover:shadow-sm transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-800">{stat.name}</h4>
                    <span
                      className="font-bold text-xl md:text-2xl"
                      style={{ color: stat.color }}
                    >
                      {stat.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: stat.color }}
                      variants={statBarVariants}
                      custom={stat.value}
                      initial="hidden"
                      animate="visible"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Features with Icons */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {benefits.features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-lg border border-gray-200 hover:border-[#2F2D73]/20 hover:bg-gray-50 transition-all group"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl p-2 bg-gray-50 rounded-lg group-hover:bg-[#2F2D73]/10 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              className="text-gray-600"
              variants={itemVariants}
            >
              <p>Our comprehensive digital solutions are designed to elevate your brand, engage your audience, and deliver tangible business outcomes through cutting-edge technology and creative strategies.</p>
            </motion.div>

            {/* CTA with Animated Arrow - Updated with proper Link */}
            <motion.div
              className="pt-4"
              variants={itemVariants}
            >
              <Link to="/contact" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:shadow-md transition-all group"
                >
                  Get Started Today
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurBenefits;