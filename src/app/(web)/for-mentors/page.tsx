import { Circle } from "lucide-react";
import Image from "next/image";

const ForMentors = () => {
   const mentorResponsibilities = [
      "Providing one-on-one guidance to a fellow throughout their research journey.",
      "Offering feedback and support on research proposals, methodologies, and progress.",
      "Helping fellows develop critical thinking, problem-solving, and academic writing skills.",
      "Encouraging fellows to maintain high ethical standards in their research.",
      "Sharing your expertise and insights to inspire and motivate fellows to achieve their goals.",
      "Participating in monthly check-ins and occasional program events (e.g., workshops, networking sessions)."
   ];

   const mentorBenefits = [
      "Mentor Africa's Brightest Minds: Guide and inspire some of Africa's most brilliant and motivated aspiring researchers as they develop their skills and pursue innovative solutions to pressing challenges.",
      "Expand Your Research Impact: Contribute to and potentially co-author—high-quality research papers in your area of interest, amplifying your work and advancing your field.",
      "Recruit Talented Students: Identify and nurture exceptional students who could join your PhD programs or research teams, building a pipeline of future collaborators.",
      "Drive Change in Africa: Play a direct role in addressing Africa's most critical challenges through impactful, ethical, and relevant research."
   ];

   const keyDates = [
      { label: "Application Deadline", date: "6th April ,2025" },
      { label: "Mentor Matching", date: "20th April , 2025" },
      { label: "Program Start Date", date: "2nd May 2025" }
   ];

   return (
      <section className="font-neue w-full text-black overflow-x-hidden">
         {/* Hero Section */}
         <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 mt-8 sm:mt-12 lg:mt-16">
            <div className="w-full max-w-6xl">
               <div className="relative z-10 text-center">
                  <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-[120px] tracking-tight leading-tight">
                     FOR<br />MENTORS
                  </h1>
                  <div className="relative">
                     <p className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black mx-auto px-4 py-12 sm:py-16 lg:py-20">
                        Fellowship Program Mentor Application
                        <Image
                           width={500}
                           height={500}
                           src="/images/15.png"
                           alt="underline header illustration"
                           className="absolute top-[60%] left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-[450px] h-auto"
                        />
                     </p>
                  </div>
               </div>
            </div>
            <Image
               width={500}
               height={500}
               src="/images/11.png"
               alt="human illustration"
               className="absolute -rotate-[15deg] top-44 -right-[3%] w-40 sm:w-48 lg:w-60 h-auto opacity-50 sm:opacity-100"
            />
         </div>

         {/* Introduction Section */}
         <div className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
               Are you passionate about shaping the future of African research and innovation?
            </h2>
            <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
               <p className="font-light text-lg sm:text-xl lg:text-2xl">
                  The Young Africans Research Academy (YARA) Fellowship Program is looking for experienced researchers
                  and academics to mentor the next generation of STEM leaders.
               </p>
               <p className="font-light text-lg sm:text-xl lg:text-2xl">
                  This is a unique opportunity to contribute to the development of the next generation of African researchers
                  and help address some of the continent&apos;s most pressing challenges through high-quality, ethical, and
                  impactful research.
               </p>
            </div>
         </div>

         {/* CTA Button */}
         <div className="flex justify-center items-center py-8 sm:py-12">
            <a href="https://forms.gle/pgPFcEeR4TG2UtX4A" target="_blank" rel="noopener noreferrer">
               <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Apply Here
               </button>
            </a>
         </div>

         {/* About Section */}
         <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black text-center">
               About the YARA Fellowship Program
            </h2>
            <div className="space-y-6 sm:space-y-8 mt-8">
               {/* About content paragraphs */}
               <p className="font-light text-lg sm:text-xl lg:text-2xl">
                  The <span className="font-medium">Young Africans Research Academy (YARA) Fellowship Program</span> is a <span className="font-medium">one-year researcher-in-training program</span> designed to equip aspiring African researchers with <span className="font-medium">technical skills, exposure, and mentorship</span> address the research capacity gap in Africa.
               </p>
               <p className="font-light text-lg sm:text-xl lg:text-2xl">
                  Our goal is to bridge the research capacity gap in Africa by equipping students with training, skills, and
                  network skills to excel in academia, research, and related fields. The program focuses on fostering innovation,
                  critical thinking, and a commitment to solving Africa&apos;s challenges through research.
               </p>
               <p className="font-light text-lg sm:text-xl lg:text-2xl">
                  For our first cohort, we are selecting <span className="font-medium">10 highly motivated undergraduate students from Ghana</span> who are passionate about research and eager to pursue careers in STEM. These fellows will receive hands-on training, one-on-one mentorship, and access to resources and networks that will help them <span className="font-medium">produce publishable research</span> and <span className="font-medium">prepare for graduate-level studies.</span>
               </p>
            </div>
            <Image
               width={500}
               height={500}
               src="/images/12.png"
               alt="paper illustration"
               className="animate-rotate-item absolute -top-20 -left-[10%] md:-left-[17%] lg:-left-[30%] w-40 sm:w-48 lg:w-60 h-auto opacity-50 sm:opacity-100"
            />
         </div>

         {/* Mentor Role Section */}
         <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
               Role of a Mentor
            </h2>
            <p className="py-6 sm:py-8 font-roman text-lg sm:text-xl lg:text-2xl">
               As a mentor in the YARA Fellowship Program, you will play a pivotal role in shaping the future of young
               African researchers. Your responsibilities will include:
            </p>
            <div className="flex flex-col items-start space-y-6 sm:space-y-8 w-full">
               {mentorResponsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                     <Image
                        width={500}
                        height={500}
                        src="/images/20.png"
                        alt="check illustration"
                        className="w-6 sm:w-8 h-auto flex-shrink-0 mt-1"
                     />
                     <p className="font-roman text-lg sm:text-xl lg:text-2xl">{responsibility}</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Benefits Section */}
         <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <Image
               width={500}
               height={500}
               src="/images/13.png"
               alt="head illustration"
               className="animate-float-item absolute -top-20 -right-[30%] md:-right-[17%] sm:-right-[10%] w-40 sm:w-48 lg:w-60 h-auto opacity-50 sm:opacity-100"
            />
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black pt-16">
               Why Become a YARA Mentor?
            </h2>
            <p className="font-medium text-xl sm:text-2xl py-6 sm:py-8">
               By joining the YARA Fellowship Program as a mentor, you will:
            </p>
            <div className="space-y-6 sm:space-y-8">
               {mentorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                     <Circle className="flex-shrink-0 mt-1" fill="black" size={20} />
                     <p className="font-light text-lg sm:text-xl lg:text-2xl">{benefit}</p>
                  </div>
               ))}
            </div>
         </div>

         {/* How to Apply Section */}
         <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black text-center pt-16">
               How to Apply
            </h2>
            <div className="space-y-6 sm:space-y-8 mt-8">
               <p className="font-roman text-lg sm:text-xl lg:text-2xl">
                  If you are excited about this opportunity and meet the criteria, please complete this application form.
                  The information you provide will help us match you with a fellow whose research interests align
                  with your expertise.
               </p>
               <p className="font-roman text-lg sm:text-xl lg:text-2xl">
                  Once your application is submitted, our team will review it and contact you with further details. If selected,
                  you will receive an onboarding guide and be introduced to your mentee at the start of the program.
               </p>
            </div>
            <div className="flex justify-center items-center py-8 sm:py-12">
               <a href="https://forms.gle/pgPFcEeR4TG2UtX4A" target="_blank" rel="noopener noreferrer">
                  <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                     Apply Now
                  </button>
               </a>
            </div>
         </div>

         {/* Key Dates Section */}
         <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20">
            <Image
               width={500}
               height={500}
               src="/images/4.png"
               alt="leaf illustration"
               className="absolute -top-10 -left-[45%] w-2/3 h-auto opacity-80"
            />
            <div className="relative">
               <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-black">
                  Key Dates
               </h2>
               <div className="absolute -top-6 md:-top-8 lg:-top-10 left-[50%] transform -translate-x-1/2 lg:translate-x-[calc(-50%)] z-0">
                  <Image
                     width={500}
                     height={500}
                     src="/images/14.png"
                     alt="circle header illustration"
                     className="w-44 sm:w-60 h-auto max-w-4xl mx-auto"
                  />
               </div>
            </div>
            <div className="w-full space-y-4 mt-8 flex flex-col items-center justify-center">
               {keyDates.map((date, index) => (
                  <div key={index} className="flex flex-row items-center gap-4 py-4 px-4 group hover:translate-x-2 transition-transform duration-300">
                     <Image
                        width={500}
                        height={500}
                        src="/images/21.png"
                        alt="check illustration"
                        className="w-6 sm:w-8 h-auto flex-shrink-0"
                     />
                     <p className="font-roman text-lg sm:text-xl lg:text-2xl">
                        <span className="font-medium">{date.label}: </span>{date.date}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ForMentors;