# SuperMarket Website - Simple Setup (No BS)

## Step 1: Download Files
Download everything from the outputs folder above. Put them in a folder called `supermarket-demo`

## Step 2: Install
```bash
cd supermarket-demo
npm install
```
(Wait 5-10 minutes, grab tea)

## Step 3: Test
```bash
npm run dev
```
Open browser: http://localhost:5173

You should see a working website. Try:
- Click "Products" → search "tomato"
- Click "Login" → use demo@example.com / 123456
- Add item to cart
- Click checkout → see WhatsApp button

If it works, you're done testing. Press Ctrl+C to stop.

## Step 4: Push to GitHub
```bash
git init
git add .
git commit -m "my supermarket"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/supermarket-demo.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 5: Deploy to Render
1. Go to render.com
2. Sign up with GitHub
3. Click "New +" → "Static Site"
4. Select supermarket-demo repo
5. Fill:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"
7. Wait 2 minutes
8. Your site is LIVE at the URL shown

Done. Website is online.

---

## That's It.

No more docs. No more guides. Just those 5 steps.

Questions? Your site is broken? Tell me what error you see.
