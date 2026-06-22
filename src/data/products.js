export const products = [
  { id: 1, name: 'Organic Tomatoes', category: 'Groceries', price: 450, image: 'https://picsum.photos/seed/tomatoes/400/400', description: 'Fresh organic tomatoes from local farms', stock: 25, rating: 4.5 },
  { id: 2, name: 'Whole Wheat Bread', category: 'Groceries', price: 280, image: 'https://picsum.photos/seed/bread/400/400', description: 'Freshly baked whole wheat bread', stock: 15, rating: 4.2 },
  { id: 3, name: 'Milk 1L', category: 'Groceries', price: 220, image: 'https://picsum.photos/seed/milk/400/400', description: 'Fresh pasteurized milk', stock: 30, rating: 4.8 },
  { id: 4, name: 'Organic Eggs (12)', category: 'Groceries', price: 350, image: 'https://picsum.photos/seed/eggs/400/400', description: 'Organic free-range eggs', stock: 20, rating: 4.6 },
  { id: 5, name: 'Fresh Spinach', category: 'Groceries', price: 180, image: 'https://picsum.photos/seed/spinach/400/400', description: 'Crisp fresh spinach leaves', stock: 18, rating: 3.9 },
  { id: 6, name: 'USB-C Cable', category: 'Electronics', price: 550, image: 'https://picsum.photos/seed/usbcable/400/400', description: 'Durable 2m USB-C charging cable', stock: 40, rating: 4.4 },
  { id: 7, name: 'Power Bank 20000mAh', category: 'Electronics', price: 3500, image: 'https://picsum.photos/seed/powerbank/400/400', description: 'Fast charging power bank with dual ports', stock: 12, rating: 4.3 },
  { id: 8, name: 'Wireless Earbuds', category: 'Electronics', price: 4200, image: 'https://picsum.photos/seed/earbuds/400/400', description: 'Bluetooth 5.0 wireless earbuds with case', stock: 8, rating: 3.8 },
  { id: 9, name: 'Screen Protector', category: 'Electronics', price: 350, image: 'https://picsum.photos/seed/screenprotector/400/400', description: 'Tempered glass screen protector for phones', stock: 50, rating: 4.1 },
  { id: 10, name: 'Bed Sheets Set', category: 'Home Goods', price: 2500, image: 'https://picsum.photos/seed/bedsheets/400/400', description: 'Soft cotton bed sheets set (Queen)', stock: 10, rating: 4.7 },
  { id: 11, name: 'Stainless Steel Pot', category: 'Home Goods', price: 3800, image: 'https://picsum.photos/seed/pot/400/400', description: 'Durable 5L stainless steel cooking pot', stock: 7, rating: 4.5 },
  { id: 12, name: 'Ceramic Mug Set', category: 'Home Goods', price: 1200, image: 'https://picsum.photos/seed/mugs/400/400', description: 'Set of 4 ceramic coffee mugs', stock: 25, rating: 3.7 },
  { id: 13, name: 'Kitchen Knife', category: 'Home Goods', price: 2200, image: 'https://picsum.photos/seed/knife/400/400', description: 'Professional 8-inch chef knife', stock: 9, rating: 4.6 },
  { id: 14, name: 'Pillowcase (2pack)', category: 'Home Goods', price: 800, image: 'https://picsum.photos/seed/pillowcase/400/400', description: 'Soft cotton pillowcases', stock: 32, rating: 4.2 },
];

export const getProductsByCategory = (category) => {
  if (!category) return products;
  return products.filter(p => p.category === category);
};

export const searchProducts = (query) => {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const getCategories = () => {
  return [...new Set(products.map(p => p.category))];
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.rating >= 4.5).slice(0, 6);
};
