'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SimpleBlogCard } from "@/lib/interface";
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

export default function Blog({ initialData }: { initialData: SimpleBlogCard[] }) {
   const [currentPage, setCurrentPage] = useState(1);
   const blogsPerPage = 3;

   const indexOfLastBlog = currentPage * blogsPerPage;
   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
   const currentBlogs = initialData.slice(indexOfFirstBlog, indexOfLastBlog);
   const totalPages = Math.ceil(initialData.length / blogsPerPage);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <div className="font-neue max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
         <div className="mb-6 sm:mb-8">
            <h2 className="relative text-2xl sm:text-3xl font-bold">
               Blog & Research Insights
               <Image
                  width={500}
                  height={500}
                  src="/images/15.png"
                  alt="underline header illustration"
                  className="absolute left-0 h-auto w-[70%] sm:w-[50%] top-4"
               />
            </h2>
         </div>

         {/* Blog Grid */}
         <div className="space-y-4 sm:space-y-6">
            {currentBlogs.map((blog, index) => (
               <div key={index} className="group cursor-pointer">
                  <hr className="border-gray-300" />
                  <div className="border-t border-gray-200 pt-4 sm:pt-6"></div>
                  <Link href={`/blog/${blog.currentSlug}`}>
                     <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-6">
                        <div className="flex-1 w-full">
                           <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                              {blog.title}
                           </h3>
                           <p className="text-gray-600 line-clamp-3">
                              {blog.smallDescription}
                           </p>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-auto mt-3 sm:mt-0">
                           <Image
                              width={500}
                              height={500}
                              src={urlFor(blog.titleImage).url()} alt={blog.title}
                              className="w-full h-48 sm:w-48 sm:h-32 object-cover rounded-lg"
                           />
                        </div>
                     </div>
                  </Link>
               </div>
            ))}
         </div>

         {/* Pagination */}
         {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
               {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                     key={index}
                     onClick={() => paginate(index + 1)}
                     className={`w-10 h-10 rounded-full flex items-center justify-center font-light transition-colors duration-200 ${currentPage === index + 1
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                     aria-label={`Go to page ${index + 1}`}
                  >
                     {index + 1}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
}

// Server Component to fetch the data
export async function getServerSideData() {
   const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

   const data = await client.fetch(query);
   return data;
}