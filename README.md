# Jake's portfolio: Next.js + Payload CMS

You edit everything in the Payload admin at `/admin`: your photo, bio, skills, and work samples with images. The public site reads from it, so no code changes are needed to update content.

## Run it locally
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill it in (Neon database URL, a random `PAYLOAD_SECRET`, your Cloudflare R2 bucket and keys).
3. `npm run dev`, then open http://localhost:3000/admin and create your first user.
   The first dev run also creates the database tables in Neon, so do this once before deploying.
4. In the admin:
   - **Globals > Profile**: add your photo, short value proposition, About text, and skill groups.
   - **Media**: upload images (alt text is required).
   - **Projects**: one entry per work sample. Choose the image, fill in problem, role, actions and results. Use "order" to sort them.
5. Open http://localhost:3000 to see the site.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel and add the same environment variables from `.env.local`.
3. Deploy. Your admin is at `your-site.vercel.app/admin`.

## Notes
- Contact form messages are saved in **Messages** in the admin (they are not emailed).
- Vercel limits request bodies to 4.5 MB, so compress images before uploading large photos.
- Your R2 bucket can stay private: Payload serves the files itself.
- If the admin shows an import map error, run `npm run generate:importmap`.
- If install reports a peer-dependency conflict, align the `next` version with the one Payload's current template uses.
