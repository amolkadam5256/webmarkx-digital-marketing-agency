import React from 'react';
import {
    FaPlay,
    FaRocket,
    FaShieldAlt,
    FaLightbulb,
    FaGlobe,
    FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';

const ServiceHeroSection = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <main className="text-black bg-white min-h-screen overflow-hidden relative pt-10">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={Images.Team}
                    alt="Background"
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute  inset-0 bg-gradient-to-r from-red-600/30 via-black/40 to-[#2F2D73]/30"></div>
            </div>

            {/* Animated geometric background elements */}
            <div className="absolute inset-0 overflow-hidden z-2">
                {[...Array(isMobile ? 20 : 40)].map((_, i) => {
                    const size = Math.random() * 30 + 15;
                    const rotation = Math.random() * 360;
                    const isCircle = Math.random() > 0.6;
                    const color = Math.random() > 0.7 ? '#EF4444' : '#2F2D73';
                    const animationDelay = Math.random() * 2;

                    return (
                        <div
                            key={i}
                            className="absolute animate-float"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                background: color,
                                borderRadius: isCircle ? '50%' : '4px',
                                transform: `rotate(${rotation}deg)`,
                                opacity: 0.15,
                                animationDelay: `${animationDelay}s`
                            }}
                        />
                    );
                })}
            </div>

            {/* Main content with red shadow effect on top */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 ">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left content */}
                    <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-red-600 px-6 py-3 rounded-full mb-8 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
                            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                            <span className="text-sm font-bold text-white uppercase tracking-wider">
                                OUR SERVICES
                            </span>
                        </div>

                        {/* Main Heading with creative typography */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                            <span className="text-white">Stimulate </span>
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
                            <span className="text-white block mt-2">Evolution</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-gray-200 max-w-md mb-10 leading-relaxed">
                            We craft digital experiences that drive growth, engagement, and measurable results for your business.
                        </p>

                        {/* Buttons with improved styling */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <Link to="/contact" className="w-full sm:w-auto">
                                <button className="relative overflow-hidden group bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto transform hover:-translate-y-1 flex items-center justify-center">
                                    <span className="relative z-10 flex items-center justify-center">
                                        Get Free Consultation
                                        <span className="ml-3 group-hover:translate-x-1 transition-transform">
                                            <FaRocket />
                                        </span>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                            </Link>
                            <Link to="/services" className="w-full sm:w-auto">
                                <button className="relative overflow-hidden group bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-xl px-8 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto transform hover:-translate-y-1 flex items-center justify-center">
                                    <span className="relative z-10 flex items-center justify-center">
                                        Explore Services
                                        <span className="ml-3 group-hover:translate-x-1 transition-transform">
                                            <FaArrowRight />
                                        </span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right content - Enhanced Trust Cards */}
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Card 1 */}
                        <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-white/10 transform hover:scale-[1.03] transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600/20 rounded-full blur-lg"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-400 mb-3 group-hover:bg-red-600/30 transition-colors group-hover:scale-110">
                                    <FaShieldAlt className="text-xl" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-white">Secure</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">Enterprise-grade data protection and privacy</p>
                                <div className="flex items-center mt-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs mr-1">Learn more</span>
                                    <FaArrowRight className="text-xs" />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-white/10 transform hover:scale-[1.03] transition-all duration-300 hover:shadow-xl group relative overflow-hidden mt-6 md:mt-0">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2F2D73]/30 rounded-full blur-lg"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-[#2F2D73]/30 flex items-center justify-center text-[#8B8AF2] mb-3 group-hover:bg-[#2F2D73]/40 transition-colors group-hover:scale-110">
                                    <FaLightbulb className="text-xl" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-white">Innovative</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">Cutting-edge solutions for your business</p>
                                <div className="flex items-center mt-3 text-[#8B8AF2] opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs mr-1">Learn more</span>
                                    <FaArrowRight className="text-xs" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-white/10 transform hover:scale-[1.03] transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2F2D73]/30 rounded-full blur-lg"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-[#2F2D73]/30 flex items-center justify-center text-[#8B8AF2] mb-3 group-hover:bg-[#2F2D73]/40 transition-colors group-hover:scale-110">
                                    <FaGlobe className="text-xl" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-white">Global</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">Worldwide reach with localized expertise</p>
                                <div className="flex items-center mt-3 text-[#8B8AF2] opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs mr-1">Learn more</span>
                                    <FaArrowRight className="text-xs" />
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-white/10 transform hover:scale-[1.03] transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600/20 rounded-full blur-lg"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-400 mb-3 group-hover:bg-red-600/30 transition-colors group-hover:scale-110">
                                    <FaRocket className="text-xl" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-white">Fast</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">Lightning-fast implementation and delivery</p>
                                <div className="flex items-center mt-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs mr-1">Learn more</span>
                                    <FaArrowRight className="text-xs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>

            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
            `}</style>
        </main>
    );
};

export default ServiceHeroSection;