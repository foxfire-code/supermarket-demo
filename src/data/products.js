export const products = [
  { id: 1, name: 'Organic Tomatoes', category: 'Groceries', price: 450, image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?w=400&h=400&fit=crop', description: 'Fresh organic tomatoes from local farms', stock: 25, rating: 4.5 },
  { id: 2, name: 'Whole Wheat Bread', category: 'Groceries', price: 280, image: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?w=400&h=400&fit=crop', description: 'Freshly baked whole wheat bread', stock: 15, rating: 4.2 },
  { id: 3, name: 'Milk 1L', category: 'Groceries', price: 220, image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?w=400&h=400&fit=crop', description: 'Fresh pasteurized milk', stock: 30, rating: 4.8 },
  { id: 4, name: 'Organic Eggs (12)', category: 'Groceries', price: 350, image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?w=400&h=400&fit=crop', description: 'Organic free-range eggs', stock: 20, rating: 4.6 },
  { id: 5, name: 'Fresh Spinach', category: 'Groceries', price: 180, image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?w=400&h=400&fit=crop', description: 'Crisp fresh spinach leaves', stock: 18, rating: 3.9 },
  { id: 6, name: 'USB-C Cable', category: 'Electronics', price: 550, image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?w=400&h=400&fit=crop', description: 'Durable 2m USB-C charging cable', stock: 40, rating: 4.4 },
  { id: 7, name: 'Power Bank 20000mAh', category: 'Electronics', price: 3500, image: 'https://images.pexels.com/photos/9793197/pexels-photo-9793197.jpeg?w=400&h=400&fit=crop', description: 'Fast charging power bank with dual ports', stock: 12, rating: 4.3 },
  { id: 8, name: 'Wireless Earbuds', category: 'Electronics', price: 4200, image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?w=400&h=400&fit=crop', description: 'Bluetooth 5.0 wireless earbuds with case', stock: 8, rating: 3.8 },
  { id: 9, name: 'Screen Protector', category: 'Electronics', price: 350, image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?w=400&h=400&fit=crop', description: 'Tempered glass screen protector for phones', stock: 50, rating: 4.1 },
  { id: 10, name: 'Bed Sheets Set', category: 'Home Goods', price: 2500, image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?w=400&h=400&fit=crop', description: 'Soft cotton bed sheets set (Queen)', stock: 10, rating: 4.7 },
  { id: 11, name: 'Stainless Steel Pot', category: 'Home Goods', price: 3800, image: 'https://images.pexels.com/photos/6035337/pexels-photo-6035337.jpeg?w=400&h=400&fit=crop', description: 'Durable 5L stainless steel cooking pot', stock: 7, rating: 4.5 },
  { id: 12, name: 'Ceramic Mug Set', category: 'Home Goods', price: 1200, image: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?w=400&h=400&fit=crop', description: 'Set of 4 ceramic coffee mugs', stock: 25, rating: 3.7 },
  { id: 13, name: 'Kitchen Knife', category: 'Home Goods', price: 2200, image: 'https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?w=400&h=400&fit=crop', description: 'Professional 8-inch chef knife', stock: 9, rating: 4.6 },
  { id: 14, name: 'Pillowcase (2pack)', category: 'Home Goods', price: 800, image: 'https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg?w=400&h=400&fit=crop', description: 'Soft cotton pillowcases', stock: 32, rating: 4.2 },
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
