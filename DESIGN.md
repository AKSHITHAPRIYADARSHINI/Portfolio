# Design System - Minimalistic Portfolio

This document establishes the design principles and standards for the portfolio. The design prioritizes clarity, hierarchy, and minimalism to create a professional and focused user experience.

---

## Core Design Philosophy

**Minimalism** - Remove visual clutter and focus on content. Use whitespace intentionally, maintain clarity, and eliminate redundant elements.

**Consistency** - Apply the same visual language across all sections. Maintain uniform spacing, typography, and component styling.

**Hierarchy** - Guide users through content with clear visual prioritization. Use size, weight, and spacing to establish relationships between elements.

**Accessibility** - Ensure all content is readable and understandable. Maintain sufficient contrast and logical structure.

---

## Typography

### Font Stack
- **Primary Font**: System fonts (sans-serif) for maximum performance
- **Font Family**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **Hero Title** | 3rem (sm) / 5rem (md) / 6rem (lg) | 700 Bold | 1 | Main heading, largest emphasis |
| **Section Heading** | 1.875rem (sm) / 3rem (md) | 700 Bold | 1.2 | Section titles |
| **Card Title** | 1rem | 600 Semi-bold | 1.25 | Project/education titles |
| **Body Text** | 1rem (md) / 0.875rem (sm) | 400 Regular | 1.5 | Main content, descriptions |
| **Small Text** | 0.875rem | 400 Regular | 1.5 | Dates, metadata, secondary info |
| **Tiny Text** | 0.75rem | 400 Regular | 1.5 | Badges, tags, links |

### Guidelines
- **Never use more than 3 font sizes** in a component
- **Descriptions**: Use small text (0.875rem) for project/card descriptions
- **Metadata**: Use tiny text (0.75rem) for dates, tags, badges
- **Contrast**: Ensure readable contrast on all text; use `text-muted-foreground` for secondary text

---

## Spacing & Layout

### Spacing Scale
Use consistent spacing multipliers:
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)

### Gap Patterns

| Context | Gap Size | Usage |
|---------|----------|-------|
| **Section Spacing** | 2.5rem (40px) | Vertical gap between major sections |
| **Card List** | 0.75rem (12px) | Gap between cards in grids |
| **Component Spacing** | 1rem (16px) | Internal padding in cards |
| **Text Spacing** | 0.5rem (8px) | Gap between heading and subtitle |
| **List Items** | 0.25rem (4px) | Tight spacing for bullet points |

### Layout Constraints
- **Max Width**: 2xl (42rem / 672px) for content-heavy sections
- **Max Width (Projects Grid)**: 50rem (800px) for grid containers
- **Grid Columns**: 1 column (mobile) → 2 columns (sm breakpoint)
- **Padding**: 1.5rem (24px) on mobile, 2rem (32px) on desktop

### Section Structure
```
Every section follows:
1. Section Header (optional badge + title + subtitle)
2. Content (cards, lists, or custom layouts)
3. Consistent bottom spacing (py-12 or space-y-12)
```

---

## Cards & Components

### Card Base Styling
```
- Padding: px-2 (internal) to px-4 (external)
- Border: 1px solid border (subtle)
- Hover: shadow-lg with smooth transition (duration-300)
- Border Radius: rounded-lg (default from shadcn)
- Min Height: h-full (stretch to fill container)
- Overflow: hidden (for images/videos)
```

### Card Hierarchy

**Project/Cert Cards** (ProjectCard, UnifiedCard)
- **Image/Video** (optional): h-40 (160px), full width, object-cover
- **Header**: Title (text-base) + Date (text-xs) + Description (text-xs)
- **Content**: Tags/Badges in grid (gap-1)
- **Footer**: Links with badges

**Resume Cards** (ResumeCard - Work/Education)
- **Avatar**: size-12 (48px), border, flex-none
- **Header**: Title + Subtitle + Period metadata
- **Content**: Description or nested roles
- **Animation**: Smooth expand/collapse on click

**Hackathon Cards** (HackathonCard)
- **Timeline**: Left-aligned avatar with border and timeline
- **Layout**: Date → Title → Location → Description
- **Spacing**: py-4 (vertical), ml-10 (left margin for timeline)

### Spacing Within Cards
- **Padding**: px-2 (compact), avoid excessive padding
- **Internal Gap**: space-y-1 (8px) between elements
- **Content Gap**: mt-2, mt-4 for larger separations
- **Footer Gap**: gap-1 or gap-2 for link badges

---

## Colors & Emphasis

### Color Palette
- **Background**: `bg-background` (light/dark aware)
- **Foreground**: `text-foreground` (main text)
- **Muted**: `text-muted-foreground` (secondary text, ~60% opacity)
- **Borders**: `border` (subtle, 1px)
- **Accents**: `blue-500` for links/CTAs
- **Hover**: `hover:shadow-lg` for cards, `hover:underline` for links

### Emphasis Guidelines
- **Primary (Hero/Titles)**: Bold, large, full foreground color
- **Secondary (Dates/Tags)**: Smaller, muted-foreground, reduced opacity
- **Links**: blue-500, underline on hover
- **Interactive**: Cards get shadow on hover, smooth transitions

### Dark Mode
- All components use `dark:prose-invert` for markdown
- Avatar backgrounds: `bg-muted-background dark:bg-foreground`
- Text automatically adjusts via Tailwind dark mode

---

## Section Standards

### Hero Section
- **Title**: 3-6rem, bold, max-width [600px]
- **Description**: md text, muted-foreground
- **Avatar**: size-28 (112px), border
- **Layout**: flex gap-2, justify-between

### Content Sections (About, Work, Education, Skills)
- **Heading**: text-xl font-bold
- **Content Gap**: gap-y-3 (cards/items)
- **Max Width**: Inherited from page max-w-2xl

### Feature Sections (Projects, Certificates, Events)
- **Centered Header**: flex justify-center, text-center
- **Badge**: Inline badge with rounded-lg, px-3 py-1, text-sm
- **Title**: text-3xl (sm) / text-5xl (md), bold
- **Subtitle**: md text, muted-foreground, md-relaxed line-height
- **Grid**: grid cols-1 (sm:cols-2), gap-3, max-w-[800px], mx-auto
- **Section Padding**: py-12

### Contact Section
- **Centered Layout**: grid, items-center, justify-center, text-center
- **Badge**: Same as feature sections
- **Title**: text-3xl (sm) / text-5xl (md)
- **Content**: max-w-[600px], centered, with link emphasis

---

## Content Guidelines

### Descriptions (Projects, Events)
- **Length**: Max 2-3 sentences (15-25 words each)
- **Tone**: Clear, action-oriented, no jargon
- **Format**: Use simple present tense, active voice
- **Example**: "Demonstrates how insecure MAC constructions can be exploited. Interactive educational tool with practical examples."

### Metadata
- **Dates**: "August 2025 - November 2025" or "2025" (consistent format)
- **Location**: "Chicago, Illinois" (City, State)
- **Tags/Badges**: Single words, 1-2 words max, descriptive

### Hierarchy in Cards
1. **Title** (most emphasis)
2. **Date/Metadata** (secondary, muted)
3. **Description** (body text, muted)
4. **Tags/Links** (smallest, interactive)

---

## Animations & Transitions

### Motion Principles
- **Duration**: 300ms for hover effects, 700ms for expand/collapse
- **Easing**: `ease-out` for natural motion, `[0.16, 1, 0.3, 1]` for material curves
- **Blur Fade**: Used on page load with BLUR_FADE_DELAY (0.04s increments)

### Component Animations
- **Cards**: Hover shadow transition (300ms ease-out)
- **Expand/Collapse**: Motion.div with 700ms duration (resume card roles)
- **Chevron Icon**: Rotate 90deg on expand, translate-x-1 on hover
- **Page Load**: Blur fade effect on sections with staggered delays

---

## Responsive Design

### Breakpoints (Tailwind)
- **Mobile**: < 640px (sm) - 1 column, reduced font sizes
- **Tablet**: 640px - 1024px (sm to lg) - 2 columns, adjusted spacing
- **Desktop**: > 1024px (lg+) - Full layout, max-w constraints

### Responsive Patterns
```
- Titles: "text-3xl sm:text-5xl" (larger on desktop)
- Text: "text-xs sm:text-sm" (readable on all devices)
- Grid: "grid-cols-1 sm:grid-cols-2" (2 columns on tablet+)
- Padding: "px-6" (responsive via container)
- Avatars: size-12 (fixed, works on all sizes)
```

---

## Implementation Checklist

✅ **Typography**: 3 size levels max (title, body, meta)  
✅ **Spacing**: Consistent gap scale, no random margins  
✅ **Cards**: Uniform padding (px-2), hover effects, full height  
✅ **Descriptions**: Max 2-3 sentences, active voice  
✅ **Colors**: Limited palette, proper contrast, dark mode  
✅ **Sections**: Centered headers with badges, consistent structure  
✅ **Responsive**: Mobile-first, readable on all sizes  
✅ **Animations**: Smooth, purposeful, consistent duration  
✅ **Accessibility**: Semantic HTML, sufficient contrast, keyboard support  

---

## Quick Reference

| Component | Max Width | Font Size | Padding | Spacing |
|-----------|-----------|-----------|---------|---------|
| **Hero** | 600px | 3-6rem | - | gap-2 |
| **Section** | 2xl (42rem) | text-xl | px-6 | space-y-3 |
| **Card List** | 50rem (800px) | text-sm | px-2 | gap-3 |
| **Project Card** | Full | text-base/xs | px-2 | py-1 gaps |
| **Badge** | Auto | 10px | px-1 | gap-1 |
| **Timeline** | Full | text-sm | - | gap-1, py-4 |

---

## Example: Consistent Project Card

```
Title: "AI-Driven Multi-Agent E-Commerce Platform" (text-base, bold)
Date: "August 2025 - November 2025" (text-xs, muted)
Description: "2-3 sentence max" (text-xs, muted)
Tags: ["Python", "LangChain"] (tiny badges, gap-1)
Links: [GitHub, Website] (badge buttons, text-[10px])
```

All consistent in structure, spacing, and emphasis.

---

**Last Updated**: 2026-08-01  
**Version**: 1.0 - Initial Minimalistic Design System
