# Vibe Films Style Guide

This document outlines the design language and style conventions for the Vibe Films website.

## Colors

### Primary Colors

- **Primary Orange:** `#ff6c00` - Used for accents, CTAs, and branding elements
- **Secondary Pink:** Used for interactive elements and highlights (defined in Tailwind config)
- **Dark:** Deep dark background for sections, usually with light text

### Text Colors

- **White:** `#ffffff` - Primary text on dark backgrounds
- **Light Gray:** `#f3f4f6` - Secondary text on dark backgrounds
- **Dark Gray:** `#1f2937` - Primary text on light backgrounds
- **Medium Gray:** `#6b7280` - Secondary text on light backgrounds

## Typography

### Font Families

- **Heading Font:** Playfair Display (serif)
- **Body Font:** Open Sans (sans-serif)

### Font Sizes

- **Headings:**
  - H1: 3rem (48px)
  - H2: 2.5rem (40px)
  - H3: 2rem (32px)
  - H4: 1.5rem (24px)
  - H5: 1.25rem (20px)
  - H6: 1rem (16px)

- **Body Text:**
  - Regular: 1rem (16px)
  - Small: 0.875rem (14px)
  - Extra Small: 0.75rem (12px)

### Font Weights

- **Bold:** 700
- **Medium:** 500
- **Regular:** 400

## Logo Usage

The Vibe Films branding uses text-only representation:

- **Header:** "VIBE FILMS" in uppercase, with "VIBE" in white and "FILMS" in the primary orange color
- **Footer:** "Vibe Films" in title case, with the same color scheme

If image representations are needed, generate them using the included script:

```bash
node create-logo.js
```

## Layout

### Containers

- **Max Width:** 1280px
- **Side Padding:** 1rem (16px) on mobile, 2rem (32px) on tablet and above

### Spacing

- **Section Padding:** 
  - Vertical: 5rem (80px) on desktop, 3rem (48px) on mobile
  - Horizontal: Container padding

### Grid System

- **12-column grid** using Tailwind's grid classes
- **Responsive breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1023px
  - Desktop: >= 1024px

## Components

### Buttons

- **Primary Button:** Solid background (primary or secondary color) with contrasting text
- **Secondary Button:** Outlined with transparent background
- **Text Button:** No background or border, just text with hover effect

### Cards

- **Featured Cards:** Large cards with image, title, and description
- **Grid Cards:** Smaller cards for listings
- **All cards should have:**
  - Subtle shadow
  - Rounded corners (0.375rem / 6px)
  - Hover effects

### Navigation

- **Desktop:** Horizontal menu with dropdowns
- **Mobile:** Hamburger menu opening a fullscreen overlay

## Icons

- Use React Icons package
- Maintain consistent sizing within contexts
- Use for:
  - Navigation enhancement
  - Action indicators
  - Social media links

## Images

- **Featured Images:** 16:9 aspect ratio
- **Thumbnails:** Square or 16:9
- **Always include:**
  - Alternative text for accessibility
  - Lazy loading for performance

## Animations

- **Subtle entrance animations** using Framer Motion
- **Interactive elements** should have hover/focus states
- **Transitions** should be smooth (0.3s duration)
- **Avoid** excessive or disruptive animations 