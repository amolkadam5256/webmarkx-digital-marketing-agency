import React from 'react';
import {
    FaPlay,
    FaRocket,
    FaShieldAlt,
    FaLightbulb,
    FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';
// Update this path to your actual background image

const ServiceHeroSection = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <main className="text-black bg-white min-h-screen overflow-hidden relative pt-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={Images.Team}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container with white overlay for readability */}
            <div className="absolute inset-0 bg-red-600/12 z-1"></div>

            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-2 opacity-10">
                {[...Array(isMobile ? 15 : 30)].map((_, i) => {
                    const size = Math.random() * 20 + 10;
                    const rotation = Math.random() * 360;
                    const isCircle = Math.random() > 0.5;
                    const color = Math.random() > 0.7 ? '#EF4444' : '#2F2D73';

                    return (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                background: color,
                                borderRadius: isCircle ? '50%' : '4px',
                                transform: `rotate(${rotation}deg)`,
                                opacity: 0.3
                            }}
                        />
                    );
                })}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-red-600 px-6 py-3 rounded-full mb-8 transform hover:scale-105 transition-transform duration-300 shadow-md">
                        <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                        <span className="text-sm font-bold text-white uppercase tracking-wider">
                            Premium Digital Services
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
                        <span className="text-black">Elevate Your </span>
                        <span className="text-red-600 relative inline-block">
                            Business
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-2"
                                viewBox="0 0 200 10"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,5 Q50,10 100,5 T200,5"
                                    fill="none"
                                    stroke="#EF4444"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <span className="text-black"> With Our Expertise</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-white max-w-2xl mb-10">
                        We craft digital experiences that drive growth, engagement, and measurable results for your business.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-16">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="relative overflow-hidden group bg-red-600 hover:bg-red-700 text-white rounded-lg px-8 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto transform hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center">
                                    Get Free Consultation <FaRocket className="ml-3" />
                                </span>
                            </button>
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto">
                            <button className="relative overflow-hidden group bg-white border-2 border-white hover:bg-gray-100 text-black rounded-lg px-8 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto transform hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center">
                                    Explore Services <FaPlay className="ml-3" />
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Trust Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4 mx-auto">
                                <FaShieldAlt className="text-2xl" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-black">Secure</h3>
                            <p className="text-gray-700 text-sm">Enterprise-grade data protection and privacy</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-16 h-16 rounded-xl bg-[#2F2D73]/10 flex items-center justify-center text-[#2F2D73] mb-4 mx-auto">
                                <FaLightbulb className="text-2xl" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-black">Innovative</h3>
                            <p className="text-gray-700 text-sm">Cutting-edge solutions for your business</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-16 h-16 rounded-xl bg-[#2F2D73]/10 flex items-center justify-center text-[#2F2D73] mb-4 mx-auto">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-black">Global</h3>
                            <p className="text-gray-700 text-sm">Worldwide reach with localized expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceHeroSection;