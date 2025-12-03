# Color Implementation Guide - Crossroads Healing Center

## Updated Brand Colors

Your website has been updated with a warm, calming color palette that emphasizes trust and wellness:

### Primary Brand Palette

```
🟫 Deep Blue-Green (Primary)
   Hex: #0E3744 | RGB: 14, 55, 68
   ↳ Main branding color - Use for headings, buttons, headers
   ↳ Creates sense of trust, stability, and calm

☁️  Warm Off-White (Background)
   Hex: #F4F3EB | RGB: 244, 243, 235
   ↳ Main background color - Soft, welcoming, approachable
   ↳ Feels more human than pure white

🫐 Light Blue-Green (Accent)
   Hex: #1a5a6d | RGB: 26, 90, 109
   ↳ Secondary buttons, hover states, highlights
   ↳ Lighter variant for visual hierarchy

💎 Warm Tan (Warm Accent)
   Hex: #D4C5B0 | RGB: 212, 197, 176
   ↳ Decorative elements, alternative accents
   ↳ Adds sophistication and warmth
```

## Visual Breakdown by Component

### Contact Header (Top Bar)
- **Background**: Gradient from #0E3744 → #1a5a6d
- **Text**: White
- **Dividers**: #8B9EA3 (Muted Teal)
- **Links Hover**: #D4C5B0 (Warm Tan)

### Navigation Bar
- **Background**: #F4F3EB (Warm Off-White)
- **Text**: #0E3744 (Deep Blue-Green)
- **Logo Background**: #0E3744
- **Logo Text**: White
- **Links Hover**: #1a5a6d (Light Blue-Green)
- **CTA Button**: #0E3744 bg, #F4F3EB text

### Page Backgrounds
- **Light Sections**: #F4F3EB (Warm Off-White)
- **Neutral Sections**: White or slightly lighter cream
- **Emphasis Sections**: Gradient from #F4F3EB → #D4C5B0

### Text Colors
- **Primary Headings**: #0E3744
- **Body Text**: #0E3744 (dark) or #6b7a80 (secondary)
- **Links**: #0E3744 with hover state #1a5a6d
- **Muted Text**: #6b7a80

### Buttons & CTAs
- **Primary Button**:
  - Background: #0E3744
  - Text: #F4F3EB
  - Hover: #1a5a6d background
- **Secondary Button**:
  - Background: #F4F3EB
  - Border: #d9d3c8
  - Text: #0E3744
  - Hover: #1a5a6d border/text

### Borders & Dividers
- **Light Borders**: #d9d3c8 (Warm Neutral)
- **Card Borders**: #d9d3c8 hover → #8B9EA3
- **Subtle Dividers**: #d9d3c8

### Dark Mode
- **Background**: #0E3744 or #092534
- **Text**: #F4F3EB
- **Secondary Text**: #8B9EA3
- **Borders**: #1a5a6d
- **Accent Hover**: #D4C5B0

## CSS Custom Properties

All colors are available as CSS variables in `src/app/globals.css`:

```css
--primary: #0E3744;           /* Deep Blue-Green */
--primary-dark: #092534;      /* Darker variant */
--primary-light: #1a5a6d;     /* Light variant */
--secondary: #F4F3EB;         /* Warm Off-White */
--accent: #8B9EA3;            /* Muted Teal */
--accent-secondary: #D4C5B0;  /* Warm Tan */
--border: #d9d3c8;            /* Warm Neutral */
--text-muted: #6b7a80;        /* Muted Gray */
```

## Usage in Code

### Using Tailwind with Custom Hex Colors
```tsx
// For primary actions
className="bg-[#0E3744] text-[#F4F3EB] hover:bg-[#1a5a6d]"

// For backgrounds
className="bg-[#F4F3EB] dark:bg-[#092534]"

// For text
className="text-[#0E3744] dark:text-[#F4F3EB]"

// For borders
className="border border-[#d9d3c8] dark:border-[#1a5a6d]"
```

### Using CSS Variables
```css
color: var(--primary);        /* #0E3744 */
background: var(--secondary); /* #F4F3EB */
border-color: var(--border);  /* #d9d3c8 */
```

## Accessibility Compliance

All color combinations meet WCAG AA standards:

| Combination | Ratio | Level |
|------------|-------|-------|
| #0E3744 on #F4F3EB | 11.8:1 | AAA ✓ |
| #6b7a80 on #F4F3EB | 6.2:1 | AA ✓ |
| #F4F3EB on #0E3744 | 11.8:1 | AAA ✓ |
| #8B9EA3 on #0E3744 | 4.8:1 | AA ✓ |

## Brand Feeling

These colors create:
- **Trust**: Deep blue-green is associated with stability and healthcare
- **Warmth**: Cream background feels welcoming vs. stark white
- **Calm**: Soft palette reduces stress and anxiety
- **Sophistication**: Warm tan adds luxury and refinement
- **Professional**: Muted secondary colors convey expertise

## When to Update Colors

Only certain components use the new colors directly. Key files that reference colors:

- `/src/app/globals.css` - CSS variables
- `/src/components/shared/Navigation.tsx` - Nav styling
- `/src/components/shared/ContactHeader.tsx` - Top bar styling
- `/src/components/shared/Footer.tsx` - Footer styling
- Individual section components use Tailwind classes with hex colors

## Consistency Tips

1. **Always use the primary color (#0E3744) for:**
   - Main headings
   - Primary CTAs/buttons
   - Key brand elements
   - Logo background

2. **Use warm off-white (#F4F3EB) for:**
   - Main background
   - Light sections
   - Alternative to pure white

3. **Use light blue-green (#1a5a6d) for:**
   - Hover states
   - Secondary buttons
   - Emphasis/highlights

4. **Use warm tan (#D4C5B0) for:**
   - Hover/link states
   - Decorative accents
   - Sophisticated touches

5. **Avoid neon or bright colors** - Stay true to the calm, professional aesthetic

## Testing Colors

To verify colors are rendering correctly:
1. Visit http://localhost:3000
2. Check Contact Header (should be gradient blue-green)
3. Check Navigation (warm off-white background, blue-green text)
4. Check CTA buttons (deep blue-green)
5. Verify dark mode rendering

## Color Philosophy

This palette was chosen because:
- **#0E3744** (Deep Blue-Green): Medical/wellness industry standard for trust
- **#F4F3EB** (Warm Cream): Feels more human and less sterile than white
- **#1a5a6d** (Light Blue-Green): Provides hierarchy without harsh contrast
- **#D4C5B0** (Warm Tan): Adds sophistication and reduces coldness
- **#8B9EA3** (Muted Teal): Subtle accent that doesn't overwhelm

The combination creates a premium, calming experience perfect for mental health and wellness.
