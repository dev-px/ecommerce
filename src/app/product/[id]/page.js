"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import useGetSingleProduct from "@/Hooks/useGetSingleProduct";
import { useCart } from '@/context/Cart';
import SkeletonLoading from "@/components/SkeletonLoading/page"
import AddCartButton from "@/components/AddCartButton/page"
import NoItem from "@/components/NoItem/page";

const Page = ({ params }) => {
  const { addToCart } = useCart();
  const { productDetail, isLoading } = useGetSingleProduct(params.id);
  console.log("productDetail", productDetail);
  return (
    <>
      {isLoading ? (
        <>
          <SkeletonLoading />
        </>
      ) : productDetail ? (
        <div className="container mx-auto py-12 px-4 lg:px-24">
          {/* Product Image and Details */}
          <div className="flex flex-col lg:flex-row gap-12 bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="lg:w-1/2 flex justify-center items-center bg-gray-800">
              <img
                src={productDetail?.thumbnail}
                alt={productDetail?.title}
                className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 bg-gray-800 ease-in-out"
              />
            </div>

            <div className="lg:w-1/2 text-white bg-gray-800">
              <h1 className="text-5xl font-extrabold mb-6 text-blue-500 bg-gray-800">
                {productDetail?.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6 bg-gray-800">
                {productDetail?.description}
              </p>
              <div className="flex items-center mb-6 bg-gray-800">
                <span className="text-4xl font-semibold text-blue-400 bg-gray-800">
                  ${productDetail?.price.toFixed(2)}
                </span>
                <span className="text-2xl ml-6 text-gray-400/100 bg-gray-800 line-through">
                  {productDetail?.price ? (
                    `$${(productDetail?.price / (1 - productDetail?.discountPercentage / 100)).toFixed(2)}`
                  ) : (
                    <span className="text-2xl ml-6 text-gray-400/100 bg-gray-800 line-through">$</span>
                  )}
                </span>

                {productDetail?.discountPercentage ? (
                  <span className="ml-6 text-2xl text-green-400 bg-gray-800">
                    -{productDetail?.discountPercentage}% Off
                  </span>
                ) : (<span className="bg-gray-800 ml-6 text-green-400 text-2xl">-0% off</span>)}
              </div>

              <AddCartButton product={productDetail} isAdded={addToCart.includes(productDetail.id)} />

              <div className="grid grid-cols-2 gap-6 text-lg text-gray-400 bg-gray-800 mt-3">
                <p className="bg-gray-800">
                  <strong className="text-white bg-gray-800">Brand:</strong>{" "}
                  {productDetail?.brand}
                </p>
                <p className="bg-gray-800">
                  <strong className="text-white bg-gray-800">Weight:</strong>{" "}
                  {productDetail?.weight}g
                </p>
                <p className="bg-gray-800">
                  <strong className="text-white bg-gray-800">Dimensions:</strong>{" "}
                  {productDetail?.dimensions.width} x{" "}
                  {productDetail?.dimensions.height} x{" "}
                  {productDetail?.dimensions.depth} mm
                </p>
                <p className="bg-gray-800">
                  <strong className="text-white bg-gray-800">Warranty:</strong>{" "}
                  {productDetail?.warrantyInformation}
                </p>
                <p className="bg-gray-800">
                  <strong className="text-white bg-gray-800">Shipping:</strong>{" "}
                  {productDetail?.shippingInformation}
                </p>
                <p className="bg-gray-800">
                  <strong className="text-white bg-gray-800">Availability:</strong>{" "}
                  <span className={`${productDetail?.availabilityStatus === "Low Stock" ? "text-red-400 bg-gray-800" : "text-green-400 bg-gray-800"}`}>{productDetail?.availabilityStatus}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Product Reviews and Ratings */}
          <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-white mb-8 bg-gray-800">Customer Reviews</h2>
            {productDetail?.reviews && productDetail?.reviews.length > 0 ? (
              <div className="space-y-6 bg-gray-800">
                {productDetail?.reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gray-800 rounded-lg ${index !== productDetail.reviews.length - 1 ? "border-b border-gray-600" : ""
                      }`}
                  >
                    <div className="flex items-center mb-4 bg-gray-800">
                      <FaStar className="text-yellow-500 mr-3 bg-gray-800" />
                      <span className="text-xl font-semibold text-white bg-gray-800">
                        {review.rating}/5
                      </span>
                    </div>
                    <p className="text-lg text-gray-300 mb-4 bg-gray-800">{review.comment}</p>
                    <span className="text-sm text-gray-500 bg-gray-800">
                      - {review.reviewerName},{" "}
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 bg-gray-800">No reviews yet.</p>
            )}
          </div>
        </div>
      ) : (
        <>
          <NoItem />
        </>
      )}
    </>
  );
};

export default Page;
