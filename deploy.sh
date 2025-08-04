#!/bin/bash

echo "🚀 Deploying Uranus Analytics Dashboard to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "📦 Deploying project..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your dashboard should be live at the URL provided above" 