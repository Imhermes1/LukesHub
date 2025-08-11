# Development Guide

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later
- Git
- VSCode (recommended)

### Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   
2. **Open Browser**
   Navigate to `http://localhost:3000`

3. **Hot Reload**
   Changes to files automatically refresh the browser

### Code Structure

#### Component Architecture

```
app/components/
├── Header.tsx          # Navigation with mobile menu
├── Hero.tsx           # Video background hero section
├── CareerHighlights.tsx # Property showcase grid
├── Services.tsx       # Services grid with embedded video
├── About.tsx          # About section with photo
├── Testimonials.tsx   # Client testimonials grid
├── MediaCoverage.tsx  # Media logos and links
├── Social.tsx         # Social media integration
├── Contact.tsx        # Contact form with validation
├── PropertyModal.tsx  # Property detail modal
└── Footer.tsx         # Site footer
```

#### Styling Approach

- **CSS Variables**: Defined in `globals.css` for consistent theming
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Responsive Design**: Mobile-first with CSS Grid and Flexbox
- **Dark Theme**: Primary design with light theme fallbacks

#### State Management

- **React Hooks**: useState, useEffect for component state
- **Form State**: Controlled components with validation
- **Modal State**: Global modal state passed via props

### API Development

#### Contact Form Endpoint

Location: `app/api/contact/route.ts`

**Request Format:**
```typescript
{
  name: string;
  email: string;
  phone?: string;
  contactMethod: 'email' | 'phone' | 'either';
  message: string;
}
```

**Response Format:**
```typescript
{
  success: boolean;
  message: string;
  integrations: {
    notion: boolean;
    email: boolean;
  }
}
```

#### Integration Testing

Test contact form locally:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0400000000",
    "contactMethod": "email",
    "message": "Test message"
  }'
```

### Component Development

#### Creating New Components

1. **File Structure**
   ```typescript
   // app/components/NewComponent.tsx
   export default function NewComponent() {
     return (
       <section id="new-component" className="section">
         <div className="container">
           {/* Component content */}
         </div>
       </section>
     );
   }
   ```

2. **Styling Conventions**
   - Use semantic class names
   - Follow BEM methodology where appropriate
   - Utilize CSS variables for colors and spacing
   - Add hover states for interactive elements

3. **Accessibility**
   - Include proper ARIA labels
   - Use semantic HTML elements
   - Ensure keyboard navigation
   - Test with screen readers

#### Glassmorphism Components

Standard glassmorphism card:

```css
.glass-card {
  background: var(--glass-bg-light);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

### Performance Optimization

#### Image Optimization

- Use Next.js `Image` component for automatic optimization
- Provide appropriate `alt` text for accessibility
- Use `priority` prop for above-the-fold images

#### Video Optimization

```typescript
// Hero video configuration
<video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  style={{ filter: 'grayscale(1)' }}
  onLoadedMetadata={() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5; // Start at 5 seconds
      videoRef.current.playbackRate = 0.6; // Slow playback
    }
  }}
/>
```

#### CSS Performance

- Use CSS custom properties for dynamic values
- Minimize CSS-in-JS usage
- Leverage CSS Grid and Flexbox for layouts
- Use `transform` and `opacity` for animations

### Testing

#### Manual Testing

1. **Responsive Design**
   - Test on mobile, tablet, and desktop
   - Use browser dev tools device simulation
   - Check touch interactions on mobile

2. **Form Functionality**
   - Test all validation scenarios
   - Verify success and error states
   - Check integration with Notion/Resend

3. **Performance**
   - Check Lighthouse scores
   - Monitor Core Web Vitals
   - Test on slow network connections

#### Browser Testing

- Chrome (primary development browser)
- Firefox
- Safari (especially for iOS compatibility)
- Edge

### Debugging

#### Common Issues

1. **Hydration Errors**
   - Ensure server and client render the same content
   - Use `useEffect` for client-only code
   - Check for mismatched HTML structure

2. **CSS Issues**
   - Use browser dev tools to inspect styles
   - Check CSS variable values
   - Verify backdrop-filter support

3. **API Issues**
   - Check Network tab in dev tools
   - Review server logs in terminal
   - Verify environment variables

#### Development Tools

- **React Developer Tools**: Browser extension for React debugging
- **Next.js DevTools**: Built-in development features
- **VSCode Extensions**: 
  - ES7+ React/Redux/React-Native snippets
  - Auto Rename Tag
  - Prettier - Code formatter

### Code Quality

#### TypeScript

- Use strict mode for type safety
- Define interfaces for component props
- Avoid `any` type usage
- Use proper return types for functions

#### Code Formatting

- Prettier configuration for consistent formatting
- ESLint for code quality rules
- Pre-commit hooks (if configured)

#### Git Workflow

1. Create feature branches from `main`
2. Make atomic commits with descriptive messages
3. Test thoroughly before pushing
4. Create pull requests for code review
5. Merge to `main` triggers deployment