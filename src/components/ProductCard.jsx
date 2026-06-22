import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please register or login to add items to cart!');
      navigate('/login');
      return;
    }
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden cursor-pointer h-full">
        <div className="relative overflow-hidden bg-gray-200 h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
          {product.stock < 10 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              Low Stock
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase font-semibold">{product.category}</p>
          <h3 className="font-bold text-lg mt-1 line-clamp-2">{product.name}</h3>
          <div className="flex items-center mt-2 space-x-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.rating})</span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
          </div>
          <p className="text-xs text-gray-600 mt-2">{product.stock} in stock</p>
          <button
            onClick={handleAddToCart}
            className="w-full mt-4 bg-accent text-white py-2 rounded hover:bg-red-600 transition flex items-center justify-center space-x-2 font-semibold"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
