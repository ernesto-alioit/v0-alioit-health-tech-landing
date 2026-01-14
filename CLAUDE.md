# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AlioIT Virtual CISO landing page - a Next.js 16 marketing site with a lead capture form. Built with v0.app and deployed on Vercel.

## Commands

```bash
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm start        # Start production server
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with CSS-first configuration
- **Components**: shadcn/ui (Radix UI primitives + CVA)
- **Package Manager**: pnpm

### Project Structure
```
app/
  layout.tsx          # Root layout with Geist fonts and Vercel Analytics
  page.tsx            # Landing page composing all sections
  globals.css         # Tailwind imports + CSS custom properties (oklch colors)
  api/submit-lead/    # Lead form submission API route

components/
  hero-section.tsx    # Navigation + hero content (client component)
  cta-section.tsx     # Lead capture form (client component)
  ui/                 # shadcn/ui components (button, input, select, etc.)

lib/utils.ts          # cn() helper for Tailwind class merging
```

### Key Patterns

**Styling**: Uses Tailwind CSS v4's CSS-first approach. Theme colors are defined as CSS custom properties in `app/globals.css` using oklch color space. The `@theme inline` block maps these to Tailwind's color utilities.

**Components**: UI components in `components/ui/` follow shadcn/ui conventions using `class-variance-authority` for variants and `@radix-ui` primitives for accessibility.

**Client Components**: Interactive sections (hero, CTA form) use `"use client"` directive. Keep server components as default where possible.

**Path Aliases**: `@/*` maps to project root (e.g., `@/components/ui/button`).

### API Integration

The lead form submits to `/api/submit-lead` which forwards data to an n8n webhook. Requires `N8N_WEBHOOK_URL` environment variable.

### Build Configuration

- TypeScript build errors are ignored (`ignoreBuildErrors: true` in next.config.mjs)
- Images are unoptimized for simpler deployment
