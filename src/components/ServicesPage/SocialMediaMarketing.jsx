import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import HomeServiceSection from '../HomeComp/HomeServiceSection';

const SocialMediaMarketing = () => {
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
      question: "What is social media marketing?",
      answer: "Social media marketing involves using social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic. It encompasses publishing great content, listening to and engaging with followers, analyzing results, and running social media advertisements."
    },
    {
      question: "How can social media marketing benefit my business?",
      answer: "Social media marketing helps increase brand awareness, generate leads and sales, grow your audience, provide customer service, and gain insights about your customers. It allows for direct engagement with your audience and helps build brand loyalty."
    },
    {
      question: "Which social media platforms should I use for my business?",
      answer: "The best platforms depend on your target audience and business type. Facebook is great for broad demographics, Instagram for visual content and younger audiences, LinkedIn for B2B and professionals, Twitter for real-time engagement, and Pinterest for visually-oriented businesses."
    },
    {
      question: "How often should I post on social media?",
      answer: "Posting frequency depends on the platform and your audience. Generally, 1-2 times per day on Facebook, 1-2 times per day on Instagram, 3-5 times per day on Twitter, and 1 time per day on LinkedIn. Consistency is more important than frequency."
    },
    {
      question: "How can I measure the success of my social media marketing efforts?",
      answer: "Success can be measured through metrics like engagement rate, reach, impressions, clicks, conversions, follower growth, and ROI. Tools like Facebook Insights, Instagram Analytics, and third-party social media management platforms provide these metrics."
    }
  ];

  const strategies = [
    {
      id: 'strategy1',
      title: 'Content Diversification',
      description: 'Implement a diverse mix of content types, including visual (images and videos), educational blog posts, interactive polls, and user-generated content, to keep your audience engaged and interested.',
      icon: '🎨',
      image: Images.SocialMedia1
    },
    {
      id: 'strategy2',
      title: 'Audience Segmentation',
      description: 'Divide your audience into segments based on demographics, interests, and behaviors. Tailor your content and ad campaigns to target each segment, delivering personalized messages that resonate with their specific needs and preferences.',
      icon: '👥',
      image: Images.DigitalMak2
    },
    {
      id: 'strategy3',
      title: 'Consistent Branding',
      description: 'Maintain a consistent brand image across all social media platforms. Use cohesive colors, fonts, and messaging to create a recognizable and memorable brand identity that builds trust and fosters brand loyalty.',
      icon: '🏷️',
      image: Images.DigitalMak3
    },
    {
      id: 'strategy4',
      title: 'Influencer Partnerships',
      description: 'Collaborate with influencers in your niche to extend your reach and tap into their engaged audiences. Choose influencers whose values align with your brand to create authentic and impactful campaigns.',
      icon: '🌟',
      image: Images.Power_Marketing1
    },
    {
      id: 'strategy5',
      title: 'Data-Driven Analysis',
      description: 'Regularly monitor social media metrics like engagement rates, click-through rates, and conversion rates. Use this data to refine your strategies, identify top-performing content, and optimize your ad spending for maximum ROI.',
      icon: '📈',
      image: Images.Power_Marketing2
    }
  ];

  const heroSlides = [
    {
      bgImage: Images.DigitalMak3,
      title: "Social Media That Engages",
      subtitle: "Transform your social presence into a powerful business growth tool"
    },
    {
      bgImage: Images.DigitalMak1,
      title: "Targeted Social Campaigns",
      subtitle: "Reach the right audience with precision-targeted social media strategies"
    },
    {
      bgImage: Images.PCP1,
      title: "Build Brand Community",
      subtitle: "Create meaningful connections and foster loyalty through social engagement"
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
              Social Media That <span className="text-red-500">Engages</span> & <span className="text-[#2F2D73]">Grows</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us boost your brand's online presence with engaging content and targeted ad campaigns.
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

export default SocialMediaMarketing;