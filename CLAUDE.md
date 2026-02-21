# Andrew McEdwards Portfolio - CLAUDE.md

## Project Overview

This is Andrew McEdwards' professional portfolio and homepage - a modern, single-page application showcasing experience, certifications, and expertise in Cloud & DevOps Engineering.

**Live Site:** https://andym.dev

## Tech Stack

- **Framework:** React 18 (via CDN, no build step)
- **Language:** JavaScript (JSX via Babel standalone)
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts (Inter)

## Architecture

### Single-File Application
- Everything is in `index.html` (no separate JS/CSS files)
- React components defined inline using `<script type="text/babel">`
- Inline styles in `<style>` tag for custom animations and effects

### Key Components
- `AnimatedBackground` - Gradient background with parallax floating shapes
- `Hero` - Main header with avatar, name, stats, and CTAs
- `BentoGrid` - Highlighted skills in a bento-style grid layout
- `Certifications` - Professional certifications with icons
- `Experience` - Work history with collapsible previous roles
- `Skills` - Additional technical skills

### Visual Features
1. **Enhanced Glassmorphism** - Frosted glass effect on cards (blur: 16px, saturation: 180%)
2. **3D Card Tilt** - Mouse-tracking perspective tilt on hover
3. **Scroll Reveal Animations** - Elements fade/slide in on scroll (Intersection Observer)
4. **Count-Up Animations** - Stats animate from 0 when scrolled into view
5. **Parallax Scrolling** - Background shapes move at different speeds
6. **Responsive Design** - Mobile-first with Tailwind breakpoints

## Development Workflow

### Making Changes

1. **Edit `index.html`** directly - all code is in this single file
2. **Test locally** - open in browser (supports file:// protocol)
3. **Commit** using conventional commits format (see below)
4. **Push** to trigger automatic deployment

### Conventional Commits

**IMPORTANT:** All commits MUST follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat:` - New feature or enhancement
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style/formatting (not visual styling)
- `refactor:` - Code refactoring without changing functionality
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks (dependencies, config, etc.)
- `ci:` - CI/CD pipeline changes
- `build:` - Build system changes

**Examples:**
```bash
git commit -m "feat: add new certification section"
git commit -m "fix: correct mobile navigation overflow"
git commit -m "chore: update Font Awesome to v6.5"
```

**Always include co-author footer:**
```
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

## Deployment

### Automatic Deployment
- **Host:** GitHub Pages
- **Repository:** `amcedwards/andym.dev`
- **Branch:** `main` (root directory)
- **Custom Domain:** andym.dev (configured via `CNAME` file)
- **CDN:** Cloudflare (in front of GitHub Pages)

### Deployment Process
1. Push to `main` branch
2. GitHub Actions automatically builds and deploys (using Jekyll)
3. Changes go live at https://andym.dev within ~30 seconds
4. **Note:** Cloudflare cache may need manual purge for immediate updates

### Files Excluded from Deployment
- `CLAUDE.md` - This file (excluded via `_config.yml`)
- `.gitignore` - Git configuration
- `README.md` - Repository readme (if created)
- `.github/` - GitHub Actions workflows
- Any files matching patterns in `_config.yml` exclude list

### Monitoring Deployment
```bash
# Check latest deployment status
gh run list --limit 1 --workflow="pages-build-deployment"

# Watch deployment in real-time
gh run watch --exit-status <run-id>
```

## File Structure

```
/Users/andrew/code/ui/
├── index.html          # Main application file (HTML + CSS + JS)
├── CNAME              # Custom domain configuration
├── _config.yml        # Jekyll config (excludes CLAUDE.md from site)
├── company-icons.js   # Company logo SVG data (if used)
├── company-logos.svg  # Company logos (if used)
├── .gitignore         # Git ignore file (.claude/settings.local.json)
└── CLAUDE.md          # This file (NOT published to site)
```

## Code Style & Guidelines

### React Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Use descriptive names (PascalCase for components)

### Styling
- **Prefer Tailwind utility classes** over custom CSS
- Custom animations go in `<style>` section
- Use semantic color names (emerald, teal, slate)
- Maintain consistent spacing (p-4, p-6, gap-4)

### Animations
- Smooth transitions: `transition-smooth` (0.3s ease)
- Hover effects: `hover-lift` (translateY -4px)
- Reveal classes: `reveal`, `reveal-left`, `reveal-right`
- Card tilt: `card-tilt` with mouse tracking

### Accessibility
- Always include `alt` attributes on images
- Use semantic HTML (`<section>`, `<nav>`, `<header>`)
- Ensure sufficient color contrast
- Keyboard navigation support

## Design System

### Color Palette
- **Primary Background:** `#0F1419` (dark navy)
- **Secondary Background:** `#1A2A24` (dark teal)
- **Accent:** Emerald/Teal gradient (`emerald-600`, `teal-600`)
- **Text:** White, `gray-300`, `gray-400`
- **Glass:** `rgba(255, 255, 255, 0.08)` with 16px blur

### Typography
- **Font Family:** Inter (Google Fonts)
- **Hero Name:** text-5xl md:text-6xl font-bold
- **Section Headers:** text-2xl md:text-3xl font-700
- **Body:** text-base font-400
- **Small Text:** text-sm, text-xs

### Spacing Scale
- **Sections:** mb-12, mb-16
- **Cards:** p-4, p-6
- **Grid Gaps:** gap-4
- **Container:** max-w-4xl mx-auto

## Common Tasks

### Adding a New Certification
1. Locate `const Certifications = () => {`
2. Add new entry to `certs` array:
```javascript
{
  title: 'Certification Name',
  org: 'Organization',
  date: 'Month Year',
  icon: 'fas fa-icon-name'
}
```

### Adding a New Experience Entry
1. Locate `const Experience = () => {`
2. Add to `experiences` or `previousExperiences` array
3. Follow existing structure with company, role, dates, description

### Updating Contact Links
1. Find the CTA buttons in the `Hero` component
2. Update href attributes for GitHub, LinkedIn, etc.

### Changing Color Scheme
1. Search for color classes: `emerald-`, `teal-`, `green-`
2. Replace with desired Tailwind colors
3. Update gradient definitions in `<style>` section

## Performance Considerations

- **No Build Step:** Changes deploy instantly without compilation
- **CDN Dependencies:** React, Tailwind, Font Awesome loaded from CDN
- **Lazy Loading:** Icons and images load on-demand
- **Intersection Observer:** Efficient scroll-based animations
- **Lightweight:** No service worker overhead or caching complexity

## Browser Support

- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari, Chrome Android
- **Standards:** ES6+, CSS Grid, Flexbox, Intersection Observer API

## Troubleshooting

### Site not updating after push
1. Check GitHub Actions deployment status
2. Wait 30-60 seconds for deployment
3. Purge Cloudflare cache if needed
4. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Animations not working
1. Check browser console for JavaScript errors
2. Verify Intersection Observer support
3. Test in different browser

### Glass effect not rendering
1. Ensure browser supports `backdrop-filter`
2. Check for conflicting CSS
3. Verify Tailwind CDN loaded successfully

### CLAUDE.md appearing on published site
1. Check `_config.yml` exists with exclude list
2. Verify Jekyll is processing the site
3. Clear Cloudflare cache after fixing

## Future Enhancements

Potential features to consider:
- [ ] Dark/light mode toggle
- [ ] Contact form
- [ ] Blog section
- [ ] Project showcase with screenshots
- [ ] Testimonials slider
- [ ] Analytics integration
- [ ] SEO metadata optimization
- [ ] Performance monitoring

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Exclude Files](https://jekyllrb.com/docs/configuration/options/#global-configuration)

## Notes for Claude

- **Always use conventional commit format** for all commits
- **Test locally first** before committing if possible
- **Preserve existing patterns** - don't over-engineer
- **Keep it simple** - no build tools, no dependencies beyond CDN
- **Maintain visual consistency** - stick to established design system
- **Check responsive design** - mobile-first approach
- **Avoid adding dependencies** - keep the zero-build-step architecture
- **CLAUDE.md stays private** - never remove it from exclude list in _config.yml
