import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, PenTool, ChevronRight, ChevronDown } from 'lucide-react';

const images = [
  "https://www.dropbox.com/scl/fi/syrtc3794pxep2y1cbh9l/25e08f3ed7a75aec8f528ef9bf8083d9.webp?rlkey=77yfot31xjeaky171ppp6qn5x&st=ljvhn29j&raw=1",
  "https://www.dropbox.com/scl/fi/9vey9gvv7t1retcfl583i/6314af0f75fff13930b73dee808b6c26.webp?rlkey=jtf24ysk5sw8n7oo0n01ze0ua&st=2s3grj33&raw=1",
  "https://www.dropbox.com/scl/fi/ta49i1p7cqtol5tgqe863/8bfb00c3aecd9bed3f152db0381a1608.webp?rlkey=xmq6i5p39dy9wooscakrvbnb3&st=yifq3kdn&raw=1"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const animProps = (delay: number) => ({
    initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1],
      delay 
    }
  });

  return (
    <section className="relative min-h-[200vh] flex flex-col bg-transparent">
      
      {/* Sticky Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Fixed image clipping by removing h-[120%] and yTransform, ensuring exact h-screen fit */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          <AnimatePresence mode="sync">
            <motion.img 
              key={currentImage}
              src={images[currentImage]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              alt="Luxury Interior" 
              // Applied object-cover and object-center to maintain aspect ratio without distortion
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col w-full">
        
        {/* Top Solid White Section */}
        <div className="bg-white w-full">
          {/* Navbar */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full px-6 md:px-12 py-6 flex items-center justify-between relative z-50 bg-white"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/33mv0etqc6fd7rb3td6m4/Nestera-web-logo.webp?rlkey=r1eunzj0wssg4yfwb7oxfktqc&st=nkqvmzpl&raw=1" 
                alt="Nestera Home Solutions" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>

            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
              <a href="#" className="hover:text-brand-orange transition-colors">HOME</a>
              <a href="#" className="hover:text-brand-orange transition-colors">ABOUT US</a>
              
              {/* Products Dropdown */}
              <div className="relative group py-6 -my-6">
                <a href="#" className="hover:text-brand-orange transition-colors flex items-center gap-1">
                  PRODUCTS <ChevronDown className="w-4 h-4" />
                </a>
                
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 border border-gray-100 z-50">
                  <div className="relative group/sub">
                    <a href="#" className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">
                      Windows & Doors
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <div className="absolute top-0 left-full ml-0 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 py-2 border border-gray-100">
                      <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">Wesmarc Doors</a>
                    </div>
                  </div>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">Sliding Doors</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">Railings</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">Lighting</a>
                </div>
              </div>

              <a href="#" className="hover:text-brand-orange transition-colors">CONTACT US</a>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <button className="border border-gray-300 px-6 py-2.5 hover:border-brand-dark transition-colors">
                CONTACT US
              </button>
            </div>
          </motion.nav>

          {/* Top Content Area (Headline) */}
          <div className="relative flex flex-col items-center pt-16 md:pt-24 pb-12 px-6">
            <motion.div {...animProps(0)} className="relative inline-block text-center">
              <div className="absolute -top-4 -left-6 md:-left-12 w-1.5 h-1.5 bg-brand-orange"></div>
              <div className="absolute -top-4 -right-6 md:-right-12 w-1.5 h-1.5 bg-brand-orange"></div>
              <div className="absolute -bottom-4 -left-6 md:-left-12 w-1.5 h-1.5 bg-brand-orange"></div>
              <div className="absolute -bottom-4 -right-6 md:-right-12 w-1.5 h-1.5 bg-brand-orange"></div>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tighter max-w-5xl mx-auto">
                Step Into a World<br />of Elegant Living
              </h1>
            </motion.div>

            <motion.p 
              {...animProps(0.1)}
              className="text-gray-500 text-sm md:text-base text-center mt-8 max-w-2xl mx-auto font-medium"
            >
              Premium windows, doors, railings and lighting — exclusively from world-class brands like Aluplast, Schüco, Technorail, Wesmarc and ICEIL.
            </motion.p>
          </div>
        </div>

        {/* Bottom Split Area (Search Module) */}
        <div className="relative w-full">
          <div className="bg-white w-full lg:w-[55%] xl:w-[45%] px-6 md:px-12 py-8 lg:py-12 lg:rounded-br-[100px] shadow-sm">
            <motion.div {...animProps(0.2)} className="max-w-xl">
              
              <div className="flex items-center gap-8 border-b border-gray-200 mb-6">
                <button className="pb-3 border-b-2 border-brand-dark font-bold text-sm tracking-wide">
                  HOME SOLUTIONS
                </button>
              </div>

              <p className="text-sm font-semibold mb-3">Discover our premium collections</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col sm:flex-row border border-gray-300 rounded-md bg-white overflow-hidden shadow-sm">
                  
                  <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-300">
                    <PenTool className="text-gray-400 w-5 h-5 shrink-0" />
                    <div className="flex flex-col w-full">
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Product</span>
                      <input 
                        type="text" 
                        placeholder="E.g. Sliding Doors" 
                        className="outline-none text-sm font-semibold text-brand-dark placeholder-brand-dark w-full bg-transparent" 
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-3 px-4 py-2">
                    <MapPin className="text-gray-400 w-5 h-5 shrink-0" />
                    <div className="flex flex-col w-full">
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Brand</span>
                      <input 
                        type="text" 
                        placeholder="E.g. Aluplast" 
                        className="outline-none text-sm font-semibold text-brand-dark placeholder-gray-400 w-full bg-transparent" 
                      />
                    </div>
                  </div>

                </div>

                <button className="bg-brand-orange hover:bg-brand-darkHover transition-colors duration-300 text-white font-bold text-sm px-8 py-4 sm:py-0 rounded-md shadow-md">
                  VIEW PRODUCTS
                </button>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
