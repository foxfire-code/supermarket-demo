import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">🛒</div>
            <span>SuperMarket</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition">Home</Link>
            <Link to="/products" className="hover:text-accent transition">Products</Link>
            <Link to="/about" className="hover:text-accent transition">About</Link>
            <Link to="/contact" className="hover:text-accent transition">Contact</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <Link to="/cart" className="relative hover:text-accent transition">
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm">{user.fullName}</span>
                <button
                  onClick={handleLogout}
                  className="hover:text-accent transition"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-accent px-4 py-2 rounded hover:bg-red-600 transition">
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button md:hidden onClick={toggleMenu} className="md:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-accent transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="block py-2 hover:text-accent transition" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link to="/about" className="block py-2 hover:text-accent transition" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block py-2 hover:text-accent transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
