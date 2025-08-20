import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
    FiFeather,
    FiTrendingUp,
    FiCode,
    FiSearch,
    FiDollarSign,
    FiSmartphone,
} from "react-icons/fi";
import Images from "../../assets/images/images";

const HomeServiceSection = () => {
    const services = [
        {
            icon: <FiFeather className="text-4xl" />,
            title: "Content Marketing",
            description: "Engaging storytelling that builds brand awareness and fosters business growth",
            highlights: ["Strategic Narratives", "Audience Engagement", "Conversion-Focused"],
            color: "bg-[#2F2D73]",
            iconBg: "from-[#2F2D73] to-[#45438F]",
            path: "/services/content-marketing"
        },
        {
            icon: <FiTrendingUp className="text-4xl" />,
            title: "Social Marketing",
            description: "Amplify brand influence through engaging connections and powerful strategies",
            highlights: ["Community Building", "Viral Campaigns", "Influencer Partnerships"],
            color: "bg-red-600",
            iconBg: "from-red-600 to-red-700",
            path: "/services/social-media-marketing"
        },
        {
            icon: <FiCode className="text-4xl" />,
            title: "Web Development",
            description: "Crafting impactful websites with engaging design and powerful functionality",
            highlights: ["Responsive Design", "Blazing Fast", "SEO-Ready"],
            color: "bg-[#2F2D73]",
            iconBg: "from-[#2F2D73] to-[#45438F]",
            path: "/services/web-development"
        },
        {
            icon: <FiSearch className="text-4xl" />,
            title: "SEO Optimization",
            description: "Boosting online visibility with strategic tactics and keyword targeting",
            highlights: ["Technical Audits", "Content Strategy", "Rank Tracking"],
            color: "bg-red-600",
            iconBg: "from-red-600 to-red-700",
            path: "/services/seo-optimization"
        },
        {
            icon: <FiDollarSign className="text-4xl" />,
            title: "PPC Advertising",
            description: "Driving targeted traffic with strategic campaigns and powerful ad placements",
            highlights: ["Google Ads", "Social Ads", "ROI Maximization"],
            color: "bg-[#2F2D73]",
            iconBg: "from-[#2F2D73] to-[#45438F]",
            path: "/services/ppc-advertising"
        },
        {
            icon: <FiSmartphone className="text-4xl" />,
            title: "App Development",
            description: "Creating impactful mobile solutions with powerful functionality",
            highlights: ["iOS & Android", "Cross-Platform", "Performance Optimized"],
            color: "bg-red-600",
            iconBg: "from-red-600 to-red-700",
            path: "/services/app-development"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="ServicesSection">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#2F2D73] opacity-10 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600 opacity-10 rounded-full translate-x-32 translate-y-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black relative z-10">
                            Our <span className="text-transparent bg-clip-text bg-red-600">SERVICES
                            </span>
                        </h2>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
                    </div>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-6">
                        Data-driven strategies that deliver <span className="font-semibold text-[#2F2D73]">measurable results</span>
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="relative group"
                        >
                            {/* Floating icon background */}
                            <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${service.iconBg} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                            {/* Service card */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 group-hover:border-gray-200 transition-all duration-300 pb-8">
                                {/* Icon with floating effect */}
                                <div className="relative z-10 mt-10 mb-6 flex justify-center">
                                    <motion.div
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}
                                    >
                                        <div className="text-white">
                                            {service.icon}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="px-6 pt-2 flex-grow">
                                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-700 text-center mb-6">{service.description}</p>

                                    <div className="space-y-3 mb-8 px-4">
                                        {service.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-start">
                                                <div className={`flex-shrink-0 mt-1 w-2 h-2 rounded-full ${service.color}`}></div>
                                                <span className="ml-3 text-gray-700">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center px-6">
                                    <Link to={service.path}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-6 py-2  ${service.color === 'bg-red-600' ? 'bg-[#2F2D73] hover:bg-[#1E1D4E]' : 'bg-red-600 hover:bg-red-700'} text-white font-medium transition-colors shadow-md w-full max-w-xs mx-auto`}
                                        >
                                            Explore Service
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F2D73] to-red-600 rounded-2xl transform -skew-y-2 overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-10 -translate-y-10"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-10 translate-y-10"></div>
                        </div>
                    </div>

                    <div className="relative z-10 p-8 md:p-12 text-center">
                        <img src={Images.rocket} alt="roket " className="w-20 mx-auto  pb-5" />
                        {/* <FiRocket className="mx-auto text-5xl text-white mb-6" /> */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to launch your digital dominance?</h3>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                            Our team crafts custom solutions that drive <span className="font-semibold">real business growth</span>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-8 py-3 bg-white text-[#2F2D73] rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                            >
                                <Link to="/contact">
                                    Get Free Strategy Session
                                </Link>
                            </motion.button>
                            
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeServiceSection;