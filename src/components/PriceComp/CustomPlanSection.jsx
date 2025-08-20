import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Images from '../../assets/images/images';

const CustomPlanSection = () => {
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataObj = {};
        const formElements = e.target.elements;
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type === 'submit' || element.type === 'button' || element.type === 'file') continue;
            if (element.type === 'checkbox') {
                if (element.checked) {
                    const name = element.name.replace('[]', '');
                    if (!formDataObj[name]) {
                        formDataObj[name] = [];
                    }
                    formDataObj[name].push(element.value);
                }
            } else {
                if (element.name && element.value) {
                    formDataObj[element.name] = element.value;
                }
            }
        }

        formDataObj.access_key = '735efc9c-d698-420a-86ee-72b8a78779e4';
        formDataObj.subject = 'New Custom Plan Request';

        if (Array.isArray(formDataObj.presence)) {
            formDataObj.presence = formDataObj.presence.join(', ');
        }

        if (Array.isArray(formDataObj.services)) {
            formDataObj.services = formDataObj.services.join(', ');
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formDataObj),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                e.target.reset();
            } else {
                setSubmitStatus('error');
                console.error('Form submission error:', data);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#2F2D73]">Need a Custom Digital Marketing Plan?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tell us about your organization and digital marketing needs. We'll create a tailored solution that drives results.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Left Side - Custom Plan Form */}
                    <div className="w-full lg:w-1/2 p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Build Your Custom Digital Marketing Plan</h3>

                        {submitStatus === 'success' ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Your request has been submitted successfully. We'll contact you shortly.</span>
                            </div>
                        ) : submitStatus === 'error' ? (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                                <strong className="font-bold">Error!</strong>
                                <span className="block sm:inline"> There was a problem submitting your request. Please try again.</span>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                                    <input
                                        type="text"
                                        name="company_name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                        placeholder="Your company name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                                    <select
                                        name="industry"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select industry</option>
                                        <option>E-commerce & Retail</option>
                                        <option>Healthcare</option>
                                        <option>Real Estate</option>
                                        <option>Hospitality & Tourism</option>
                                        <option>Education</option>
                                        <option>Technology</option>
                                        <option>Finance & Banking</option>
                                        <option>Food & Beverage</option>
                                        <option>Professional Services</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>
                                <input
                                    type="url"
                                    name="website"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                    placeholder="https://yourcompany.com"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                        placeholder="your.email@company.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                        placeholder="+971 50 123 4567"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Digital Marketing Presence</label>
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="Website" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Website</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="Facebook" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Facebook</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="Instagram" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Instagram</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="LinkedIn" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">LinkedIn</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="Twitter/X" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Twitter/X</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="TikTok" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">TikTok</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="YouTube" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">YouTube</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="presence[]" value="Google Business" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Google Business</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Digital Marketing Services Needed *</label>
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Social Media Management" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Social Media Management</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Social Media Advertising" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Social Media Advertising</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="SEO" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Search Engine Optimization (SEO)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="PPC" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Pay-Per-Click Advertising (PPC)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Email Marketing" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Email Marketing</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Content Marketing" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Content Marketing</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Influencer Marketing" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Influencer Marketing</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Web Development" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Web Development</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="E-commerce Solutions" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">E-commerce Solutions</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" name="services[]" value="Analytics & Reporting" className="rounded text-[#2F2D73] focus:ring-[#2F2D73]" />
                                        <span className="ml-2 text-sm">Analytics & Reporting</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Marketing Goals *</label>
                                <select
                                    name="goals"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                    required
                                >
                                    <option value="">Select primary goal</option>
                                    <option>Brand Awareness</option>
                                    <option>Lead Generation</option>
                                    <option>Sales Conversion</option>
                                    <option>Website Traffic</option>
                                    <option>Customer Engagement</option>
                                    <option>Product Launch</option>
                                    <option>Market Expansion</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Budget Range (AED) *</label>
                                <select
                                    name="budget"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                    required
                                >
                                    <option value="">Select budget range</option>
                                    <option>1,000 - 2,500 AED</option>
                                    <option>2,500 - 5,000 AED</option>
                                    <option>5,000 - 10,000 AED</option>
                                    <option>10,000 - 20,000 AED</option>
                                    <option>20,000+ AED</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F2D73] focus:border-transparent"
                                    placeholder="Tell us about your target audience, current challenges, competitors, or any specific requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#2F2D73] text-white py-3 rounded-lg font-bold hover:bg-[#1a1859] transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : 'Request Custom Digital Marketing Plan'}
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Customer Care & Contact Details */}
                    <div className="w-full lg:w-1/2 bg-[#2F2D73] text-white p-8 flex flex-col">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-6">Get Expert Digital Marketing Assistance</h3>
                            <p className="mb-8">
                                Our digital marketing specialists will analyze your needs and create a customized strategy to help your business grow online.
                            </p>

                            <div className="bg-gray-200 h- rounded-lg mb-8 overflow-hidden">
                                <img src={Images.customer_service2} alt="Digital Marketing Consultation" className="w-full h-full object-cover" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Digital Marketing Hotline</p>
                                        <p>+971 800 DIGITAL (3444825)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Email Our Experts</p>
                                        <p>solutions@digitalmarketing.ae</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Digital Marketing Center</p>
                                        <p>Dubai Internet City, Dubai, UAE</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Consultation Hours</p>
                                        <p>Sun - Thu: 8:30AM - 6:30PM</p>
                                        <p>Sat: 10AM - 4PM (By Appointment)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-500">
                            <p className="font-medium mb-2">Why choose our custom digital marketing plans?</p>
                            <ul className="text-sm space-y-1 mb-4">
                                <li>• Tailored strategies for your industry</li>
                                <li>• Data-driven approach with measurable results</li>
                                <li>• Dedicated account management</li>
                                <li>• Regular performance reporting</li>
                                <li>• Flexible scaling options</li>
                            </ul>

                            <div className="flex space-x-4">
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center bg-white text-[#2F2D73] px-4 py-2 rounded-lg font-medium flex-grow"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    Schedule Call
                                </Link>

                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-lg font-medium flex-grow"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomPlanSection;
