import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./homeProducts.css";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

// Imported Images
import data from "../../test.json";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";
import { useContextApi } from "../../ContextApi/ContextApi";
import Header from "../Header/Header";

const HomeProducts = () => {
  const { productByNow, addCart } = useContextApi();
  // console.log(data);
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });

    fetch("https://automative-ecommerce.onrender.com/user")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="container">
      <Header />
      <div class="bg-gray-100  max-w-12xl ml-12">
        <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only absolute">All Products</h2>

          <div class="cards grid grid-cols-1 gap-x-6 ml-[80px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((item) => {
              return (
                <Link
                  data-aos="fade-up"
                  key={item.id}
                  class="group bg-gray-200 rounded-lg">
                  <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={item.img}
                      loading="lazy"
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <Link
                    to="/myCart"
                    className="flex align-middle bg-none"
                    style={{ marginLeft: "55px", fontWeight: "bold" }}
                    onClick={() => {
                      addCart(item);
                    }}>
                    Add to Cart <IoCart className="text-xl" />
                  </Link>

                  <br />
                  <br />

                  <Link
                    className="bg-blue-600 hover:bg-transparent hover:text-cyan-600 rounded-sm relative top-[-30px] px-10 py-1 text-gray-50 text-lg"
                    style={{
                      marginLeft: "55px",
                      marginBottom: "30px",
                      textAlign: "center",
                      border: "1px solid rgb(8, 145, 178)",
                    }}
                    to="/CheckOutItem"
                    onClick={() => {
                      productByNow(item);
                    }}>
                    By Now
                  </Link>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default HomeProducts;
