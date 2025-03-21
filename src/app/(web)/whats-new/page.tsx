import NewsAndAnnouncements from "@/components/WhatsNew/NewsAndAnnouncements";
import Blog from "@/components/WhatsNew/Blog";
import Image from "next/image";
import NewsletterSignup from "@/components/WhatsNew/NewsLetterSignup";

export const revalidate = 30

const News = () => {
   return (
      <div className="relative py-8 px-4 overflow-x-hidden">
         <NewsAndAnnouncements />
         <div className="relative">
            <Image
               width={500}
               height={500}
               src="/images/2.png"
               alt="bulb illustration"
               className="absolute -rotate-[45deg] right-0 bottom-[65%] w-auto h-auto max-h-[700px] max-w-[80%] hidden sm:block z-0 pointer-events-none"
            />
            <Blog />
            <NewsletterSignup />
         </div>
      </div>
   );
};

export default News;