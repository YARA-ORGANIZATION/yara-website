export interface SimpleBlogCard {
   title: string;
   smallDescription: string;
   currentSlug: string;
   titleImage: any;
}

export interface FullBlog {
   currentSlug: string;
   title: string;
   content: string;
   titleImage: any;
   publishedAt: string;
}

export interface NewsAnnouncement {
   _id: string;
   title: string;
   slug: string;
   mainImage: any;
   link?: string;
   description?: string;
}

export interface WhatsNew {
   _id: string;
   title: string;
   slug: {
      current: string;
   };
   mainImage: any;
   link?: string;
   description: string;
}