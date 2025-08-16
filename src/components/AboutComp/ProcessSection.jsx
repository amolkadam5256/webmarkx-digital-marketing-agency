import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiMap, 
  FiLayout, 
  FiCode, 
  FiUpload, 
  FiCheckCircle, 
  FiArrowRight 
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: <FiSearch className="text-3xl" />,
      description: "In the first step of the 6D process, we explore and gather insights about your project's objectives, target audience, and requirements, setting the foundation for a successful development journey.",
      path: "/services/discovery",
      color: "from-[#2F2D73] to-[#2F2D73]"
    },
    {
      number: "02",
      title: "Define",
      icon: <FiMap className="text-3xl" />,
      description: "In this phase, we analyze the gathered information and define a clear roadmap, outlining project scope, timelines, and key deliverables, ensuring a well-defined direction for the entire process.",
      path: "/services/strategy",
      color: "from-[#2F2D73] to-[#2F2D73]"
    },
    {
      number: "03",
      title: "Design",
      icon: <FiLayout className="text-3xl" />,
      description: "Next, our expert team crafts innovative and visually captivating designs, tailoring solutions to match your brand identity and user preferences, creating a seamless user experience.",
      path: "/services/design",
      color: "from-red-600 to-red-600"
    },
    {
      number: "04",
      title: "Develop",
      icon: <FiCode className="text-3xl" />,
      description: "With the design approved, we move forward with the development stage, utilizing cutting-edge technologies to transform concepts into fully functional and feature-rich applications.",
      path: "/services/development",
      color: "from-[#2F2D73] to-[#2F2D73]"
    },
    {
      number: "05",
      title: "Deploy",
      icon: <FiUpload className="text-3xl" />,
      description: "After thorough testing and quality assurance, we deploy the project to its intended platform, ensuring a smooth and seamless launch.",
      path: "/services/deployment",
      color: "from-red-600 to-red-600"
    },
    {
      number: "06",
      title: "Deliver",
      icon: <FiCheckCircle className="text-3xl" />,
      description: "Finally, we deliver the completed project to you, providing ongoing support and maintenance to ensure optimal performance and success.",
      path: "/services/support",
      color: "from-[#2F2D73] to-[#2F2D73]"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* SEO-Friendly Hidden Content */}
      <div className="sr-only">
        <h1>WebMarkx 6D Process Methodology</h1>
        <p>Our comprehensive digital development process ensures successful project delivery through discovery, definition, design, development, deployment, and delivery phases.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-[#2F2D73] shadow-sm border border-gray-200 mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F2D73] to-red-600">
              6-D Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven framework that transforms your vision into exceptional digital experiences
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#2F2D73] to-red-600 transform -translate-x-1/2 z-0"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'lg:mb-16' : 'lg:mt-16'}`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#2F2D73] to-red-600 flex items-center justify-center text-white text-2xl font-bold z-10">
                  {step.number}
                </div>
                
                {/* Step Card */}
                <Link to={step.path} className="block h-full">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-r ${step.color} p-6 flex items-center`}>
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <div className="flex items-center text-[#2F2D73] font-medium">
                        Learn more <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#2F2D73] to-red-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Project Journey Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;