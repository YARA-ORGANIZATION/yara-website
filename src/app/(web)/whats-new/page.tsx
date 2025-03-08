import NewsAndAnnouncements from "@/components/WhatsNew/NewsAndAnnouncements";
import Blog from "@/components/WhatsNew/Blog";
import Image from "next/image";

const News = () => {
   return (
      <div className="relative py-8 px-4">
         <NewsAndAnnouncements />
         <Blog />
         <section className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold mb-4">Sign up to get the latest updates from YARA</h2>
            <button className="font-light px-6 py-2 border-[1px] border-black rounded-full hover:bg-black hover:text-white transition-colors">
               Subscribe Now
            </button>
         </section>
         <Image
            width={500}
            height={500}
            src="/images/3.png"
            alt="underline header illustration"
            className="w-full h-auto max-w-4xl mx-auto"
         />
      </div>
   );
};

export default News;