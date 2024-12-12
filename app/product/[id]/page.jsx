"use client";

// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProductById } from "@/app/api/route";
import Navbar from "@/app/components/Navbar";
import Meta from "@/app/components/Meta";

const ProductPage = () => {
  // const { id } = useParams();
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById({ id: id })
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="w-full h-full pt-20 text-3xl font-semibold text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Meta
        title={product.title}
        desc={product.description}
        imageUrl={product.images[0]}
      />
      <Navbar />
      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="flex flex-col w-full h-full mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="object-contain object-center w-full h-[400px]"
            />
          </div>
          <div className="flex flex-col w-full gap-2 md:w-1/2">
            <div className="flex justify-start item-center">
              Reviews: {product.reviews?.length}
            </div>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
