# Image Staging Area

This folder is a **staging area** for images before uploading to Cloudinary.

## ⚠️ Important Notes

- **All images are served from Cloudinary CDN** at root level (no `/uploads/` prefix)
- This folder is for **staging only** before upload
- After uploading, images are referenced in code as just the filename: `image.jpg`
- Cloudinary base URL: `https://res.cloudinary.com/de1fvxs4z/image/upload/`

## Image Optimization

Images are automatically optimized by Cloudinary:

- ✅ WebP format for modern browsers
- ✅ Responsive sizing based on device
- ✅ Global CDN delivery
- ✅ Quality optimization

## Adding or Updating Images

To add or update images:

1. **Add new images** to this `public/uploads/` folder
2. **Upload to Cloudinary** by running:
   ```bash
   yarn upload-images
   ```
   Or directly:
   ```bash
   node scripts/upload-to-cloudinary.mjs
   ```
3. **Reference in code** using `<NuxtImg>` component:
   ```vue
   <NuxtImg src="filename.jpg" alt="Description" />
   ```

The upload script will:

- Upload images to Cloudinary root level (no `uploads/` folder)
- Skip images already on Cloudinary (fast)
- Upload only new or changed images
- Show progress for each file

## Setup (First Time Only)

The upload script requires Cloudinary credentials in a `.env` file:

```bash
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Get them from: https://console.cloudinary.com/console/de1fvxs4z/settings/security

## Total Images

Current count: 116 images
