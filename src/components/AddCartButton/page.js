"use client";

import { useCart } from '@/context/Cart';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const ProductPage = ({ product, isAdded }) => {
    const router = useRouter();
    const { setProduct, setAddToCart, addToCart, setQuantity } = useCart();

    const addItemToCart = (product) => {
        setProduct((prevItems) => [...prevItems, product]);
        setAddToCart((prevItems) => [...prevItems, product.id]);
        toast.success("Item is added to the cart",{className:"shadow-lg text-[12px]"})
        setQuantity((prevQuan) => ({
            ...prevQuan,
            [product.id]: (prevQuan[product.id] || 0) + 1,
        }));
    };

    return (
        <button
            className={`w-full py-3 ${isAdded ? "bg-yellow-400 hover:bg-yellow-500" : "bg-blue-600 hover:bg-blue-700"
                } text-white font-semibold rounded-md transition mt-4`}
            onClick={() => (isAdded ? router.push('/Cart') : addItemToCart(product))}
        >
            {addToCart.includes(product.id) ? (
                <>Go to Cart</>
            ) : (
                <>Add to Cart</>
            )}
        </button>
    );
};

ProductPage.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
    isAdded: PropTypes.bool.isRequired,
};

export default ProductPage;
