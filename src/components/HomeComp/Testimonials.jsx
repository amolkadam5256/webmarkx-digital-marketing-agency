import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Images from "../../assets/images/images";

const testimonials = [
  {
    name: "Mohammad Shaikh",
    role: "CEO, TechSolutions",
    image: Images.Team2,
    stars: 5,
    feedback: "WEBMARKX – A game-changer! Boosted our online presence and sales with strategic, data-driven solutions. Highly recommended!",
    color: "#2F2D73"
  },
  {
    name: "Ashfaq Khan",
    role: "Marketing Director",
    image: Images.Team2,
    stars: 5,
    feedback: "WEBMARKX delivers! Expanded audience, boosted sales with expert SEO and social media strategies. Truly understands our brand and goals.",
    color: "#FF4D4D"
  },
  {
    name: "Amit Choudhari",
    role: "Founder, StartupX",
    image: Images.Team2,
    stars: 4.5,
    feedback: "A top decision! WEBMARKX drove tangible results with creative content and well-executed campaigns. Delighted with the ROI!",
    color: "#2F2D73"
  },
  {
    name: "Nusrat Ali",
    role: "CMO, BrandVision",
    image: Images.Team2,
    stars: 5,
    feedback: "WEBMARKX- Outstanding team! Professional, detail-oriented, and excellent communication. Exceeded expectations, made the process smooth and enjoyable.",
    color: "#FF4D4D"
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="50%" stopColor="#F2B90C" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z"
          />
        </svg>
      )}
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF4D4D] rounded-full blur-[90px] opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#2F2D73] rounded-full blur-[100px] opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-2/5 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF4D4D] font-semibold text-sm tracking-wider uppercase mb-3 block">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
              What clients say <br />
              <span className="text-[#2F2D73]">about us</span>
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="text-5xl font-bold text-[#2F2D73]">4.5</div>
              <div className="flex flex-col">
                <div className="flex">
                  {renderStars(4.5)}
                </div>
                <span className="text-gray-600 text-sm">★★★★★ 4.5/5</span>
                <span className="text-gray-600 text-sm">97 Ratings & Reviews</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
              Don't just take our word for it. Here's what our clients have to say about their experience working with us.
            </p>

            {/* Navigation Buttons and Review Button */}
            <div className="flex flex-col items-center lg:items-start gap-6 mt-10">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2F2D73] hover:bg-[#FF4D4D] transition-all duration-300 group"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 18l-6-6 6-6"></path>
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2F2D73] hover:bg-[#FF4D4D] transition-all duration-300 group"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </button>
              </div>

              {/* Write Review Button */}
              <a
                href="https://share.google/l5JvPvOtt6yO9sNBI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#FF4D4D] hover:bg-[#2F2D73] text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                Write a Review
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Swiper Carousel */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2,
                }
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="h-full bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -10 }}
                    style={{ borderTop: `4px solid ${item.color}` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                          src={item.image}
                          alt={item.name}
                        />
                        <div 
                          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.stars}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{item.role}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      {renderStars(item.stars)}
                    </div>
                    <p className="text-gray-700 italic">"{item.feedback}"</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;