import Link from "next/link";
import Image from "next/image";

const WhyAfrica = () => {
   return (
      <section className="relative font-neue py-8 md:py-16 px-4 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="relative flex flex-col items-center text-center mb-8 sm:mb-12">
               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-black z-10">
                  WHY AFRICA<br />NEEDS MORE<br />RESEARCHERS
               </h2>
               <p className="py-8 sm:py-16 font-bold text-base md:text-xl lg:text-3xl italic">
                  <span className="z-10">Did you know?</span>
               </p>
               <p className="text-lg sm:text-xl md:text-2xl max-w-5xl px-2">
                  Africa contributes less than <span className="font-medium">2% of global research output</span> despite being home to
                  <span className="font-medium"> 17% of the world&apos;s population</span>. Without a strong research foundation, scientific
                  breakthroughs, innovation, and technological advancements will remain out of reach.
               </p>
               <p className="text-lg sm:text-xl md:text-2xl max-w-5xl mt-4 px-2">
                  At YARA, we believe Africa needs more researchers—not just in numbers,
                  but in quality, innovation, and impact. Our programs are designed to change
                  this reality by training and mentoring the brightest young minds across the
                  continent to discover new knowledge that drives Africa&apos;s prosperity.
               </p>
               <Link href="/get-to-know-us">
                  <button className="font-light mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border-[1px] border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                     Discover Why
                  </button>
               </Link>
               <div className="absolute top-[20%] md:top-[30%] lg:top-[38%] left-[54%] md:left-[57%] lg:left-[56%] transform -translate-x-1/2 lg:translate-x-[calc(-50%)">
                  <Image
                     width={500}
                     height={500}
                     src="/images/14.png"
                     alt="circle header illustration"
                     className="sm:w-[70%] w-[85%] h-auto z-0"
                  />
               </div>
            </div>
         </div>
         <Image
            width={500}
            height={500}
            src="/images/7.png"
            alt="left leaf illustration"
            className="absolute top-12 lg:top-0 w-[33%] -left-[5%] h-auto z-0"
         />
         <Image
            width={500}
            height={500}
            src="/images/17.png"
            alt="right leaf illustration"
            className="absolute top-[15%] lg:top-[10%] w-[33%] -right-[3%] h-auto z-0"
            style={{ transform: 'scaleY(-1)' }}
         />
      </section>
   );
};

export default WhyAfrica;