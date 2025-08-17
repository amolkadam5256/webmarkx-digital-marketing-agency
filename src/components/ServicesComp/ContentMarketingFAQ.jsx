import { useState } from 'react';

const ContentMarketingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is content marketing?',
      answer: 'Content marketing is a strategic approach that involves creating and distributing valuable, relevant, and consistent content to attract and engage a target audience, ultimately driving profitable customer action.'
    },
    {
      question: 'How can content marketing benefit my business?',
      answer: 'Content marketing can boost brand awareness, establish authority, generate leads, improve customer loyalty, and drive conversions - all while being more cost-effective than traditional advertising.'
    },
    {
      question: 'What types of content can be used in content marketing?',
      answer: 'You can use blogs, videos, infographics, podcasts, case studies, whitepapers, social media posts, ebooks, webinars, newsletters, and more - the key is matching content types to your audience\'s preferences.'
    },
    {
      question: 'How do I measure the success of my content marketing efforts?',
      answer: 'Track metrics like website traffic, engagement rates, time on page, social shares, lead generation, conversion rates, and ROI. Tools like Google Analytics and marketing automation platforms can help.'
    },
    {
      question: 'Do I need a content marketing strategy, and how do I create one?',
      answer: 'Yes! Start by defining goals, understanding your audience, conducting content audits, planning topics and formats, creating an editorial calendar, determining distribution channels, and establishing measurement criteria.'
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#2F2D73] mb-10 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500 shadow-sm hover:shadow-md bg-white"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F2D73] focus:ring-offset-2"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isActive}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-black sm:text-xl">
                  {faq.question}
                </h3>
                <span className={`ml-4 flex-shrink-0 transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'max-h-[500px]' : 'max-h-0'}`}
                aria-hidden={!isActive}
              >
                <div className="p-6 bg-gray-50 text-black">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentMarketingFAQ;