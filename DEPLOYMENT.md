# Deployment Guide

## Vercel Deployment

### Initial Setup

1. **Connect Repository**
   - Link GitHub repository to Vercel
   - Enable automatic deployments from main branch

2. **Environment Variables**
   
   Configure in Vercel Dashboard → Project Settings → Environment Variables:
   
   ```
   NOTION_TOKEN=secret_xxxxxxxxxxxxx
   NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

3. **Domain Configuration**
   - Primary domain: `lukefornieri.com.au`
   - SSL certificate: Auto-managed by Vercel

### Build Configuration

The project uses the default Next.js build configuration:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Deployment Process

1. **Automatic Deployments**
   - Push to `main` branch triggers production deployment
   - Pull requests create preview deployments

2. **Build Steps**
   ```bash
   npm install
   npm run build
   ```

3. **Post-Deployment**
   - Vercel Analytics automatically enabled
   - Speed Insights data collection starts

### Environment-Specific Configurations

#### Production
- Full contact form integration
- Analytics tracking enabled
- Optimized asset delivery via Vercel CDN

#### Preview
- Same as production but with preview URLs
- Useful for testing before merging

### Monitoring

- **Build Logs**: Available in Vercel dashboard
- **Runtime Logs**: Function execution logs for API routes
- **Analytics**: Real-time visitor and performance data

### Troubleshooting

#### Common Issues

1. **Build Failures**
   - Check TypeScript errors
   - Verify all dependencies are installed
   - Review build logs in Vercel dashboard

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly
   - Redeploy after adding new variables

3. **API Route Issues**
   - Check function logs in Vercel dashboard
   - Verify external API credentials
   - Test API endpoints locally first

#### Performance Optimization

- Images automatically optimized by Next.js
- CSS and JS automatically minified
- Gzip compression enabled by default
- CDN caching for static assets