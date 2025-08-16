import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiLayers } from 'react-icons/fi';
import Images from '../../assets/images/images';

const AboutBannerSection = () => {
  const cards = [
    {
      title: "Who Are We",
      content: "We are WebMarkx, a passionate team of digital marketing experts driving brands to success with innovative strategies.",
      icon: <FiAward className="text-3xl" />,
      bgImage: Images.WhoWeAre,
      color: "bg-[#2F2D73]"
    },
    {
      title: "Our Mission",
      content: "Empowering brands with innovative digital solutions for success. Building meaningful connections in the online world, that’s our mission at WebMarkx.",
      icon: <FiTarget className="text-3xl" />,
      bgImage: Images.OurMission,
      color: "bg-red-600"
    },
    {
      title: "What We Do",
      items: [
        "Digital Marketing Excellence",
        "Creative Web Development",
        "Powerful PPC Advertising",
        "Engaging Content Creation",
        "Result-Driven SEO Optimization",
        "Tech Support"
      ],
      icon: <FiLayers className="text-3xl" />,
      bgImage: Images.DigitalMak3,
      color: "bg-black"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2F2D73]/10 to-red-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2F2D73]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-red-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F2D73] to-red-600">
            Our Identity
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-xl shadow-2xl h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={card.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${card.color} opacity-80`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col text-white">
                <div className="mb-6 text-white">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                
                {card.content ? (
                  <p className="mb-6">{card.content}</p>
                ) : (
                  <ul className="space-y-3 mb-6">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-4 border-t border-white/20">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-white text-gray-800 rounded-lg font-medium"
                  >
                    Learn more
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;