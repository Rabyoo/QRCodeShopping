import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./homeProducts.css";
import { Link } from "react-router-dom";

// QRcodes
// import qrcode1 from "../Assets/QRCodes/p1.png";
// import qrcode2 from "../Assets/QRCodes/p2.png";
// import qrcode3 from "../Assets/QRCodes/p3.png";
// import qrcode4 from "../Assets/QRCodes/p4.png";
// import qrcode5 from "../Assets/QRCodes/p5.png";
// import qrcode6 from "../Assets/QRCodes/p6.png";
// import qrcode7 from "../Assets/QRCodes/p7.png";
// import qrcode8 from "../Assets/QRCodes/p8.png";

// Imported Images
import img1 from "../Assets/shoes1.jpg";
import img2 from "../Assets/camera1.jpg";
import img3 from "../Assets/shoes4.png";
import img4 from "../Assets/smart-watch2.jpg";
import img5 from "../Assets/phone1.png";
import img6 from "../Assets/shoes5.png";
import img7 from "../Assets/headphone1.png";
import img8 from "../Assets/shoes3.png";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

const HomeProducts = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="container">
      <div class="bg-gray-100  max-w-12xl ml-12">
        <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only absolute">All Products</h2>

          <div class="cards grid grid-cols-1 gap-x-6 ml-[80px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img1}
                  loading="lazy"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img2}
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  class="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img3}
                  loading="lazy"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img4}
                  loading="lazy"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img5}
                  loading="lazy"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img6}
                  loading="lazy"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img7}
                  loading="lazy"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>

            <Link
              data-aos="fade-up"
              class="group bg-gray-200 rounded-lg">
              <div class="product aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={img8}
                  loading="lazy"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <Link
                className="hover:underline"
                style={{ marginLeft: "80px", fontWeight: "bold" }}
                to="/myCart">
                Add to Cart
              </Link>
              <br />
              <br />
              <Link
                className="bg-blue-600 rounded-sm relative top-[-10px] px-10 py-1 text-gray-50 text-lg"
                style={{
                  marginLeft: "55px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
                to="/CheckOut">
                By Now
              </Link>
            </Link>
            
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default HomeProducts;
