'use client'

import { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const teamMembers = [
   {
      name: "Nana Akua Acheampomaa Atuahene",
      role: "Program & Partnership Manager",
      description: `Nana Akua Acheampomaa Atuahene is a Programs and Partnerships Manager with over seven years of experience in research-driven program development, funding acquisition, and managing strategic partnerships. Passionate about youth empowerment, she has worked extensively in business development, technology, and sustainability, leading initiatives that equip young Africans with the skills and resources needed to thrive in academic, entrepreneurial and professional spaces.  \n\n
      
      Her expertise in program management, research, and mentorship is evident from her work with organizations like the Pan-African Tech Foundation (UK), where she mobilized millions in funding for tech and blockchain initiatives, creating training programs that empowered youth across Africa. As Director of Business Development and Partnerships at GrandHedge International (Ghana), she led sustainability-focused programs, developed research-backed training manuals, and secured  funding for climate action and gender initiatives.
Nana’s background in research is further demonstrated by her contributions to the Northern Food Index Research at Social Innovation Africa (UK/Ghana), where she played a key role in policy development and impact assessment. She has also designed and led capacity-building workshops, including mentorship programs with Mpesa Foundation in collaboration with Mastercard Foundation (Kenya) and The Noire Space (UK), where she mentored young students in research, business development, and entrepreneurship.
As a dedicated advocate for youth-led initiatives, she continues to drive programs that equip African youth with the pre-requisite tools needed for transformative development on the African continent
`,
      image: "/images/akua.jpg",
   },
   {
      name: "Okai Ayea Peter",
      role: "Programs Associate",
      description: "Okai Peter is a dedicated Community Builder passionate about empowering young minds across African communities through technology education and collaborative networks. As the Lead for PyClub GCTU, he creates safe spaces where students can connect, learn, and grow in emerging technologies. His work focuses on building Web3 ecosystems, fostering digital inclusion, and advocating for the next generation of African innovators. With experience in social media management and community organizing, Peter believes in the power of collective knowledge to transform communities and shape Africa's digital future",
      image: "/images/peter.jpg",
   },
   {
      name: "Isaac Aboah",
      role: "Cofounder & Executive Director",
      description: `Isaac is an entrepreneur and critical thinker at large. Isaac defines his life's mission as building prosperity at scale, especially for underprivileged people. Isaac is obsessively solutions-oriented and is passionate about innovating pathways for education and skills development across Africa. He is founder of Melo Technologies, AI-distribution based solution for manufacturers, Festival Director the Green Film Festival, Creator of Africa’s leading thought-leadership podcast, Change Africa Podcast and board member of the Commonwealth Human Ecology Council.`,
      image: "/images/ceo.jpg",
   },
   {
      name: "Isaac Baiden",
      role: "Cofounder & Research Director",
      description: `Dr. Isaac Baiden is a medical doctor and a PhD candidate in the Department of Physiology at Wayne State University, with a strong research focus on cardiorenal physiology, hypertension, and diuretic resistance. His work in the Ortiz Lab at Henry Ford Health System explores the intricate mechanisms of kidney and cardiovascular interactions, particularly in the context of heart failure.

His research excellence has been recognized with multiple prestigious awards, including the American Heart Association (AHA) Kidney in Cardiovascular Disease (KCVD) New Investigator Award, the David and Barbara Pieper Award for Outstanding Graduate Student, Marion Banhart Outstanding Graduate Student Award, and the American Physiological Society’s Top Predoctoral Poster Presentation Award. He is also a recipient of the AHA Predoctoral Fellowship, a grant he has received to study loop diuretic resistance in heart failure.`,
      image: "/images/isaac.jpg",
   },
   {
      name: "Justice Essiel",
      role: "Technology Associate",
      description: "The Co-Founder of Ecofundme and CTO at Ecoclime Africa. Ecofundme is the world's most advanced Climate Finance application. Its solves the funding and accountability gap in the climate financing market.",
      image: "/images/justice.jpg",
   },
];


const TeamCarousel = () => {
   const [selectedIndex, setSelectedIndex] = useState(2);
   const [visibleMembers, setVisibleMembers] = useState<typeof teamMembers>([]);

   const updateVisibleMembers = useCallback(() => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
      let membersToShow;

      if (screenWidth < 640) {
         membersToShow = 1;
      } else if (screenWidth < 1024) {
         membersToShow = 3;
      } else {
         membersToShow = 5;
      }

      const start = Math.max(0, Math.min(
         selectedIndex - Math.floor(membersToShow / 2),
         teamMembers.length - membersToShow
      ));

      setVisibleMembers(teamMembers.slice(start, start + membersToShow));
   }, [selectedIndex]);

   useEffect(() => {
      updateVisibleMembers();

      const handleResize = () => {
         updateVisibleMembers();
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [updateVisibleMembers]);

   const handlePrevious = () => {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
   };

   const handleNext = () => {
      setSelectedIndex((prev) => (prev < teamMembers.length - 1 ? prev + 1 : prev));
   };

   return (
      <div className="relative font-neue flex flex-col items-center w-full p-4 sm:p-6">
         <div className="relative w-full max-w-6xl">
            {/* Navigation Buttons */}
            <>
               <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  disabled={selectedIndex === 0}
               >
                  <ArrowLeftIcon size={24} />
               </button>
               <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  disabled={selectedIndex === teamMembers.length - 1}
               >
                  <ArrowRightIcon size={24} />
               </button>
            </>

            {/* Team Members Gallery */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 md:space-x-16 py-4">
               {visibleMembers.map((member) => (
                  <div
                     key={`member-${member.name}`}
                     className={classNames(
                        "relative transition-all duration-300 grayscale flex-shrink-0",
                        {
                           "grayscale-0 border-4 border-purple-600 p-1 sm:p-2 rounded-lg scale-110 sm:scale-125 md:scale-150":
                              teamMembers[selectedIndex].name === member.name,
                           "opacity-50": teamMembers[selectedIndex].name !== member.name,
                        }
                     )}
                     onClick={() => setSelectedIndex(teamMembers.findIndex(m => m.name === member.name))}
                  >
                     <Image
                        width={500}
                        height={500}
                        src={member.image}
                        alt={member.name}
                        className="h-40 w-40 object-cover rounded-lg cursor-pointer"
                     />
                  </div>
               ))}
            </div>
         </div>

         {/* Member Details */}
         <div className="mt-8 sm:mt-16 text-center max-w-lg px-4">
            <h2 className="text-xl sm:text-2xl font-medium">
               {teamMembers[selectedIndex].name}
            </h2>
            <p className="font-salted text-2xl sm:text-3xl text-purple-600 uppercase mt-2">
               {teamMembers[selectedIndex].role}
            </p>
            {teamMembers[selectedIndex].description && (
               <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  {teamMembers[selectedIndex].description}
               </p>
            )}
         </div>

         {/* Navigation Dots */}
         <div className="flex space-x-2 mt-4">
            {teamMembers.map((_, index) => (
               <button
                  key={`dot-${index}`}
                  className={`h-2 sm:h-3 transition-all duration-300 rounded-full ${selectedIndex === index ? "bg-black w-4 sm:w-6" : "bg-gray-300 w-2 sm:w-3"
                     }`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View team member ${index + 1}`}
               />
            ))}
         </div>
      </div>
   );
};

export default TeamCarousel;