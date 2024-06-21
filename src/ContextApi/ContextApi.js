import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import items from "../test.json";

const contextApi = createContext();

const ContextApi = ({ children }) => {
  const [product, setProduct] = useState({});
  const [addToCart, setAddToCart] = useState([]);

  const navigate = useNavigate();
  const productByNow = (item) => {
    setProduct({ ...item});
    navigate("/checkout");
  };

  const addCart = (item) => {
    setAddToCart([...addToCart, { ...item }]);
    navigate("/myCart");
    console.log(addToCart);
  };
  const removeToCart = (id) => {
    setAddToCart(addToCart.filter((item) => item.id !== id));
  };
  const icreaseItem = (id, value) => {
    setAddToCart((currentItem) => {
      return currentItem.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: value };
        }
        return item;
      });
    });
  };
  return (
    <contextApi.Provider
      value={{
        productByNow,
        product,
        addCart,
        addToCart,
        removeToCart,
        icreaseItem,
      }}>
      {children}
    </contextApi.Provider>
  );
};

export default ContextApi;
export const useContextApi = () => {
  return useContext(contextApi);
};
