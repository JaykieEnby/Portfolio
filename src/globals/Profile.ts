import type { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', defaultValue: 'Christian Jake Paraoan' },
    { name: 'headline', type: 'text', defaultValue: 'AR backend developer and multimedia creative' },
    { name: 'valueProp', type: 'textarea', label: 'Short value proposition' },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Your photo' },
    { name: 'about', type: 'textarea', label: 'About (separate paragraphs with a blank line)' },
    { name: 'email', type: 'email', defaultValue: 'cjparaoan@gmail.com' },
    { name: 'phone', type: 'text', defaultValue: '09762115826' },
    { name: 'location', type: 'text', defaultValue: 'Manila, Philippines' },
    { name: 'linkedin', type: 'text', defaultValue: 'https://www.linkedin.com/in/jake-paraoan' },
    { name: 'github', type: 'text', defaultValue: 'https://github.com/JaykieEnby' },
    {
      name: 'skills',
      type: 'array',
      labels: { singular: 'Skill group', plural: 'Skill groups' },
      fields: [
        { name: 'group', type: 'text', required: true },
        { name: 'items', type: 'text', required: true, label: 'Items (comma separated)' },
      ],
    },
  ],
}
