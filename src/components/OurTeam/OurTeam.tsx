import TeamCarousel from "./TeamCarousel"
import Image from "next/image";

const OurTeam = () => {
   return (
      <>
         <section className="relative font-neue flex flex-col items-center justify-center pt-8 sm:pt-16">
            <div className="relative z-10 text-center max-w-full mx-auto py-12 sm:py-20 px-4">
               <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-black">
                  OUR TEAM
               </h1>
               <p className="font-roman text-lg sm:text-xl max-w-2xl mt-4 mx-auto">
                  We are led by a team of
                  <span className="font-medium">
                     {" "}dedicated program coordinators, experienced mentors, and an advisory board of distinguished scholars{" "}
                  </span>
                  passionate about fostering a culture of research and knowledge creation across Africa
               </p>
            </div>
            <div className="absolute top-[5%] left-[5%] hidden sm:block">
               <Image
                  width={1000}
                  height={1000}
                  src="/images/22.png"
                  alt="bulb illustration"
                  className=" animate-float-item w-1/4 h-auto flex-shrink-0"
               />
            </div>
         </section>
         <TeamCarousel />
      </>
   );
};

export default OurTeam;