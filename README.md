# Will You? — Photo Walk Invitation

A single-page React invitation site (McQueen + Spider-Man theme) for a March 6th photo walk and lunch.

## Run locally

```bash
npm install
npm run dev
```

## Add your photos and videos

1. Put images and videos in **`public/invitation/`** (e.g. `photo1.jpg`, `video1.mp4`).
2. Edit **`src/data/gallery.js`**:
   - Add image paths: `'/invitation/photo1.jpg'` to `galleryImages`.
   - Add videos: `{ src: '/invitation/video1.mp4', title: 'Our day' }` to `galleryVideos`.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
