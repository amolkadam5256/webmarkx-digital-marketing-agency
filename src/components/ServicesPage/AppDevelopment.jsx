import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import HomeServiceSection from '../HomeComp/HomeServiceSection';

const AppDevelopment = () => {
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
      question: "What is app development?",
      answer: "App development is the process of creating software applications that run on mobile devices, tablets, or other digital platforms. It involves designing, coding, testing, and deploying applications for iOS, Android, or cross-platform environments to meet specific user needs and business objectives."
    },
    {
      question: "How long does app development take?",
      answer: "The timeline for app development varies based on complexity, features, and platforms. A simple app may take 2-4 months, a medium complexity app 4-8 months, and a complex app with advanced features can take 8+ months. We provide detailed timelines after understanding your specific requirements and project scope."
    },
    {
      question: "What platforms can my app be developed for?",
      answer: "We develop apps for iOS (iPhone/iPad), Android, and cross-platform solutions. For maximum reach, we recommend developing for both iOS and Android. Cross-platform frameworks like React Native and Flutter allow us to build for multiple platforms simultaneously, reducing development time and cost."
    },
    {
      question: "Do I need a dedicated team for app development?",
      answer: "While small projects might be handled by individual developers, most professional app development requires a dedicated team including project managers, UI/UX designers, front-end and back-end developers, and quality assurance testers. We provide complete teams tailored to your project needs."
    },
    {
      question: "What are the costs involved in app development?",
      answer: "App development costs vary based on complexity, features, platforms, and design requirements. Simple apps start around $10,000-$20,000, medium complexity apps range from $20,000-$50,000, and complex apps can cost $50,000+. We provide transparent pricing and detailed quotes based on your specific requirements."
    }
  ];

  const strategies = [
    {
      id: 'strategy1',
      title: 'Clear Objectives',
      description: 'Start with a comprehensive understanding of your app\'s purpose, target audience, and business goals. Clearly define the app\'s features and functionalities to ensure it aligns with your objectives.',
      icon: '🎯',
      image: Images.AppDEV1
    },
    {
      id: 'strategy2',
      title: 'User-Centric Design',
      description: 'Prioritize user experience (UX) and create an intuitive and visually appealing design. Conduct usability testing to gather feedback and make improvements to enhance user satisfaction.',
      icon: '📱',
      image: Images.DigitalMak2
    },
    {
      id: 'strategy3',
      title: 'Agile Development Approach',
      description: 'Adopt an agile development methodology to break the project into manageable sprints, allowing for continuous improvements, frequent testing, and quick adaptations based on user feedback.',
      icon: '🔄',
      image: Images.DigitalMak3
    },
    {
      id: 'strategy4',
      title: 'Cross-Platform Compatibility',
      description: 'Consider developing the app for multiple platforms (iOS, Android, etc.) to reach a broader audience. Utilize frameworks like React Native or Flutter for efficient cross-platform development.',
      icon: '📲',
      image: Images.Power_Marketing1
    },
    {
      id: 'strategy5',
      title: 'Robust Security Measures',
      description: 'Prioritize app security by implementing encryption, secure authentication, and data protection protocols. Regularly update the app to address security vulnerabilities and ensure a safe user experience.',
      icon: '🔒',
      image: Images.Power_Marketing2
    }
  ];

  const heroSlides = [
    {
      bgImage: Images.AppDEV1,
      title: "Apps That Transform & Engage",
      subtitle: "Crafting transformative mobile experiences with cutting-edge features"
    },
    {
      bgImage: Images.DigitalMak2,
      title: "User-Friendly Innovation",
      subtitle: "Designing intuitive interfaces for exceptional user experiences"
    },
    {
      bgImage: Images.Power_Marketing2,
      title: "Cross-Platform Excellence",
      subtitle: "Developing for iOS, Android, and beyond to maximize your reach"
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
              App Development That <span className="text-red-500">Transforms</span> & <span className="text-[#2F2D73]">Engages</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Bring Your App Idea to Life?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us create transformative mobile apps with cutting-edge features and exceptional user experiences.
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

export default AppDevelopment;