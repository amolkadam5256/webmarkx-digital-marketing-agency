import React from 'react';

const PricingSection = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Social Media Marketing Plans
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan to boost your online presence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Starter Plan */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full">
                        <div className="text-center mb-5">
                            <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                            <p className="text-sm text-gray-600 mt-1">Perfect for small businesses</p>
                        </div>

                        <div className="flex justify-center items-baseline my-4">
                            <span className="text-lg line-through text-gray-500 mr-2">1500AED</span>
                            <span className="text-3xl font-bold text-[#2F2D73]">999AED</span>
                            <span className="text-gray-500 ml-1">/mo</span>
                        </div>

                        <ul className="mb-6 space-y-3 flex-grow">
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Social Media Management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Social Media Advertising</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">2 Ads Management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Daily Campaign Monitoring</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Organic Reach & Followers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Weekly Profile Tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">24/7 Support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Monthly Report</span>
                            </li>
                        </ul>

                        <button className="w-full bg-[#2F2D73] text-white py-2.5 rounded-lg font-medium hover:bg-[#1a1859] transition-colors text-sm">
                            Choose Plan
                        </button>
                    </div>

                    {/* Elite Plan */}
                    <div className="bg-white rounded-xl border-2 border-[#2F2D73] p-6 flex flex-col h-full relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                recommended
                            </span>
                        </div>

                        <div className="text-center mb-5 mt-2">
                            <h3 className="text-xl font-bold text-gray-900">Elite</h3>
                            <p className="text-sm text-gray-600 mt-1">Complete solution for businesses</p>
                        </div>

                        <div className="flex justify-center items-baseline my-4">
                            <span className="text-lg line-through text-gray-500 mr-2">3500AED</span>
                            <span className="text-3xl font-bold text-[#2F2D73]">2499AED</span>
                            <span className="text-gray-500 ml-1">/mo</span>
                        </div>

                        <ul className="mb-6 space-y-3 flex-grow">
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">All Starter & Advance Features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Social Media Advertising</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">10 Ads Management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Expert Consultancy</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Web Development & Management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Email Marketing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">24/7 VIP Support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Daily Profile Tracking</span>
                            </li>
                        </ul>

                        <button className="w-full bg-[#2F2D73] text-white py-2.5 rounded-lg font-medium hover:bg-[#1a1859] transition-colors text-sm">
                            Choose Plan
                        </button>
                    </div>

                    {/* Advance Plan */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full">
                        <div className="text-center mb-5">
                            <h3 className="text-xl font-bold text-gray-900">Advance</h3>
                            <p className="text-sm text-gray-600 mt-1">For growing businesses</p>
                        </div>

                        <div className="flex justify-center items-baseline my-4">
                            <span className="text-lg line-through text-gray-500 mr-2">2899AED</span>
                            <span className="text-3xl font-bold text-[#2F2D73]">1899AED</span>
                            <span className="text-gray-500 ml-1">/mo</span>
                        </div>

                        <ul className="mb-6 space-y-3 flex-grow">
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">All Starter Features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Social Media Advertising</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">5 Ads Management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Expert Consultancy</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Organic Reach & Followers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Web Development</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">24/7 Support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">■</span>
                                <span className="text-sm">Dedicated Account Manager</span>
                            </li>
                        </ul>

                        <button className="w-full bg-[#2F2D73] text-white py-2.5 rounded-lg font-medium hover:bg-[#1a1859] transition-colors text-sm">
                            Choose Plan
                        </button>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default PricingSection;