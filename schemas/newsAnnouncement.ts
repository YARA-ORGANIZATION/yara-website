import { Rule } from 'sanity';

interface NewsAnnouncementField {
   name: string;
   title: string;
   type: string;
   options?: Record<string, any>;
   description?: string;
   validation?: (rule: Rule) => any;
}

interface NewsAnnouncementPreview {
   select: {
      title: string;
      media: string;
   };
}

interface NewsAnnouncementSchema {
   name: string;
   title: string;
   type: string;
   fields: NewsAnnouncementField[];
   preview: NewsAnnouncementPreview;
}

export default {
   name: 'newsAnnouncement',
   title: 'News & Announcements',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule: Rule) => Rule.required()
      },
      {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'title',
            maxLength: 96
         },
         validation: (Rule: Rule) => Rule.required()
      },
      {
         name: 'mainImage',
         title: 'Main Image',
         type: 'image',
         options: {
            hotspot: true
         },
         validation: (Rule: Rule) => Rule.required()
      },
      {
         name: 'link',
         title: 'External Link',
         type: 'url',
         description: 'Optional link for more information'
      },
      {
         name: 'publishedAt',
         title: 'Published At',
         type: 'datetime',
         validation: (Rule: Rule) => Rule.required()
      },
      {
         name: 'description',
         title: 'Short Description',
         type: 'text',
         validation: (Rule: Rule) => Rule.max(200)
      }
   ],
   preview: {
      select: {
         title: 'title',
         media: 'mainImage'
      }
   }
} as NewsAnnouncementSchema;