import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import HomeServiceSection from '../HomeComp/HomeServiceSection';

const SeoOptimization = () => {
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
      question: "What is SEO optimization?",
      answer: "SEO optimization refers to the process of making strategic improvements to a website to increase its visibility in search engine results, ultimately driving organic (non-paid) traffic to the site. It involves various techniques and strategies to improve a website's ranking in search engine results pages (SERPs)."
    },
    {
      question: "How does SEO optimization benefit my website?",
      answer: "SEO optimization helps increase your website's visibility, drives targeted organic traffic, improves user experience, builds credibility and trust, generates more leads and conversions, and provides long-term sustainable results compared to paid advertising."
    },
    {
      question: "What are the key factors in SEO optimization?",
      answer: "Key factors include quality content, keyword research and implementation, technical SEO (site speed, mobile-friendliness), on-page optimization (meta tags, headings), off-page SEO (backlinks), user experience, and local SEO for businesses serving specific geographic areas."
    },
    {
      question: "How long does it take to see results from SEO optimization?",
      answer: "SEO is a long-term strategy. Initial improvements may be seen in 3-6 months, but significant results typically take 6-12 months of consistent effort. The timeline varies based on factors like website age, competition, and the current state of your SEO."
    },
    {
      question: "Is SEO optimization a one-time process?",
      answer: "No, SEO is an ongoing process. Search engines frequently update their algorithms, competitors continually optimize their sites, and user behavior evolves. Regular monitoring, updates, and adjustments are necessary to maintain and improve rankings over time."
    }
  ];

  const strategies = [
    {
      id: 'strategy1',
      title: 'Keyword Research',
      description: 'Conduct comprehensive keyword research to identify relevant and high-value keywords that align with your target audience\'s search intent and incorporate them strategically into your website\'s content.',
      icon: '🔍',
      image: Images.SEO1
    },
    {
      id: 'strategy2',
      title: 'On-Page Optimization',
      description: 'Optimize your website\'s on-page elements, including title tags, meta descriptions, heading tags, and URL structures, to make them search engine friendly and improve your website\'s visibility in search results.',
      icon: '📄',
      image: Images.SEO
    },
    {
      id: 'strategy3',
      title: 'High-Quality Content',
      description: 'Create valuable and engaging content that addresses your audience\'s needs and interests, incorporating targeted keywords naturally. Well-crafted content attracts organic traffic and encourages backlinks from reputable sources.',
      icon: '✍️',
      image: Images.DigitalMak3
    },
    {
      id: 'strategy4',
      title: 'Link Building',
      description: 'Focus on acquiring high-quality backlinks from authoritative websites in your industry. Implement guest posting, outreach campaigns, and content promotion to build a strong backlink profile that boosts your website\'s authority and rankings.',
      icon: '🔗',
      image: Images.Power_Marketing1
    },
    {
      id: 'strategy5',
      title: 'Technical SEO',
      description: 'Ensure your website\'s technical aspects are optimized for search engines. This includes improving site speed, mobile-friendliness, and fixing any crawl errors or broken links. A well-optimized website enhances user experience and search engine visibility.',
      icon: '⚙️',
      image: Images.Power_Marketing2
    }
  ];

  const heroSlides = [
    {
      bgImage: Images.SEO1,
      title: "SEO That Drives Visibility & Traffic",
      subtitle: "Enhance your website's search engine visibility with targeted SEO strategies"
    },
    {
      bgImage: Images.SEO,
      title: "Rank Higher, Grow Faster",
      subtitle: "Improve your search rankings and drive valuable organic traffic to your site"
    },
    {
      bgImage: Images.Power_Marketing2,
      title: "Data-Driven SEO Solutions",
      subtitle: "Leverage insights and analytics to optimize your website's performance"
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
              SEO That <span className="text-red-500">Elevates</span> & <span className="text-[#2F2D73]">Accelerates</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Search Visibility?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us enhance your website's search engine rankings and drive valuable organic traffic.
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

export default SeoOptimization;