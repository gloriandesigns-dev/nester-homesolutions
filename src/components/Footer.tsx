import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Twitter, Send, Instagram } from 'lucide-react';

const Footer = () => {
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
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <footer className="w-full bg-white px-4 md:px-8 pb-8 pt-4">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        // Updated background color to #DCE4E5 and base text color to brand-dark for contrast
        className="max-w-[1400px] mx-auto bg-[#DCE4E5] rounded-[32px] md:rounded-[40px] p-6 md:p-10 lg:p-12 text-brand-dark"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Contact Card */}
          <motion.div 
            variants={fadeUpBlur}
            // Updated card background and border for the light theme
            className="w-full lg:w-[360px] bg-white/50 rounded-[24px] p-8 flex flex-col justify-between shrink-0 border border-white/60 shadow-sm"
          >
            <div>
              <img 
                src="https://www.dropbox.com/scl/fi/33mv0etqc6fd7rb3td6m4/Nestera-web-logo.webp?rlkey=r1eunzj0wssg4yfwb7oxfktqc&st=nkqvmzpl&raw=1" 
                alt="Nestera Home Solutions" 
                // Removed brightness-0 invert so the logo appears in its original dark color
                className="h-8 w-auto object-contain mb-6"
              />
              <div className="space-y-3 text-sm text-gray-700 font-medium leading-relaxed">
                <p>Discover world-class solutions from Aluplast, Schüco, Technorail, Wesmarc and ICEIL — brought to you exclusively by Nestera Home Solutions.</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-8">
                <a href="#" className="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-sm">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-sm">
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-sm">
                  <Send className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-sm">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-base font-bold text-brand-dark mb-4 pr-4">
                Have questions or suggestions?
              </h4>
              <button className="w-full bg-brand-orange hover:bg-brand-darkHover transition-colors duration-300 text-white text-sm font-bold tracking-wide py-4 rounded-xl shadow-md">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 pt-4">
            
            {/* Column 2: Quick Links */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <h4 className="text-base font-bold text-brand-dark mb-6">Quick Links</h4>
              <ul className="space-y-3.5 text-sm text-gray-600 font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
              </ul>
            </motion.div>

            {/* Column 3: Products */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <h4 className="text-base font-bold text-brand-dark mb-6">Products</h4>
              <ul className="space-y-3.5 text-sm text-gray-600 font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Windows</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Doors</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Railings</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Lighting</a></li>
              </ul>
            </motion.div>

            {/* Column 4: Brands */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <h4 className="text-base font-bold text-brand-dark mb-6">Brands</h4>
              <ul className="space-y-3.5 text-sm text-gray-600 font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Aluplast</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Schüco</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Technorail</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Wesmarc Doors</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">ICEIL</a></li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom Disclaimer */}
        <motion.div 
          variants={fadeUpBlur}
          className="mt-16 pt-8 border-t border-gray-300 text-center md:text-left"
        >
          <p className="text-sm leading-relaxed text-gray-500 font-medium">
            Copyright 2025. All Rights Reserved – Nestera Home Solutions.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
