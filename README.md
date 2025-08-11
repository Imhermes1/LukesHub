# Luke Fornieri - MAK REALTY Real Estate Website

A modern, responsive real estate website built with Next.js 14, featuring glassmorphism design, video backgrounds, and integrated contact management.

## 🏗️ Project Overview

This is a premium real estate website for Luke Fornieri at MAK REALTY, showcasing property sales, services, and client testimonials with a modern dark theme and glassmorphism effects.

### Key Features

- **Modern Design**: Glassmorphism UI with dark gradient backgrounds
- **Video Hero Section**: Autoplay video background with overlay effects
- **Property Showcase**: Interactive property cards with modal details
- **Contact Integration**: Notion database and email notifications via Resend
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Performance Optimized**: Vercel Analytics and Speed Insights integration
- **SEO Ready**: Structured data and meta tags for search optimization

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights
- **Contact Management**: Notion API + Resend Email API

## 📁 Project Structure

```
luke-real-estate-site/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── About.tsx             # About section component
│   │   ├── CareerHighlights.tsx  # Property showcase component
│   │   ├── Contact.tsx           # Contact form component
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Video hero section
│   │   ├── MediaCoverage.tsx     # Media logos and coverage
│   │   ├── PropertyModal.tsx     # Property detail modal
│   │   ├── Services.tsx          # Services grid with video
│   │   ├── Social.tsx            # Social media integration
│   │   └── Testimonials.tsx      # Client testimonials
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── public/
│   ├── images/                   # Property and brand images
│   └── videos/                   # Hero background videos
├── .vscode/
│   └── settings.json             # VSCode configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── vercel.json                   # Vercel deployment config
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
   # Notion Integration (Optional)
   NOTION_TOKEN=your_notion_integration_token
   NOTION_DATABASE_ID=your_notion_database_id
   
   # Email Notifications (Optional)
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

The website uses a modern dark theme with blue and purple accents:

- **Background**: Black to grey gradient (`#000000` → `#4a4a4a`)
- **Primary**: White (`#ffffff`)
- **Accent Blue**: `#3B82F6` (hover: `#2563EB`)
- **Accent Purple**: `#8B5CF6` (hover: `#7C3AED`)
- **Glass Effects**: Semi-transparent overlays with backdrop blur

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive Scaling**: CSS clamp() for fluid typography

### Components

#### Glassmorphism Cards
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and inner highlights
- Hover effects with color transitions

#### Navigation
- Sticky header with glass morphism
- Mobile hamburger menu with dropdown
- Smooth scroll to sections

#### Hero Section
- Full-screen video background
- Grayscale filter with slow playback
- Overlay gradients and glass effects

## 📧 Contact Form Integration

### Notion Database Integration

The contact form automatically saves submissions to a Notion database with the following properties:

- **Name** (Title)
- **Email** (Email)
- **Phone** (Phone Number)
- **Contact Method** (Select: email/phone/either)
- **Message** (Rich Text)
- **Status** (Select: New/Contacted/Closed)
- **Submitted** (Date)

### Email Notifications

Email notifications are sent via Resend API to `luke.f@makrealty.com.au` with:
- Formatted HTML email template
- All form submission details
- Australian timezone timestamp

### Error Handling

- Form validation for required fields and email format
- Graceful degradation if integrations are not configured
- User-friendly error messages
- Loading states during submission

## 🔧 Development Configuration

### VSCode Settings

The project includes VSCode configuration in `.vscode/settings.json`:

```json
{
    "typescript.autoClosingTags": false
}
```

This disables automatic closing tags for TypeScript files to prevent conflicts with JSX formatting.

### TypeScript Configuration

- **Target**: ES5 for broad browser compatibility
- **Module Resolution**: Bundler (Next.js optimized)
- **Strict Mode**: Enabled for type safety
- **Path Mapping**: `@/*` for root-relative imports

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

The site is configured for Vercel deployment with:

- **Framework**: Next.js auto-detection
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Environment Variables**: Set in Vercel dashboard

### Performance Monitoring

- **Vercel Analytics**: Page views and user interactions
- **Speed Insights**: Core Web Vitals monitoring
- **Image Optimization**: Next.js automatic optimization

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

- [ ] Contact form submission (with/without integrations)
- [ ] Navigation menu (desktop/mobile)
- [ ] Property modal functionality
- [ ] Video autoplay and controls
- [ ] Responsive design across devices
- [ ] Form validation and error states

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is private and proprietary to Luke Fornieri and MAK REALTY.

## 🤝 Contributing

This is a private project. For updates or modifications, please contact the development team.

---

**Last Updated**: November 2024  
**Version**: 1.0.0  
**Maintainer**: Development Team