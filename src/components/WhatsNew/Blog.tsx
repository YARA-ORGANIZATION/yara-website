import { SimpleBlogCard } from "@/lib/interface";
import { client } from '@/lib/sanity';
import BlogComponent from './BlogComponent';

async function getData() {
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

export default async function BlogPage() {
   const data: SimpleBlogCard[] = await getData();

   return <BlogComponent initialData={data} />;
}