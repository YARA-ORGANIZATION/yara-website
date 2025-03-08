import Link from "next/link";
import Image from "next/image";

const Fellowship = () => {
   return (
      <section className="relative font-neue pt-8 sm:pt-12 md:pt-16 lg:pt-40 px-4">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-black">
                  STEM FELLOWSHIP<br />PROGRAM
               </h2>
               <p className="font-roman text-lg sm:text-xl md:text-2xl max-w-2xl mt-4 sm:mt-8 px-2">
                  Join the first cohort of our
                  <span className="font-medium"> one-year researcher-in-training fellowship </span>
                  for undergraduate students in Ghana, focusing on research skills, mentorship,
                  and career development in STEM.
               </p>
               <Link href="/for-fellows">
                  <button className="font-light mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border-[1px] border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                     Learn More
                  </button>
               </Link>
            </div>
         </div>
         <Image
            width={500}
            height={500}
            src="/images/16.png"
            alt="gear illustration"
            className="animate-rotate-item absolute right-[30%] md:right-[35%] lg:right-[40%] -top-[2%] md:top-0 lg:top-[15%] w-[11%] md:w-[8%] lg:w-[5%]"
            style={{ transform: 'scaleX(-1)' }}
         />
         <Image
            width={500}
            height={500}
            src="/images/13.png"
            alt="head illustration"
            className="absolute left-[15%] md:left-[20%] lg:left-[25%] top-[22%] md:top-[32%] lg:top-[50%] w-[11%] md:w-[8%] lg:w-[5%]"
         />
         <Image
            width={500}
            height={500}
            src="/images/1.png"
            alt="rocket illustration"
            className="animate-rotate-item absolute right-[15%] md:right-[20%] lg:right-[25%] top-[25%] md:top-[35%] lg:top-[45%] w-[11%] md:w-[8%] lg:w-[5%]"
         />
         <Image
            width={500}
            height={500}
            src="/images/22.png"
            alt="bulb illustration"
            className="animate-float-item absolute left-[27%] md:left-[33%] lg:left-[38%] -top-4 md:-top-2 lg:top-[12%] w-[11%] md:w-[8%] lg:w-[5%]"
         />
      </section>
   );
};

export default Fellowship;