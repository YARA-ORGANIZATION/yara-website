import type { FullBlog } from "@/lib/interface"
import { client, urlFor } from "@/lib/sanity"
import { PortableText } from "next-sanity"
import Image from "next/image"

export const revalidate = 30

async function getData(slug: string) {
   const query = `
   *[_type == 'blog' && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      publishedAt
   }[0]`

   const data = await client.fetch(query)
   return data
}

export default async function BlogArticle({
   params,
}: {
   params: { slug: string };
}) {
   const data: FullBlog = await getData(params.slug)

   return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-neue">
         <header className="max-w-4xl mx-auto mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight mb-6">
               {data.title}
            </h1>

            {data.publishedAt && (
               <p className="text-gray-500 text-center mb-8">
                  {new Date(data.publishedAt).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'long',
                     day: 'numeric'
                  })}
               </p>
            )}

            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
               <Image
                  src={urlFor(data.titleImage).url()}
                  alt={`${data.title} - featured image`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  priority
                  className="object-cover"
               />
            </div>
         </header>

         <article className="max-w-3xl mx-auto mt-12">
            <div className="prose prose-sm sm:prose md:prose-lg lg:prose-xl prose-slate mx-auto">
               <PortableText value={data.content} />
            </div>
         </article>
      </main>
   )
}