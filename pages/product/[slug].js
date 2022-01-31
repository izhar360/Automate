import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ProductsContext } from "../../src/context/Products";
import { useState } from "react/cjs/react.development";
import Image from "next/image";

/**
 * @author
 * @function yoyoyo
 **/

const yoyoyo = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [Product, setProduct] = useState();
  const { Products } = useContext(ProductsContext);

  const product = Products.find((product) => product.sys.id === slug);
  // useEffect(() => {
  //   setProduct(product);
  //   console.log("single product=", product);
  // }, []);

  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-8 md:py-12 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          {/* <Image
           
            width={Product?.fields.image.fields.file.details.image.width}
            height={Product?.fields.image.fields.file.details.image.height}
          /> */}
          <img
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={"https:" + product.fields.image.fields.file.url}
            alt="product image"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm mb-1 title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {Product?.fields.Name}
            </h1>

            <p class="leading-relaxed mt-4 md:mt-6">
              {Product?.fields.Description}
            </p>

            <div class="flex mt-4 md:mt-6">
              <span class="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Order on Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default yoyoyo;
