"use client";

import { useCallback, useMemo } from 'react';
import { useCart } from "@/context/Cart";
import { useRouter } from 'next/navigation';
import CartItem from "@/components/CartItem/page";

const Page = () => {
  const router = useRouter();
  const { product, setProduct, addToCart, setAddToCart, quantity, setQuantity } = useCart();

  const finalPrice = useMemo(() => {
    return product.reduce((total, item) => total + (item.price * quantity[item.id]), 0);
  }, [product, quantity]);

  const totalPrice = useMemo(() => {
    return product.reduce((total, item) => total + ((item?.price / (1 - item?.discountPercentage / 100)) * quantity[item.id]), 0);
  }, [product, quantity]);

  const totalQuantity = useMemo(() => {
    return Object.values(quantity).reduce((total, item) => total + item, 0);
  }, [product, quantity]);

  const removeCartItem = useCallback((id) => {
    const filteredIndex = addToCart.filter((productId) => productId !== id);
    const filteredItem = product.filter((prod) => prod.id !== id);
    const updatedQuantity = { ...quantity };
    delete updatedQuantity[id];

    // Update state
    setAddToCart([...filteredIndex]);
    setProduct([...filteredItem]);
    setQuantity(updatedQuantity);
  }, [addToCart, product, quantity, setAddToCart, setProduct, setQuantity]);

  return (
    <>
      {product && product.length > 0 ? (
        <div className="container mx-auto py-12 px-4 lg:px-24 bg-gray-900">
          <h1 className="text-4xl font-extrabold text-blue-400 mb-8">
            Shopping Cart
          </h1>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              {product.map((item, index) => (
                <CartItem item={item} key={item.id} removeCartItem={removeCartItem} />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Summary</h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Price {"("}{totalQuantity}{")"}</span>
                <span className="text-white font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span className="text-green-400 font-semibold">
                  -${(totalPrice - finalPrice).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Shipping</span>
                <span className="text-white font-semibold">$5.99</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Tax</span>
                <span className="text-white font-semibold">$3.50</span>
              </div>
              <hr className="mb-6 border-gray-700" />
              <div className="flex justify-between text-2xl font-bold text-white">
                <span>Total</span>
                <span>${(finalPrice + 5.99 + 3.5).toFixed(2)}</span>
              </div>
              <button className="w-full mt-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 h-lvh flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold text-center text-gray-400">
            Your cart is Empty!
          </h2>
          <button className="mt-8 py-4 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300" onClick={() => router.push('/')}>
            Go to Homepage
          </button>
        </div>
      )}
    </>
  );
};

export default Page;
