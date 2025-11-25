#!/bin/bash

# Deployment script for cPanel
# Run this script on your server after uploading files via FTP

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

# Step 2: Build the application
echo -e "${BLUE}🔨 Building Next.js application...${NC}"
npm run build

# Step 3: Check if PM2 is available
if command -v pm2 &> /dev/null; then
    echo -e "${BLUE}🔄 Restarting application with PM2...${NC}"

    # Check if app is already running
    if pm2 list | grep -q "pointnetwork_frontend"; then
        pm2 restart pointnetwork_frontend
    else
        pm2 start app.js --name pointnetwork_frontend
    fi

    pm2 save
    echo -e "${GREEN}✅ Application restarted with PM2${NC}"
else
    echo -e "${RED}⚠️  PM2 not found. Please restart manually via cPanel Node.js manager${NC}"
    echo -e "${BLUE}Or run: NODE_ENV=production node app.js${NC}"
fi

echo -e "${GREEN}✅ Deployment completed!${NC}"
echo -e "${BLUE}🌐 Visit your site: https://pointnetwork.com.br${NC}"
