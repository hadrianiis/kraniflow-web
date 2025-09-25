#!/bin/bash

echo "🔧 Fixing network access issues for Kranioflow..."

# Clean Next.js cache
echo "🧹 Cleaning Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Clean npm cache
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Reinstall dependencies
echo "📦 Reinstalling dependencies..."
npm install

# Build the project
echo "🏗️ Building project..."
npm run build

echo "✅ Build completed successfully!"
echo ""
echo "🚀 To test the fix:"
echo "1. Run: npm run start"
echo "2. Access via localhost:3000"
echo "3. Access via network IP (check terminal for network URL)"
echo ""
echo "🔍 If issues persist:"
echo "1. Check browser console for errors"
echo "2. Verify SVG files are accessible at /svgs/[filename].svg"
echo "3. Clear browser cache completely"
