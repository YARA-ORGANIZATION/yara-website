import Goals from "@/components/GoalsValues/Goals";
import Values from "@/components/GoalsValues/Values";
import Image from "next/image";

const MissionAndPurpose = () => {
   return (
      <>
         <section className="relative flex flex-col font-neue items-center justify-center px-4 py-12 sm:py-20">
            <div className="py-8 sm:py-16">
               <div className="z-10 text-center mx-auto px-4">
                  <h1 className="font-black text-4xl sm:text-6xl lg:text-8xl tracking-tight text-black">
                     MISSION & <br />PURPOSE
                  </h1>
                  <p className="font-roman text-lg sm:text-xl lg:text-2xl max-w-5xl mt-4">
                     At the Young Africans Research Academy (YARA), we are committed to nurturing the <span className="font-medium">next generation of indigenous, impact-centered African researchers </span>
                     across diverse disciplines.
                     Our mission is to<span className="font-medium"> equip aspiring scholars with the skills, mentorship, and training necessary
                        to drive impactful research </span>that addresses Africa’s most pressing challenges.
                  </p>
                  <p className="font-roman text-lg sm:text-xl lg:text-2xl max-w-5xl mt-4">
                     Through structured, technical skill-building training and collaborations with leading experts,
                     <span className="font-medium"> we empower young researchers to produce innovative, high-quality work in STEM,
                        Social Sciences, Humanities, and Interdisciplinary fields.
                     </span>
                  </p>
               </div>

               <Image
                  width={500}
                  height={500}
                  src="/images/7.png"
                  alt="leaf illustration"
                  className="z-0 absolute opacity-50 sm:opacity-100 top-16 w-[25%] left-0 sm:left-[-5%] h-auto"
               />
               <Image
                  width={500}
                  height={500}
                  src="/images/17.png"
                  alt="leaf illustration"
                  className="z-0 absolute opacity-50 sm:opacity-100 bottom-1/5 w-[25%] right-0 h-auto"
               />
            </div>

            <div className="text-center pt-12 sm:pt-20">
               <h1 className="font-black text-4xl sm:text-6xl lg:text-8xl tracking-tight text-black">
                  VISION
               </h1>
               <h2 className="relative font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight text-black mt-4 px-4">
                  To create a global hub of the world&apos;s best African<br className="hidden sm:block" />
                  researchers pioneering new knowledge
                  <Image
                     width={500}
                     height={500}
                     src="/images/15.png"
                     alt="underline header illustration"
                     className="absolute w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] left-1/2 transform -translate-x-1/2 top-16 sm:top-6"
                  />
               </h2>
            </div>
         </section>
         <Goals />
         <Values />
      </>
   );
};

export default MissionAndPurpose
