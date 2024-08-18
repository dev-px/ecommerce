import React from 'react'
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import AddCartButton from "@/components/AddCartButton/page"

const page = ({ item, isAdded }) => {
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105">
            <img
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <Link href={`/product/${item.id}`} className="decoration-0">
                    <h3 className="text-lg font-bold text-white mb-2">{item?.title}</h3>
                </Link>
                <div className="flex items-center gap-2">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-sm flex items-center">
                        <span className="font-medium bg-green-500">{item?.rating.toFixed(1)}</span>
                        <IoMdStar className="ml-1 w-4 h-4 bg-green-500" />
                    </div>
                </div>
                <div className="flex gap-3 mt-4">
                    <span className="text-green-400 font-semibold text-lg">
                        ${item?.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400 font-semibold line-through">
                        ${(item?.price / (1 - item?.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className="text-red-500 font-semibold">
                        {item.discountPercentage}% Off
                    </span>
                </div>
                <div className="mt-auto">
                    <AddCartButton product={item} isAdded={isAdded} />
                </div>
            </div>
        </div>
    );
}

export default page