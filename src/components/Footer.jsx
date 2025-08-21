import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaYoutube,
  FaWhatsapp ,
  FaExclamationCircle
} from "react-icons/fa";
import { motion } from "framer-motion";
import Images from "../assets/images/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const brandColor = "#2F2D73";
  const accentColor = "#EF4444"; // red-500
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const [message, setMessage] = useState("");

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", path: "/" },
        { name: "Our Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "App Development", path: "/services/app-development" },
        { name: "SEO Optimization", path: "/services/seo-optimization" },
        { name: "PPC Advertising", path: "/services/ppc-advertising" }
      ]
    }
  ];

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/webmarkxx", color: "#1877F2", name: "Facebook" },
  { icon: <FaTwitter />, url: "https://twitter.com/webmarkx", color: "#1DA1F2", name: "Twitter" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/webmarkx", color: "#E1306C", name: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com/company/webmarkx", color: "#0077B5", name: "LinkedIn" },
  { icon: <FaYoutube />, url: "https://youtube.com/webmarkx", color: "#FF0000", name: "YouTube" },
  { icon: <FaWhatsapp />, url: "https://wa.me/971505761914", color: "#25D366", name: "WhatsApp" },
];


  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Al Owais Building Sheikh Zayed Road, Dubai UA", color: brandColor },
    { icon: <FaPhone />, text: "+971 50 576 1914", color: accentColor },
    { icon: <FaEnvelope />, text: "info@webmarkx.com", color: "#6B7280" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a2511336-0d67-4ff3-863d-6feee061652f", // Replace with your Web3Forms access key
          email: email,
          subject: "Newsletter Subscription",
          from_name: "WebMarkx Footer Newsletter",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setMessage("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        setSubmitStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500"></div>
      
      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* About section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <img src={Images.logo} alt="WebMarkx Logo" className="w-52 h-auto" />
          <p className="text-gray-600 dark:text-gray-300">
            Where creativity meets innovation! Boost your online presence, engage your audience, and drive real results with our tailored strategies.
          </p>
          
          {/* Contact info with icons */}
          <ul className="space-y-3 mt-6">
            {contactInfo.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <span 
                  className="p-2 rounded-full text-white" 
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Links sections */}
        {footerLinks.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider" style={{ color: brandColor }}>
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <motion.li 
                  key={linkIndex}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: brandColor }}>
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to get updates on our latest offers!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            
            {/* Status message */}
            {submitStatus && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 p-3 rounded-lg flex items-center space-x-2 ${
                  submitStatus === "success" 
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" 
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {submitStatus === "success" ? (
                  <FaCheckCircle className="flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="flex-shrink-0" />
                )}
                <span>{message}</span>
              </motion.div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: brandColor }}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:text-white transition-colors duration-300"
                  style={{ color: social.color }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: social.color,
                    color: "white"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0"
          >
            © {currentYear} <span style={{ color: brandColor }} className="font-bold">WebMarkx</span>. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <Link 
              to="/privacy-policies" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/privacy-policies" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;