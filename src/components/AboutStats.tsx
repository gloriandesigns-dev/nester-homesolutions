import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedCounter = ({ from, to, duration = 1.8 }: { from: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const AboutStats = () => {
  const fadeUpBlur = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-20 lg:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-4 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span 
              variants={fadeUpBlur}
              className="text-gray-400 text-sm font-medium tracking-wide mb-16 lg:mb-32 uppercase"
            >
              Nestera Home Solutions
            </motion.span>

            <motion.div variants={fadeUpBlur} className="relative w-full max-w-[280px]">
              <div className="aspect-[4/3] overflow-hidden bg-gray-200 mb-4 rounded-xl shadow-sm">
                <img 
                  src="https://www.dropbox.com/scl/fi/tz4xuykiht6ntcgghmmtq/schiebetueren1-image-data.webp?rlkey=jvn5ungwvu5rq7c04tc02vv0f&st=elwej90i&raw=1" 
                  alt="Our Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-brand-dark">
                <span className="text-gray-400 font-normal">+</span> Our Project
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="lg:col-span-8 lg:pl-12 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={fadeUpBlur}
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-black tracking-tighter text-brand-dark mb-6"
            >
              Welcome to Nestera Home Solutions
            </motion.h2>

            <motion.div variants={fadeUpBlur} className="space-y-6">
              <p className="text-lg md:text-xl leading-[1.6] font-medium text-gray-600 max-w-3xl">
                At Nestera Home Solutions, we turn everyday living into an art form. As the trusted destination for windows, doors, railings, and lighting, we curate exceptional products from world-leading brands — including Aluplast, Schüco, Technorail, Wesmarc and ICEIL.
              </p>
              <p className="text-lg md:text-xl leading-[1.6] font-medium text-gray-600 max-w-3xl">
                Our passion lies in helping homeowners, architects, and designers craft spaces that balance innovation with timeless elegance. From sleek sliding doors and precision-engineered windows to luxurious railings and ambient lighting, every solution we offer is designed to elevate the way you live, work, and entertain.
              </p>
            </motion.div>

            <motion.button 
              variants={fadeUpBlur}
              className="bg-brand-orange hover:bg-brand-darkHover transition-colors duration-300 text-white font-bold text-sm px-8 py-4 rounded-md shadow-md mt-10 w-fit"
            >
              MORE ABOUT US
            </motion.button>

            <motion.div 
              variants={fadeUpBlur}
              className="w-full h-[1px] bg-gray-200 my-12 lg:my-16"
            />

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:gap-32">
              <motion.div variants={fadeUpBlur} className="flex flex-col">
                <div className="flex items-start">
                  <span className="text-7xl md:text-8xl lg:text-[7.5rem] leading-none font-black tracking-tighter text-brand-dark">
                    <AnimatedCounter from={0} to={13} />
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-blue-500 relative -top-2 md:-top-4 ml-1">+</span>
                </div>
                <span className="text-gray-400 text-sm md:text-base font-medium mt-4 tracking-wide">Years Experience</span>
              </motion.div>

              <motion.div variants={fadeUpBlur} className="flex flex-col">
                <div className="flex items-start">
                  <span className="text-7xl md:text-8xl lg:text-[7.5rem] leading-none font-black tracking-tighter text-brand-dark">
                    <AnimatedCounter from={0} to={64} />
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-orange relative -top-2 md:-top-4 ml-1">+</span>
                </div>
                <span className="text-gray-400 text-sm md:text-base font-medium mt-4 tracking-wide">Total Projects</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;
