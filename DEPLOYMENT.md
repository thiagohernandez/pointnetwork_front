# Deployment Guide for cPanel

This guide explains how to deploy and rebuild the Next.js app on your cPanel server.

## Prerequisites

- SSH access to your cPanel server
- Node.js installed on the server (check cPanel's Node.js manager)
- FTP/SFTP credentials

## Deployment Steps

### 1. Upload Files via FTP

Upload all files to your cPanel directory (usually `public_html` or a subdirectory).

**Important**: Do NOT upload the following:
- `node_modules/` folder (too large, will be installed on server)
- `.next/` folder (will be built on server)
- `.git/` folder (optional, but recommended to exclude)

### 2. Connect via SSH

```bash
ssh your_username@your_domain.com
```

Or use cPanel's Terminal feature.

### 3. Navigate to Your App Directory

```bash
cd ~/public_html/your_app_folder
# Or wherever you uploaded the files
```

### 4. Set Up Environment Variables

Create a `.env.production` file on the server:

```bash
nano .env.production
```

Add your production environment variables:

```env
# PayloadCMS Configuration
PAYLOAD_SECRET=your-production-secret-key
DATABASE_URI=mongodb+srv://blog_db:BjjHufpUsOaRv9ot@clusterblog.hj0kuey.mongodb.net/pointnetwork-blog?retryWrites=true&w=majority&appName=ClusterBlog

# Next.js Configuration
NEXT_PUBLIC_PAYLOAD_URL=https://pointnetwork.com.br
NEXT_PUBLIC_SITE_URL=https://pointnetwork.com.br

# SMTP Email Configuration
SMTP_HOST=mail.pointnetwork.com.br
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contato@pointnetwork.com.br
SMTP_PASSWORD=Point@2011!
```

**Important**: Change `NEXT_PUBLIC_PAYLOAD_URL` to your production domain!

Save with `Ctrl+O`, then `Enter`, then `Ctrl+X` to exit.

### 5. Install Dependencies

```bash
npm install --production
```

Or if you need dev dependencies for building:

```bash
npm install
```

### 6. Build the Application

```bash
npm run build
```

This will create the optimized production build in `.next/` folder.

### 7. Start/Restart the Application

**Option A: Using cPanel Node.js Manager**
1. Go to cPanel → Software → Setup Node.js App
2. Find your application
3. Click "Restart" or "Start"

**Option B: Using PM2 (if installed)**
```bash
pm2 restart pointnetwork_frontend
# Or
pm2 start app.js --name pointnetwork_frontend
```

**Option C: Manual Start**
```bash
NODE_ENV=production node app.js
```

### 8. Verify Deployment

Visit your website: https://pointnetwork.com.br

Check the blog post page: https://pointnetwork.com.br/blog/introducao-ao-software-de-gestao-condominial/

## Quick Rebuild Script

After uploading files via FTP, run this one-liner on the server:

```bash
npm install && npm run build && pm2 restart pointnetwork_frontend
```

Or if using cPanel's Node.js manager, just run:

```bash
npm install && npm run build
```

Then restart via cPanel interface.

## Common Issues

### Issue: "Module not found" errors
**Solution**: Make sure you ran `npm install` on the server

### Issue: App shows old content
**Solution**:
1. Clear the `.next/` folder: `rm -rf .next`
2. Rebuild: `npm run build`
3. Restart the app

### Issue: Environment variables not working
**Solution**:
1. Check `.env.production` exists and has correct values
2. Restart the Node.js app after changing env vars
3. Make sure `NEXT_PUBLIC_*` variables are set correctly

### Issue: Port conflicts
**Solution**: cPanel/Passenger automatically sets the PORT environment variable. The `app.js` file handles this automatically.

## Automated Deployment (Optional)

For easier deployments, consider:
1. Using Git on the server and pulling changes
2. Setting up a deployment script
3. Using PM2 for process management

## Notes

- The app runs on the port set by cPanel (usually via Passenger)
- Make sure MongoDB connection string is accessible from your server
- SMTP settings must allow connections from your server IP
- Build process may take 2-5 minutes depending on server resources
