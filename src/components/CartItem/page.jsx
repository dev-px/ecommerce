import React from 'react';
import QuantityButton from "@/components/QuantityButton/page";
import { MdDelete } from "react-icons/md";

const Page = ({ item, removeCartItem }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-5 mb-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full sm:w-28 h-28 object-cover rounded-md shadow-md"
            />
            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start my-3">
                    <span className="text-base font-semibold text-blue-400">${item?.price.toFixed(2)}</span>
                    <span className="text-base sm:ml-3.5 mt-2 sm:mt-0 text-gray-400 line-through">
                        ${item?.price ? (item?.price / (1 - item?.discountPercentage / 100)).toFixed(2) : ''}
                    </span>
                    <span className="ml-0 sm:ml-3.5 mt-2 sm:mt-0 text-base text-green-400">
                        -{item?.discountPercentage}% Off
                    </span>
                </div>
                <div className="mt-2 text-gray-400">
                    <span>{item.shippingInformation}</span>
                </div>
            </div>
            <div className="flex justify-between sm:flex-col items-center gap-4 sm:gap-0 sm:text-right mt-4 sm:mt-0">
                <QuantityButton item={item} />
                <button
                    className="text-red-400 hover:text-red-600 transition duration-300 mt-5"
                    onClick={() => removeCartItem(item?.id)}
                >
                    <MdDelete className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default Page;
