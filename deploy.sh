#!/bin/bash

# Uranus Analytics Dashboard - Vercel Deployment Script
echo "🚀 Preparing Uranus Analytics Dashboard for Vercel deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project root."
    exit 1
fi

# Check if vercel.json exists
if [ ! -f "vercel.json" ]; then
    echo "❌ Error: vercel.json not found. Please ensure all deployment files are present."
    exit 1
fi

echo "✅ All files present and ready for deployment"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo "📊 Your Uranus Analytics Dashboard is now live!"
echo "🔗 Check your Vercel dashboard for the deployment URL" 