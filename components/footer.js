import React from "react";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <footer class="flex justify-center p-4 mt-4 md:mt-6 bg-gray-100  shadow md:px-6 md:py-8 ">
      <div className="w-4/5">
        <div class="flex items-center justify-between">
          <a href="#" class="flex items-center mb-4 sm:mb-0">
            <div>
              <svg
                className="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <span class="self-center text-md md:text-xl font-semibold whitespace-nowrap text-black">
              AutomateThis
            </span>
          </a>
          <ul class="flex flex-wrap items-center  ml-4">
            <li>
              <a
                href="#"
                class="mr-4 text-sm text-black hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="mr-4 text-sm text-black hover:underline md:mr-6 "
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                class="mr-4 text-sm text-black hover:underline md:mr-6 "
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-black hover:underline ">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-black sm:text-center ">
          © 2022{" "}
          <a
            href="https://flowbite.com"
            target="_blank"
            class="hover:underline"
          >
            AutomateThis
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
