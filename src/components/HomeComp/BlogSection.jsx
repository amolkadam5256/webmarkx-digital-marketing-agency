import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiMessageSquare, FiArrowRight, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');

    const blogPosts = [
        // Power of Marketing (3 posts)
        {
            id: 1,
            title: "The Power of Marketing: Fueling Business Success",
            excerpt: "Explore how strategic marketing drives brand awareness and customer engagement for sustainable business growth.",
            category: "Power of Marketing",
            date: "March 15, 2024",
            author: "webmarkx",
            comments: 5,
            image: "/images/marketing-power.jpg",
            readTime: "5 min read",
            slug: "power-of-marketing",
            alt: "Marketing strategies boosting business growth"
        },
        {
            id: 2,
            title: "Marketing Metrics That Actually Matter",
            excerpt: "Learn which key performance indicators you should be tracking to measure your marketing success effectively.",
            category: "Power of Marketing",
            date: "November 8, 2023",
            author: "webmarkx",
            comments: 3,
            image: "/images/marketing-metrics.jpg",
            readTime: "6 min read",
            slug: "marketing-metrics",
            alt: "Dashboard showing marketing analytics"
        },
        {
            id: 3,
            title: "Omnichannel Marketing Strategies for 2024",
            excerpt: "Discover how to create seamless customer experiences across all your marketing channels in the coming year.",
            category: "Power of Marketing",
            date: "June 22, 2023",
            author: "webmarkx",
            comments: 7,
            image: "/images/omnichannel.jpg",
            readTime: "7 min read",
            slug: "omnichannel-marketing",
            alt: "Multiple devices showing connected marketing channels"
        },

        // Social Media Marketing (3 posts)
        {
            id: 4,
            title: "Unleashing the Power of Social Media Marketing",
            excerpt: "Discover how social media marketing builds connections and drives real business impact through engagement.",
            category: "Social Media Marketing",
            date: "February 28, 2024",
            author: "webmarkx",
            comments: 3,
            image: "/images/social-marketing.jpg",
            readTime: "4 min read",
            slug: "social-media-marketing",
            alt: "Social media icons on smartphone"
        },
        {
            id: 5,
            title: "Instagram Algorithm Secrets for 2024",
            excerpt: "Learn how to work with Instagram's algorithm to maximize your organic reach and engagement.",
            category: "Social Media Marketing",
            date: "September 14, 2023",
            author: "webmarkx",
            comments: 8,
            image: "/images/instagram-algo.jpg",
            readTime: "5 min read",
            slug: "instagram-algorithm",
            alt: "Instagram app interface on phone"
        },
        {
            id: 6,
            title: "LinkedIn Marketing for B2B Growth",
            excerpt: "Powerful strategies to leverage LinkedIn for generating high-quality B2B leads and partnerships.",
            category: "Social Media Marketing",
            date: "April 5, 2023",
            author: "webmarkx",
            comments: 4,
            image: "/images/linkedin-marketing.jpg",
            readTime: "6 min read",
            slug: "linkedin-marketing",
            alt: "LinkedIn profile dashboard"
        },

        // Content Marketing (3 posts)
        {
            id: 7,
            title: "Content Marketing: The Art of Storytelling",
            excerpt: "Learn how compelling content builds brand awareness and fosters meaningful customer relationships.",
            category: "Content Marketing",
            date: "January 18, 2024",
            author: "webmarkx",
            comments: 7,
            image: "/images/content-marketing.jpg",
            readTime: "6 min read",
            slug: "content-marketing",
            alt: "Person writing content strategy on whiteboard"
        },
        {
            id: 8,
            title: "Content Strategy for 2024",
            excerpt: "Prepare your content marketing strategy for the coming year with these key insights and trends.",
            category: "Content Marketing",
            date: "August 30, 2023",
            author: "webmarkx",
            comments: 3,
            image: "/images/content-strategy.jpg",
            readTime: "5 min read",
            slug: "content-strategy-2024",
            alt: "Content calendar planning"
        },
        {
            id: 9,
            title: "Video Content: The Future of Engagement",
            excerpt: "Why video content dominates engagement metrics and how to incorporate it into your strategy.",
            category: "Content Marketing",
            date: "May 12, 2023",
            author: "webmarkx",
            comments: 6,
            image: "/images/video-content.jpg",
            readTime: "7 min read",
            slug: "video-content",
            alt: "Video recording setup with camera"
        },

        // Social Marketing (2 posts)
        {
            id: 10,
            title: "Social Marketing: Building Digital Communities",
            excerpt: "Amplify brand influence through authentic engagement and community building strategies.",
            category: "Social Marketing",
            date: "October 5, 2023",
            author: "webmarkx",
            comments: 4,
            image: "/images/social-marketing-2.jpg",
            readTime: "5 min read",
            slug: "social-marketing",
            alt: "People engaging on social media"
        },
        {
            id: 11,
            title: "Cause Marketing: Doing Well by Doing Good",
            excerpt: "How aligning with social causes can benefit both your brand and society simultaneously.",
            category: "Social Marketing",
            date: "March 22, 2023",
            author: "webmarkx",
            comments: 5,
            image: "/images/cause-marketing.jpg",
            readTime: "6 min read",
            slug: "cause-marketing",
            alt: "Hands forming heart shape"
        },

        // Web Development (2 posts)
        {
            id: 12,
            title: "Modern Web Development Strategies",
            excerpt: "Explore cutting-edge techniques for crafting impactful websites with engaging user experiences.",
            category: "Web Development",
            date: "December 10, 2023",
            author: "webmarkx",
            comments: 2,
            image: "/images/web-dev.jpg",
            readTime: "7 min read",
            slug: "web-development",
            alt: "Web developer coding on laptop"
        },
        {
            id: 13,
            title: "Progressive Web Apps: The Future is Here",
            excerpt: "Why PWAs are revolutionizing user experience and how to implement them in your projects.",
            category: "Web Development",
            date: "July 8, 2022",
            author: "webmarkx",
            comments: 9,
            image: "/images/pwa.jpg",
            readTime: "8 min read",
            slug: "progressive-web-apps",
            alt: "Mobile phone showing PWA features"
        },

        // SEO Optimization (2 posts)
        {
            id: 14,
            title: "SEO Optimization: Visibility Secrets",
            excerpt: "Master strategic tactics for boosting online visibility through powerful keyword targeting.",
            category: "SEO Optimization",
            date: "November 20, 2023",
            author: "webmarkx",
            comments: 9,
            image: "/images/seo.jpg",
            readTime: "8 min read",
            slug: "seo-optimization",
            alt: "SEO ranking factors diagram"
        },
        {
            id: 15,
            title: "Voice Search Optimization Strategies",
            excerpt: "How to adapt your SEO strategy for the growing voice search market and smart assistants.",
            category: "SEO Optimization",
            date: "April 15, 2022",
            author: "webmarkx",
            comments: 4,
            image: "/images/voice-search.jpg",
            readTime: "6 min read",
            slug: "voice-search-seo",
            alt: "Smart speaker with voice search interface"
        },

        // PPC Marketing (2 posts)
        {
            id: 16,
            title: "PPC Marketing: Maximizing ROI",
            excerpt: "Learn how to drive targeted traffic with precision campaigns and strategic ad placements.",
            category: "PPC Marketing",
            date: "September 5, 2023",
            author: "webmarkx",
            comments: 4,
            image: "/images/ppc.jpg",
            readTime: "5 min read",
            slug: "ppc-marketing",
            alt: "Google Ads dashboard on computer"
        },
        {
            id: 17,
            title: "Facebook Ads Targeting Strategies",
            excerpt: "Advanced techniques to refine your Facebook ad targeting and improve conversion rates.",
            category: "PPC Marketing",
            date: "February 18, 2022",
            author: "webmarkx",
            comments: 7,
            image: "/images/facebook-ads.jpg",
            readTime: "7 min read",
            slug: "facebook-ads",
            alt: "Facebook ads manager interface"
        },

        // App Development (3 posts)
        {
            id: 18,
            title: "Mobile App Development Trends",
            excerpt: "Discover the latest in creating impactful mobile solutions with powerful functionality.",
            category: "App Development",
            date: "August 12, 2023",
            author: "webmarkx",
            comments: 6,
            image: "/images/app-dev.jpg",
            readTime: "6 min read",
            slug: "app-development",
            alt: "Mobile app development process"
        },
        {
            id: 19,
            title: "Flutter vs React Native in 2024",
            excerpt: "Comprehensive comparison of the two leading cross-platform app development frameworks.",
            category: "App Development",
            date: "May 20, 2023",
            author: "webmarkx",
            comments: 8,
            image: "/images/flutter-react.jpg",
            readTime: "8 min read",
            slug: "flutter-vs-react",
            alt: "Flutter and React Native logos"
        },
        {
            id: 20,
            title: "App Store Optimization Techniques",
            excerpt: "Proven strategies to improve your app's visibility and downloads in the app stores.",
            category: "App Development",
            date: "October 10, 2021",
            author: "webmarkx",
            comments: 3,
            image: "/images/aso.jpg",
            readTime: "5 min read",
            slug: "app-store-optimization",
            alt: "App store ranking factors"
        }
    ];

    // Filter and sort logic
    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const searchedPosts = searchQuery
        ? filteredPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase()))
        : filteredPosts;

    const sortedPosts = [...searchedPosts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    const categories = ['All', 'Power of Marketing', 'Social Media Marketing',
        'Content Marketing', 'Social Marketing', 'Web Development',
        'SEO Optimization', 'PPC Marketing', 'App Development'];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            y: -5,
            transition: { duration: 0.3 }
        }
    };

    const handleClearFilters = () => {
        setActiveCategory('All');
        setSearchQuery('');
        setSortOrder('newest');
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-label="Blog section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    <span className="inline-block px-4 py-1 bg-[#FF4D4D]/10 text-[#FF4D4D] rounded-full text-sm font-semibold mb-3 md:mb-4">
                        OUR BLOGS
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                        Featured News and Insights
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest trends, strategies, and insights in digital marketing.
                    </p>
                </motion.div>

                {/* Search and Filter Section */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-stretch md:items-center mb-8 md:mb-10 gap-4 md:gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                >
                    {/* Search Bar */}
                    <div className="relative w-full md:w-1/3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search blog posts"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                        {/* Category Filter */}
                        <div className="relative w-full">
                            <div className="md:hidden absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <select
                                className="md:hidden block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F2D73]"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                aria-label="Filter by category"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>

                            <div className="hidden md:flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {categories.map(category => (
                                    <motion.button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${activeCategory === category ? 'bg-[#2F2D73] text-white' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`Filter by ${category}`}
                                        aria-pressed={activeCategory === category}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <span className="text-gray-600 text-xs sm:text-sm hidden sm:block">Sort by:</span>
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="bg-white border border-gray-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F2D73] w-full sm:w-auto"
                                aria-label="Sort blog posts"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Blog Posts Grid */}
                {sortedPosts.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                        {sortedPosts.map(post => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                                whileHover="hover"
                                aria-labelledby={`post-${post.id}-title`}
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={post.image}
                                        alt={post.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-[#2F2D73] text-white px-3 py-1 text-xs font-semibold">
                                        {post.category}
                                    </div>
                                    <div className="absolute top-0 right-0 bg-black/50 text-white px-2 py-1 text-xs m-2 rounded">
                                        {post.readTime}
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6">
                                    <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                                        <span className="flex items-center gap-1">
                                            <FiCalendar className="text-[#FF4D4D]" aria-hidden="true" />
                                            <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiUser className="text-[#FF4D4D]" aria-hidden="true" />
                                            <span>{post.author}</span>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiMessageSquare className="text-[#FF4D4D]" aria-hidden="true" />
                                            <span>{post.comments} Comments</span>
                                        </span>
                                    </div>

                                    <h2 id={`post-${post.id}-title`} className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                        <Link to={`/blog/${post.slug}`} className="hover:text-[#2F2D73] focus:outline-none focus:ring-2 focus:ring-[#2F2D73] focus:ring-offset-2 rounded">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">{post.excerpt}</p>

                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-[#2F2D73] font-medium group-hover:text-[#FF4D4D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F2D73] focus:ring-offset-2 rounded"
                                        aria-label={`Read more about ${post.title}`}
                                    >
                                        Read Full Blog
                                        <FiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl text-gray-600 mb-2">No blog posts found matching your criteria</h2>
                        <button
                            onClick={handleClearFilters}
                            className="mt-3 px-4 py-2 text-[#2F2D73] hover:text-[#FF4D4D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F2D73] focus:ring-offset-2 rounded"
                            aria-label="Clear all filters"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}

                {/* View More Button */}
                {sortedPosts.length > 0 && (
                    <motion.div
                        className="text-center mt-10 sm:mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#2F2D73] to-[#FF4D4D] text-white font-medium rounded-lg hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#2F2D73] focus:ring-offset-2"
                            aria-label="View all blog posts"
                        >
                            View All Blogs
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;