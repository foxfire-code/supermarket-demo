# SuperMarket Demo - Complete Setup Guide for Spicy (Termux)

Omo, this guide breaks everything down step-by-step so you can get this working on your Infinix phone running Termux.

---

## ⚡ Before You Start

**Requirements:**
- Termux installed on Android phone
- Node.js 16+ (check with `node --version`)
- Git installed (check with `git --version`)
- GitHub account
- Render account (free)

**Storage Needed:**
- ~500MB for node_modules
- ~50MB for project files
- Make sure you have space

---

## 📥 Step 1: Download All Files

The files are in `/mnt/user-data/outputs/`. You need to copy them to your Termux working directory.

### Option A: Using GitHub (Recommended)

```bash
# In Termux
cd ~
git clone https://github.com/YOUR_USERNAME/supermarket-demo.git
cd supermarket-demo
```

### Option B: Manual Copy

```bash
# In Termux
mkdir ~/supermarket-demo
cd ~/supermarket-demo

# Copy all files here
# You'll need to transfer them from your computer or cloud storage
```

---

## 🔧 Step 2: Install Dependencies

This is the slowest step (5-10 minutes on 2GB RAM). **Be patient.**

```bash
cd ~/supermarket-demo
npm install
```

**If you hit RAM issues:**
```bash
# Increase available RAM by stopping background apps
# Or use this (slower but uses less RAM):
npm install --prefer-offline --no-audit
```

**If build fails:**
```bash
# Clear everything and retry
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 🧪 Step 3: Test Locally

Before deploying, test it works on your phone.

```bash
npm run dev
```

You'll see output like:
```
VITE v5.0.8 ready in 400 ms

➜  Local:   http://localhost:5173/
```

### Open in Browser:
1. Open any browser on your phone (Chrome, Firefox, etc)
2. Go to: `http://localhost:5173`
3. You should see the SuperMarket homepage

### Test Features:
- ✅ Click "Home" → see featured products
- ✅ Go to "Products" → search for "tomato" → should find it
- ✅ Filter by "Groceries" → should show only groceries
- ✅ Click "Login" → use demo@example.com / 123456
- ✅ Add a product to cart → cart count should increase
- ✅ Go to cart → should see items
- ✅ Clear cart when done

**To stop dev server:** Press `Ctrl + C`

---

## 🚀 Step 4: Deploy to Render

### 4.1 Push to GitHub

```bash
# In the supermarket-demo folder
git init
git add .
git commit -m "Initial supermarket demo commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/supermarket-demo.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 4.2 Create Render Account

1. Go to **https://render.com** in your phone browser
2. Click **Sign up with GitHub**
3. Authorize Render to access your GitHub

### 4.3 Create Static Site on Render

1. After logging in, click **New +**
2. Select **Static Site**
3. In the "Connect a repository" section, click **supermarket-demo**
4. Fill in settings:
   - **Name:** supermarket-demo
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site**

### 4.4 Wait for Build

Render will now build your site (takes 2-3 minutes):
- You'll see a log showing build progress
- Once it says "Deploy successful", your site is LIVE!
- Your URL will be: `https://supermarket-demo.onrender.com`

---

## 🌐 Step 5: Test Live Site

Open your browser and go to your Render URL:

```
https://supermarket-demo.onrender.com
```

Should work exactly like localhost:5173 but now it's LIVE on the internet!

**Test:**
- ✅ Load homepage
- ✅ Search products
- ✅ Try demo login (demo@example.com / 123456)
- ✅ Add to cart
- ✅ Go to checkout
- ✅ Click "Place Order via WhatsApp"
- ✅ WhatsApp should open with pre-filled message

---

## 📝 Step 6: Customize Your Store

Nah, you might want to change some things:

### Change WhatsApp Number

Edit `.env` file:
```bash
nano .env
```

Change this line:
```
VITE_WHATSAPP_NUMBER=09162123734
```

To your number (without + sign):
```
VITE_WHATSAPP_NUMBER=2349012345678
```

Save: `Ctrl + X` → `Y` → Enter

Then redeploy:
```bash
git add .
git commit -m "Update WhatsApp number"
git push origin main
```

Render will auto-redeploy in 2-3 minutes.

### Change Store Name

Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`:

```bash
nano src/components/Footer.jsx
```

Find and change "SuperMarket" to your store name.

### Add Your Products

Edit `src/data/products.js`:

```bash
nano src/data/products.js
```

Replace the products with yours:

```javascript
{
  id: 1,
  name: 'Your Product Name',
  category: 'Your Category',
  price: 5000,
  image: 'https://image-url.com/image.jpg',
  description: 'Product description',
  stock: 20,
  rating: 4.5,
}
```

---

## 🔄 Update Your Site

After making changes:

```bash
# Test locally first
npm run dev

# When satisfied, push to GitHub
git add .
git commit -m "Your changes description"
git push origin main

# Render will auto-deploy (2-3 min)
# Check your site is live
```

---

## 🐛 Troubleshooting

### Error: "npm not found"
```bash
# Node.js not installed in Termux
pkg install nodejs
```

### Error: "Permission denied"
```bash
# Fix permissions
chmod -R 755 supermarket-demo/
```

### Port 5173 Already in Use
```bash
# Use different port
npm run dev -- --port 3000
# Then open: http://localhost:3000
```

### Build Fails on Render
```bash
# Increase timeout and retry
npm run build  # Test locally first
git push origin main  # Push changes
```

### WhatsApp Link Not Working
```bash
# Check phone number format
# Should be: 09162123734
# NOT: +234916212374
```

### Cart Not Saving
```bash
# Clear localStorage
# Go to DevTools → Application → localStorage → Clear All
# Reload page
```

---

## 📊 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for deployment
npm run preview          # Test production build locally

# Git
git status              # Check what changed
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push origin main    # Push to GitHub
git log --oneline       # See commit history
```

---

## 🎯 What You Now Have

✅ **Full-featured e-commerce store**
- Product catalog with 14 demo products
- Search and filtering
- Shopping cart with persistence
- User authentication
- WhatsApp order integration
- Customer reviews
- Responsive mobile design

✅ **Production ready**
- Deployed on Render (free tier)
- Auto-deploys on git push
- HTTPS enabled
- Fast CDN delivery
- 99.9% uptime

✅ **Customizable**
- Easy to change colors/branding
- Easy to add new products
- Easy to modify WhatsApp number
- Easy to add more features

---

## 💡 Pro Tips

1. **Keep commits organized**
   ```bash
   git commit -m "feat: add new products"
   git commit -m "fix: WhatsApp link button"
   ```

2. **Test before pushing**
   ```bash
   npm run build  # Always test build
   npm run preview  # Check production build
   ```

3. **Use GitHub as backup**
   - All your code is automatically backed up
   - Easy to rollback if something breaks

4. **Monitor your site**
   - Check Render dashboard for errors
   - Watch for failed builds

5. **Share your URL**
   - `https://supermarket-demo.onrender.com`
   - Works on all devices
   - Share on WhatsApp, social media, etc

---

## 📱 Mobile Optimization

Your site is **fully responsive**:
- Works on phones ✓
- Works on tablets ✓
- Works on desktops ✓

No additional work needed. It just works!

---

## 🔐 Security Notes

This is a DEMO app:
- ❌ Passwords NOT actually secure
- ❌ Don't put real payment info
- ❌ Data stored only in localStorage

For production:
- ✅ Add backend authentication
- ✅ Use secure payment gateway
- ✅ Never store sensitive data locally

---

## 📞 WhatsApp Integration Details

When customer clicks "Place Order via WhatsApp":

1. Form data is validated
2. Order saved to localStorage
3. Pre-filled WhatsApp message created with:
   - List of products
   - Total price
   - Delivery address
4. WhatsApp app opens
5. Message shows in chat
6. Customer can customize and send

**Format:**
```
Hello! I'd like to place an order:

- Organic Tomatoes x2 = ₦900
- Whole Wheat Bread x1 = ₦280

Total: ₦1180

Delivery Address: 123 Main Street, Lagos
```

---

## ✅ Success Checklist

- [ ] Files downloaded
- [ ] npm install completed
- [ ] npm run dev works
- [ ] Tested features locally
- [ ] GitHub repo created
- [ ] Pushed to GitHub
- [ ] Render account created
- [ ] Site deployed on Render
- [ ] Tested live site
- [ ] Customized store name
- [ ] Updated WhatsApp number
- [ ] Shared URL with someone

**Once you check all boxes, you're DONE! 🎉**

---

## 🆘 Need Help?

1. **Check README.md** - Full documentation
2. **Check PROJECT_STRUCTURE.md** - File explanations
3. **Check QUICKSTART.md** - Fast deployment guide
4. **Check error messages** - They usually tell you what's wrong

---

## 🚀 You're Ready!

Your e-commerce site is now:
- ✅ Built and tested
- ✅ Deployed and live
- ✅ Accessible worldwide
- ✅ Mobile responsive
- ✅ Integration with WhatsApp
- ✅ Custom authentication
- ✅ Full shopping cart

**Congratulations! You've built a professional e-commerce website!**

Now go customize it, add your products, and start selling! 💪

---

**Questions? Problems? Double-check the docs!**

Made with ❤️ for ambitious developers like you.
