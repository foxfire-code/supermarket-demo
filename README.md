# SuperMarket Demo - Modern E-Commerce Website

A fully functional, responsive e-commerce supermarket website built with React, Vite, and Tailwind CSS. Features product catalog, shopping cart, user authentication, and WhatsApp order integration.

## Features

✅ **Product Catalog**
- Browse 14+ demo products across 3 categories
- Product search and filtering by category
- Detailed product pages with customer reviews
- Realistic ratings (not all 5 stars)

✅ **Shopping Cart**
- Add/remove products
- Quantity management
- Cart persistence with localStorage
- Real-time cart count

✅ **User Authentication**
- User registration and login
- Session persistence
- Protected checkout
- Demo account: demo@example.com / 123456

✅ **Checkout System**
- Multi-step checkout process
- Order summary and calculations
- Tax and delivery fee calculation
- **WhatsApp Order Integration** - Send orders directly via WhatsApp

✅ **Mobile Responsive**
- Fully responsive design
- Mobile-first approach
- Works seamlessly on all devices

✅ **Additional Features**
- Customer reviews section
- Featured products on home page
- About and contact pages
- 24/7 customer support links
- Fast UI with Vite

## Project Structure

```
supermarket-demo/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── ReviewCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── data/
│   │   ├── products.js
│   │   └── reviews.js
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/supermarket-demo.git
cd supermarket-demo
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file** (copy from .env.example)
```bash
cp .env.example .env
```

4. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Demo Account
- **Email:** demo@example.com
- **Password:** 123456

## Deployment

### Deploy to Render (Recommended for Backend)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/supermarket-demo.git
git push -u origin main
```

2. **Create Render Account**
- Go to [render.com](https://render.com)
- Sign up and connect your GitHub

3. **Create Static Site**
- Click "New +" → "Static Site"
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`
- Click "Create Static Site"

4. **Environment Variables** (in Render Dashboard)
- Go to Settings
- Add environment variables from `.env.example`
- Example:
  ```
  VITE_WHATSAPP_NUMBER=09162123734
  VITE_STORE_NAME=SuperMarket Demo
  ```

5. **Deploy**
- Render will auto-deploy on git push
- Your site will be live at `https://your-site.onrender.com`

### Deploy to Vercel (Alternative)

1. **Sign up at Vercel**
- Go to [vercel.com](https://vercel.com)

2. **Import Project**
- Click "Import Project"
- Select your GitHub repository
- Click "Import"

3. **Configure**
- Framework: Vite
- Root Directory: ./
- Build Command: `npm run build`
- Output Directory: `dist`

4. **Add Environment Variables**
- Go to Settings → Environment Variables
- Add variables from `.env.example`

5. **Deploy**
- Vercel will auto-deploy
- Your site URL will be shown immediately

### Deploy to GitHub Pages

1. **Update vite.config.js**
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

2. **Update package.json scripts**
```json
"scripts": {
  "deploy": "npm run build && git add . && git commit -m 'Deploy' && git push"
}
```

3. **Enable GitHub Pages**
- Go to Settings → Pages
- Select branch: main
- Select folder: /docs
- Save

## WhatsApp Integration

The checkout page integrates WhatsApp directly:

1. **Configure Phone Number**
   - Edit `VITE_WHATSAPP_NUMBER` in `.env` file
   - Default: 09162123734

2. **How It Works**
   - Customer completes checkout form
   - Click "Place Order via WhatsApp"
   - Pre-filled message sent to WhatsApp with:
     - List of ordered items
     - Total price
     - Delivery address
   - Customer can confirm order in WhatsApp

3. **Format**
```
https://wa.me/PHONENUMBER?text=MESSAGE
```

## Authentication System

- **Registration:** New users can create account with email/password
- **Login:** Users authenticate with email/password
- **Persistence:** User session stored in localStorage
- **Protected Routes:** Checkout requires login

## Cart System

- **localStorage Persistence:** Cart survives page reload
- **Real-time Updates:** Cart count updates instantly
- **Quantity Management:** Add/remove/modify quantities
- **Calculation:** Automatic subtotal, tax, and total

## Product Data

All products are stored as mock data in `src/data/products.js`:
- 14 products across 3 categories
- Real product images from Unsplash
- Realistic pricing in Nigerian Naira (₦)
- Stock levels and ratings

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Performance Features

- ⚡ Vite for instant HMR (Hot Module Replacement)
- 🎨 Tailwind CSS for optimized CSS
- 📦 Code splitting and lazy loading
- 🔍 SEO-friendly meta tags
- 📱 Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### WhatsApp Not Opening
- Ensure phone number format is correct: 09162123734 (without +)
- Check browser allows pop-ups

### Deployment Issues
- Ensure all environment variables are set
- Check build succeeds locally: `npm run build`
- Clear browser cache

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **localStorage** - Client-side storage

## Demo Accounts

| Email | Password | Purpose |
|-------|----------|---------|
| demo@example.com | 123456 | Testing checkout |

## Future Enhancements

- 🗄️ Backend API integration
- 💳 Payment gateway (Paystack, Flutterwave)
- 📦 Real order tracking
- ⭐ User reviews and ratings
- 🔔 Order notifications
- 📧 Email confirmations
- 🎯 Recommendation engine
- 📊 Admin dashboard

## License

MIT License - Feel free to use this project for personal or commercial purposes

## Support

For issues or questions:
- WhatsApp: +234 916 212 3734
- Email: info@supermarket.com

## Getting Help

- Check the [Vite docs](https://vitejs.dev)
- Check the [React docs](https://react.dev)
- Check the [Tailwind docs](https://tailwindcss.com)

---

**Made with ❤️ for modern e-commerce**
