import OurTeam from '@/components/OurTeam/OurTeam'

const WhoWeAre = () => {
   return (
      <div>
         <OurTeam />
         <section className="font-neue flex flex-col items-center justify-center pt-8 sm:pt-16">
            <div className="text-center max-w-full mx-auto py-8 sm:py-12 px-4">
               <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-black">
                  APPLY AS A MENTOR
               </h1>
               <p className="font-roman text-lg sm:text-xl max-w-2xl mt-8 mx-auto">
                  You can be part a of a team
                  <span className="font-medium">
                     {" "}dedicated program coordinators and experienced mentors{" "}
                  </span>
                  passionate about fostering a culture of research and knowledge creation across Africa
               </p>
            </div>
            <a href="https://forms.gle/pgPFcEeR4TG2UtX4A" target="_blank" rel="noopener noreferrer">
               <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Apply Now
               </button>
            </a>
         </section>
      </div>
   )
}

export default WhoWeAre
