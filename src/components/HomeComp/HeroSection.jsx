import React from 'react';
import {
    FaPlay,
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
    FaWhatsapp,
    FaChartLine,
    FaRocket,
    FaPhoneAlt,
    FaEnvelope,
    FaHashtag
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';

const socialIcons = [
    { icon: <FaFacebookF />, bg: '#1877f2', angle: 0, url: 'https://facebook.com/webmarkx', name: 'Facebook' },
    { icon: <FaInstagram />, bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #962fbf, #4f5bd5)', angle: 60, url: 'https://instagram.com/webmarkx', name: 'Instagram' },
    { icon: <FaTwitter />, bg: '#1da1f2', angle: 120, url: 'https://twitter.com/webmarkx', name: 'Twitter' },
    { icon: <FaLinkedinIn />, bg: '#0077b5', angle: 180, url: 'https://linkedin.com/company/webmarkx', name: 'LinkedIn' },
    { icon: <FaYoutube />, bg: '#ff0000', angle: 240, url: 'https://youtube.com/webmarkx', name: 'YouTube' },
    { icon: <FaWhatsapp />, bg: '#25d366', angle: 300, url: 'https://wa.me/webmarkx', name: 'WhatsApp' },
];

const HeroSection = () => {
    const isMobile = window.innerWidth < 768;
    const radius = isMobile ? 100 : 200;

    return (
        <main className="text-black bg-white  overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(isMobile ? 15 : 25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-red-100 opacity-20"
                        style={{
                            width: `${Math.random() * (isMobile ? 60 : 80) + 30}px`,
                            height: `${Math.random() * (isMobile ? 60 : 80) + 30}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-12 md:py-20 gap-8 md:gap-16 relative z-10">
                {/* Left Section */}
                <section className="max-w-xl flex flex-col space-y-4 md:space-y-5 lg:pr-10 order-1 lg:order-1 mt-8 lg:mt-0">
                    <span className="w-fit bg-red-600 text-white text-[10px]  font-bold tracking-widest rounded-full px-4 py-1 uppercase select-none animate-pulse">
                        Digital Marketing Excellence
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-black">TRANSFORMING </span>
                        <span className="text-red-600">DIGITAL </span>
                        <span className="text-black">LANDSCAPES</span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-700">
                        Welcome to <span className="font-bold text-black">WEBMARKX</span>, where data-driven strategies meet creativity to fuel your business success.
                    </p>

                    {/* Buttons - Stacked on mobile */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-2">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center w-full">
                                <span>GET STARTED</span>
                                <FaRocket className="ml-2" />
                            </button>
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto">
                            <button className="border-2 border-gray-800 hover:bg-gray-100 text-gray-800 rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center w-full">
                                <FaPlay className="mr-2 text-xs" />
                                <span>OUR SERVICES</span>
                            </button>
                        </Link>
                    </div>

                    {/* Contact Info - Stacked on mobile */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-4 md:pt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                                <FaPhoneAlt className="text-sm" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-600">CALL US</div>
                                <div className="text-sm font-bold text-black">+971 50 576 1914</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                                <FaEnvelope className="text-sm" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-600">EMAIL US</div>
                                <div className="text-sm font-bold text-black">info@webmarkx.com</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Section with Enhanced Orbit */}
                <section className="relative flex justify-center items-center w-full lg:w-auto px-4 order-2 lg:order-2">
                    {/* Main Image Container - Larger on desktop */}
                    <div className={`rounded-full bg-red-100 ${isMobile ? 'w-[220px] h-[220px]' : 'w-[320px] h-[320px] md:w-[380px] md:h-[380px]'} flex justify-center items-center relative z-10 shadow-2xl border-8 border-white transform hover:scale-105 transition duration-500`}>
                        <img
                            className={`rounded-full object-cover ${isMobile ? 'w-[180px] h-[180px]' : 'w-[280px] h-[280px] md:w-[340px] md:h-[340px]'} border-4 border-white`}
                            src={Images.Team2}
                            alt="Digital Marketing Team"
                        />
                    </div>

                    {/* Multi-layered Dashed Circular Orbit - Larger on desktop */}
                    <svg
                        className={`absolute ${isMobile ? 'w-[280px] h-[280px]' : 'w-[380px] h-[380px] md:w-[460px] md:h-[460px]'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0`}
                        viewBox="0 0 440 440"
                    >
                        {/* Outer orbit */}
                        <circle
                            cx="220"
                            cy="220"
                            r={isMobile ? "180" : "200"}
                            fill="none"
                            stroke="#e5e7eb"
                            strokeDasharray="5 8"
                            strokeWidth="2"
                        />
                        {/* Middle orbit */}
                        <circle
                            cx="220"
                            cy="220"
                            r={isMobile ? "150" : "170"}
                            fill="none"
                            stroke="#f3f4f6"
                            strokeDasharray="4 6"
                            strokeWidth="1.5"
                        />
                        {/* Inner orbit */}
                        <circle
                            cx="220"
                            cy="220"
                            r={isMobile ? "120" : "140"}
                            fill="none"
                            stroke="#e5e7eb"
                            strokeDasharray="3 5"
                            strokeWidth="1"
                        />
                    </svg>

                    {/* Animated Social Media Icons */}
                    {socialIcons.map((item, index) => {
                        const angleRad = (item.angle * Math.PI) / 180;
                        const x = radius * Math.cos(angleRad);
                        const y = radius * Math.sin(angleRad);
                        const delay = index * 0.1;
                        const iconSize = isMobile ? 'w-8 h-8' : 'w-10 h-10 md:w-10 md:h-10';

                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className={`absolute ${iconSize} rounded-full flex items-center justify-center text-white text-lg z-30 hover:scale-120 ring-2 ring-white/20 shadow-lg transition-all duration-300 hover:shadow-xl group`}
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    background: item.bg,
                                    transform: 'translate(-50%, -50%)',
                                    animation: `floatIcon 8s ease-in-out ${delay}s infinite`
                                }}
                            >
                                {item.icon}
                                {/* <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 text-xs font-bold text-black bg-white px-2 py-1 rounded whitespace-nowrap transition-all duration-300 shadow-md">
                                    {item.name}
                                </span> */}
                            </a>
                        );
                    })}

                    {/* Info Bubbles - Positioned differently on mobile */}
                    <div className={`absolute ${isMobile ? 'bottom-[-5%] right-[5%]' : 'bottom-[-18%] right-[10%]'} bg-white backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-3 shadow-xl text-black z-20 transform hover:scale-105 transition duration-300 border border-gray-200`}>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                            <FaHashtag />
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold">190+</div>
                            <div className="text-[10px] sm:text-xs">Brands Joined</div>
                        </div>
                    </div>

                    <div className={`absolute ${isMobile ? 'top-[10%] left-[5%]' : 'top-[15%] left-[5%]'} bg-white backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-3 shadow-xl text-black z-20 transform hover:scale-105 transition duration-300 border border-gray-200`}>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center text-black font-bold text-xs">
                            <FaChartLine />
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold">85%</div>
                            <div className="text-[10px] sm:text-xs">Sales Growth</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* CSS for animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
        }
      `}</style>
        </main>
    );
};

export default HeroSection;