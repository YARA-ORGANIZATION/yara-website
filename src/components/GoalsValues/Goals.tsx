import Image from "next/image";

const Goals = () => {
   const goals = [
      "Increase the volume of high-quality academic research produced by young scholars from the university and consumed by policymakers.",
      "Build a robust team of research trainers dedicated to mentoring and nurturing academic talents for research",
      "Conduct need-specific research in the local or national context and align with government development priorities to solve African problems.",
      "Establish ourselves as a research consortium to conduct high-quality research for industries and firms.",
      "Create functional structures that ensure the uptake of the generated research into public policy and implementation.",
      "Establish journals of publication for our research."
   ];

   return (
      <section className="relative font-neue flex flex-col items-center justify-center pt-8 sm:pt-16 px-4">
         <div className="text-center">
            <h1 className="font-black text-4xl sm:text-6xl lg:text-8xl tracking-tight text-black">
               GOALS
            </h1>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight text-black mt-4 px-4">
               With the establishment of the academy,<br className="hidden sm:block" />
               we wish to impact African research through<br className="hidden sm:block" />
               these ways:
            </h2>
         </div>

         <div className="pt-8 sm:pt-16 space-y-6 sm:space-y-8 w-full max-w-5xl">
            {goals.map((goal, index) => (
               <div key={index} className="flex items-start items-center gap-4 sm:gap-8 group hover:transform hover:translate-x-2 transition-transform duration-300">
                  <h2 className="font-black text-4xl sm:text-7xl">{index + 1}.</h2>
                  <p className="font-roman text-lg sm:text-xl lg:text-2xl">{goal}</p>
               </div>
            ))}
         </div>

         <Image
            width={500}
            height={500}
            src="/images/8.png"
            alt="leaf illustration"
            className="absolute -bottom-1/4 w-64 sm:w-96 -right-[2%] h-auto opacity-50 sm:opacity-100"
         />
      </section>
   );
};
export default Goals;
