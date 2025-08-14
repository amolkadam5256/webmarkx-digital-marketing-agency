import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaLightbulb, FaUsers, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Images from "../../assets/images/images";

const HomeAboutUs = () => {
  const stats = [
    { value: "200+", label: "Clients Served", icon: <FaUsers className="text-3xl" /> },
    { value: "95%", label: "Client Retention", icon: <FaChartLine className="text-3xl" /> },
    { value: "50+", label: "Campaigns", icon: <FaRocket className="text-3xl" /> },
    { value: "24/7", label: "Support", icon: <FaLightbulb className="text-3xl" /> }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text">
            TRANSFORMING <span className="text-red-600">BUSINESSES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            With Innovative Digital Marketing Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image with Read More button */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={Images.Team}
                alt="WebMarkx Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F2D73]/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Our Passionate Team</h3>
                  <p className="text-sm opacity-90">Driving your digital success</p>
                </div>
              </div>
            </motion.div>

            {/* Read More Button - Red Version with Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center lg:justify-start mt-6 lg:mt-10"
            >
              <Link
                to="/about"
                className="flex items-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <span className="font-medium">Read More About Us</span>
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                At <span className="text-[#2F2D73]">WebMarkx</span>, we are passionate about growth
              </h3>
              <p className="text-gray-600">
                We specialize in crafting digital experiences that drive results. Our team of experts combines creativity with data-driven strategies to deliver measurable impact for your business.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2F2D73]/10 text-[#2F2D73]">
                      <FaRocket />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Growth</h4>
                    <p className="text-gray-600 text-sm">
                      Customized marketing strategies tailored to your unique business needs and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 text-red-500">
                      <FaLightbulb />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovative Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      Cutting-edge digital marketing techniques that keep you ahead of the competition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                  >
                    <div className="text-[#2F2D73] mb-2">{stat.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Read More Button - Red Version */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="flex lg:hidden justify-center lg:justify-start mt-6 lg:mt-10"
      >
        <button className="flex items-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 group shadow-lg hover:shadow-xl">
          <span className="font-medium">Read More About Us</span>
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowRight />
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
};

export default HomeAboutUs;