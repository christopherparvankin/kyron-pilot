# Deployment Guide

## Prerequisites

1. Node.js 18+ installed
2. npm or yarn package manager
3. Access to deployment platform (Vercel, Netlify, etc.)

## Environment Variables

Create a `.env.local` file in the frontend directory with the following variables:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=oniivxbv
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03

# Optional: Sanity API Token (for write operations)
# SANITY_API_TOKEN=your_token_here
```

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

## Deployment Platforms

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Manual Deployment

1. Run `npm run build`
2. Upload the `.next` folder to your server
3. Install dependencies on server: `npm install --production`
4. Start the server: `npm start`

## Build Verification

The build should complete successfully with:
- ✓ Compiled successfully
- ✓ Generating static pages (22/22)
- No TypeScript errors
- No ESLint errors (ignored during build)

## Troubleshooting

- Ensure all environment variables are set
- Check that Sanity project ID and dataset are correct
- Verify image domains are configured in next.config.ts
- Make sure all dependencies are installed

## Performance

The build generates optimized static pages for:
- Home page
- About page
- Services pages
- Provider pages
- Innovation pages
- Location pages
- Appointment page

Dynamic pages are server-rendered on demand for:
- Individual provider pages
- Individual service pages
- Individual location pages
