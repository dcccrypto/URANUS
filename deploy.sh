#!/bin/bash

echo "🚀 Deploying Uranus Analytics Dashboard to Vercel..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your dashboard is now live on Vercel!" 