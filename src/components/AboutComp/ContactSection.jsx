import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const ContactSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [submissionState, setSubmissionState] = useState({
        loading: false,
        success: false,
        error: null
    });

    const services = [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Email Marketing",
        "Web Development",
        "E-Commerce Solutions",
        "UI/UX Design",
        "Website Maintenance",
        "Digital Strategy Consulting"
    ];

    const faqs = [
        {
            question: "What digital marketing services do you offer?",
            answer: "We provide comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, and more to help your business grow online."
        },
        {
            question: "How long does it take to see results from SEO?",
            answer: "SEO is a long-term strategy. Typically, you may start seeing initial results in 3-6 months, with more significant improvements appearing after 6-12 months of consistent optimization."
        },
        {
            question: "Do you offer custom web development solutions?",
            answer: "Yes, we specialize in custom web development tailored to your business needs, including responsive design, e-commerce solutions, and CMS development."
        },
        {
            question: "What's included in your monthly maintenance plans?",
            answer: "Our maintenance plans include regular updates, security monitoring, performance optimization, backups, and technical support to keep your website running smoothly."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionState({ loading: true, success: false, error: null });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '735efc9c-d698-420a-86ee-72b8a78779e4', // Replace with your actual key
                    name: formData.name,
                    email: formData.email,
                    service: formData.service,
                    message: formData.message
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmissionState({ loading: false, success: true, error: null });
                setFormData({
                    name: '',
                    email: '',
                    service: '',
                    message: ''
                });
            } else {
                setSubmissionState({
                    loading: false,
                    success: false,
                    error: result.message || 'Failed to send message'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionState({
                loading: false,
                success: false,
                error: 'There was an error sending your message. Please try again.'
            });
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* FAQ Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2F2D73]">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border border-gray-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                                    >
                                        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                        {activeIndex === index ? (
                                            <FiChevronUp className="text-[#2F2D73] text-xl" />
                                        ) : (
                                            <FiChevronDown className="text-[#2F2D73] text-xl" />
                                        )}
                                    </button>

                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-6 text-gray-600"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-gradient-to-br from-[#2F2D73] to-red-600 rounded-xl p-8 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                            <p className="mb-8 opacity-90">
                                Have questions about our services? Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            {submissionState.success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                                >
                                    Message sent successfully! We'll get back to you soon.
                                </motion.div>
                            )}

                            {submissionState.error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                                >
                                    {submissionState.error}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="access_key" value="735efc9c-d698-420a-86ee-72b8a78779e4" />

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiUser className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-white/70"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMail className="text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-white/70"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full pl-4 pr-10 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none appearance-none"
                                        required
                                    >
                                        <option value="">Select a Service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <FiChevronDown className="text-white" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute top-3 left-3">
                                        <FiMessageSquare className="text-gray-400" />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="5"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-white/70"
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={submissionState.loading}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full bg-white text-[#2F2D73] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {submissionState.loading ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;