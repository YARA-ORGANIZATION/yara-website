'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const ForFellows = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };


   const applicationRequirements = [
      { text: "Updated CV/Resume", emphasis: "Updated " },
      { text: "Letter of Recommendation from a lecturer or academic advisor", emphasis: "Letter of Recommendation " },
      { text: "Academic Transcripts", emphasis: "Academic Transcripts" }
   ];

   const faqs = [
      {
         question: "Who can apply?",
         answer: "Undergraduate students in Ghana pursuing STEM-related courses can apply.",
      },
      {
         question: "Will the fellowship interfere with my university studies?",
         answer: "No, the fellowship is designed to complement your academic studies.",
      },
      {
         question: "Is there any financial cost to apply?",
         answer: "No, applying for the fellowship is completely free.",
      },
      {
         question: "Is the fellowship program only for STEM students?",
         answer: "Yes, the fellowship primarily focuses on STEM disciplines.",
      },
      {
         question: "When is the application deadline?",
         answer: "The application deadline is typically announced on our official website.",
      },
      {
         question: "When does the program start?",
         answer: "The program starts in the summer and runs for one academic year.",
      },
      {
         question: "Will the program delivery be online?",
         answer: "Yes, the program consists of both online sessions and in-person workshops.",
      },
   ];

   return (
      <section className="font-neue w-full overflow-x-hidden">
         {/* Hero Section */}
         <div className="relative text-black flex flex-col items-center justify-center px-4 pt-12 sm:pt-16 lg:pt-20 mt-8 sm:mt-12 lg:mt-16">
            <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
               <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-[120px] tracking-tight text-black leading-tight">
                  FOR<br />FELLOWS
               </h1>
               <div className="relative">
                  <p className="relative font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black mx-auto px-4 pt-8 sm:py-16 lg:py-20">
                     Fellows Application Process
                  </p>
               </div>
            </div>
            <Image
               width={1920}
               height={1080}
               src="/images/6.png"
               alt="leaf illustration"
               className="absolute sm:w-[30%] z-0 opacity-50 sm:opacity-100 top-16 w-[50%] left-[-5%] h-auto max-w-4xl mx-auto"
            />
         </div>

         {/* Application Steps */}
         <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 w-full max-w-5xl">
               {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-6 lg:gap-8 group hover:translate-x-2 transition-transform duration-300">
                     <h2 className="font-black text-4xl sm:text-5xl lg:text-7xl shrink-0">Step {index + 1}.</h2>
                     <p className="font-roman text-xl sm:text-2xl lg:text-3xl pt-2">
                        {index === 0 && <>Complete the <span className="font-medium">online application form.</span></>}
                        {index === 1 && "Upload the required documents."}
                        {index === 2 && <>Shortlisted applicants will be invited for an <span className="font-medium">interview or research proposal submission.</span></>}
                        {index === 3 && "Selected fellows will receive confirmation and onboarding details."}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* CTA Button */}
         <div className="flex justify-center items-center py-4 sm:py-8">
            <a href="https://forms.gle/9kqw4iBvXJWAZZgK7" target="_blank" rel="noopener noreferrer">
               <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Apply Now
               </button>
            </a>
         </div>

         {/* Eligibility Criteria */}
         <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <div className="relative mb-10">
               <p className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  Eligibility Criteria
               </p>
               <Image
                  width={1920}
                  height={1080}
                  src="/images/15.png"
                  alt="underline header illustration"
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-auto mt-4"
               />
            </div>

            <div className="space-y-6 sm:space-y-8 w-full max-w-5xl">
               {[...Array(4)].map((_, index) => (
                  <div key={index} className="font-roman text-xl sm:text-2xl lg:text-3xl flex items-start gap-6 sm:gap-8 group hover:translate-x-2 transition-transform duration-300">
                     <h2 className="font-medium shrink-0">Step {index + 1}.</h2>
                     <p className="max-w-4xl">
                        {index === 0 && <><span className="font-medium">3rd-year undergraduate </span>student in Ghana (any STEM-related field).</>}
                        {index === 1 && <><span className="font-medium">Strong </span>academic credentials & research interest</>}
                        {index === 2 && <>Commitment to completing the <span className="font-medium">one-year program, </span>including online sessions and boot camps.</>}
                        {index === 3 && <>Aspiration to pursue <span className="font-medium">graduate studies (Master&apos;s/PhD) in research-related fields.</span></>}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* Application Requirements */}
         <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <div className="relative mb-16">
               <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  Application Requirements
               </h2>
               <Image
                  width={1920}
                  height={1080}
                  src="/images/15.png"
                  alt="underline header illustration"
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-auto mt-4"
               />
            </div>

            <div className="flex flex-col items-start space-y-6 sm:space-y-8 w-full max-w-5xl">
               {applicationRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                     <Image
                        width={1920}
                        height={1080}
                        src="/images/20.png"
                        alt="check illustration"
                        className="w-6 sm:w-8 h-auto flex-shrink-0"
                     />
                     <p className="font-roman text-xl sm:text-2xl lg:text-3xl">
                        <span className="font-medium">{req.emphasis}</span>
                        {req.text.replace(req.emphasis, '')}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* Ready to Apply Section */}
         <div className="flex flex-col justify-center items-center py-12 sm:py-16">
            <h2 className="font-medium text-xl sm:text-2xl mb-6 sm:mb-8">READY TO APPLY?</h2>
            <a href="https://forms.gle/9kqw4iBvXJWAZZgK7" target="_blank" rel="noopener noreferrer">
               <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Apply Now
               </button>
            </a>
         </div>

         {/* FAQs Section */}
         <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20">
            <div className="relative mb-16">
               <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  FAQs
               </h2>
               <div className="absolute -top-3 md:-top-5 left-1/2 transform -translate-x-1/2 lg:translate-x-[calc(-50%)] z-0">
                  <Image
                     width={1920}
                     height={1080}
                     src="/images/14.png"
                     alt="circle header illustration"
                     className="w-32 sm:w-44 h-auto max-w-4xl mx-auto"
                  />
               </div>
            </div>

            <div className="space-y-4 w-full max-w-4xl">
               {faqs.map((faq, index) => (
                  <div key={index} className="border border-black rounded-xl">
                     {/* Question */}
                     <button
                        onClick={() => toggleFAQ(index)}
                        className="flex w-full justify-between items-center py-4 px-4 cursor-pointer"
                     >
                        <div className="flex items-center gap-4">
                           <Image
                              width={1920}
                              height={1080}
                              src="/images/21.png"
                              alt="check illustration"
                              className="w-auto sm:w-8 h-8 flex-shrink-0"
                           />
                           <p className="font-bold text-lg sm:text-xl lg:text-2xl text-left">{faq.question}</p>
                        </div>

                        {/* Dropdown Icon */}
                        <motion.div
                           animate={{ rotate: openIndex === index ? 180 : 0 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                           {openIndex === index ? (
                              <ChevronDown className="w-6 h-6 text-gray-900" />
                           ) : (
                              <ChevronDown className="w-6 h-6 text-gray-900" />
                           )}
                        </motion.div>
                     </button>

                     {/* Answer (Collapsible) */}
                     <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                           height: openIndex === index ? "auto" : 0,
                           opacity: openIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                     >
                        <p className="px-12 pb-4 text-gray-700 text-lg sm:text-xl leading-relaxed">
                           {faq.answer}
                        </p>
                     </motion.div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ForFellows;