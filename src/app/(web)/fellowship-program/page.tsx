'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FellowshipProgram = () => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   return (
      <>
         {/* Introduction Section */}
         <div className="z-0 relative font-neue text-black flex flex-col items-center justify-center px-4 py-12 sm:py-20">
            <div className="py-8 sm:py-16">
               <div className="relative text-center max-w-full mx-auto">
                  <h1 className="font-black text-5xl sm:text-6xl md:text-6xl lg:text-[110px] tracking-tight text-black leading-tight">
                     {isMobile ? (
                        <>
                           FELLOWSHIP<br />PROGRAM
                        </>
                     ) : (
                        <>
                           FELLOWSHIP<br />PROGRAM
                        </>
                     )}
                  </h1>
                  <div className="mt-8 sm:mt-16 space-y-4 sm:space-y-8 px-2 sm:px-4">
                     <p className="font-roman text-lg sm:text-xl lg:text-2xl max-w-6xl">
                        The <span className="font-medium">YARA Fellowship Program</span> is a highly selective <span className="font-medium">one-year structured researcher-in-training program</span> designed to train exceptional undergraduate students to conduct rigorous research <span className="font-medium">and produce publishable outputs.</span>
                     </p>
                     <p className="font-roman text-lg sm:text-xl lg:text-2xl max-w-6xl">
                        <span className="font-medium">This intensive fellowship focuses on building technical skills and exposing students to early-stage research, aiming</span> to build a strong foundation for graduate studies <span className="font-medium">and a career in research or academic scholarship.</span>
                     </p>
                     <p className="font-roman text-lg sm:text-xl lg:text-2xl max-w-6xl">
                        While we are launching with a <span className="font-medium">STEM-focused fellowship,</span> our long-term goal is to expand into <span className="font-medium">Social Science, Humanities, and Interdisciplinary research programs</span> that tackle Africa&apos;s diverse challenges.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* STEM Fellowship Section */}
         <div className="relative flex flex-col items-center justify-center px-4 pt-20 lg:mt-28">
            <div className="font-neue text-center max-w-full mx-auto z-10">
               <h1 className="font-black text-5xl sm:text-6xl md:text-6xl lg:text-[110px] tracking-tight text-black leading-tight">
                  STEM FELLOWSHIP
               </h1>
               <p className="font-light mt-4 text-lg sm:text-xl lg:text-2xl max-w-6xl mx-auto px-2 sm:px-4">
                  The <span className="font-medium">one-year STEM fellowship program</span> is designed to incubate the <span className="font-medium">brightest and most driven undergrads</span> toward producing <span className="font-medium">high-impact research</span> in pioneering STEM fields that directly impact Africa&apos;s development.
               </p>
            </div>
            <div className="absolute bottom-44 md:bottom-0 lg:-bottom-10 z-0 w-full">
               <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-gray-200/95 to-transparent"></div>
               <Image
                  width={1920}
                  height={1080}
                  src="/images/16.png"
                  alt="gear illustration"
                  className="w-[55%] lg:w-1/3 h-auto max-w-4xl mx-auto"
               />
            </div>
         </div>

         {/* Program Structure Section */}
         <div className="relative font-neue flex flex-col items-center justify-center py-20 sm:py-32 px-4">
            <div className="text-center">
               <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  Program Structure:
               </h1>
               <div className="absolute top-10 md:top-16 lg:top-16 left-1/2 transform -translate-x-1/2 lg:translate-x-[calc(-50%)] z-0">
                  <Image
                     width={1920}
                     height={1080}
                     src="/images/14.png"
                     alt="circle header illustration"
                     className="w-64 sm:w-96 h-auto max-w-4xl mx-auto"
                  />
               </div>
               <h2 className="font-light text-xl sm:text-2xl tracking-tight text-black mt-12 sm:mt-16">
                  The fellowship is divided into <span className="font-medium">four phases</span>, each focusing on a critical aspect of research training:
               </h2>
            </div>

            {/* Phases */}
            <div className="pt-8 sm:pt-16 space-y-6 sm:space-y-8">
               {[
                  {
                     phase: "Phase 1.",
                     title: "Orientation & Foundation Building (Month 1-2)",
                     description: "Introduction to research ethics, methodologies, and mentorship pairing."
                  },
                  {
                     phase: "Phase 2.",
                     title: "Research Training & Proposal Development (Month 3-6)",
                     description: "Advanced research methods, data collection, and proposal writing."
                  },
                  {
                     phase: "Phase 3.",
                     title: "Independent Research & Mentorship (Month 7-10)",
                     description: "Hands-on research execution, mentorship, and guest lectures"
                  },
                  {
                     phase: "Phase 4.",
                     title: "Research Presentation & Career Development (Month 11-12)",
                     description: "Presentation of findings, career workshops, and graduate school preparation."
                  }
               ].map((phase, index) => (
                  <div key={index} className="flex sm:flex-row items-start gap-4 sm:gap-8 group hover:transform hover:translate-x-2 transition-transform duration-300">
                     <h2 className="font-black text-3xl sm:text-3xl md:text-5xl lg:text-6xl">{phase.phase}</h2>
                     <p className="font-roman text-xl sm:text-2xl lg:text-3xl max-w-2xl">
                        <span className="font-bold">{phase.title}</span><br />
                        {phase.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* Benefits Section */}
         <div className="relative font-neue flex flex-col items-center justify-center px-4">
            <div className="text-center">
               <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  Fellowship Benefits
               </h1>
            </div>
            <div className="pt-8 sm:pt-16 space-y-6 sm:space-y-8 max-w-5xl">
               {[
                  {
                     title: "World-Class Mentorship & Training:",
                     description: "Get personalized, one-on-one guidance from top researchers to build your expertise in scientific inquiry, research ethics, and publication."
                  },
                  {
                     title: "Pioneering Research Opportunities:",
                     description: "Work on and publish groundbreaking research that drives Africas development."
                  },
                  {
                     title: "Career Development & PhD Readiness:",
                     description: "Benefit from tailored career support and recommendations to excel in competitive PhD programs."
                  }
               ].map((benefit, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
                     <Image
                        width={1920}
                        height={1080}
                        src="/images/20.png"
                        alt="check illustration"
                        className="w-8 sm:w-12 h-auto mt-1 sm:mt-0"
                     />
                     <p className="font-roman text-xl sm:text-2xl lg:text-3xl">
                        <span className="font-bold">{benefit.title}</span> {benefit.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* Apply Button */}
         <div className="flex justify-center items-center pt-4 sm:pt-8 pb-12">
            <Link href="/for-fellows">
               <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Learn More
               </button>
            </Link>
         </div>
      </>
   );
};

export default FellowshipProgram;