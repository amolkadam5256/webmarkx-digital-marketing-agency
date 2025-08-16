import React, { useState } from 'react';
import { ChevronDownIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        agreed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

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
                                        123 Business Avenue<br />
                                        New York, NY 10001<br />
                                        United States
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
                                        Main: <a href="tel:1234567890" className="hover:text-red-600 transition-colors duration-300">(123) 456-7890</a><br />
                                        Sales: <a href="tel:1234567891" className="hover:text-red-600 transition-colors duration-300">(123) 456-7891</a><br />
                                        Support: <a href="tel:1234567892" className="hover:text-red-600 transition-colors duration-300">(123) 456-7892</a>
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
                                        <a href="mailto:info@company.com" className="hover:text-red-600 transition-colors duration-300">info@company.com</a><br />
                                        <a href="mailto:sales@company.com" className="hover:text-red-600 transition-colors duration-300">sales@company.com</a><br />
                                        <a href="mailto:support@company.com" className="hover:text-red-600 transition-colors duration-300">support@company.com</a>
                                    </p>
                                </div>
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
                                        First name
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
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <span className="text-gray-400 text-xs">*</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="relative">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 mb-1">
                                        Last name
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
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <span className="text-gray-400 text-xs">*</span>
                                        </div>
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
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-2 relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                                        Email
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
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <span className="text-gray-400 text-xs">*</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                                        Phone number
                                    </label>
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <label htmlFor="country" className="sr-only">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="h-full rounded-l-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-red-500 focus:ring-red-500 sm:text-sm border-r border-gray-300"
                                            >
                                                <option>US</option>
                                                <option>CA</option>
                                                <option>EU</option>
                                            </select>
                                            <ChevronDownIcon className="h-4 w-4 text-gray-400 absolute right-2" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 pl-20 focus:border-red-500 focus:ring-red-500 sm:text-sm px-4 py-2 transition-all duration-300 border hover:border-red-300"
                                            placeholder="123-456-7890"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="sm:col-span-2 relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                                        Message
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
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-start pr-3 pt-3 pointer-events-none">
                                            <span className="text-gray-400 text-xs">*</span>
                                        </div>
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
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="agreed" className="font-medium text-gray-700">
                                                I agree to the{' '}
                                                <a href="#" className="text-red-600 hover:text-red-500 underline transition-colors duration-300">
                                                    Privacy Policy
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.01]"
                                >
                                    Send message <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}