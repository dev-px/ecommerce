"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetSingleProduct = (id) => {
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();
        setProductDetail(product);
      } catch (error) {
        toast.error("Something went wrong!", { className: "shadow-lg text-[12px]" });
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { productDetail, isLoading };
};

export default useGetSingleProduct;