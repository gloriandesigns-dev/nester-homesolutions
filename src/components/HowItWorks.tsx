import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Ruler, CheckCircle, Users } from 'lucide-react';

const HowItWorks = () => {
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

  const benefits = [
    {
      icon: Globe,
      title: "Exclusive Global Brands",
      desc: "Exclusive access to globally renowned brands"
    },
    {
      icon: Shield,
      title: "Unmatched Quality & Craftsmanship",
      desc: "End-to-end solutions: consultation, supply, and installation"
    },
    {
      icon: Ruler,
      title: "Tailored Solutions for Every Project",
      desc: "Premium quality backed by warranties"
    },
    {
      icon: CheckCircle,
      title: "Seamless Experience from Start to Finish",
      desc: "Expert guidance tailored to your design needs"
    },
    {
      icon: Users,
      title: "Expert Guidance You Can Trust",
      desc: "Timely delivery and professional service"
    }
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: Video */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24 lg:mb-32"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16">
            <motion.h2 
              variants={fadeUpBlur}
              className="text-5xl md:text-6xl lg:text-[5rem] font-black uppercase leading-[0.9] tracking-tighter w-full lg:w-1/2 text-brand-dark"
            >
              How Does It<br/>Work?
            </motion.h2>
          </div>

          <motion.div variants={fadeUpBlur} className="relative w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 bg-brand-orange"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">Watch our video</span>
            </div>
            
            <div className="relative w-full aspect-video bg-gray-100 rounded-[40px] rounded-tl-none overflow-hidden shadow-sm">
              <video 
                src="https://www.dropbox.com/scl/fi/tt63aorri7fuy0ovnle87/LUXURY-INTERIOR-DESIGN-for-spending-the-best-life-YODEZEEN-architects-1080p-h264-1.mp4?rlkey=vm1bt2gleuexp590o9e1xh74f&st=dvyud14g&raw=1" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Your Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeUpBlur}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-12 text-brand-dark"
          >
            Why Choose Nestera Home Solutions?
          </motion.h2>

          {/* Cards Container */}
          <div className="relative">
            <div className="absolute -top-6 left-0 right-0 flex justify-between hidden md:flex px-8">
              <div className="w-1 h-1 bg-brand-orange"></div>
              <div className="w-1 h-1 bg-brand-orange"></div>
              <div className="w-1 h-1 bg-brand-orange"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeUpBlur}
                    className="border border-gray-200 p-8 md:p-10 rounded-2xl rounded-tr-[40px] rounded-bl-[40px] bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300 group flex flex-col items-start"
                  >
                    <div className="w-12 h-12 mb-8 text-brand-orange">
                      <Icon className="w-full h-full stroke-[1.5]" />
                    </div>
                    <h4 className="font-bold text-sm uppercase mb-4 tracking-wide text-brand-dark group-hover:text-brand-orange transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div variants={fadeUpBlur} className="mt-16 text-center">
            <a 
              href="#" 
              className="inline-block text-xs font-bold uppercase tracking-wider text-brand-dark border-b-2 border-brand-dark pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors"
            >
              Explore All Benefits
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
