import Image from "next/image";

const Values = () => {
   const values = [
      {
         title: "Ethical Research Excellence",
         description: "Upholding the highest standards of integrity, transparency, and responsibility..."
      },
      {
         title: "Collaboration",
         description: "Upholding the highest standards of integrity, transparency, and responsibility..."
      },
      {
         title: "Leadership and Lifelong Learning",
         description: "Fostering a culture of intellectual curiosity, continuous learning, and mentorship..."
      },
      {
         title: "Innovation",
         description: "Encouraging groundbreaking research that leads to practical solutions..."
      },
      {
         title: "Research for impact",
         description: "Focusing on studies directly addressing Africa's health, technology, economics..."
      }
   ];

   return (
      <section className="relative font-neue flex flex-col items-center justify-center px-4">
         <div className="text-center pt-16 sm:pt-32">
            <h1 className="font-black text-4xl sm:text-6xl lg:text-8xl tracking-tight text-black">
               VALUES
            </h1>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight text-black mt-4">
               At YARA, our work is guided by four core principles:
            </h2>
         </div>

         <div className="pt-8 sm:pt-16 space-y-8 sm:space-y-16 z-10">
            {values.map((value, index) => (
               <div key={index} className="flex flex-col items-center">
                  <h2 className="font-medium text-2xl sm:text-3xl text-center">
                     {value.title}
                  </h2>
                  <p className="font-roman text-center text-lg sm:text-xl lg:text-2xl max-w-5xl mt-2">
                     {value.description}
                  </p>
               </div>
            ))}
         </div>

         <Image
            width={1920}
            height={1080}
            src="/images/18.png"
            alt="leaf illustration"
            className="absolute bottom-32 w-1/4 sm:w-[35%] left-0 sm:left-[-10%] h-auto z-0 opacity-50 sm:opacity-100"
         />
      </section>
   );
};

export default Values
