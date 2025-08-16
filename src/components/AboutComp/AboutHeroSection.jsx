import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';

const AboutHeroSection = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-8 h-full flex items-center py-24">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-center w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-[#2F2D73] shadow-sm border border-gray-200">
                                Web Marketing Xperts
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            <span className="block text-black">Let's Elevate</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2F2D73] to-red-600">
                                Your Digital Presence
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-gray-600 max-w-lg"
                        >
                            At <span className="font-bold text-black">WEBMARKX</span>, we are a passionate team of digital marketing experts, dedicated to elevating your brand's visibility.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-[#2F2D73] to-red-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center"
                                >
                                    Start Your Project <FiArrowRight className="ml-2" />
                                </motion.button>
                            </Link>
                            <Link to="/services">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-white border-2 border-gray-800 rounded-lg hover:border-[#2F2D73] transition-all"
                                >
                                    Explore Our Work
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content with Floating Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 relative mt-12 lg:mt-0"
                    >
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Hero Image with Border */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="relative overflow-hidden rounded-xl shadow-xl border-4 border-white"
                            >
                                <img
                                    src={Images.Team}
                                    alt="WebMarkx team collaborating"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </motion.div>

                            {/* Availability Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-lg shadow-lg flex items-center border border-gray-200"
                            >
                                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-medium text-sm text-gray-800">Available for projects</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;