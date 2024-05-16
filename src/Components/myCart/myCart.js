import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./myCart.css";

// Imported Images
import img1 from "../Assets/shoes1.jpg";
import img2 from "../Assets/camera1.jpg";
import img3 from "../Assets/shoes4.png";
import img4 from "../Assets/smart-watch2.jpg";
import img5 from "../Assets/phone1.png";
import img6 from "../Assets/shoes5.png";
import img7 from "../Assets/headphone1.png";
import img8 from "../Assets/shoes3.png";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      price: "259$",
      quantity: 1,
      image: img1,
    },
    {
      id: 2,
      name: "Camera High Quality",
      size: "36EU - 4US",
      price: "299.9$",
      quantity: 2,
      image: img2,
    },
    {
      id: 3,
      name: "Nike Air Max 2017",
      size: "36EU - 4US",
      price: "125.9$",
      quantity: 1,
      image: img3,
    },
    {
      id: 4,
      name: "Smart Watch",
      size: "36EU - 4US",
      price: "150$",
      quantity: 1,
      image: img4,
    },
    {
      id: 5,
      name: "Mobile Infinix",
      size: "36EU - 4US",
      price: "550$",
      quantity: 1,
      image: img5,
    },
    {
      id: 6,
      name: "Nike Air Max 2020",
      size: "36EU - 4US",
      price: "249$",
      quantity: 1,
      image: img6,
    },
    {
      id: 7,
      name: "Headphone GBL",
      size: "36EU - 4US",
      price: "350$",
      quantity: 1,
      image: img7,
    },
    {
      id: 8,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      price: "259$",
      quantity: 1,
      image: img8,
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="myCarts flex flex-col items-center pt-20 bg-gray-100 h-screen">
      <h1 className="mb-10 text-2xl font-bold">Cart Items</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-5xl bg-white rounded-lg shadow-md mb-6 md:flex md:justify-between">
          <div className="md:flex">
            <img
              src={item.image}
              alt="product-image"
              className="w-full rounded-lg md:w-40"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <p className="mt-1 text-md text-gray-700">{item.size}</p>
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
                id={`input${item.id}`}
                className="h-8 w-12 border bg-white text-center text-xs outline-none"
                style={{ fontSize: "18px" }}
                type="number"
                min="1"
                max="20"
                value={item.quantity}
              />
              <span
                className="plus cursor-pointer rounded-r bg-gray-100 py-1 px-3 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => console.log("plus clicked")}>
                {" "}
                +{" "}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{item.price}</p>
              <svg
                onClick={() => removeFromCart(item.id)}
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
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div>
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <Link
          to="/CheckOut"
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

