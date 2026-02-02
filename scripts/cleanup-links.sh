#!/bin/bash
# Cleanup script to remove external links and prepare for deployment

echo "🧹 Cleaning up external links..."

# Remove external URLs from documentation files
find . -name "*.md" -type f ! -path "./node_modules/*" ! -path "./.next/*" -exec sed -i.bak \
  -e 's|https://clerk.com||g' \
  -e 's|https://github.com/[^/]*/||g' \
  -e 's|https://vercel.com||g' \
  -e 's|https://nextjs.org||g' \
  -e 's|https://react.dev||g' \
  -e 's|https://tailwindcss.com||g' \
  -e 's|https://developer.mozilla.org[^ ]*||g' \
  -e 's|https://railway.app||g' \
  -e 's|https://render.com||g' \
  -e 's|https://app.netlify.com||g' \
  -e 's|https://git-scm.com||g' \
  -e 's|http://localhost:3000||g' \
  {} \;

# Remove backup files
find . -name "*.md.bak" -type f ! -path "./node_modules/*" -delete

echo "✅ Cleanup complete!"
