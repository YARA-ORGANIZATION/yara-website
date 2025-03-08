// For your general interface usage
export interface ImageType {
   url: string;
   alt?: string;
   width?: number;
   height?: number;
}

// For Sanity image references (what Sanity actually returns)
export interface SanityImageAsset {
   _type: string;
   asset: {
      _ref: string;
      _type: string;
   };
   // Other potential fields
}

export interface SimpleBlogCard {
   title: string;
   smallDescription: string;
   currentSlug: string;
   titleImage: SanityImageAsset; // Changed from ImageType
}

export interface FullBlog {
   currentSlug: string;
   title: string;
   content: string; // Changed from string to any (or use a more specific PortableText type)
   titleImage: SanityImageAsset; // Changed from ImageType
}

export interface NewsAnnouncement {
   _id: string;
   title: string;
   slug: string;
   mainImage: SanityImageAsset; // Changed from ImageType
   link?: string;
   description?: string;
}

export interface WhatsNew {
   _id: string;
   title: string;
   slug: {
      current: string;
   };
   mainImage: SanityImageAsset; // Changed from ImageType
   link?: string;
   description: string;
}