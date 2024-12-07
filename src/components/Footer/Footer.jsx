// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
   
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a leading e-commerce store bringing you the latest in fashion, electronics, and more.
          </p>
        </div>

    
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-4">Email: support@ecommerce.com</p>
          <p className="text-gray-400 mb-6">Phone: +1 (123) 456-7890</p>

          {/* <div className="flex space-x-4 flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <span className="material-icons text-2xl text-gray-400 hover:text-white">facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <span className="material-icons text-2xl text-gray-400 hover:text-white">twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="material-icons text-2xl text-gray-400 hover:text-white">instagram</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <span className="material-icons text-2xl text-gray-400 hover:text-white">linkedin</span>
            </a>
          </div> */}
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 px-4">
        &copy; {new Date().getFullYear()} E-commerce Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
