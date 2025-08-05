# 🚀 Vercel Deployment Guide for Uranus Analytics Dashboard

## 📋 **Prerequisites**

1. **Node.js** (v16 or higher)
2. **npm** or **yarn**
3. **Vercel CLI** (optional, for local deployment)
4. **GitHub account** (for GitHub integration)

## 🔧 **Step 1: Install Dependencies**

```bash
npm install
```

## 🔧 **Step 2: Environment Variables**

Create a `.env.local` file in your project root:

```bash
SOLANA_TRACKER_API_KEY=dc86d4a1-3eb1-4174-9b0e-7134c77e9d35
CONTRACT_ADDRESS=BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups
```

## 🚀 **Step 3: Deploy to Vercel**

### **Option A: GitHub Integration (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings
   - Add environment variables:
     - `SOLANA_TRACKER_API_KEY`: `dc86d4a1-3eb1-4174-9b0e-7134c77e9d35`
     - `CONTRACT_ADDRESS`: `BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### **Option B: Vercel CLI**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## ⚙️ **Configuration Details**

### **Build Settings (Auto-detected by Vercel)**
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### **Environment Variables**
```bash
SOLANA_TRACKER_API_KEY=dc86d4a1-3eb1-4174-9b0e-7134c77e9d35
CONTRACT_ADDRESS=BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups
```

### **API Routes**
- `/api/dashboard-data` - Main dashboard data
- `/api/chart-data` - Chart data
- `/api/health` - Health check

## 🔍 **Post-Deployment Verification**

1. **Check Build Logs**
   - Go to Vercel dashboard
   - Check deployment logs for any errors

2. **Test API Endpoints**
   ```bash
   curl https://your-app.vercel.app/api/health
   curl https://your-app.vercel.app/api/dashboard-data
   ```

3. **Verify Dashboard**
   - Visit your deployed URL
   - Check if all data loads correctly
   - Test refresh functionality

## 🛠️ **Troubleshooting**

### **Common Issues**

1. **Build Failures**
   ```bash
   # Check local build
   npm run build
   
   # Check for TypeScript errors
   npx tsc --noEmit
   ```

2. **API Errors**
   - Verify environment variables in Vercel dashboard
   - Check API rate limits
   - Review Vercel function logs

3. **Static Assets**
   - Ensure `styles.css` and `script.js` are in `public/` directory
   - Check file paths in Next.js pages

### **Performance Optimization**

1. **Enable Caching**
   ```javascript
   // In API routes
   res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
   ```

2. **Optimize Images**
   - Use Next.js Image component
   - Implement lazy loading

3. **Bundle Analysis**
   ```bash
   npm run build
   npx @next/bundle-analyzer
   ```

## 🔄 **Continuous Deployment**

### **Automatic Deployments**
- Every push to `main` branch triggers deployment
- Preview deployments for pull requests
- Automatic rollback on failures

### **Custom Domains**
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your custom domain
4. Configure DNS records

## 📊 **Monitoring**

### **Vercel Analytics**
- Built-in performance monitoring
- Real-time user analytics
- Error tracking

### **Custom Monitoring**
```javascript
// Add to your API routes
console.log('API call:', req.url, new Date().toISOString());
```

## 🚀 **Deployment Checklist**

- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured
- [ ] Build successful locally (`npm run build`)
- [ ] API routes working
- [ ] Static assets accessible
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up

## 🌐 **Live Dashboard**

Once deployed, your dashboard will be available at:
`https://your-app-name.vercel.app`

## 📞 **Support**

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: For project-specific issues

---

**🎉 Congratulations! Your Uranus Analytics Dashboard is now live on Vercel!** 