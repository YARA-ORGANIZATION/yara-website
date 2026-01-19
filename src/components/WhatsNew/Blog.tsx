'use client'
import { useState } from 'react';
import Image from 'next/image';

type BlogPost = {
   id: number;
   date: string;
   title: string;
   description: string;
   image: string;
};

const blogData: BlogPost[] = [
   {
      id: 1,
      date: "2024-02-21",
      title: "The Future of AI in Africa: Insights from YARA's Research Program",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 2,
      date: "2024-02-20",
      title: "Policy Research & Its Role in Africa's Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 3,
      date: "2024-02-19",
      title: "Policy Research & Its Role in Africa's Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 4,
      date: "2024-02-18",
      title: "Policy Research & Its Role in Africa's Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   }
];

const Blog = () => {
   const [currentPage, setCurrentPage] = useState(1);

   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      });
   };

   return (
      <div className="max-w-6xl mx-auto px-6 pt-12 sm:pt-32">
         <div className="mb-8">
            <h2 className="relative text-2xl sm:text-3xl font-bold">
               Blog & Research Insights
               <Image
                  width={500}
                  height={500}
                  src="/images/15.png"
                  alt="underline header illustration"
                  className="absolute left-0 h-auto w-[70%] sm:w-[50%] top-4"
               />
               <Image
                  width={500}
                  height={500}
                  src="/images/2.png"
                  alt="bulb illustration"
                  className="absolute z-0 -rotate-[45deg] -bottom-40 w-auto -right-32 h-[700px] max-w-4xl mx-auto hidden opacity-50 lg:opacity-100 sm:block"
               />
            </h2>
         </div>

         {/* Blog Posts */}
         <div className="space-y-6">
            {blogData.map((post) => (
               <div key={post.id} className="group cursor-pointer">
                  <div className="border-t border-gray-200 pt-6">
                     <div className="flex justify-between items-start gap-6">
                        <div className="flex-1">
                           <p className="text-sm text-gray-600 mb-2">
                              {formatDate(post.date)}
                           </p>
                           <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                              {post.title}
                           </h3>
                           <p className="text-gray-600 line-clamp-2">
                              {post.description}
                           </p>
                        </div>
                        <div className="flex-shrink-0">
                           <Image
                              width={1000}
                              height={1000}
                              src={post.image}
                              alt={post.title}
                              className="w-48 h-32 object-cover rounded-lg"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Pagination */}
         <div className="flex items-center justify-center mt-12 gap-2">
            {[1, 2, 3, 4].map((page) => (
               <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
              ${currentPage === page
                        ? 'bg-black text-white w-10 h-10'
                        : 'bg-gray-200 hover:bg-gray-300'
                     }`}
               >
                  {page}
               </button>
            ))}
         </div>
      </div>
   );
};

export default Blog;


// import Link from 'next/link';
// import { SimpleBlogCard } from "@/lib/interface"
// import { client, urlFor } from '@/lib/sanity';
// import Image from 'next/image';

// async function getData() {
//    const query = `
//    *[_type == 'blog'] | order(_createdAt desc) {
//   title,
//     smallDescription,
//     "currentSlug": slug.current,
//     titleImage
//    }`

//    const data = await client.fetch(query)

//    return data
// }

// export default async function Blog() {
//    const data: SimpleBlogCard[] = await getData()

//    return (
//       <div className="max-w-6xl mx-auto px-6 pt-12 sm:pt-32">
//          <div className="mb-8">
//             <h2 className="relative text-2xl sm:text-3xl font-bold">
//                Blog & Research Insights
//                <Image
//                   width={500}
//                   height={500}
//                   src="/images/15.png"
//                   alt="underline header illustration"
//                   className="absolute left-0 h-auto w-[70%] sm:w-[50%] top-4"
//                />
//                <Image
//                   width={500}
//                   height={500}
//                   src="/images/2.png"
//                   alt="bulb illustration"
//                   className="absolute z-0 -rotate-[45deg] -bottom-40 w-auto -right-32 h-[700px] max-w-4xl mx-auto hidden opacity-50 lg:opacity-100 sm:block"
//                />
//             </h2>
//          </div>

//          {/* Blog Posts */}
//          <div className="space-y-6">
//             {data.map((blog, index) => (
//                <div key={index} className="group cursor-pointer">
//                   <div className="border-t border-gray-200 pt-6">
//                      <Link href={`/blog/${blog.currentSlug}`}>
//                         <div className="flex justify-between items-start gap-6">
//                            <div className="flex-1">
//                               <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
//                                  {blog.title}
//                               </h3>
//                               <p className="text-gray-600 line-clamp-2">
//                                  {blog.smallDescription}
//                               </p>
//                            </div>
//                            <div className="flex-shrink-0">
//                               <Image
//                                  width={500}
//                                  height={500}
//                                  src={urlFor(blog.titleImage).url()} alt={blog.title}
//                                  className="w-48 h-32 object-cover rounded-lg"
//                               />
//                            </div>
//                         </div>
//                      </Link>
//                   </div>
//                </div>
//             ))}
//          </div>
//       </div>
//    );
// };