import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'order'] },
  defaultSort: 'order',
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'category',
      type: 'select',
      options: ['Development', 'Photography', 'Film', 'Design', 'Other'],
      defaultValue: 'Development',
    },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Project image' },
    { name: 'problem', type: 'textarea' },
    { name: 'role', type: 'text' },
    { name: 'actions', type: 'textarea' },
    { name: 'results', type: 'textarea' },
    { name: 'tools', type: 'text', label: 'Tools used (comma separated)' },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first' },
    },
  ],
}
