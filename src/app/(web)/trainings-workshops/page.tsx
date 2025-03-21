import Image from "next/image";
import Link from "next/link";

const TrainingsWorkshops = () => {
   const focusAreas = [
      "Research methodologies & experimental design",
      "Data analysis (qualitative & quantitative techniques)",
      "Scientific writing & publishing strategies",
      "Policy research & impact-driven studies",
      "Laboratory Techniques",
      "Career development (CV writing, networking, grant applications)"
   ];

   return (
      <>
         {/* Hero Section */}
         <div className="relative font-neue flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
            <div className="py-8 sm:py-12 lg:py-16">
               <div className="relative z-10 text-center max-w-[90%] sm:max-w-[85%] lg:max-w-7xl mx-auto">
                  <h1 className="font-black text-5xl sm:text-6xl md:text-6xl lg:text-[110px] tracking-tight text-black leading-tight">
                     TRAINING &<br />
                     WORKSHOPS
                  </h1>
                  <p className="font-roman text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl sm:max-w-2xl lg:max-w-6xl mx-auto pt-8 sm:pt-12 lg:pt-20 px-4 sm:px-6">
                     Our program includes
                     <span className="font-medium"> workshops, boot camps, and specialized training sessions </span>
                     to equip aspiring researchers with
                     <span className="font-medium"> cutting-edge research skills </span>
                     across disciplines
                  </p>
               </div>
            </div>
         </div>

         {/* Focus Areas Section */}
         <div className="relative font-neue flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-8 sm:mb-12">
               <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  Key focus areas:
               </h2>
            </div>

            <div className="flex flex-col items-start space-y-6 sm:space-y-8 w-full max-w-[90%] sm:max-w-2xl lg:max-w-5xl">
               {focusAreas.map((area, index) => (
                  <div
                     key={index}
                     className="flex items-start sm:items-center gap-3 sm:gap-4 w-full group hover:transform hover:translate-x-2 transition-transform duration-300"
                  >
                     <Image
                        width={500}
                        height={500}
                        src="/images/20.png"
                        alt="check illustration"
                        className="w-8 sm:w-10 lg:w-12 h-auto flex-shrink-0 mt-1 sm:mt-0"
                     />
                     <p className="font-roman text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        {area}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* CTA Button Section */}
         <div className="flex justify-center items-center py-8 sm:py-12 px-4 sm:px-6">
            <Link href="/whats-new">
               <button className="font-neue font-light text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Join our upcoming workshops & bootcamps!
               </button>
            </Link>
         </div>
      </>
   );
};

export default TrainingsWorkshops;