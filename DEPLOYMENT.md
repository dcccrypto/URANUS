# Vercel Deployment Guide

## Prerequisites
- Vercel account
- GitHub repository connected to Vercel

## Environment Variables Setup

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following environment variable:
   - **Name**: `HELIUS_API_KEY`
   - **Value**: `e568033d-06d6-49d1-ba90-b3564c91851b`
   - **Environment**: Production, Preview, Development

## Deployment Steps

1. **Push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Vercel will automatically deploy** when it detects the changes

3. **Verify the deployment**:
   - Check the Vercel dashboard for build status
   - Visit your deployed URL to ensure everything works

## Troubleshooting

### Build Errors
- Ensure `package.json` has a `build` script
- Check that all dependencies are properly installed
- Verify environment variables are set correctly

### API Issues
- Ensure the Helius API key is correctly set in Vercel environment variables
- Check that the API endpoints are accessible from Vercel's servers

### Static Files
- All HTML, CSS, and JS files should be served correctly
- The server.js file handles API routes
- Static files are served directly by Vercel

## File Structure
```
/
├── index.html          # Main dashboard page
├── styles.css          # Dashboard styling
├── script.js           # Dashboard functionality
├── server.js           # API server
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel configuration
├── .vercelignore       # Files to exclude from deployment
└── .env                # Local environment variables (not deployed)
```

## API Endpoints
- `/api/dashboard-data` - Returns mock dashboard data
- All other routes serve static files

## Notes
- The build script is minimal since this is primarily a static site
- The server.js file handles API routes for dynamic data
- Environment variables are automatically injected by Vercel 