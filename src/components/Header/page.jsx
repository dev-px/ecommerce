"use client";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { useCart } from '@/context/Cart';

const Navbar = () => {
  const { product } = useCart();

  return (
    <header className="w-full h-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg flex justify-between items-center px-6 border-b border-gray-800">
      <div className="text-2xl font-bold text-white tracking-widest">
        <Link href="/">
          <span className="cursor-pointer hover:text-blue-500 transition duration-300">LOGO</span>
        </Link>
      </div>
      <nav className="flex space-x-8 items-center text-white">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:text-blue-500 transition duration-300">
            <IoMdHome className="text-2xl" />
            <span className="text-xl">Home</span>
          </div>
        </Link>
        <Link href="/Cart">
          <div className="flex items-center space-x-2 cursor-pointer p-1.5 rounded-md hover:text-blue-500 transition duration-300 relative">
            <FaCartShopping className="text-2xl" />
            <span className="text-xl">Cart</span>
            {product.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {product.length}
              </span>
            )}
          </div>
        </Link>
        <div className="text-xl font-medium">
          Welcome, <span className="text-blue-500">Dev</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
