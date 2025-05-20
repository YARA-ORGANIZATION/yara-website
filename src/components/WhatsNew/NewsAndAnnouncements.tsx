import { client, urlFor } from "@/lib/sanity";
import { NewsAnnouncement } from '@/lib/interface';
import NewsCarousel from './NewsCarousel'; // Import the client component

async function getData() {
   const query = `
   *[_type == "newsAnnouncement"] | order(publishedAt desc) {
         _id,
         title,
         slug,
         mainImage,
         link,
         description
      }`;
   const data = await client.fetch(query);

   return data.map((item: any) => ({
      ...item,
      mainImage: urlFor(item.mainImage).width(1200).url()
   }));
}

export default async function NewsAndAnnouncements() {
   const newsData: NewsAnnouncement[] = await getData();

   return <NewsCarousel newsData={newsData} />;
}