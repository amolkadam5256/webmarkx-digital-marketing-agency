// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Company */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
            About Us
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Welcome to WebMarkx, where creativity meets innovation! Boost your online presence, engage your audience, and drive real results with our tailored strategies.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p>📍 Al Owais Building</p>
            <p>📞 +971 50 576 1914</p>
            <p>✉️ info@webmarkx.com</p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
            Company
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/services" className="hover:underline hover:text-red-500 transition">Our Services</Link></li>
            <li><Link to="/pricing" className="hover:underline hover:text-red-500 transition">Pricing</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-red-500 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline hover:text-red-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/social-marketing" className="hover:underline hover:text-red-500 transition">Social Marketing</Link></li>
            <li><Link to="/services/seo" className="hover:underline hover:text-red-500 transition">SEO Optimization</Link></li>
            <li><Link to="/services/web-development" className="hover:underline hover:text-red-500 transition">Web Development</Link></li>
            <li><Link to="/services/app-development" className="hover:underline hover:text-red-500 transition">App Development</Link></li>
            <li><Link to="/services/ppc-marketing" className="hover:underline hover:text-red-500 transition">PPC Marketing</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-red-500 transition text-xl"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-red-500 transition text-xl"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-red-500 transition text-xl"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-red-500 transition text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>© {new Date().getFullYear()} WebMarkx. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-red-500 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-red-500 transition">Terms & Conditions</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
