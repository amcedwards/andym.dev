# Andrew McEdwards Portfolio - CLAUDE.md

## Project Overview

Professional portfolio and homepage showcasing Cloud & DevOps Engineering experience. Single-page React app with zero build step.

**Live Site:** https://andym.dev

## Tech Stack

- **Framework:** React 18 (CDN)
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Inter (Google Fonts)
- **Everything in:** `index.html` (single file, no build process)

## Key Components

- `AnimatedBackground` - Gradient with parallax floating shapes and grid overlay
- `Hero` - Avatar (`avatar.png`), name, stats, CTAs
- `BentoGrid` - Skills grid
- `Certifications` - Professional certifications
- `Experience` - Work history with smooth accordion for previous roles
- `Skills` - Additional technical skills

## Visual Features

- **Glassmorphism:** Frosted glass cards (blur: 16px, saturation: 180%)
- **3D Card Tilt:** Mouse-tracking perspective on hover
- **Scroll Reveal:** Intersection Observer with MutationObserver for dynamic elements
- **Count-Up Animations:** Stats animate when scrolled into view
- **Parallax Scrolling:** Background shapes move at different speeds
- **Smooth Accordion:** 500ms slide transition for previous experience

## Development Workflow

1. **Edit** `index.html` directly
2. **Test** locally (open in browser)
3. **Commit** using conventional commits (see below)
4. **Push** to trigger GitHub Pages deployment (~30 seconds)

### Conventional Commits (REQUIRED)

```
<type>: <description>

[optional body]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `chore`

## Deployment

- **Host:** GitHub Pages (via Jekyll)
- **Branch:** `main`
- **Domain:** andym.dev (Cloudflare CDN)
- **Excluded:** `CLAUDE.md`, `.gitignore`, `README.md`, `.github/`

**Note:** May need to purge Cloudflare cache for immediate updates

## File Structure

```
/Users/andrew/code/ui/
├── index.html     # Main app (HTML + CSS + JS)
├── avatar.png     # Hero portrait (35% size, circular)
├── CNAME          # Custom domain config
├── _config.yml    # Jekyll config (excludes CLAUDE.md)
└── CLAUDE.md      # This file (NOT published)
```

## Design System

### Colors
- **Background:** `#0F1419` (dark navy) + `#1A2A24` (dark teal)
- **Accent:** Emerald/Teal gradient
- **Glass:** `rgba(255, 255, 255, 0.08)` + 16px blur

### Typography
- **Font:** Inter
- **Hero:** text-5xl md:text-6xl font-bold
- **Headers:** text-2xl md:text-3xl font-700

### Spacing
- **Sections:** mb-12, mb-16
- **Cards:** p-4, p-6
- **Container:** max-w-4xl mx-auto

## Common Tasks

### Add Certification
Locate `const Certifications = () => {` and add to `certs` array:
```javascript
{
  title: 'Certification Name',
  org: 'Organization',
  date: 'Month Year',
  icon: 'fas fa-icon-name'
}
```

### Add Experience
Locate `const Experience = () => {` and add to `recentExperiences` or `previousExperiences` array.

### Company Icon Standards
**Always use consistent icons for the same company:**

- **TD Bank Group:** `fas fa-landmark` (banking)
- **Intuit Inc.:** `fas fa-file-invoice-dollar` (finance/taxes)
- **Sourced Group Inc.:** `fas fa-handshake` (consulting)
- **D2L Inc.:** `fas fa-graduation-cap` (education)
- **VMware Inc.:** `fas fa-server` (virtualization)
- **IBM Canada Ltd.:** `fas fa-user-tie` (professional)
- **MDS Proteomics Inc.:** `fas fa-user-doctor` (medicine)
- **RealTime Edge Software Corp.:** `fas fa-gamepad` (gaming)

**Guidelines:**
- Choose icons reflecting company's core business theme
- Use brand icons (`fab`) when available (AWS, Microsoft, etc.)
- Same company = same icon across all roles

## Technical Details

### Animations
- `reveal`, `reveal-left`, `reveal-right` - Scroll-triggered fade/slide
- `hover-lift` - translateY(-4px) on hover
- `card-tilt` - 3D mouse-tracking perspective
- `fade-in` - Initial page load animation

### Important Implementation Notes
- **Accordion:** Recent experience uses `RecentCard` (no reveal), previous uses `ExperienceCard` (with reveal)
- **Scroll Reveal:** Uses MutationObserver to observe dynamically added elements
- **Transitions:** Cards only transition `transform` and `opacity` (not position) to prevent unwanted movement

## Troubleshooting

### Site not updating
1. Check GitHub Actions status: `gh run list --limit 1 --workflow="pages-build-deployment"`
2. Wait 30-60 seconds
3. Purge Cloudflare cache
4. Hard refresh (Cmd+Shift+R)

### Animations not working
- Check browser console for errors
- Verify Intersection Observer support
- Test in different browser

## Notes for Claude

- **Always use conventional commit format** with co-author footer
- **Test locally first** before committing
- **Keep it simple** - no build tools, minimal dependencies
- **Maintain visual consistency** - stick to design system
- **Mobile-first approach** - check responsive design
- **CLAUDE.md stays private** - excluded via `_config.yml`
