import Image from "next/image";

const Empowerment = () => {
   return (
      <section className="relative font-neue pt-24 md:pt-48 lg:pt-60 px-4">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-black mb-4 sm:mb-8 z-20">
                  EMPOWERING<br />AFRICA&apos;S FUTURE<br />RESEARCHERS
               </h2>
               <p className="font-roman text-lg sm:text-xl md:text-2xl max-w-4xl px-2 z-20">
                  At YARA, we provide aspiring African researchers with the skills, training, and support
                  needed to tackle Africa&apos;s most pressing challenges. Through our fellowship and training programs,
                  we equip undergraduate students with hands-on research experience, mentorship
                  from top-tier academics, and the tools to drive innovation in their fields.
               </p>
               <div className="animate-rotate-item absolute top-0 md:top-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-gray-200/95 to-transparent z-10"></div>
                  <Image
                     width={1000}
                     height={1000}
                     src="/images/1.png"
                     alt="rocket illustration"
                     className="w-[50%] right-0 h-auto max-w-4xl mx-auto rotate-[235deg] z-0"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Empowerment;