import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import HomeServiceSection from '../HomeComp/HomeServiceSection';

const PpcAdvertising = () => {
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
      question: "What is PPC advertising?",
      answer: "PPC (Pay-Per-Click) advertising is an online marketing model where advertisers pay a fee each time their ad is clicked. It allows businesses to display ads on search engines and other platforms, targeting relevant audiences based on specific keywords or demographics. PPC offers immediate visibility and measurable results for businesses of all sizes."
    },
    {
      question: "How does PPC advertising work?",
      answer: "PPC advertising works through an auction system where advertisers bid on keywords relevant to their target audience. When someone searches for those keywords, the search engine runs an auction to determine which ads appear. Factors like bid amount, ad quality, and relevance determine ad placement. Advertisers only pay when someone clicks on their ad."
    },
    {
      question: "What platforms offer PPC advertising?",
      answer: "Major platforms include Google Ads (search, display, and video networks), Microsoft Advertising (Bing Ads), Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads, Pinterest Ads, and Amazon Advertising. Each platform offers unique targeting options and reaches different audience segments."
    },
    {
      question: "How much does PPC advertising cost?",
      answer: "PPC costs vary based on industry, competition, keywords, and targeting options. Businesses can set daily or monthly budgets to control spending. Costs are typically measured by Cost Per Click (CPC), which ranges from a few cents to several dollars depending on keyword competitiveness. We help optimize spending for maximum ROI."
    },
    {
      question: "Is PPC advertising suitable for my business?",
      answer: "PPC is suitable for most businesses looking to drive targeted traffic, generate leads, or increase sales. It's particularly effective for businesses with specific target audiences, those looking for immediate results, seasonal businesses, and companies wanting to test new markets or products before committing to long-term strategies."
    }
  ];

  const strategies = [
    {
      id: 'strategy1',
      title: 'Keyword Research',
      description: 'Conduct thorough keyword research to identify relevant and high-converting keywords that align with your business objectives. Use tools like Google Keyword Planner to discover valuable keywords with optimal search volumes and competition levels.',
      icon: '🔍',
      image: Images.PCP1
    },
    {
      id: 'strategy2',
      title: 'Ad Copy Optimization',
      description: 'Craft compelling and relevant ad copy that highlights your unique selling propositions (USPs) and encourages users to take action. A well-written ad copy improves click-through rates and drives more conversions.',
      icon: '📝',
      image: Images.DigitalMak2
    },
    {
      id: 'strategy3',
      title: 'A/B Testing',
      description: 'Continuously test different ad elements, such as headlines, ad copy, and call-to-action buttons, to identify the best-performing variations. A/B testing helps refine your campaigns and boost their effectiveness.',
      icon: '🧪',
      image: Images.DigitalMak3
    },
    {
      id: 'strategy4',
      title: 'Targeted Audience Segmentation',
      description: 'Segment your audience based on demographics, interests, and behaviors to deliver personalized ad messages. Create separate ad groups for each segment to tailor your ads and optimize campaign performance.',
      icon: '🎯',
      image: Images.Power_Marketing1
    },
    {
      id: 'strategy5',
      title: 'Landing Page Optimization',
      description: 'Ensure your landing pages are relevant to the ad content and offer a seamless user experience. Optimize landing pages for faster loading times, clear calls-to-action, and mobile responsiveness to improve conversion rates.',
      icon: '📱',
      image: Images.Power_Marketing2
    }
  ];

  const heroSlides = [
    {
      bgImage: Images.PCP1,
      title: "PPC That Drives Results & ROI",
      subtitle: "Targeted advertising campaigns that deliver measurable business growth"
    },
    {
      bgImage: Images.DigitalMak2,
      title: "Immediate Visibility, Measurable Results",
      subtitle: "Get in front of your ideal customers exactly when they're searching for your solutions"
    },
    {
      bgImage: Images.Power_Marketing2,
      title: "Data-Driven Advertising",
      subtitle: "Leverage analytics and insights to optimize your ad performance and maximize ROI"
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
              PPC That <span className="text-red-500">Converts</span> & <span className="text-[#2F2D73]">Performs</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Drive Targeted Traffic?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us create PPC campaigns that deliver measurable results and maximize your advertising ROI.
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

export default PpcAdvertising;