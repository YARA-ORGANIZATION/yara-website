import Image from "next/image";
import Link from "next/link";

const WhatsNew = () => {
   return (
      <section className="pt-8 sm:pt-12 md:pt-16 px-4">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
               <div className="lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 justify-items-center lg:justify-items-end">
                     <div className="col-span-1 sm:col-span-2">
                        <Link href="/whats-new">
                           <Image
                              width={1000}
                              height={1000}
                              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                              alt="Researcher working"
                              className="rounded-[20px] sm:rounded-[30px] shadow-md w-full hover:scale-105 transition-all duration-700"
                           />
                        </Link>
                     </div>
                     <div className="col-span-1">
                        <Link href="/whats-new">
                           <Image
                              width={1000}
                              height={1000}
                              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                              alt="Lab research"
                              className="rounded-[20px] sm:rounded-[30px] shadow-md w-full hover:scale-105 transition-all duration-700"
                           />
                        </Link>
                     </div>
                     <div className="col-span-1">
                        <Link href="/whats-new">
                           <Image
                              width={1000}
                              height={1000}
                              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                              alt="STEM education"
                              className="rounded-[20px] sm:rounded-[30px] shadow-md w-full hover:scale-105 transition-all duration-700"
                           />
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="font-neue text-center lg:text-left mt-8 lg:mt-0">
                  <span className="text-3xl sm:text-4xl md:text-5xl text-purple-600 font-salted">CHECK OUT</span>
                  <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-2 mb-4 sm:mb-6">
                     WHAT&apos;S<br />NEW
                  </h2>
                  <p className="text-lg sm:text-xl font-roman mb-6 sm:mb-8">
                     Stay Updated with the Latest <br /> from <span className="font-medium">YARA</span>
                  </p>
               </div>
            </div>
            <div className="flex justify-center items-center pt-4 sm:pt-8">
               <button className="font-neue font-light mt-4 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border-[1px] border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
                  Sign up for newsletter
               </button>
            </div>
         </div>
      </section >
   );
};

export default WhatsNew;


// 'use client'
// import { useState, useEffect } from 'react';
// import { client, urlFor } from "@/lib/sanity"
// import { WhatsNew } from '@/lib/interface';
// import Link from 'next/link';
// import Image from 'next/image';

// const News = () => {
//    const [newsData, setNewsData] = useState<WhatsNew[]>([]);
//    const [currentSlide, setCurrentSlide] = useState(0);

//    useEffect(() => {
//       const fetchNewsData = async () => {
//          const query = `*[_type == "whatsNew"] | order(publishedAt desc) {
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

//    const totalSlides = Math.ceil(newsData.length / 3);

//    useEffect(() => {
//       if (totalSlides <= 1) return;

//       const slideInterval = setInterval(() => {
//          setCurrentSlide((prevSlide) =>
//             (prevSlide + 1) % totalSlides
//          );
//       }, 5000);

//       return () => clearInterval(slideInterval);
//    }, [totalSlides]);

//    const changeSlide = (index: number) => {
//       setCurrentSlide(index);
//    };

//    if (newsData.length === 0) {
//       return (
//          <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
//             <p>Loading news...</p>
//          </div>
//       );
//    }

//    const startIndex = currentSlide * 3;
//    const currentNewsItems = newsData.slice(startIndex, startIndex + 3);

//    return (
//       <section className="pt-8 sm:pt-12 md:pt-16 px-4">
//          <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
//                <div className="lg:w-1/2 flex flex-col items-center">
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 justify-items-end">
//                      {currentNewsItems.length > 0 && (
//                         <div className="col-span-2 overflow-hidden rounded-[20px] sm:rounded-[30px]">
//                            <Link href={currentNewsItems[0].link || `/news/${currentNewsItems[0].slug?.current}`}>
//                               <Image
//                                  width={500}
//                                  height={500}
//                                  src={urlFor(currentNewsItems[0].mainImage).url()}
//                                  alt={currentNewsItems[0].title}
//                                  className="img scale-animation shadow-md"
//                               />
//                            </Link>
//                         </div>
//                      )}
//                      {currentNewsItems.length > 1 && (
//                         <div className="overflow-hidden rounded-[20px] sm:rounded-[30px]">
//                            <Link href={currentNewsItems[1].link || `/news/${currentNewsItems[1].slug?.current}`}>
//                               <Image
//                                  width={500}
//                                  height={500}
//                                  src={urlFor(currentNewsItems[1].mainImage).url()}
//                                  alt={currentNewsItems[1].title}
//                                  className="img scale-animation shadow-md"
//                               />
//                            </Link>
//                         </div>
//                      )}
//                      {currentNewsItems.length > 2 && (
//                         <div className="overflow-hidden rounded-[20px] sm:rounded-[30px]">
//                            <Link href={currentNewsItems[2].link || `/news/${currentNewsItems[2].slug?.current}`}>
//                               <Image
//                                  width={500}
//                                  height={500}
//                                  src={urlFor(currentNewsItems[2].mainImage).url()}
//                                  alt={currentNewsItems[2].title}
//                                  className="img scale-animation shadow-md"
//                               />
//                            </Link>
//                         </div>
//                      )}
//                   </div>

//                   {/* Slide indicators */}
//                   <div className="flex gap-2 mt-4 justify-center lg:justify-start">
//                      {Array.from({ length: totalSlides }).map((_, index) => (
//                         <button
//                            key={index}
//                            onClick={() => changeSlide(index)}
//                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-black w-6' : 'bg-gray-300'}`}
//                            aria-label={`Go to slide ${index + 1}`}
//                         />
//                      ))}
//                   </div>
//                </div>
//                <div className="font-neue text-center lg:text-left mt-8 lg:mt-0">
//                   <span className="text-3xl sm:text-4xl md:text-5xl text-purple-600 font-salted">CHECK OUT</span>
//                   <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-2 mb-4 sm:mb-6">
//                      WHAT&apos;S<br />NEW
//                   </h2>
//                   <p className="text-lg sm:text-xl font-roman mb-6 sm:mb-8">
//                      Stay Updated with the Latest <br /> from <span className="font-medium">YARA</span>
//                   </p>
//                </div>
//             </div>
//             <div className="flex justify-center items-center pt-4 sm:pt-8">
//                <button className="font-neue font-light mt-4 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border-[1px] border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-700">
//                   Sign up for newsletter
//                </button>
//             </div>
//          </div>
//       </section>
//    );
// };

// export default News;