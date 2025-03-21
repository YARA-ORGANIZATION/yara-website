'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsAnnouncement } from '@/lib/interface';

interface NewsCarouselProps {
   newsData: NewsAnnouncement[];
}

export default function NewsCarousel({ newsData }: NewsCarouselProps) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isLoaded, setIsLoaded] = useState(false);

   // Set loaded state once component mounts
   useEffect(() => {
      setIsLoaded(true);
   }, []);

   // Auto-sliding effect
   useEffect(() => {
      if (newsData.length === 0) return;

      const slideInterval = setInterval(() => {
         setCurrentSlide((prevSlide) =>
            (prevSlide + 1) % newsData.length
         );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(slideInterval);
   }, [newsData]);

   // Handle slide change
   const changeSlide = (index: number) => {
      setCurrentSlide(index);
   };

   // If no news data, return loading or placeholder
   if (newsData.length === 0) {
      return (
         <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <p>No news available.</p>
         </div>
      );
   }

   const currentNews = newsData[isLoaded ? currentSlide : 0];

   return (
      <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
         <section className="mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">News & Announcements</h2>

            <div className="relative">
               <div className="overflow-hidden">
                  {currentNews.link ? (
                     <Link href={currentNews.link} target="_blank" rel="noopener noreferrer" className="block">
                        <Image
                           src={currentNews.mainImage}
                           alt={currentNews.title}
                           width={1200}
                           height={600}
                           className="w-full sm:w-3/4 rounded-lg h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                        />
                     </Link>
                  ) : (
                     <Image
                        src={currentNews.mainImage}
                        alt={currentNews.title}
                        width={1200}
                        height={600}
                        className="w-full sm:w-3/4 rounded-lg h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                     />
                  )}
               </div>
               <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl max-w-lg font-medium leading-tight">
                     {currentNews.title}
                  </h3>
               </div>
               <div className="flex gap-2 mt-4">
                  {newsData.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => changeSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-black w-6' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                     />
                  ))}
               </div>
            </div>
         </section>

         <section className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
               <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Upcoming Event</h2>
               <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">Join Our Research Bootcamp</h3>
               <a href="https://forms.gle/9kqw4iBvXJWAZZgK7" target="_blank" rel="noopener noreferrer">
                  <button className="font-light px-6 py-2 border-[1px] border-black rounded-full hover:bg-black hover:text-white transition-colors">
                     Apply Now
                  </button>
               </a>
            </div>
         </section>
      </div>
   );
}