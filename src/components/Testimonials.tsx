import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "“Technorail railings gave our terrace a clean, luxurious look. The materials feel sturdy and premium, and the installation was handled with great precision. Nestera’s team guided us perfectly through the design selection. Couldn’t be happier with the result!”",
    name: "T Venkatesh",
    rating: 5
  },
  {
    id: 2,
    text: "“The Aluplast windows completely transformed our living room. Excellent soundproofing and an elegant design that perfectly matches our interior. Highly recommend Nestera Home Solutions!”",
    name: "Priya R.",
    rating: 5
  },
  {
    id: 3,
    text: "“We chose Wesmarc doors for our interior, and the craftsmanship is unmatched. The finish is flawless, and the team ensured a seamless installation process from start to finish.”",
    name: "Amit S.",
    rating: 5
  },
  {
    id: 4,
    text: "“Schüco sliding systems are incredibly smooth and visually stunning. The installation team was highly professional and efficient. Our home feels much more open and connected to the outdoors.”",
    name: "Rajesh K.",
    rating: 5
  },
  {
    id: 5,
    text: "“ICEIL lighting added the perfect ambiance to our newly renovated home. The Nestera team's guidance in selecting the right fixtures was invaluable. Truly a world-class experience.”",
    name: "Sneha M.",
    rating: 5
  },
  {
    id: 6,
    text: "“From the initial consultation to the final installation, Nestera provided a seamless and premium experience. Our home looks absolutely stunning with their curated solutions.”",
    name: "Vikram D.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Increased card width for the larger container
  const cardWidth = 420; 
  const gap = 24;
  const slideDistance = cardWidth + gap;

  const next = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const fadeUpBlur = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-32 px-4 md:px-8 overflow-hidden">
      {/* Increased max-width container */}
      <div className="max-w-[1536px] mx-auto bg-[#F4F4F6] rounded-[40px] p-8 md:p-12 lg:p-16">
        
        <motion.div 
          className="flex flex-col xl:flex-row gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Left Column: Heading & Navigation */}
          <motion.div variants={fadeUpBlur} className="xl:w-[30%] flex flex-col justify-between shrink-0">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">
                Testimonial
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#0B0F19] leading-[1.05] tracking-tight mb-8">
                Our<br />Customer<br />Reviews
              </h2>
            </div>
            
            <div className="flex gap-4 mt-4 xl:mt-0">
              <button 
                onClick={prev}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed' 
                    : 'border-[#0B0F19] text-[#0B0F19] hover:bg-[#0B0F19] hover:text-white'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                disabled={currentIndex >= testimonials.length - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentIndex >= testimonials.length - 1
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed' 
                    : 'border-[#0B0F19] text-[#0B0F19] hover:bg-[#0B0F19] hover:text-white'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Carousel */}
          <motion.div variants={fadeUpBlur} className="xl:w-[70%] overflow-hidden w-full">
            <motion.div 
              className="flex gap-6"
              initial={false}
              animate={{ x: -(currentIndex * slideDistance) }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 shrink-0 group cursor-pointer"
                  style={{ width: `${cardWidth}px`, height: '340px' }}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300 overflow-hidden italic">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex flex-col items-end mt-6">
                    <span className="font-bold text-[#0B0F19] text-base md:text-lg">
                      {testimonial.name}
                    </span>
                    <div className="flex gap-1 mt-1.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F4C150] text-[#F4C150]" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
