import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-light py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About SuperMarket</h1>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SuperMarket started with a simple mission: to make quality shopping accessible and convenient for everyone. 
            We believe that shopping should be easy, transparent, and rewarding.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we're proud to serve thousands of customers across Nigeria, delivering fresh groceries, 
            quality electronics, and essential home goods directly to their doors.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Target className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality products at competitive prices with exceptional customer service.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Customer First</h3>
            <p className="text-gray-600">
              Every decision we make is centered on making your shopping experience better.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Quality Promise</h3>
            <p className="text-gray-600">
              We verify every product to ensure you get only the best quality items.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Wide selection of quality products from trusted brands</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Fast and reliable delivery within 24 hours in Lagos</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Competitive prices and regular discounts</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Easy returns and customer satisfaction guarantee</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>24/7 customer support via WhatsApp and email</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Secure payment options for your peace of mind</span>
            </li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-primary text-white rounded-lg p-8">
          <div className="text-center">
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">1000+</p>
            <p className="text-gray-300">Products</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">24hr</p>
            <p className="text-gray-300">Delivery Time</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">4.8★</p>
            <p className="text-gray-300">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
