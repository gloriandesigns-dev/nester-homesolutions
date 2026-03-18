import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "White Ash Panel Door",
    location: "Premium Collection",
    year: "2025",
    tags: ["DOOR", "PANEL"],
    image: "https://www.dropbox.com/scl/fi/jqfzppkbv6mb6unm46fea/WHITE-ASH-PANEL-DOOR.webp?rlkey=vsxoniye3qpzkco245utvkhp1&st=7tjqiquz&raw=1"
  },
  {
    id: 2,
    title: "Natural Walnut Panel Door",
    location: "Premium Collection",
    year: "2025",
    tags: ["DOOR", "PANEL"],
    image: "https://www.dropbox.com/scl/fi/fis9018ry5r3qmf8hc7fo/NATURAL-WALNUT-PANEL-DOOR.webp?rlkey=lsfz38mr3eoakn87lq2fbdsww&st=yq67hwff&raw=1"
  },
  {
    id: 3,
    title: "Dark Oak Panel Door",
    location: "Premium Collection",
    year: "2025",
    tags: ["DOOR", "PANEL"],
    image: "https://www.dropbox.com/scl/fi/1rcg9dezftqhoh0asv1c0/DARK-OAK-PANEL-DOOR.webp?rlkey=8z13fgxotkeg24np50rw1tvhf&st=lmexx4x5&raw=1"
  },
  {
    id: 4,
    title: "Modern Sliding Door",
    location: "Premium Collection",
    year: "2025",
    tags: ["DOOR", "SLIDING"],
    image: "https://www.dropbox.com/scl/fi/c76bclvus6tbtsddaujm2/sliding-door.webp?rlkey=24o16dl64zqtqqye9u0gzvpyz&st=8hv6fnd0&raw=1"
  },
  {
    id: 5,
    title: "Frosted Sliding Door",
    location: "Premium Collection",
    year: "2025",
    tags: ["DOOR", "SLIDING"],
    image: "https://www.dropbox.com/scl/fi/ur7ie2z22tw9duhogu8e8/sliding-door-frosted-glass.webp?rlkey=21m2vuhsb1fikwqclrs5xad2t&st=xtna47ge&raw=1"
  },
  {
    id: 6,
    title: "Sliding Wood Door",
    location: "Premium Collection",
    year: "2025",
    tags: ["DOOR", "SLIDING"],
    image: "https://www.dropbox.com/scl/fi/holcr26b2mo6t4zunj8to/sliding-door-wood.webp?rlkey=5bo2zkm40lulb9t7dkt1yuwys&st=owzilc4j&raw=1"
  },
  {
    id: 7,
    title: "Transline Glass Railing System",
    location: "Premium Collection",
    year: "2025",
    tags: ["RAILING", "GLASS"],
    image: "https://www.dropbox.com/scl/fi/hlx3qc3smo7kf0l8mot1p/Transline-Glass-Railing-System.webp?rlkey=c7lymj4sj59b0g2aljijh5biz&st=qw817x26&raw=1"
  },
  {
    id: 8,
    title: "Stainless Steel Balustrade System",
    location: "Premium Collection",
    year: "2025",
    tags: ["RAILING", "STEEL"],
    image: "https://www.dropbox.com/scl/fi/u1l5b1sfgs3u5jwl111a7/Stainless-Steel-Balustrade-System.webp?rlkey=eqgvmbppahs81ehxgupxpi5mc&st=7p99uckg&raw=1"
  },
  {
    id: 9,
    title: "Stainless Steel Glass System",
    location: "Premium Collection",
    year: "2025",
    tags: ["RAILING", "GLASS"],
    image: "https://www.dropbox.com/scl/fi/8jqkpc3wparzj7wq88yep/Stainless-Steel-Glass-Railing-System.webp?rlkey=wt7ltyyhgegomzwhudazi2iia&st=5brehqa6&raw=1"
  },
  {
    id: 10,
    title: "Translucent Stretch Ceiling",
    location: "Premium Collection",
    year: "2025",
    tags: ["CEILING", "STRETCH"],
    image: "https://www.dropbox.com/scl/fi/1ong1owv7vocy4yijygxi/Translucent-Stretch-Ceiling.webp?rlkey=b54p6koxbcs911p5ztl5pk37s&st=7hi0eis3&raw=1"
  },
  {
    id: 11,
    title: "Printed Stretch Ceiling",
    location: "Premium Collection",
    year: "2025",
    tags: ["CEILING", "PRINTED"],
    image: "https://www.dropbox.com/scl/fi/yudnsg1xhckd3p51ul8is/Printed-Stretch-Ceiling.webp?rlkey=qnyx1doqp8qc3g86k0m8w9r67&st=97nydwrz&raw=1"
  },
  {
    id: 12,
    title: "Tunable Ceiling",
    location: "Premium Collection",
    year: "2025",
    tags: ["CEILING", "TUNABLE"],
    image: "https://www.dropbox.com/scl/fi/ez0ze380jbb25nffvky9h/Tunable-Ceiling.webp?rlkey=irxw7xaq6hi30yjy02a6v8fja&st=ieqdvi4m&raw=1"
  },
  {
    id: 13,
    title: "RGB Dynamic Ceiling",
    location: "Premium Collection",
    year: "2025",
    tags: ["CEILING", "RGB"],
    image: "https://www.dropbox.com/scl/fi/u5xqc27xv9jt6o6vnyfzj/RGB-Dynamic-Ceiling.webp?rlkey=74i7k318l0rgen3qlpo9l9kut&st=v5ov2vie&raw=1"
  }
];

const ProjectsCarousel = () => {
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

  // Framer Motion smooth marquee logic
  const progress = useMotionValue(0);
  const x = useTransform(progress, [0, 100], ["0%", "-50%"]);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    controlsRef.current = animate(progress, 100, {
      ease: "linear",
      duration: 60, // Slower default speed
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controlsRef.current?.stop();
  }, [progress]);

  const handleMouseEnter = () => {
    if (controlsRef.current) controlsRef.current.speed = 0.2; // Slow down on hover
  };

  const handleMouseLeave = () => {
    if (controlsRef.current) controlsRef.current.speed = 1; // Resume normal speed
  };

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 lg:mb-24">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpBlur} className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center gap-2">
              <span className="text-gray-400 font-normal">+</span> OUR HOME SOLUTIONS
            </span>
          </motion.div>

          <motion.div variants={fadeUpBlur} className="lg:col-span-9 max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter leading-[1.1] mb-8 text-brand-dark">
              {/* Wrapped Home Solutions in a span with the accent color */}
              Our <span className="text-brand-orange">Home Solutions</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
              Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Smooth Marquee Carousel */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpBlur}
        className="relative w-full overflow-hidden group"
      >
        <motion.div 
          style={{ x }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex w-max gap-6 md:gap-8 px-4 md:px-8"
        >
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="w-[280px] md:w-[380px] lg:w-[420px] flex-shrink-0 group/card cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-sm group-hover/card:shadow-xl transition-shadow duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full border border-white/40 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/10 z-20">
                  <div className="w-20 h-20 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-md transform scale-90 group-hover/card:scale-100 transition-transform duration-500 ease-out shadow-2xl">
                    <span className="text-sm font-medium tracking-wide">View</span>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2 group-hover/card:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-col text-xs md:text-sm text-gray-500 font-medium space-y-1">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsCarousel;
