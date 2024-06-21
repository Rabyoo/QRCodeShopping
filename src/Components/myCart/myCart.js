import React from "react";
import { Link } from "react-router-dom";
import "./myCart.css";
import { useContextApi } from "../../ContextApi/ContextApi";
import Header from "../Header/Header";

const MyCart = () => {
  const { addToCart, product, removeToCart, icreaseItem } = useContextApi();
  console.log(addToCart, product);
  const total = addToCart.reduce((current, item) => {
    return current + item.price * +item.quantity;
  }, 0);
  return (
    <div className="myCarts flex flex-col items-center pt-20 bg-gray-100 h-screen">
      <Header />

      <h1 className="mb-10 text-2xl font-bold">Cart Items</h1>

      {addToCart &&
        addToCart.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-5xl bg-white rounded-lg shadow-md mb-6 md:flex md:justify-between">
            <div className="md:flex">
              <img
                src={item.img}
                alt="product-image"
                className="w-full rounded-lg md:w-40"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                <p className="mt-1 text-md text-gray-700">{item.price}$</p>
              </div>
            </div>
            <div className="p-6 md:flex md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <span
                  className="minus cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 hover:bg-blue-500 hover:text-blue-50"
                  onClick={() => console.log("minus clicked")}>
                  {" "}
                  -{" "}
                </span>
                <input
                  // id={`input${item.id}`}
                  onChange={(e) => {
                    icreaseItem(item.id, e.target.value);
                  }}
                  className="h-8 w-12 border bg-white text-center text-xs outline-none"
                  style={{ fontSize: "18px" }}
                  type="number"
                  min="1"
                  max="20"
                  // value={item.quantity}
                />
                <span
                  className="plus cursor-pointer rounded-r bg-gray-100 py-1 px-3 hover:bg-blue-500 hover:text-blue-50"
                  onClick={() => console.log("plus clicked")}>
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{+item.price * +item.quantity}</p>
                <svg
                  onClick={() => {
                    removeToCart(item.id);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}

      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6">
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div>
            <p className="mb-1 text-lg font-bold">{total}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <Link
          to="/checkout"
          className="mt-6 px-10 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </Link>
        <br />
        <br />
        <Link to="/" className="text-black hover:underline">
          Continue Shopping <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
