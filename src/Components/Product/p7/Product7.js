import React from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/headphone1.png"
// import "./product.css";

const Product = () => {
  // const close = document.querySelector(".close");
  // const productDetails = document.querySelector(".productDetails");
  // close.addEventListener("click", () => {
  //   productDetails.style.display = "none";
  // });

  return (
    <div className="productDetails">
      <div class="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
        <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
          <div>
            <img
              class="object-cover h-64 w-full"
              src={img}
              alt="Converse sneakers"
            />
          </div>

          <div class="flex flex-col gap-1 mt-4 px-4">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">
              HeadPhone Gold
            </h2>
            <span class="font-normal text-gray-600 dark:text-gray-300">
              This is GBL Headphone it is high quality
            </span>
            <span class="font-semibold text-gray-800 dark:text-gray-50">
              $133.3
            </span>
          </div>

          <div class="flex gap-4 mt-4 px-4">
            <span class="sr-only">Colors available</span>

            <button
              aria-label="Yellow"
              class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

            <button
              aria-label="Red"
              class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

            <button
              aria-label="Blue"
              class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

            <button
              aria-label="Black"
              class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
          </div>

          <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
            <Link to="/checkOut" class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
              <span class="text-base">CheckOut</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Product;
