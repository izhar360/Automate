import Link from "next/link";
import React from "react";
import { categories } from "../utils/category";

/**
 * @author
 * @function CategoryBar
 **/

const CategoryBar = () => {
  return (
    <div className="hidden md:flex md:flex-row items-center justify-between  w-4/5 mx-auto mt-3 text-lg text-xl px-2">
      {categories.map((item) => (
        <div className="rounded-lg hover:bg-gray-300 md:px-2 md:py-2 transition-all ease-linear duration-100">
          <Link href={"/category/" + item.name.toLowerCase()}>{item.name}</Link>
        </div>
      ))}
      {/* <div>Moters</div>
      <div>Remotes</div>
      <div>Sliders Gate</div>
      <div>Swing Gate</div>
      <div>Electronic Lock</div>
      <div>Barriers</div> */}
    </div>
  );
};

export default CategoryBar;
