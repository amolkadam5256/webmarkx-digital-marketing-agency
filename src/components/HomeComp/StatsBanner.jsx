import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { FiAward, FiShield, FiTrendingUp, FiBriefcase } from 'react-icons/fi';
import Images from "../../assets/images/images";

const StatsBanner = () => {
    const [countVisible, setCountVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        const timeout = setTimeout(() => setCountVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const stats = [
        { 
            icon: <FiAward className="text-3xl" />, 
            label: "Successful Campaigns", 
            value: 514, 
            suffix: "+",
            color: "text-yellow-400"
        },
        { 
            icon: <FiBriefcase className="text-3xl" />, 
            label: "Industry Experience", 
            value: 12, 
            suffix: "+",
            color: "text-yellow-400"
        },
        { 
            icon: <FiTrendingUp className="text-3xl" />, 
            label: "Conversion Optimization", 
            value: 95, 
            suffix: "%",
            color: "text-yellow-400"
        },
        { 
            icon: <FiShield className="text-3xl" />, 
            label: "Data Privacy Assurance", 
            value: 100, 
            suffix: "%",
            color: "text-yellow-400"
        },
    ];

    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4 py-0 bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70 z-0 transition-transform duration-[4000ms] group-hover:scale-105">
                <img
                    src={Images.Team}
                    alt="Team working"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F2D73]/70 via-[#2F2D73]/60 to-[#2F2D73]/80 z-10" />

            {/* Main Content */}
            <div className="relative z-20 w-full max-w-7xl text-center px-4 md:px-12 py-10 md:py-20 space-y-8 rounded-xl " data-aos="zoom-in">
                <p className="text-yellow-400 text-sm md:text-base uppercase tracking-wider" data-aos="fade-down">
                    Our Achievements
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white" data-aos="fade-right">
                    Amplify Your Digital Presence
                </h2>
                <p className="max-w-2xl mx-auto text-gray-200" data-aos="fade-left">
                    Innovative solutions that drive measurable results and growth for your business
                </p>

                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up" data-aos-delay="600">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-white/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className={`${item.color} mb-4 p-4 rounded-full bg-white/10`}>
                                {item.icon}
                            </div>
                            <p className="text-3xl font-bold text-white">
                                {countVisible && (
                                    <CountUp
                                        start={0}
                                        end={item.value}
                                        duration={3}
                                        suffix={item.suffix}
                                        enableScrollSpy={true}
                                        scrollSpyOnce={false}
                                    />
                                )}
                            </p>
                            <span className="text-gray-300 text-sm mt-2">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;