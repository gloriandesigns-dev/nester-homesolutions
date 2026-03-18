import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface LogoData {
  id: string;
  src: string;
  alt: string;
}

const brandLogos: LogoData[] = [
  { 
    id: "logo-1", 
    src: "https://www.dropbox.com/scl/fi/5fddl8fqnruaxris0y74l/1.webp?rlkey=ypqjovgu7oheam15eew2gnc1w&st=i90tv652&raw=1", 
    alt: "Industry Leader 1" 
  },
  { 
    id: "logo-2", 
    src: "https://www.dropbox.com/scl/fi/l4oqs1i5x3n0db873us12/2-1.webp?rlkey=2zupueyruayxmch9al5kfp0jl&st=tf01601o&raw=1", 
    alt: "Industry Leader 2" 
  },
  { 
    id: "logo-3", 
    src: "https://www.dropbox.com/scl/fi/yr8iko553eghd9cepudzr/3.webp?rlkey=5mujohvh8alzlctzd5ytyrf4x&st=w5pr7z4v&raw=1", 
    alt: "Industry Leader 3" 
  },
  { 
    id: "logo-4", 
    src: "https://www.dropbox.com/scl/fi/fwq7b3wqo428lmokalglo/4.webp?rlkey=3jud7bmrtpchl58hci6vh7ink&st=vs80tizw&raw=1", 
    alt: "Industry Leader 4" 
  },
  { 
    id: "logo-5", 
    src: "https://www.dropbox.com/scl/fi/80j7ridhuvutu1u86gtgq/5.webp?rlkey=7taypbtxfgwf8i4sg39off9bm&st=p4wky400&raw=1", 
    alt: "Industry Leader 5" 
  }
];

const CustomerTicker = () => {
  const fadeUpBlur = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const progress = useMotionValue(0);
  const x = useTransform(progress, [0, 100], ["0%", "-50%"]);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    controlsRef.current = animate(progress, 100, {
      ease: "linear",
      duration: 80,
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controlsRef.current?.stop();
  }, [progress]);

  const handleMouseEnter = () => {
    if (controlsRef.current) controlsRef.current.speed = 0.2;
  };

  const handleMouseLeave = () => {
    if (controlsRef.current) controlsRef.current.speed = 1;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/200x100/png?text=Logo+Unavailable";
  };

  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="w-full bg-white py-16 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 text-center">
        <motion.h3 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpBlur}
          className="text-sm font-bold uppercase tracking-widest text-gray-400"
        >
          Trusted by Industry Leaders
        </motion.h3>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpBlur}
        className="relative w-full overflow-hidden group flex"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          style={{ x }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex w-max items-center gap-16 md:gap-24 px-8"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex items-center justify-center cursor-pointer"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                onError={handleImageError}
                // Added brightness-0 to force logos to be black, ensuring visibility on white background
                // Adjusted opacity for a subtle look that brightens on hover
                className="h-12 md:h-16 w-auto object-contain brightness-0 opacity-40 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomerTicker;
