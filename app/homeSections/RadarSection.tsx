"use client"
import React from 'react';
import { motion ,Variants} from 'framer-motion';

const RadarSection = () => {
  // Variants for the container to orchestrate the popping avatars
  // "staggerChildren" handles the delay between each child automatically
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each avatar pop
        delayChildren: 0.2,   // Initial delay before starting
      },
    },
  };

  // Variants for the individual avatars (pop up effect)
  const avatarVariants:Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      } 
    },
  } 

  return (
    <motion.div
      className="shrink-0 relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible, run once
      variants={containerVariants}
    >
      {/* 1. Static Dashed Circles 
          We keep these as standard divs as they don't move. 
      */}
      <div className="absolute w-full h-full border border-dashed border-gray-300 rounded-full" />
      <div className="absolute w-[70%] h-[70%] border border-dashed border-gray-300 rounded-full" />
      <div className="absolute w-[40%] h-[40%] border border-dashed border-gray-300 rounded-full" />

      {/* 2. Rotating Radar Scanner 
          OPTIMIZATION: Independent animation loop.
          'willChange' forces GPU layer promotion to prevent lag under load.
      */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {/* The Gradient Sweep */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(transparent_270deg,rgba(251,146,60,0.2)_360deg)]" />
        {/* The Leading Line */}
        <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-t from-orange-400/50 to-orange-400 origin-bottom -translate-x-1/2" />
      </motion.div>

      {/* 3. Center Avatar */}
      <motion.div
        className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200"
        variants={avatarVariants}
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
          alt="Central Candidate"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 4. Satellite Avatars 
          Notice we removed the manual delay classes. The parent 'containerVariants' handles the timing.
      */}
      
      {/* Top Left */}
      <motion.div
        className="absolute top-[10%] left-[15%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-orange-200 shadow-lg overflow-hidden bg-gray-200"
        variants={avatarVariants}
      >
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
      </motion.div>

      {/* Top Right */}
      <motion.div
        className="absolute top-[20%] right-[10%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200"
        variants={avatarVariants}
      >
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200"
        variants={avatarVariants}
      >
        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-[10%] right-[20%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200"
        variants={avatarVariants}
      >
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
      </motion.div>

    </motion.div>
  );
};

export default RadarSection;

// "use client"
// import React, { useEffect, useRef, useState } from 'react';

// const RadarSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 } // Trigger when 30% of the element is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     // <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"></div>
    
//       <div 
//         ref={sectionRef} 
//         className="shrink-0 relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center"
//       >
        
//         {/* 1. Static Dashed Circles */}
//         <div className="absolute w-full h-full border border-dashed border-gray-300 rounded-full" />
//         <div className="absolute w-[70%] h-[70%] border border-dashed border-gray-300 rounded-full" />
//         <div className="absolute w-[40%] h-[40%] border border-dashed border-gray-300 rounded-full" />

//         {/* 2. Rotating Radar Scanner 
//             - spins indefinitely
//             - contains the gradient sweep and the leading line 
//         */}
//         <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] z-0">
//             {/* The Gradient Sweep (Trail) */}
//             <div className="absolute inset-0 rounded-full bg-[conic-gradient(transparent_270deg,rgba(251,146,60,0.2)_360deg)]" />
//             {/* The Leading Line (Sharp Orange Line) */}
//             <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-t from-orange-400/50 to-orange-400 origin-bottom -translate-x-1/2" />
//         </div>

//         {/* 3. Center Avatar (Always visible or pop first) */}
//         <div className={`absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
//            <img 
//              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200" 
//              alt="Central Candidate" 
//              className="w-full h-full object-cover"
//            />
//         </div>

//         {/* 4. Popping Avatars with Staggered Delays 
//             Using 'delay' via inline styles or tailwind classes
//         */}
        
//         {/* Top Left - Delay 300ms */}
//         <div 
//             className={`absolute top-[10%] left-[15%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-orange-200 shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
//         >
//            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
//         </div>

//         {/* Top Right - Delay 700ms */}
//         <div 
//             className={`absolute top-[20%] right-[10%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
//         >
//            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
//         </div>

//         {/* Bottom Left - Delay 1100ms */}
//         <div 
//             className={`absolute bottom-[20%] left-[10%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-[1100ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
//         >
//            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
//         </div>

//         {/* Bottom Right - Delay 1500ms */}
//         <div 
//             className={`absolute bottom-[10%] right-[20%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-[1500ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
//         >
//            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
//         </div>

//       </div>
    
//   );
// };

// export default RadarSection;