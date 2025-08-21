import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram
} from "react-icons/fa";
import Images from '../assets/images/images';

const ErrorPage = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 flex flex-col">


      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-12">
        <div className="text-center space-y-8 max-w-2xl w-full">
          {/* Animated 404 */}
          <div className="relative">
            <h1 className="text-9xl font-extrabold text-[#2F2D73] flex justify-center gap-2 relative">
              <span className="inline-block animate-bounce" style={{ animationDelay: "0ms" }}>4</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "200ms" }}>0</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "400ms" }}>4</span>
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-red-500 rounded-full opacity-75"></div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">This page could not be found!</h2>
            <p className="text-lg text-gray-600">
              We are sorry. But the page you are looking for is not available.
              <br />
              Perhaps you can try a new search.
            </p>
          </div>

          {/* Creative CTA Section */}
          <div className="relative max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#2F2D73] to-[#4A46B5] text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
              <p className="text-lg mb-8 opacity-90">
                Your vision, our expertise. Let's build a digital presence that stands out.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/services"
                  className="bg-white text-[#2F2D73] px-8 py-3 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Explore Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#2F2D73] transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>



          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#2F2D73] border border-[#2F2D73] px-4 py-2 rounded-lg font-medium hover:bg-[#2F2D73] hover:text-white transition-all duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Back to Home
          </Link>

        </div>
      </main>

      {/* Contact Information */}
      <div className="bg-white mt-12 py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-[#2F2D73] mb-8">Need Immediate Assistance?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#2F2D73] p-3 rounded-full mb-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">Our Office</h4>
              <p className="text-sm text-gray-700">
                Al Owais Building<br />
                Dubai, UAE
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#2F2D73] p-3 rounded-full mb-4">
                <FaPhone className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <a
                href="tel:+971505761914"
                className="text-gray-800 hover:text-[#2F2D73] text-sm transition-colors"
              >
                +971 50 576 1914
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#2F2D73] p-3 rounded-full mb-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <a
                href="mailto:info@webmarkx.com"
                className="text-gray-800 hover:text-[#2F2D73] text-sm transition-colors"
              >
                info@webmarkx.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;