import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shop Everything You Need
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Quality products, fast delivery, and unbeatable prices on groceries, electronics, and home goods.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                <span>Start Shopping</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl">🛍️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Truck className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your orders delivered within 24 hours in Lagos</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600">All products verified for quality before shipment</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-accent hover:underline font-semibold flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Browse our full catalog and start saving today
          </p>
          <Link
            to="/products"
            className="inline-block bg-accent px-8 py-3 rounded-lg font-bold hover:bg-red-600 transition"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
}
