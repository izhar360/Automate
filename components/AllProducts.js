import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * @author
 * @function AllProducts
 **/

const AllProducts = ({ products, name }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg mx-auto mb-5 font-bold">
        {name?.toUpperCase()}
      </div>

      <div className="flex  justify-center content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 justify-content-center">
          {products?.map((item, i) => (
            <div
              key={i}
              className="max-w-card-lg h-min bg-white rounded-lg shadow-lg border-gray-800"
            >
              <Image
                className="rounded-t-lg object-cover"
                src={"https:" + item.fields.image.fields.file.url}
                alt="product image"
                width={280}
                height={240}
              />
              <Link href={"/product/" + item.fields.slug}>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="text-lg  pb-4 font-semibold tracking-tight text-gray-900 ">
                    {item.fields.Name}
                  </h3>

                  <p className="text-white cursor-pointer  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    Order on Whatsapp
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
