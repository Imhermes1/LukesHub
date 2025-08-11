# Luke Fornieri - MAK REALTY Real Estate Website

A modern, responsive real estate website built with Next.js 14, featuring glassmorphism design, video backgrounds, and integrated contact management with dual API integrations.

## 🏗️ Project Overview

This is a premium real estate website for Luke Fornieri at MAK REALTY, showcasing property sales, services, and client testimonials with a modern dark theme and glassmorphism effects. The site features a sophisticated contact management system with Notion database integration and email notifications.

### Key Features

- **Modern Glassmorphism Design**: Semi-transparent UI elements with backdrop blur effects
- **Video Hero Section**: Full-screen autoplay video background with grayscale filter and overlay effects
- **Interactive Property Showcase**: Property cards with modal details and status badges
- **Dual Contact Integration**: Notion database storage + Resend email notifications
- **Mobile-First Responsive Design**: Hamburger navigation with smooth scroll-to-section
- **Performance Optimized**: Vercel Analytics, Speed Insights, and image optimization
- **SEO & Accessibility Ready**: Structured data, meta tags, and ARIA compliance
- **Component-Based Architecture**: Modular React components with TypeScript

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5+ with strict mode
- **Styling**: Custom CSS with CSS Variables and Glassmorphism effects
- **Deployment**: Vercel with automatic deployments
- **Analytics**: Vercel Analytics & Speed Insights
- **Contact Management**: Notion API + Resend Email API
- **Fonts**: Inter (Google Fonts) with preconnect optimization

## 📁 Project Structure

```
luke-real-estate-site/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API with Notion + Resend integration
│   ├── components/
│   │   ├── About.tsx             # About section with photo and bio
│   │   ├── CareerHighlights.tsx  # Property showcase with interactive cards
│   │   ├── Contact.tsx           # Contact form with validation and status handling
│   │   ├── Footer.tsx            # Site footer with contact details
│   │   ├── Header.tsx            # Sticky navigation with mobile hamburger menu
│   │   ├── Hero.tsx              # Full-screen video hero with glassmorphism overlay
│   │   ├── MediaCoverage.tsx     # Media logos and press coverage
│   │   ├── PropertyModal.tsx     # Property detail modal with image gallery
│   │   ├── Services.tsx          # Services grid with embedded video
│   │   ├── Social.tsx            # Social media feed integration
│   │   └── Testimonials.tsx      # Client testimonials carousel
│   ├── deletion/
│   │   └── page.tsx              # Data deletion request page
│   ├── lib/
│   │   └── api.ts                # API utility functions
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy page
│   ├── globals.css               # Global styles, CSS variables, and glassmorphism
│   ├── layout.tsx                # Root layout with metadata and analytics
│   └── page.tsx                  # Main page with component orchestration
├── public/
│   ├── images/                   # Property photos, hero images, and brand assets
│   └── videos/                   # Hero background videos
├── .kiro/                        # Kiro IDE configuration (if present)
├── .vscode/
│   └── settings.json             # VSCode TypeScript configuration
├── Documentation/
│   ├── API.md                    # Detailed API documentation
│   ├── DEVELOPMENT.md            # Development workflow and guidelines
│   ├── DEPLOYMENT.md             # Deployment and environment setup
│   ├── CONTACT_SETUP.md          # Contact form integration setup
│   ├── SOCIAL_API_SETUP.md       # Social media API configuration
│   └── TODO.md                   # Project roadmap and tasks
├── package.json                  # Dependencies and npm scripts
├── tsconfig.json                 # TypeScript configuration with strict mode
├── next.config.js                # Next.js configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
└── vercel.json                   # Vercel deployment configuration
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd luke-real-estate-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Notion Integration (Optional - for contact form database storage)
   NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   
   # Email Notifications (Optional - for contact form email alerts)
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   
   **Note**: The contact form will work without these integrations but will only show success messages without actually storing or sending data.

4. **Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Verify Setup**
   - Check that the site loads correctly
   - Test the contact form (will show integration status)
   - Verify responsive design on different screen sizes

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

The website uses a sophisticated dark theme with modern blue and purple accents:

**Base Colors:**
- **Background**: Black to grey gradient (`#000000` → `#2a2a2a` → `#4a4a4a`)
- **Surface**: `#2a2a2a` (card backgrounds)
- **Primary Text**: `#ffffff` (high contrast)
- **Secondary Text**: `#e0e0e0` (reduced contrast)

**Accent Colors:**
- **Blue**: `#3B82F6` (primary actions, hover: `#2563EB`)
- **Purple**: `#8B5CF6` (secondary actions, hover: `#7C3AED`)
- **Blue Light**: `#60A5FA` (dark mode variant)
- **Purple Light**: `#A78BFA` (dark mode variant)

**Glass Morphism Variables:**
- **Light Glass**: `rgba(255, 255, 255, 0.15)` with 20px blur
- **Medium Glass**: `rgba(255, 255, 255, 0.25)` with 20px blur
- **Colored Glass**: Blue/purple tinted variants for hover states
- **Borders**: `rgba(255, 255, 255, 0.2)` for subtle definition

### Typography

**Font Stack:**
- **Primary**: Inter (Google Fonts with preconnect optimization)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Mono**: Berkeley Mono, ui-monospace (for code elements)

**Type Scale:**
- **Display**: 40px (hero titles)
- **H1**: 32px (section titles)
- **H2**: 24px (subsection titles)
- **H3**: 20px (card titles)
- **Body**: 16px (primary text)
- **Small**: 14px (secondary text)

### Component Architecture

#### Glassmorphism System
```css
/* Standard glass card */
.glass-card {
  background: var(--glass-bg-light);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

#### Interactive Elements
- **Buttons**: Gradient text with glass backgrounds
- **Cards**: Hover transforms with color transitions
- **Navigation**: Smooth scroll with active states
- **Modals**: Backdrop blur with fade animations

#### Responsive Breakpoints
- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (3+ column grids, full navigation)

### Animation System

**Transitions:**
- **Fast**: 150ms (hover states, button interactions)
- **Normal**: 250ms (card transforms, modal open/close)
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth, natural feel)

**Hover Effects:**
- **Cards**: `translateY(-4px)` with enhanced shadows
- **Buttons**: `translateY(-2px)` with gradient shifts
- **Images**: `scale(1.05)` with smooth transitions

## 📧 Contact Form Integration

The contact form features a robust dual-integration system that handles form submissions through both Notion database storage and email notifications.

### Notion Database Integration

**Database Schema:**
- **Name** (Title): Contact's full name
- **Email** (Email): Contact's email address  
- **Phone** (Phone Number): Optional phone number
- **Contact Method** (Select): Preferred contact method (email/phone/either)
- **Message** (Rich Text): Full message content
- **Status** (Select): Lead status (default: "New")
- **Submitted** (Date): Submission timestamp

**Setup Requirements:**
1. Create a Notion integration at [notion.so/my-integrations](https://notion.so/my-integrations)
2. Create a database with the above schema
3. Share the database with your integration
4. Add `NOTION_TOKEN` and `NOTION_DATABASE_ID` to environment variables

### Email Notifications

**Email Configuration:**
- **From**: `website@lukefornieri.com.au`
- **To**: `luke.f@makrealty.com.au`
- **Subject**: `New Lead: {name} - Luke Fornieri Website`
- **Format**: HTML template with all form data
- **Timezone**: Australian timezone for timestamps

**Setup Requirements:**
1. Sign up for [Resend](https://resend.com)
2. Verify your sending domain
3. Generate an API key
4. Add `RESEND_API_KEY` to environment variables

### Advanced Features

- **Graceful Degradation**: Form works even if integrations fail
- **Dual Success Tracking**: Reports success status for each integration
- **Input Validation**: Client and server-side validation
- **Error Handling**: Detailed error logging and user-friendly messages
- **Loading States**: Visual feedback during form submission
- **Accessibility**: Full ARIA compliance and keyboard navigation

### API Response Format

```json
{
  "success": true,
  "message": "Thank you! Your message has been received.",
  "integrations": {
    "notion": true,
    "email": true
  }
}
```

## 🔧 Development Configuration

### VSCode Settings

The project includes VSCode configuration in `.vscode/settings.json`:

```json
{
    "typescript.autoClosingTags": false
}
```

This disables automatic closing tags for TypeScript files to prevent conflicts with JSX formatting and improve development experience.

### TypeScript Configuration

**Compiler Options:**
- **Target**: ES5 for broad browser compatibility
- **Module**: ESNext with bundler resolution (Next.js optimized)
- **Strict Mode**: Enabled for comprehensive type safety
- **JSX**: Preserve (handled by Next.js)
- **Path Mapping**: `@/*` for root-relative imports
- **Incremental**: Enabled for faster builds

**Type Safety Features:**
- Strict null checks
- No implicit any
- No unused locals/parameters
- Exact optional property types

### Next.js Configuration

**Build Optimization:**
- Automatic code splitting
- Image optimization with WebP/AVIF support
- Font optimization with Google Fonts
- CSS optimization and minification

**Development Features:**
- Fast Refresh for instant updates
- Built-in TypeScript support
- Automatic polyfills for older browsers

### Package Scripts

```json
{
  "dev": "next dev",           // Development server with hot reload
  "build": "next build",       // Production build with optimization
  "start": "next start",       // Production server
  "lint": "next lint"          // ESLint with Next.js rules
}
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px (hamburger menu, stacked layouts)
- **Tablet**: 768px - 1024px (adjusted grid columns)
- **Desktop**: > 1024px (full grid layouts)

### Mobile Optimizations

- Touch-friendly navigation
- Optimized video playback
- Compressed images with proper aspect ratios
- Reduced motion for accessibility

## 🚀 Deployment

### Vercel Deployment

The site is optimized for Vercel deployment with automatic CI/CD:

**Configuration (`vercel.json`):**
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

**Deployment Process:**
1. **Automatic**: Push to `main` branch triggers production deployment
2. **Preview**: Pull requests create preview deployments with unique URLs
3. **Rollback**: Instant rollback to previous deployments if needed

**Environment Variables (Vercel Dashboard):**
```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Performance Monitoring

**Vercel Analytics:**
- Real-time visitor tracking
- Page view analytics
- User interaction metrics
- Geographic distribution data

**Speed Insights:**
- Core Web Vitals monitoring (LCP, FID, CLS)
- Performance score tracking
- Real user metrics (RUM)
- Performance recommendations

**Optimization Features:**
- Automatic image optimization (WebP/AVIF)
- Edge caching for static assets
- Gzip/Brotli compression
- Font optimization with preloading

### Domain Configuration

- **Primary Domain**: `lukefornieri.com.au`
- **SSL Certificate**: Auto-managed by Vercel
- **CDN**: Global edge network for fast loading
- **DNS**: Configured for optimal performance

## 🔍 SEO Features

### Structured Data

JSON-LD schema markup for:
- Real Estate Agent profile
- Organization (MAK REALTY)
- Contact information
- Social media profiles

### Meta Tags

- Dynamic page titles and descriptions
- Open Graph tags for social sharing
- Canonical URLs
- Mobile viewport configuration

### Performance

- Image preloading for hero section
- Font preconnection to Google Fonts
- Optimized CSS with custom properties
- Minimal JavaScript bundle size

## 🧪 Testing

### Manual Testing Checklist

**Core Functionality:**
- [ ] Contact form submission (with/without integrations)
- [ ] Form validation (required fields, email format)
- [ ] Success/error message display
- [ ] Loading states during submission

**Navigation & UI:**
- [ ] Desktop navigation menu
- [ ] Mobile hamburger menu
- [ ] Smooth scroll to sections
- [ ] Property modal open/close
- [ ] Property card hover effects

**Media & Performance:**
- [ ] Hero video autoplay and controls
- [ ] Image loading and optimization
- [ ] Responsive design across devices
- [ ] Glassmorphism effects rendering
- [ ] Font loading and display

**Accessibility:**
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] ARIA labels and roles
- [ ] Color contrast ratios
- [ ] Focus indicators

### API Testing

**Contact Form Endpoint:**
```bash
# Test contact form locally
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0400 000 000",
    "contactMethod": "email",
    "message": "Test message for API validation"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Thank you! Your message has been received.",
  "integrations": {
    "notion": true,
    "email": true
  }
}
```

### Browser Compatibility

**Fully Supported:**
- Chrome 90+ (primary development browser)
- Firefox 88+ (Gecko engine)
- Safari 14+ (WebKit engine, iOS compatibility)
- Edge 90+ (Chromium-based)

**Graceful Degradation:**
- Backdrop-filter fallbacks for older browsers
- CSS Grid fallbacks to Flexbox
- Video autoplay fallbacks

### Performance Benchmarks

**Target Metrics:**
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📄 License

This project is private and proprietary to Luke Fornieri and MAK REALTY.

## 🤝 Contributing

This is a private project. For updates or modifications, please contact the development team.

## 📚 Additional Documentation

- **[API Documentation](API.md)**: Detailed API endpoint documentation
- **[Development Guide](DEVELOPMENT.md)**: Development workflow and guidelines  
- **[Deployment Guide](DEPLOYMENT.md)**: Deployment and environment setup
- **[Contact Setup](CONTACT_SETUP.md)**: Contact form integration setup
- **[Social API Setup](SOCIAL_API_SETUP.md)**: Social media API configuration
- **[Project Roadmap](TODO.md)**: Current tasks and future enhancements

## 🔄 Recent Updates

**Latest Changes:**
- Enhanced contact form with dual integration system
- Improved glassmorphism design system
- Added comprehensive error handling and validation
- Optimized mobile responsive design
- Implemented structured data for SEO
- Added Vercel Analytics and Speed Insights

**Known Issues:**
- Instagram feed integration needs improvement (see TODO.md)
- Some glassmorphism effects may not render in older browsers

---

**Last Updated**: November 2024  
**Version**: 1.0.0  
**Framework**: Next.js 14.2.30  
**Node.js**: 18.17+ required  
**Maintainer**: Development Team