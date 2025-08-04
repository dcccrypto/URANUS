# 🚀 Uranus Analytics Dashboard - Vercel Deployment Guide

## 📋 Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to `dcccrypto/URANUS` on the `main` branch
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Node.js**: Version 14 or higher

## 🛠️ Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository: `dcccrypto/URANUS`
   - Select the `main` branch

2. **Configure Project**
   - **Framework Preset**: Node.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `./` (default)
   - **Install Command**: `npm install`

3. **Environment Variables** (Optional)
   - Add any API keys if needed in the Environment Variables section

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your dashboard will be live at the provided URL

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
URANUS/
├── index.html          # Main dashboard page
├── styles.css          # Dashboard styling
├── script.js           # Frontend JavaScript
├── server.js           # Express.js server
├── package.json        # Node.js dependencies
├── vercel.json         # Vercel configuration
└── deploy.sh           # Deployment script
```

## 🔧 Configuration Files

### `vercel.json`
- Routes all requests to `server.js`
- Handles both static files and API routes
- No build step required

### `package.json`
- Includes valid `build` script
- All dependencies properly listed
- Compatible with Vercel's Node.js runtime

## 🌐 Features After Deployment

✅ **Static File Serving**: `index.html`, `styles.css`, `script.js`  
✅ **API Routes**: `/api/dashboard-data`  
✅ **Real-time Data**: Solana Tracker API integration  
✅ **Community Metrics**: Twitter API integration  
✅ **Responsive Design**: Works on all devices  
✅ **No 404 Errors**: All assets resolve properly  

## 🔍 Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure `package.json` has valid `build` script
   - Check all dependencies are listed

2. **404 Errors**
   - Verify `vercel.json` routes are correct
   - Ensure static files are in root directory

3. **API Errors**
   - Check environment variables if using API keys
   - Verify server.js exports app correctly

### Debug Commands

```bash
# Test locally
npm run dev

# Check Vercel deployment
vercel ls

# View deployment logs
vercel logs
```

## 🎯 Success Criteria

After deployment, your dashboard should:

- ✅ Load without errors
- ✅ Display all static assets (CSS, JS)
- ✅ Show real-time blockchain data
- ✅ Display community metrics
- ✅ Work on mobile and desktop
- ✅ Have no 404 errors

## 📞 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Verify all files are committed to GitHub
3. Ensure `main` branch is up to date
4. Contact Vercel support if needed

---

**Ready to deploy!** 🚀 