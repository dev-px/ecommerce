"use client";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetAllProduct = (limit) => {
    const [isLoading, setIsLoading] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
                );
                const product = await response.json();
                setProductsList(product.products);
                setTotalProducts(product.total);
            } catch (error) {
                toast.error("Something went wrong!", { className: "shadow-lg text-[12px]" });
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductList();
    }, [skip, limit]);

    const nextPage = () => {
        if (skip + limit < totalProducts) {
            setSkip(skip + limit);
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (skip > 0) {
            setSkip(skip - limit);
            setCurrentPage(currentPage - 1);
        }
    };

    return { productsList, isLoading, currentPage, nextPage, prevPage, totalProducts, skip };
};

export default useGetAllProduct;
