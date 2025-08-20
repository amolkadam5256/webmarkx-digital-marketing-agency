import React, { useState } from 'react';
import { ChevronDownIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Images from '../../assets/images/images'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        agreed: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage('');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "a2511336-0d67-4ff3-863d-6feee061652f", // Replace with your Web3Forms access key
                    subject: "New Contact Form Submission - WebMarkx",
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    company: formData.company,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    agreed: formData.agreed
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
                setFormData({
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                    agreed: false
                });
            } else {
                setSubmitStatus("error");
                setSubmitMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setSubmitStatus("error");
            setSubmitMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        "Content Marketing",
        "Social Media Marketing",
        "Web Development",
        "SEO Optimization",
        "PPC Advertising",
        "App Development"
    ];

    return (
        <div className="isolate bg-gradient-to-br from-gray-50 to-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-8 rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 lg:p-12 shadow-lg relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-100 opacity-30"></div>
                        <div className="absolute -left-5 -bottom-5 h-20 w-20 rounded-full bg-red-200 opacity-20"></div>

                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative z-10">
                            Let's connect
                            <span className="block h-1 w-16 bg-red-500 mt-2 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-gray-700 relative z-10">
                            We'd love to hear from you! Reach out through any of these channels or fill out the form.
                        </p>

                        <div className="space-y-6 relative z-10">
                            {/* Address */}
                            <div className="flex group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md group-hover:bg-red-100 transition-colors duration-300">
                                    <MapPinIcon className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Our Address</h3>
                                    <p className="mt-1 text-base text-gray-700">
                                        Sheikh Zayed Road<br />
                                        Dubai, UAE
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md group-hover:bg-red-100 transition-colors duration-300">
                                    <PhoneIcon className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Phone Number</h3>
                                    <p className="mt-1 text-base text-gray-700">
                                        <a href="tel:+971505761914" className="hover:text-red-600 transition-colors duration-300">+971 50 576 1914</a>
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md group-hover:bg-red-100 transition-colors duration-300">
                                    <EnvelopeIcon className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Email Address</h3>
                                    <p className="mt-1 text-base text-gray-700">
                                        <a href="mailto:info@webmarkx.com" className="hover:text-red-600 transition-colors duration-300">info@webmarkx.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-200 h- rounded-lg mb-8 overflow-hidden">
                                <img src={Images.customer_service2} alt="Digital Marketing Consultation" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-2xl lg:p-12 relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-50 opacity-30"></div>

                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative z-10">
                            Send us a message
                            <span className="block h-1 w-16 bg-red-500 mt-2 rounded-full"></span>
                        </h2>
                        <p className="mt-2 text-lg text-gray-700 relative z-10">We'll get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6 relative z-10">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                {/* First Name */}
                                <div className="relative">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 mb-1">
                                        First name *
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="first-name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="relative">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 mb-1">
                                        Last name *
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1">
                                        Company
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            autoComplete="organization"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-2 relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                                        Email *
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                                        Phone number
                                    </label>
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 pl-4 focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            placeholder="+971 50 576 1914"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Services Dropdown */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-1">
                                        Services
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="sm:col-span-2 relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                                        Message *
                                    </label>
                                    <div className="mt-1 relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Privacy Policy */}
                                <div className="sm:col-span-2">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input
                                                id="agreed"
                                                name="agreed"
                                                type="checkbox"
                                                checked={formData.agreed}
                                                onChange={handleChange}
                                                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="agreed" className="font-medium text-gray-700">
                                                I agree to the{' '}
                                                <a href="#" className="text-red-600 hover:text-red-500 underline transition-colors duration-300">
                                                    Privacy Policy
                                                </a>
                                                *
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Message */}
                            {submitStatus && (
                                <div className={`sm:col-span-2 p-4 rounded-md ${submitStatus === "success"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}>
                                    {submitMessage}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send message"}
                                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}