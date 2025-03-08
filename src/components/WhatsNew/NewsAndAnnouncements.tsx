'use client'
import { useState } from 'react';
import Image from 'next/image';

const NewsAndAnnouncements = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const newsData = [
      {
         id: 1,
         title: "YARA Fellows Present Groundbreaking Research at International Conference",
         image: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         link: "#"
      },
      {
         id: 2,
         title: "YARA Fellows Present Groundbreaking Research at International Conference",
         image: "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D",
         link: "#"
      },
      {
         id: 3,
         title: "YARA Fellows Present Groundbreaking Research at International Conference",
         image: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXNlbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
         link: "#"
      }
   ];

   return (
      <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
         <section className="mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">News & Announcements</h2>

            <div className="relative">
               <div className="overflow-hidden">
                  <a href={newsData[currentSlide].link} className="block">
                     <div className="relative overflow-hidden rounded-lg">
                        <Image
                           width={1000}
                           height={1000}
                           src={newsData[currentSlide].image}
                           alt={newsData[currentSlide].title}
                           className="w-full sm:w-3/4 rounded-lg h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                        />
                     </div>
                  </a>
               </div>
               <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl max-w-lg font-medium leading-tight">
                     {newsData[currentSlide].title}
                  </h3>
               </div>
               <div className="flex gap-2 mt-4">
                  {newsData.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-black w-6' : 'bg-gray-300'
                           }`}
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
                  <button className="font-light text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                     Apply Now
                  </button>
               </a>
            </div>
         </section>
      </div>
   );
};

export default NewsAndAnnouncements;

// 'use client'
// import { useState, useEffect } from 'react';
// import { client, urlFor } from "@/lib/sanity"
// import { NewsAnnouncement } from '@/lib/interface';
// import Link from 'next/link';
// import Image from 'next/image';

// const NewsAndAnnouncements = () => {
//    const [newsData, setNewsData] = useState<NewsAnnouncement[]>([]);
//    const [currentSlide, setCurrentSlide] = useState(0);

//    // Fetch news and announcements from Sanity
//    useEffect(() => {
//       const fetchNewsData = async () => {
//          const query = `*[_type == "newsAnnouncement"] | order(publishedAt desc) {
//             _id,
//             title,
//             slug,
//             mainImage,
//             link,
//             description
//          }`;

//          try {
//             const fetchedNews = await client.fetch(query);
//             setNewsData(fetchedNews);
//          } catch (error) {
//             console.error('Error fetching news:', error);
//          }
//       };

//       fetchNewsData();
//    }, []);

//    // Auto-sliding effect
//    useEffect(() => {
//       if (newsData.length === 0) return;

//       const slideInterval = setInterval(() => {
//          setCurrentSlide((prevSlide) =>
//             (prevSlide + 1) % newsData.length
//          );
//       }, 5000); // Change slide every 5 seconds

//       return () => clearInterval(slideInterval);
//    }, [newsData]);

//    // Handle slide change
//    const changeSlide = (index: number) => {
//       setCurrentSlide(index);
//    };

//    // If no news data, return loading or placeholder
//    if (newsData.length === 0) {
//       return (
//          <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
//             <p>Loading news...</p>
//          </div>
//       );
//    }

//    const currentNews = newsData[currentSlide];

//    return (
//       <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
//          <section className="mb-8 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">News & Announcements</h2>

//             <div className="relative">
//                <div className="overflow-hidden">
//                   {currentNews.link ? (
//                      <Link href={currentNews.link} target="_blank" rel="noopener noreferrer" className="block">
//                         <Image
//                            src={urlFor(currentNews.mainImage).width(1200).url()}
//                            alt={currentNews.title}
//                            width={1200}
//                            height={600}
//                            className="w-full sm:w-3/4 rounded-lg h-[250px] sm:h-[300px] md:h-[400px] object-cover"
//                         />
//                      </Link>
//                   ) : (
//                      <Image
//                         src={urlFor(currentNews.mainImage).width(1200).url()}
//                         alt={currentNews.title}
//                         width={1200}
//                         height={600}
//                         className="w-full sm:w-3/4 rounded-lg h-[250px] sm:h-[300px] md:h-[400px] object-cover"
//                      />
//                   )}
//                </div>
//                <div className="mt-4 sm:mt-6">
//                   <h3 className="text-xl sm:text-2xl max-w-lg font-medium leading-tight">
//                      {currentNews.title}
//                   </h3>
//                </div>
//                <div className="flex gap-2 mt-4">
//                   {newsData.map((_, index) => (
//                      <button
//                         key={index}
//                         onClick={() => changeSlide(index)}
//                         className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-black w-6' : 'bg-gray-300'}`}
//                         aria-label={`Go to slide ${index + 1}`}
//                      />
//                   ))}
//                </div>
//             </div>
//          </section>

//          <section className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
//             <div>
//                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Upcoming Event</h2>
//                <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">Join Our Research Bootcamp</h3>
//                <button className="font-light px-4 sm:px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
//                   Apply Now
//                </button>
//             </div>
//          </section>
//       </div>
//    );
// };

// export default NewsAndAnnouncements;