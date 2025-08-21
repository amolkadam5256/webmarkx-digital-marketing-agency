import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../assets/images/images';

const PrivacyPolicies = () => {
    const [activeSection, setActiveSection] = useState('data-collection');

    const sections = [
        {
            id: 'data-collection',
            title: 'Data Collection and Usage',
            content: `We may collect certain personal and non-personal information from you when you visit our website or use our services. This information helps us enhance your browsing experience, communicate effectively, and improve our services. The information we may collect includes:

• Contact Information: Name, email address, phone number, and company details.
• Usage Information: Website pages visited, referral sources, browsing duration, and interactions.
• Communication Details: Correspondence, feedback, and inquiries.

We use this information to:
• Provide and improve our services.
• Send you relevant updates, newsletters, and marketing materials.
• Respond to your inquiries and provide customer support.
• Analyze and optimize website performance.`
        },
        {
            id: 'data-protection',
            title: 'Data Protection',
            content: `We prioritize the security of your personal information. We implement industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of data. However, please be aware that no method of online transmission or storage is entirely secure, and we cannot guarantee absolute security.`
        },
        {
            id: 'cookies',
            title: 'Cookies and Tracking',
            content: `We use cookies and similar tracking technologies to enhance your browsing experience and collect information about your interactions with our website. You can modify your browser settings to manage or disable cookies. By using our website, you consent to our use of cookies and tracking technologies.`
        },
        {
            id: 'third-party',
            title: 'Third-Party Links',
            content: `Our website may contain links to third-party websites, plugins, or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`
        },
        {
            id: 'data-sharing',
            title: 'Data Sharing',
            content: `We do not sell, trade, or share your personal information with third parties for their marketing purposes. However, we may share your information with trusted service providers who assist us in operating our website and providing services. These providers are bound by confidentiality agreements and are prohibited from using your information for any other purpose.`
        },
        {
            id: 'compliance',
            title: 'Compliance with Laws',
            content: `We will disclose your information if required to do so by law or in response to valid requests, such as court orders or legal processes.`
        },
        {
            id: 'changes',
            title: 'Changes to Privacy Policy',
            content: `We reserve the right to update or modify this Privacy and Policies page at any time. Changes will be effective upon posting to the website. We encourage you to review this page periodically for the latest information on our privacy practices.`
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header Section */}
            <section className="bg-[#2F2D73] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy & Policies</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Your privacy is important to us. Learn how we protect your information and ensure transparency in our practices.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <nav className="text-sm text-gray-600">
                    <Link to="/" className="hover:text-[#2F2D73]">Home</Link> /
                    <span className="text-gray-400"> Privacy & Policies</span>
                </nav>
            </div>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                                <h2 className="text-xl font-bold text-[#2F2D73] mb-4">Policy Sections</h2>
                                <ul className="space-y-2">
                                    {sections.map((section) => (
                                        <li key={section.id}>
                                            <button
                                                onClick={() => setActiveSection(section.id)}
                                                className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${activeSection === section.id
                                                        ? 'bg-[#2F2D73] text-white'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                                    <h3 className="font-bold mb-2">Last Updated</h3>
                                    <p className="text-sm">August 9, 2023</p>
                                </div>

                                <div className="mt-6">
                                    <Link
                                        to="/contact"
                                        className="block text-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-[#2F2D73] mb-4">Welcome to Our Privacy Policy</h2>
                                    <p className="text-gray-700">
                                        Welcome to the Privacy and Policies page of WebMarkX, a leading digital marketing agency dedicated to providing exceptional services to our clients. This page outlines our commitment to ensuring the privacy and security of your personal information while you interact with our website and utilize our services.
                                    </p>
                                    <p className="text-gray-700 mt-4">
                                        By accessing our website or availing our services, you agree to the terms and practices described in this Privacy and Policies statement. Please take a moment to carefully read and understand the following information:
                                    </p>
                                </div>

                                {/* Active Section Content */}
                                {sections.map((section) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        className={`mb-8 ${activeSection === section.id ? 'block' : 'hidden'}`}
                                    >
                                        <h3 className="text-xl font-bold text-[#2F2D73] mb-4 flex items-center">
                                            <span className="w-2 h-6 bg-red-500 mr-3"></span>
                                            {section.title}
                                        </h3>
                                        <div className="text-gray-700 whitespace-pre-line">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}

                                {/* Contact Section */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-[#2F2D73] mb-4">Contact Us</h3>
                                    <p className="text-gray-700 mb-6">
                                        If you have any questions, concerns, or requests regarding your personal information or this privacy policy, please contact us at <a href="mailto:info@webmarkx.com" className="text-red-500 hover:underline">info@webmarkx.com</a>.
                                    </p>
                                    <p className="text-gray-700">
                                        Thank you for choosing WebMarkX. Your privacy and trust are important to us.
                                    </p>
                                </div>
                            </div>

                            {/* Additional Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="text-4xl text-[#2F2D73] mb-4">🔒</div>
                                    <h3 className="text-lg font-bold mb-2">Your Data is Secure</h3>
                                    <p className="text-gray-700">
                                        We implement industry-standard security measures to protect your personal information from unauthorized access.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="text-4xl text-[#2F2D73] mb-4">📝</div>
                                    <h3 className="text-lg font-bold mb-2">Transparent Practices</h3>
                                    <p className="text-gray-700">
                                        We believe in clear communication about how we collect, use, and protect your data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#2F2D73] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Have Questions About Your Privacy?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto">
                        Our team is here to address any concerns you might have about your data and our policies.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                            Contact Us
                        </Link>
                        <Link to="/services" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#2F2D73] transition-colors">
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicies;