'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
   const [progress, setProgress] = useState(0);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setProgress((prevProgress) => {
            const newProgress = prevProgress + Math.random() * 5 + 2;

            if (newProgress >= 100) {
               clearInterval(interval);
               setTimeout(() => setIsLoaded(true), 1500);
               return 100;
            }
            return newProgress;
         });
      }, 70);

      return () => clearInterval(interval);
   }, []);

   if (isLoaded) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-start justify-start overflow-hidden">
         {/* Background with smoother gradient transition */}
         <motion.div
            className="absolute inset-0 bg-black"
            animate={{
               background: `linear-gradient(to top, #8b5cf6 ${progress}%, #000000 ${progress}%)`,
            }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
         />

         <div className="font-neue font-medium z-10 text-white text-2xl lg:text-4xl font-bold p-8">
            We are YARA
         </div>

         {/* Progress Indicator */}
         <div className="font-neue font-medium absolute bottom-8 right-8 text-white flex flex-col items-end">
            <motion.div
               className="text-9xl lg:text-[250px] font-bold mb-2"
               animate={{ opacity: [0.8, 1, 0.8] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
            >
               {Math.round(progress)}%
            </motion.div>
         </div>
      </div>
   );
};

export default LoadingScreen;
