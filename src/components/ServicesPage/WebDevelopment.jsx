import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import HomeServiceSection from '../HomeComp/HomeServiceSection';

const WebDevelopment = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is web development?",
      answer: "Web development is the process of building and creating websites, involving tasks such as coding, designing, and implementing functionalities to ensure a website's proper functioning and user experience."
    },
    {
      question: "What does a web developer do?",
      answer: "A web developer designs, builds, and maintains websites and web applications. They work with programming languages like HTML, CSS, JavaScript, and various frameworks to create functional, responsive, and visually appealing websites that meet client requirements."
    },
    {
      question: "How long does web development take?",
      answer: "The timeline for web development varies based on the project's complexity. A simple website might take 2-4 weeks, while a complex e-commerce platform or web application could take 3-6 months or more. We provide detailed timelines after understanding your specific requirements."
    },
    {
      question: "What technologies are used in web development?",
      answer: "We use a variety of technologies including HTML5, CSS3, JavaScript, React, Angular, Vue.js for front-end development, and Node.js, PHP, Python, Ruby on Rails for back-end development. We also work with databases like MySQL, MongoDB, and WordPress for content management."
    },
    {
      question: "Do I need a web developer for my website?",
      answer: "While DIY website builders exist, a professional web developer ensures your website is optimized for performance, security, and search engines. We create custom solutions tailored to your business needs that provide better functionality, user experience, and scalability."
    }
  ];

  const strategies = [
    {
      id: 'strategy1',
      title: 'Goal-Oriented Planning',
      description: 'Define clear objectives and requirements for the website, considering your target audience, business goals, and desired functionalities before starting the development process.',
      icon: '🎯',
      image: Images.WEB_DEV1
    },
    {
      id: 'strategy2',
      title: 'Responsive Design',
      description: 'Implement a responsive design approach to ensure your website adapts seamlessly to various devices and screen sizes, providing an optimal user experience across desktops, tablets, and smartphones.',
      icon: '📱',
      image: Images.WEB_DEV2
    },
    {
      id: 'strategy3',
      title: 'User-Centric Navigation',
      description: 'Create an intuitive and user-friendly navigation system that allows visitors to easily find the information they need and navigate through the website with ease.',
      icon: '🧭',
      image: Images.DigitalMak3
    },
    {
      id: 'strategy4',
      title: 'Optimize for Speed',
      description: 'Prioritize website performance by optimizing code, compressing images, and leveraging caching techniques to minimize loading times and enhance user satisfaction.',
      icon: '⚡',
      image: Images.Power_Marketing1
    },
    {
      id: 'strategy5',
      title: 'Security and Scalability',
      description: 'Implement robust security measures to protect your website from potential threats and ensure it can handle increasing traffic and data demands as your business grows.',
      icon: '🔒',
      image: Images.Power_Marketing2
    }
  ];

  const heroSlides = [
    {
      bgImage: Images.WEB_DEV1,
      title: "Websites That Impress & Convert",
      subtitle: "Custom web development solutions tailored to your business goals"
    },
    {
      bgImage: Images.WEB_DEV2,
      title: "Responsive & Engaging",
      subtitle: "Seamless experiences across all devices for optimal user engagement"
    },
    {
      bgImage: Images.Power_Marketing2,
      title: "Secure & Scalable",
      subtitle: "Robust websites built to grow with your business and protect your data"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Auto Carousel */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: 1,
              backgroundImage: `url(${heroSlides[currentSlide].bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 backdrop-blur-sm bg-opacity-10"></div>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Web Development That <span className="text-red-500">Impresses</span> & <span className="text-[#2F2D73]">Performs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 animate-fade-in-delay">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
              <Link to="/services">
                <button className="bg-[#2F2D73] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#25245a] transition-colors">
                  Explore Our Services
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#2F2D73] transition-colors">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2F2D73] mb-4">Our Work Strategy</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2F2D73] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 text-[#2F2D73]">{strategy.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                  <button className="mt-4 text-red-500 font-medium hover:text-red-700 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#2F2D73] mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-12"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left font-medium text-gray-800"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-red-500 text-xl">
                    {activeQuestion === index ? '−' : '+'}
                  </span>
                </button>
                {activeQuestion === index && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2F2D73] text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Powerful Website?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us craft a custom website that impresses visitors and drives your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                Get Started Today
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#2F2D73] transition-colors">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      <HomeServiceSection />
    </div>
  );
};

// Add these animations to your CSS
const styles = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 0.6s forwards;
  opacity: 0;
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default WebDevelopment;