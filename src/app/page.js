"use client";
import Link from "next/link";
import { useCart } from "@/context/Cart";
import Card from "@/components/Card/page";
import useGetAllProduct from './../Hooks/useGetAllProduct';

export default function Home() {
  const limit = 12;
  const { addToCart } = useCart();
  const { productsList, isLoading, currentPage, nextPage, prevPage, totalProducts, skip } = useGetAllProduct(limit);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <div className="loader"></div>
          <span className="ml-4 text-xl text-blue-600 bg-gray-900">Loading...</span>
        </div>
      ) : (
        <>
          <div className="text-3xl font-bold text-white px-4 lg:px-24 py-6 bg-gray-900">
            Our Products
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-24 bg-gray-900">
            {productsList &&
              productsList.length > 0 &&
              productsList.map((item, index) => (
                <Card key={`${index}-${item?.id}`} item={item} isAdded={addToCart.includes(item?.id)} />
              ))}
          </div>
          <div className="flex justify-between px-4 lg:px-24 py-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {Math.ceil(totalProducts / limit)}
            </span>
            <button
              onClick={nextPage}
              disabled={skip + limit >= totalProducts}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
