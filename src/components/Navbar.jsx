import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronUp,
  FaPhone,
  FaTimes
} from "react-icons/fa";
import images from "../assets/images/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
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
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "SEO Optimization", path: "/services/seo-optimization" },
        { name: "PPC Advertising", path: "/services/ppc-advertising" },
        { name: "App Development", path: "/services/app-development" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/yourbrand", color: "#1877F2" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/yourbrand", color: "#1DA1F2" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/yourbrand", color: "#E1306C" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/yourbrand", color: "#0077B5" },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/99 shadow-lg" : "bg-white/90"}`}
    >
      <div className="max-w-screen-xl w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo with animation */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.img
            src={images.logo}
            alt="webmarkx"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        {/* Hamburger with animation */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center my-auto p-2 w-full h-10 justify-end text-black rounded-lg md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {!item.dropdown ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-2 py-0 transition-all duration-300 ${isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-800 hover:text-red-600"
                    }`
                  }
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                </NavLink>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setIsHoveringServices(true);
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsHoveringServices(false);
                    setIsServicesOpen(false);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-2 py-1 transition-all ${location.pathname.includes("services")
                        ? "text-red-600 font-semibold"
                        : "text-gray-800 hover:text-red-600"
                      }`}
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      className="ml-1"
                    >
                      {isServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </motion.span>
                  </Link>
                  <AnimatePresence>
                    {(isServicesOpen || isHoveringServices) && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 top-full mt-2 w-52 bg-white shadow-xl rounded-lg overflow-hidden z-50"
                      >
                        {item.dropdown.map((drop, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={drop.path}
                              className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                            >
                              {drop.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Enhanced Desktop Contact Number */}
        <motion.div
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a
              href="tel:+971505761914"
              className="hidden lg:flex items-center bg-gradient-to-r from-[#2F2D73] to-red-600 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative"
            >
              <FaPhone className="mr-3 text-lg" />
              <span className="font-semibold tracking-wide">
                +971 <span className="font-bold">50 576 1914</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-white z-50 pt-4 px-6 pb-5 md:hidden overflow-y-auto no-scrollbar"
            >
              {/* Mobile Header with Logo and Close Button */}
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src={images.logo} alt="webmarkx" className="h-12" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <FaTimes className="text-gray-700" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {!item.dropdown ? (
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block text-xl font-medium py-3 px-4 rounded-lg transition ${isActive
                            ? "text-white bg-red-500 font-semibold"
                            : "text-gray-800 hover:bg-gray-100"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <NavLink
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `block text-xl font-medium py-3 px-4 rounded-lg transition flex-grow ${isActive
                                ? "text-white bg-red-500 font-semibold"
                                : "text-gray-800 hover:bg-gray-100"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsServicesOpen(!isServicesOpen);
                            }}
                            className="p-3 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <motion.span animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                              {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </motion.span>
                          </button>
                        </div>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-6 space-y-2 mt-2"
                            >
                              {item.dropdown.map((drop, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * idx }}
                                >
                                  <NavLink
                                    to={drop.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                      `block py-2 text-lg px-4 rounded-lg transition ${isActive
                                        ? "text-white bg-red-400"
                                        : "text-gray-700 hover:bg-gray-100"
                                      }`
                                    }
                                  >
                                    {drop.name}
                                  </NavLink>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 mt-8 pt-6 border-t border-gray-200">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1, backgroundColor: social.color, color: "white" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
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