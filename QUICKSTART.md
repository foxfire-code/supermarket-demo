# Quick Start Guide - SuperMarket Demo

## For Spicy's Setup (Termux/Android)

### Step 1: Download & Extract Project
```bash
# Download all files from /mnt/user-data/outputs/
# Extract to your Termux working directory
cd ~/supermarket-demo
```

### Step 2: Install Dependencies
```bash
npm install
```

**Note:** This might take 5-10 minutes on your phone. Be patient.

### Step 3: Test Locally
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to test.

---

## Deploy to Render (Recommended)

### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial supermarket demo commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/supermarket-demo.git
git push -u origin main
```

### Step 2: Connect to Render

1. Go to **https://render.com**
2. Sign up with GitHub
3. Click **New +** → **Static Site**
4. Select your `supermarket-demo` repository
5. Fill in:
   - **Name:** supermarket-demo
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

### Step 3: Add Environment Variables

In Render Dashboard:
1. Go to your site's **Settings**
2. Click **Environment**
3. Add:
   ```
   VITE_WHATSAPP_NUMBER=09162123734
   VITE_STORE_NAME=SuperMarket Demo
   ```
4. Save

### Step 4: Deploy

Click **Deploy**. Wait 2-3 minutes. Your site will be live at:
```
https://supermarket-demo.onrender.com
```

---

## Verify Deployment

- ✅ Homepage loads
- ✅ Products page works
- ✅ Can search/filter products
- ✅ Cart works (check localStorage)
- ✅ Can create account
- ✅ WhatsApp button on checkout

---

## Troubleshooting

### Build Fails
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build  # Test locally first
```

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Environment Variables Not Working
- Reload the page
- Check variable names in render.yaml match .env

### WhatsApp Link Not Opening
- Check phone number is correct: `09162123734`
- No `+` prefix needed
- Try opening manually: `https://wa.me/09162123734?text=test`

---

## File Structure for Reference

```
supermarket-demo/
├── src/
│   ├── components/      (6 reusable components)
│   ├── pages/          (7 pages: Home, Products, etc)
│   ├── context/        (Auth + Cart context)
│   ├── data/           (Mock products & reviews)
│   └── utils/          (API helpers)
├── package.json        (Dependencies)
├── vite.config.js      (Vite config)
├── tailwind.config.js  (Styling)
└── README.md           (Full docs)
```

---

## Next Steps

1. **Customize:**
   - Change WhatsApp number in `.env`
   - Add your logo/brand name
   - Update store info in Footer

2. **Add Real Products:**
   - Edit `src/data/products.js`
   - Replace demo data with your actual products

3. **Connect Backend:**
   - Set up API in `src/utils/api.js`
   - Replace mock data with real endpoints

4. **Marketing:**
   - Share deployed URL
   - Add to social media
   - Get customer feedback

---

## Demo Credentials

**Test Account:**
- Email: demo@example.com
- Password: 123456

**Test WhatsApp Number:**
- 09162123734 (receive test messages here)

---

## Need Help?

- Read full README.md for detailed docs
- Check Vite docs: https://vitejs.dev
- Check React Router docs: https://reactrouter.com
- Check Tailwind docs: https://tailwindcss.com

**Your site is now deployment-ready!** 🚀
