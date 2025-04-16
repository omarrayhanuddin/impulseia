import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const PartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const partners = [
    { name: "Brand", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=BRAND" },
    { name: "UDIX", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=UDIX" },
    { name: "nallycar", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=ALLY" },
    { name: "ZUMAR", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=ZUMAR" },
    { name: "USA", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=USA" },
    { name: "Tech", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=TECH" },
    { name: "Global", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=GLOBAL" },
    { name: "Innovate", logo: "https://placehold.co/80x80/EEE/31343C?font=raleway&text=INNO" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Increased stiffness for faster initial pop-in
        damping: 10,
        delay: i * 0.1
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="relative py-32 px-4 overflow-hidden bg-black"
    >
      {/* Deep space background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base dark layer with subtle star dust */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/80 to-black" />
        
        {/* Dense starfield */}
        {[...Array(400)].map((_, i) => {
          const size = Math.random() > 0.98 ? 
            Math.random() * 3 + 1 :  // Few larger stars
            Math.random() * 0.5 + 0.1; // Mostly tiny stars
          const opacity = Math.random() * 0.8 + 0.1;
          const duration = Math.random() * 10 + 5; // Slightly faster twinkling
          const twinkleIntensity = Math.random() > 0.9 ? 0.6 : 0.3;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity
              }}
              animate={{
                opacity: [
                  opacity * (1 - twinkleIntensity), 
                  opacity, 
                  opacity * (1 - twinkleIntensity)
                ]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Bright stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`bright-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              opacity: Math.random() * 0.5 + 0.5,
              boxShadow: '0 0 8px rgba(255,255,255,0.8)'
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 3, // Faster twinkling
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Cosmic</span> Partners
        </motion.h2>
        
        {/* Central cosmic system */}
        <motion.div 
          className="relative h-[600px] w-full max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Central glowing planet */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            variants={starVariants}
            custom={0}
          >
            <div className="relative h-48 w-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 shadow-xl shadow-blue-500/30 flex flex-col items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse" />
              <div className="absolute -inset-6 rounded-full border border-blue-300/10" />
              <span className="text-2xl font-bold text-white">125+</span>
              <span className="text-sm text-blue-100 mt-1">Galactic Clients</span>
            </div>
          </motion.div>
          
          {/* Faster floating logos */}
          {partners.map((partner, index) => {
            // Calculate initial positions in a sphere
            const angle = Math.random() * Math.PI * 2;
            const distance = 150 + Math.random() * 150;
            const x = distance * Math.cos(angle);
            const y = distance * Math.sin(angle);
            
            // FASTER animation parameters
            const floatDistance = 40 + Math.random() * 60; // Increased movement range
            const floatDuration = 8 + Math.random() * 4; // Much faster movement (reduced from 15-25s to 8-12s)
            const floatAngle = Math.random() * Math.PI * 2;
            const floatDelay = Math.random() * 3; // Shorter delay
            
            return (
              <motion.div 
                key={partner.name}
                className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-lg flex items-center justify-center p-2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 hover:border-blue-300/30 transition-all cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                variants={starVariants}
                custom={index * 0.1 + 0.3} // Slightly faster appearance
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: 'rgba(100, 200, 255, 0.2)',
                  boxShadow: '0 0 30px rgba(100, 200, 255, 0.5)',
                  transition: { duration: 0.2 } // Faster hover transition
                }}
                animate={{
                  x: [
                    x, 
                    x + floatDistance * Math.cos(floatAngle), 
                    x + floatDistance * Math.cos(floatAngle + Math.PI/3),
                    x
                  ],
                  y: [
                    y, 
                    y + floatDistance * Math.sin(floatAngle), 
                    y + floatDistance * Math.sin(floatAngle + Math.PI/3),
                    y
                  ],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: floatDuration,
                  delay: floatDelay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative h-20 w-20 rounded-full bg-white/90 p-1 shadow-inner overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="object-contain rounded-full"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-8 text-white text-sm font-medium opacity-0 whitespace-nowrap"
                  whileHover={{ 
                    opacity: 1,
                    y: -5,
                    transition: { duration: 0.15 } // Faster tooltip appearance
                  }}
                >
                  {partner.name}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Shooting stars - made slightly faster */}
          {[...Array(8)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 30;
            const endX = startX - 40 + Math.random() * 80;
            const endY = startY + 30 + Math.random() * 40;
            const duration = 0.6 + Math.random() * 0.3; // Faster shooting stars
            const delay = i * 2 + Math.random() * 3; // More frequent
            const size = Math.random() > 0.7 ? 2 : 1;
            
            return (
              <motion.div
                key={`shooting-${i}`}
                className="absolute top-0 left-0 h-1 rounded-full pointer-events-none"
                style={{
                  x: `${startX}vw`,
                  y: `${startY}vh`,
                  width: `${size * 40}px`,
                  background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(100,200,255,0.8) 50%, rgba(0,0,0,0) 100%)`,
                  opacity: 0,
                  transformOrigin: 'left center'
                }}
                animate={{
                  x: [`${startX}vw`, `${endX}vw`],
                  y: [`${startY}vh`, `${endY}vh`],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  repeatDelay: 10 + Math.random() * 15 // More frequent appearances
                }}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;