import Link from "next/link";
import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { categories } from "../utils/category";

/**
 * @author
 * @function Navbar
 **/

const Navbar = ({ setSearchTerm, searchTerm, setSearchItems }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const client = createClient({
      space: "69mfylvjbr0r",
      accessToken: "5lORfJX0w2Cm4vAvwQ5GoFBaW5zGhGi0pCoqIFDxTGI",
    });

    // Links are automatically resolved
    client
      .getEntries({
        content_type: "product",
        query: searchTerm,
      })
      .then((response) => setSearchItems(response.items))
      .catch(console.error);
  }, [searchTerm]);

  return (
    <>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* <!-- logo --> */}
            <div>
              <p className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <Link href="/">
                  <span className="text-2xl cursor-pointer	font-bold">
                    AutomateThis
                  </span>
                </Link>
              </p>
            </div>

            {/* search */}

            <div className="relative hidden md:flex items-center  mt-2">
              <input
                type="text"
                className="h-14 sm:h-12 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute top-2 right-2 py-4 mr-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="py-5 px-3">
                About
              </Link>
              <Link href="/contact" className="py-2 px-3">
                Contact
              </Link>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}

        <div className={open ? "mobile-menu md:hidden" : "hidden"}>
          <div className="flex justify-center">
            <input
              type="text"
              className=" h-12 w-4/5  mx-auto pl-10 pr-20 rounded-lg  focus:shadow focus:outline-none"
              placeholder="Search anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {categories.map((item, i) => (
            <p key={i} className="block py-2 px-4 text-sm hover:bg-gray-200">
              <Link href={"/category/" + item.name.toLowerCase()}>
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
