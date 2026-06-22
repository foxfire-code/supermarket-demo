import { products } from '../data/products';

export const api = {
  // Simulate API delay
  delay: (ms = 300) => new Promise(resolve => setTimeout(resolve, ms)),

  // Product endpoints
  getProducts: async () => {
    await api.delay();
    return { data: products };
  },

  getProductById: async (id) => {
    await api.delay();
    const product = products.find(p => p.id === parseInt(id));
    if (!product) throw new Error('Product not found');
    return { data: product };
  },

  searchProducts: async (query) => {
    await api.delay();
    const results = products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
    return { data: results };
  },

  // Order endpoint (mock - in real app, this would save to database)
  submitOrder: async (orderData) => {
    await api.delay(500);
    const order = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      createdAt: new Date().toISOString(),
    };
    // In production, this would save to backend
    localStorage.setItem(`order-${order.id}`, JSON.stringify(order));
    return { data: order };
  },

  // WhatsApp message helper
  getWhatsAppLink: (phoneNumber, orderData) => {
    const message = `Hello! I'd like to place an order:\n\n${orderData.items
      .map(item => `- ${item.name} x${item.quantity} = ₦${item.price * item.quantity}`)
      .join('\n')}\n\nTotal: ₦${orderData.total}\n\nDelivery Address: ${orderData.deliveryAddress}`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  },
};
