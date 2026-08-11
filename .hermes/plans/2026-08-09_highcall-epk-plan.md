# Project Plan: Highcall DJ EPK

## Goal
Build a high-end, cyberpunk-inspired static portfolio (EPK) for DJ Highcall.

## Context
- Design: Figma (`assets/initial-plan.png`)
- Aesthetics: Dark/Cyberpunk, liquid-red highlights, minimalist tech-OS vibe.
- Tech: Next.js, Tailwind, Framer Motion.

## Implementation Steps

### 1. Setup & Foundations
- [ ] Initialize Next.js project.
- [ ] Install Tailwind CSS, Framer Motion.
- [ ] Define design tokens (colors, font-stacks) based on Figma.

### 2. UI Components
- [ ] **Navbar:** Brand name + nav links.
- [ ] **Hero Section:** Liquid-red logo, tagline, location tag, status pill, CTA buttons.
- [ ] **Profile/Experience Sections:** Responsive layouts for bio and past residencies.
- [ ] **Contact:** Booking info + links.

### 3. Motion & Interactions
- [ ] Framer Motion for page entrance animations.
- [ ] Hover states for buttons.
- [ ] Subtle animation for the "SYS_STATUS: ONLINE" indicator.

### 4. Final Polish & Deployment
- [ ] Responsive testing (mobile first).
- [ ] SEO setup (Metadata).
- [ ] Deploy to Vercel/Railway.

## Risks & Tradeoffs
- **Liquid Logo:** The "3D metallic chrome logo" needs careful asset handling (high-res PNG or SVG optimization).
- **Motion:** Excessive motion can kill performance on mobile. Focus on subtle, impactful animations.
