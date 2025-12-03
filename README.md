# WebCrossroad - Premium Care & Wellness Website

A production-ready Next.js website built with React 19, Tailwind CSS 4, and Framer Motion for beautiful, animated user experiences.

## Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Runtime**: Node.js

## Features

- 🎨 Beautiful, responsive design with dark mode support
- ✨ Smooth animations and transitions with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 Pre-built reusable section components
- 📝 Callback form with validation
- 🌈 Custom design system with CSS variables

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/
│   │   └── page.tsx          # About Us page
│   └── globals.css           # Global styles & design tokens
├── components/
│   ├── sections/             # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeatureCardsSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   └── TeamSection.tsx
│   ├── forms/                # Form components
│   │   └── CallbackForm.tsx
│   └── shared/               # Reusable UI components
└── public/                   # Static assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm run start
```

## Components

### HeroSection
A full-screen hero section with breadcrumbs, title, subtitle, description, and CTA button.

```tsx
<HeroSection
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
  label="About Us"
  title="Your Title Here"
  description="Your description here"
  cta={{ text: 'Learn More', href: '/about' }}
/>
```

### StatsSection
Display key statistics in a grid layout with hover effects.

```tsx
<StatsSection
  title="Our Numbers"
  stats={[
    { label: 'Patients', value: '5000+', icon: '😊' },
    { label: 'Years', value: '25+', icon: '📅' },
  ]}
/>
```

### FeatureCardsSection
Grid of feature cards with images, icons, and descriptions.

```tsx
<FeatureCardsSection
  title="Our Services"
  features={[
    {
      title: 'Feature Title',
      description: 'Feature description',
      icon: '🎯',
      overline: 'Category'
    },
  ]}
  columns={3}
/>
```

### WhyChooseUsSection
Section with benefits list and highlighted cards on a background image.

```tsx
<WhyChooseUsSection
  title="Why Choose Us"
  benefits={[
    { icon: '🎯', title: 'Benefit', description: 'Description' },
  ]}
  highlightBenefits={[
    { icon: '⭐', title: 'Highlight', description: 'Description' },
  ]}
/>
```

### TeamSection
Display team members in a grid with optional callback form.

```tsx
<TeamSection
  title="Our Team"
  members={[
    { id: '1', name: 'John', role: 'Director', badge: 'Top Rated' },
  ]}
  showCallbackForm={true}
/>
```

### CallbackForm
Standalone callback form component with validation and success state.

```tsx
<CallbackForm
  title="Request Information"
  description="We'll get back to you shortly"
  onSubmit={async (data) => {
    // Handle form submission
  }}
/>
```

## Styling

The project uses Tailwind CSS 4 with a custom design system. Key colors:

- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#10b981` (Green)
- **Accent**: `#f59e0b` (Amber)

Edit `/src/app/globals.css` to customize colors and add animations.

## Dark Mode

All components support dark mode out of the box. Dark mode is automatically applied based on system preferences or manually toggled.

## Deployment

This project can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **AWS**: Use Amplify or any Node.js hosting
- **Other providers**: Any Node.js compatible host

## Environment Variables

Create a `.env.local` file if needed:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

## License

This project is open source and available under the MIT License.
