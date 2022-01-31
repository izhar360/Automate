import React from "react";

/**
 * @author
 * @function CategoryBar
 **/

const CategoryBar = (props) => {
  const categories = [
    {
      name: "Moters",
    },
    {
      name: "Remotes",
    },
    {
      name: "Sliders Gate",
    },

    {
      name: "Barriers",
    },
  ];
  return (
    <div className="hidden md:flex md:flex-row items-center justify-between  w-4/5 mx-auto mt-3 text-lg text-xl px-2">
      <div className="rounded-lg hover:bg-btn-gray hover:text-white md:px-2 md:py-2 transition-all ease-linear duration-200">
        Home Icon
      </div>
      {categories.map((item) => (
        <div className="rounded-lg hover:bg-btn-gray hover:text-white md:px-2 md:py-2 transition-all ease-linear duration-200">
          {item.name}
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
