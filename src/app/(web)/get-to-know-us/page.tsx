import Image from "next/image";

const GetToKnowUs = () => {
   return (
      <section className="relative font-neue flex flex-col items-center justify-center px-4 py-20">
         <div className="py-16">
            <div className="relative z-10 text-center max-full mx-auto">
               <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-black">
                  ABOUT US
               </h1>
               <p className="font-salted text-purple-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto px-4">
                  Bridging Africa’s Research Gap
               </p>
               <p className="font-roman text-lg sm:text-xl md:text-2xl max-w-6xl mt-4 sm:mt-8 px-2">
                  Despite representing roughly <span className="font-medium">17% of the global population</span>, Africa contributes less than <span className="font-medium">2%
                     to the world’s research output</span>—a stark indicator of the continent’s underdeveloped research capacity.
                  This imbalance is compounded by the concentration of research eorts in just a few countries, such as
                  South Africa, Egypt, Nigeria, Kenya, and Algeria, leaving many regions with limited representation and opportunity.
               </p>
            </div>
            <Image
               width={500}
               height={500}
               src="/images/6.png"
               alt="leaf illustration"
               className="absolute sm:w-[30%] z-0 opacity-50 sm:opacity-100 top-16 w-[50%] left-[-5%] h-auto max-w-4xl mx-auto"
            />
         </div>
         <div>
            <div className="relative font-neue flex flex-col items-center justify-center px-4">
               <h1 className="relative font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight text-black mb-12 sm:mb-20 text-center">
                  Several critical factors contribute to this gap:
                  <Image
                     width={500}
                     height={500}
                     src="/images/15.png"
                     alt="underline header illustration"
                     className="absolute left-1/2 transform -translate-x-1/2 h-auto w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] top-10 sm:-top-4"
                  />
               </h1>

               {[
                  {
                     title: "Limited Indigenous Research Investment and Training",
                     content: "There is a notable shortfall in quality research training and resources at the university level. Underinvestment in local research institutions means that many emerging scholars lack the robust, ethical, and practical training needed to develop high- caliber, contextually relevant research.As a result, the continent struggles to cultivate a new generation of Indigenous researchers who can eectively address local challenges."
                  },
                  {
                     title: "Brain Drain",
                     content: "The scarcity of local opportunities has led many of Africa’s brightest minds to seek better prospects abroad.According to Quartz Africa, approximately 30% of African scientists leave the continent each year.This brain drain further depletes the already limited research capacity, making it even harder for Africa to build sustainable and competitive research ecosystems."
                  },
                  {
                     title: "Over-Reliance on Western Collaboration and Funding",
                     content: "Much of the research conducted in Africa is funded by foreign donors with their own agendas, often sidelining the issues most pertinent to local development.This reliance on external validation and collaboration has sometimes resulted in research outputs that are culturally and contextually misaligned with the continent’s needs."
                  },
                  {
                     title: "Policy and Infrastructure Gaps",
                     content: " A lack of strong policy frameworks and dedicated funding for research exacerbates these challenges. Without cohesive institutional support and effective integration of research into public and private sector strategies, eorts to transform knowledge into actionable development outcomes remain fragmented."
                  },
                  {
                     title: " At YARA, we are committed to reversing this trend.",
                     content: "Our mission is to empower emerging African researchers by providing them with comprehensive training, mentorship, and resources.By fostering a vibrant, indigenous research culture, we aim to catalyze innovative solutions that are directly aligned with Africa’s unique challenges and opportunities. Together, we can build a future where African research drives meaningful, locally grounded progress."
                  },
               ].map((section, index) => (
                  <div key={index} className="text-center pt-6 sm:pt-8 mx-auto">
                     <h1 className="font-medium text-2xl sm:text-3xl tracking-tight text-black">
                        {section.title}
                     </h1>
                     <p className="font-roman text-lg sm:text-xl lg:text-2xl max-w-5xl mt-4 px-4">
                        {section.content}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default GetToKnowUs;