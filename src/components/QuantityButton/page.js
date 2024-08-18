"use client";

import { useCart } from '@/context/Cart';
import toast from 'react-hot-toast';
import { MdOutlineAdd } from "react-icons/md";
import { MdOutlineMinimize } from "react-icons/md";

const page = ({ item }) => {
    const { quantity, setQuantity } = useCart();
    const increaseQuantity = (prod) => {
        setQuantity((prevQuan) => ({
            ...prevQuan,
            [prod.id]: (prevQuan[prod.id] || 0) + 1,
        }));
        toast.success("Item Added", { className: "shadow-lg text-[12px]" });
    }

    const decreaseQuantity = (prod) => {
        setQuantity((prevQuan) => ({
            ...prevQuan,
            [prod.id]: prevQuan[prod.id] > 1 ? prevQuan[prod.id] - 1 : 1,
        }));
        toast.success("Item Removed", { className: "shadow-lg text-[12px]" });
    }
    return (
        <div className="flex hover:shadow-lg items-center bg-gray-600">
            <button className="hover:bg-gray-700 bg-gray-600 p-2.5 text-white border-white border"
                onClick={() => increaseQuantity(item)}>
                <MdOutlineAdd />
            </button>
            <div className="border-white border-y text-white p-1.5 px-2.5 text-center">{quantity?.[item?.id]}</div>
            <button className="hover:bg-gray-700 bg-gray-600 p-2.5 text-white border-white border text-center"
                onClick={() => decreaseQuantity(item)}>
                <MdOutlineMinimize />
            </button>
        </div>
    )
}

export default page