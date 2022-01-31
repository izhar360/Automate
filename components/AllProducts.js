import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * @author
 * @function AllProducts
 **/

const AllProducts = ({ Products }) => {
  const products = [
    {
      name: "Moters",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Remotes",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Sliders Gate",
      text: "this is for test purposes and you should know it",
    },

    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
    {
      name: "Barriers",
      text: "this is for test purposes and you should know it",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-lg mx-auto mb-5 font-bold">All Products:</div>

      <div className="flex  justify-center content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 justify-content-center">
          {Products.map((item) => (
            <div className="max-w-card-lg h-min bg-red-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <Image
                className="rounded-t-lg"
                src={"https:" + item.fields.image.fields.file.url}
                alt="product image"
                width={item.fields.image.fields.file.details.image.width}
                height={item.fields.image.fields.file.details.image.height}
              />
              <Link href={"/product/" + item.sys.id}>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="text-lg  pb-4 font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.fields.Name}
                  </h3>

                  <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
