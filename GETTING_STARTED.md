# Getting Started with WebCrossroad

## Quick Start

Your Next.js website is ready to use! Here's how to get started:

### 1. Start Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

## What's Included

### Pages
- **Home** (`/`) - Landing page with hero, stats, features, and callback form
- **About** (`/about`) - Full about page with all section types

### Reusable Components

#### Sections (`src/components/sections/`)
- **HeroSection** - Full-screen hero with breadcrumbs, title, subtitle, and CTA
- **StatsSection** - Grid display for key statistics
- **FeatureCardsSection** - Card grid for features with images/icons
- **WhyChooseUsSection** - Benefits list with highlighted cards
- **TeamSection** - Team member grid with optional callback form

#### Forms (`src/components/forms/`)
- **CallbackForm** - Contact form with success state and optional submit handler

## Customization

### Colors & Branding
Edit `src/app/globals.css` to change the color scheme:
```css
:root {
  --primary: #3b82f6;      /* Blue */
  --secondary: #10b981;    /* Green */
  --accent: #f59e0b;       /* Amber */
}
```

### Content
Edit page files to customize text, images, and data:
- Home page: `src/app/page.tsx`
- About page: `src/app/about/page.tsx`

### Adding New Pages
1. Create a new directory under `src/app/` (e.g., `src/app/services/`)
2. Add a `page.tsx` file with your content
3. Import and use the section components

## Component Examples

### Using HeroSection
```tsx
import { HeroSection } from '@/components/sections/HeroSection';

<HeroSection
  label="My Section"
  title="Main Heading"
  description="Your description here"
  cta={{ text: 'Click me', href: '/page' }}
/>
```

### Using StatsSection
```tsx
import { StatsSection } from '@/components/sections/StatsSection';

<StatsSection
  title="Our Impact"
  stats={[
    { label: 'Users', value: '10K+', icon: '👥' },
    { label: 'Revenue', value: '$1M+', icon: '💰' },
  ]}
/>
```

### Using CallbackForm
```tsx
import { CallbackForm } from '@/components/forms/CallbackForm';

<CallbackForm
  title="Contact Us"
  onSubmit={async (data) => {
    // Handle form submission
    console.log(data);
  }}
/>
```

## Key Features

✨ **Smooth Animations** - Framer Motion animations on all components
🎨 **Dark Mode** - Built-in dark mode support
📱 **Responsive** - Mobile-first responsive design
🎯 **TypeScript** - Full TypeScript support
⚡ **Fast** - Next.js 16 with Turbopack for fast builds
🌈 **Tailwind CSS** - Utility-first styling with custom design system

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project builds to static files in `.next/standalone` and can be deployed to:
- AWS (Amplify, EC2, Lambda)
- Azure
- Google Cloud
- DigitalOcean
- Any Node.js hosting

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
├── components/
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeatureCardsSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   └── TeamSection.tsx
│   ├── forms/
│   │   └── CallbackForm.tsx
│   └── shared/               # Shared components
└── public/                   # Static assets
```

## Next Steps

1. ✅ Browse the site at http://localhost:3000
2. 📝 Update content in `src/app/page.tsx` and `src/app/about/page.tsx`
3. 🎨 Customize colors in `src/app/globals.css`
4. 📸 Add your images to `public/` directory
5. 🚀 Deploy to Vercel or your hosting provider

## Need Help?

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **React**: https://react.dev

Enjoy building! 🎉
