// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import images from "../assets/images/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "SEO Optimization", path: "/services/seo-optimization" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/yourbrand" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/yourbrand" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/yourbrand" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/yourbrand" },
  ];

  // Helper function to get default social media brand color
  const getSocialColor = (icon) => {
    switch (icon.type) {
      case FaFacebookF: return "#1877F2";
      case FaTwitter: return "#1DA1F2";
      case FaInstagram: return "#E1306C";
      case FaLinkedinIn: return "#0077B5";
      default: return "#000";
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full h-auto z-50 transition-all duration-500 backdrop-blur-md bg-white`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={images.logo} alt="webmarkx" className="h-14" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-gray-200 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {!item.dropdown ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 ${isActive
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-black hover:text-red-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center hover:text-red-600 transition ${location.pathname.includes("services")
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-black"
                      }`}
                  >
                    {item.name} <span className="ml-2">&#9662;</span>
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md"
                      >
                        {item.dropdown.map((drop, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={drop.path}
                              className="block py-2 px-4 text-black hover:text-red-600 transition"
                            >
                              {drop.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </li>
          ))}

          {/* Social Icons */}
          <li className="flex space-x-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:text-red-600 hover:scale-110"
                style={{ color: getSocialColor(social.icon) }}
              >
                {social.icon}
              </a>
            ))}
          </li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-auto bg-white z-50 p-6"
            >
              {/* Close Header */}
              <div className="flex justify-between items-center mb-6">
                <img src={images.logo} alt="webmarkx" className="h-12" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black text-3xl font-bold hover:text-red-600 transition"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Menu Items */}
              <motion.ul className="space-y-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {!item.dropdown ? (
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block text-lg font-medium transition ${isActive
                            ? "text-red-600 font-semibold"
                            : "text-black hover:text-red-600"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="block w-full text-left text-lg font-medium text-black hover:text-red-600 transition"
                        >
                          {item.name} <span className="ml-2">&#9662;</span>
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {item.dropdown.map((drop, idx) => (
                                <li key={idx}>
                                  <NavLink
                                    to={drop.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-black hover:text-red-600"
                                  >
                                    {drop.name}
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </li>
                ))}
              </motion.ul>

              {/* Mobile Social Icons */}
              <div className="flex space-x-6 mt-10">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:text-red-600 hover:scale-125"
                    style={{ color: getSocialColor(social.icon) }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
