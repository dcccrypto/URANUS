#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Building Uranus Analytics Dashboard...');

// Check if all required files exist
const requiredFiles = [
  'index.html',
  'styles.css', 
  'script.js',
  'server.js'
];

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles);
  process.exit(1);
}

console.log('✅ All required files found');
console.log('✅ Static build completed successfully');

// Copy files to build output if needed
const buildDir = path.join(process.cwd(), '.vercel/output/static');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy static files
const staticFiles = ['index.html', 'styles.css', 'script.js'];
staticFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(buildDir, file));
    console.log(`📁 Copied ${file} to build output`);
  }
});

console.log('🎉 Build completed successfully!'); 