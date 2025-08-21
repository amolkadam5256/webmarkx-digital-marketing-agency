import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import HomeServiceSection from '../HomeComp/HomeServiceSection';

const ContentMarketing = () => {
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
      question: "What is content marketing?",
      answer: "Content marketing is a strategic approach that involves creating and distributing valuable, relevant, and consistent content to attract and engage a target audience, ultimately driving profitable customer action."
    },
    {
      question: "How can content marketing benefit my business?",
      answer: "Content marketing helps build brand awareness, establish authority in your industry, generate leads, improve customer loyalty, and drive conversions—all while being more cost-effective than traditional advertising."
    },
    {
      question: "What types of content can be used in content marketing?",
      answer: "Content marketing can include blog posts, articles, videos, infographics, podcasts, case studies, whitepapers, eBooks, social media posts, email newsletters, and more."
    },
    {
      question: "How do I measure the success of my content marketing efforts?",
      answer: "Success can be measured through metrics like website traffic, engagement rates, social shares, lead generation, conversion rates, and ROI. Tools like Google Analytics help track these metrics."
    },
    {
      question: "Do I need a content marketing strategy, and how do I create one?",
      answer: "Yes, a strategy is essential. Start by defining your goals, understanding your audience, conducting content audits, planning content creation, determining distribution channels, and establishing measurement methods."
    }
  ];

  const strategies = [
    {
      id: 'strategy1',
      title: 'Google AdWords Strategy',
      description: 'Minimize costs and maximize revenue by employing targeted keywords, compelling ad copies, and strategic bidding to achieve high-quality clicks and conversions while optimizing your budget.',
      icon: '📊',
      image: Images.DigitalMak1
    },
    {
      id: 'strategy2',
      title: 'Revenue-Driven Bidding',
      description: 'Focus on revenue generation by utilizing data-driven bidding strategies, prioritizing keywords and campaigns that yield higher returns, and constantly refining ad performance to ensure profitable outcomes.',
      icon: '💰',
      image: Images.DigitalMak2
    },
    {
      id: 'strategy3',
      title: 'Brand Storytelling Framework',
      description: 'This strategy centers on using storytelling techniques to convey your brand\'s message and values. By creating compelling narratives, you can forge an emotional connection with your audience.',
      icon: '📖',
      image: Images.DigitalMak3
    },
    {
      id: 'strategy4',
      title: 'Conversion-Driven Content Plan',
      description: 'This strategy focuses on optimizing your content to drive conversions and achieve specific business goals. It involves creating content that guides users through the buyer\'s journey.',
      icon: '🚀',
      image: Images.Power_Marketing1
    },
    {
      id: 'strategy5',
      title: 'Amplify & Influence Strategy',
      description: 'This strategy aims to increase the reach and impact of your content. It involves leveraging various channels to amplify your content\'s visibility and influence.',
      icon: '📢',
      image: Images.Power_Marketing2
    }
  ];

  const heroSlides = [
    {
      bgImage: Images.Power_Marketing2,
      title: "Content That Converts",
      subtitle: "Transform your audience into loyal customers with compelling content"
    },
    {
      bgImage: Images.marketing_strategies1,
      title: "SEO-Optimized Content",
      subtitle: "Rank higher and attract more organic traffic with our strategic approach"
    },
    {
      bgImage: Images.SocialMedia1,
      title: "Engage Your Audience",
      subtitle: "Create meaningful connections through valuable content experiences"
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
              Content Marketing That <span className="text-red-500">Captivates</span> & <span className="text-[#2F2D73]">Converts</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us drive your strategy, engage your audience, and elevate your brand.
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

export default ContentMarketing;