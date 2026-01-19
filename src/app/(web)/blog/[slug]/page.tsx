const BlogArticle = () => {
   return (
      <div className="flex flex-col items-center justify-center">
         <h1>
            <span className="block text-base text-center font-semibold tracking-wide">Yara Blog</span>
         </h1>
      </div>
   )
}

export default BlogArticle


// import type { FullBlog } from "@/lib/interface"
// import { client, urlFor } from "@/lib/sanity"
// import { PortableText } from "next-sanity"
// import Image from "next/image"

// export const revalidate = 30

// async function getData(slug: string) {
//    const query = `
//    *[_type == 'blog' && slug.current == '${slug}'] {
//       "currentSlug": slug.current,
//       title,
//       content,
//       titleImage
//    }[0]`

//    const data = await client.fetch(query)
//    return data
// }

// export async function generateStaticParams() {
//    const query = `*[_type == 'blog'] { "slug": slug.current }`
//    const slugs = await client.fetch(query)

//    return slugs.map((slug: { slug: string }) => ({
//       slug: slug.slug,
//    }))
// }

// // Updated interface to reflect that params is now a Promise in Next.js 15
// interface BlogArticleProps {
//    params: Promise<{
//       slug: string
//    }>
// }

// export default async function BlogArticle(props: BlogArticleProps) {
//    // Await the params Promise before accessing the slug
//    const params = await props.params
//    const data: FullBlog = await getData(params.slug)

//    // Handle the image URL separately with proper type checking
//    let imageUrl = "/placeholder.svg"
//    try {
//       if (data.titleImage) {
//          // Force the URL to be a string
//          imageUrl = urlFor(data.titleImage).url() as unknown as string
//       }
//    } catch (error) {
//       console.error("Error processing image URL:", error)
//       // Fallback to placeholder if there's an error
//       imageUrl = "/placeholder.svg"
//    }

//    return (
//       <div className="flex flex-col items-center justify-center">
//          <h1>
//             <span className="block text-base text-center font-semibold tracking-wide">Yara Blog</span>
//             <span className="block text-3xl text-center font-bold tracking-tight mt-2">{data.title}</span>
//          </h1>
//          <Image
//             src={imageUrl || "/placeholder.svg"}
//             alt={data.title || "Blog post image"}
//             width={800}
//             height={800}
//             priority
//             className="rounded-lg mt-5"
//          />
//          <div className="mt-16 prose prose-lg">
//             <PortableText value={data.content} />
//          </div>
//       </div>
//    )
// }
