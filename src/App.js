import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./tailwind.config";

// Project Pages
import CheckOut from "./Components/checkOut/CheckOut";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import HomeProducts from "./Components/homeProducts/HomeProducts";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/p1/Product1";
import myCart from "./Components/myCart/myCart";
import myAccount from "./Components/myAccount/myAccount";
import scanCamera from "./Components/ScanCamera/scanCamera";

// Product Details
import p1 from "./Components/Product/p1/Product1";
import p2 from "./Components/Product/p2/Product2";
import p3 from "./Components/Product/p3/Product3";
import p4 from "./Components/Product/p4/Product4";
import p5 from "./Components/Product/p5/Product5";
import p6 from "./Components/Product/p6/Product6";
import p7 from "./Components/Product/p7/Product7";
import p8 from "./Components/Product/p8/Product8";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" exact Component={HomeProducts}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/Login" Component={Login}></Route>
        <Route path="/myCart" Component={myCart}></Route>
        <Route path="/Signup" Component={Signup}></Route>
        <Route path="/checkout" Component={CheckOut}></Route>
        <Route path="/productDetails" Component={Product}></Route>
        <Route path="/myAccount" Component={myAccount}></Route>
        <Route path="/camera" Component={scanCamera}></Route>
        <Route path="/contactUs" Component={ContactUs}></Route>
        <Route path="/aboutUs" Component={AboutUs}></Route>

        {/* Product Details */}
        <Route path="/product/p1" Component={p1}></Route>
        <Route path="/product/p2" Component={p2}></Route>
        <Route path="/product/p3" Component={p3}></Route>
        <Route path="/product/p4" Component={p4}></Route>
        <Route path="/product/p5" Component={p5}></Route>
        <Route path="/product/p6" Component={p6}></Route>
        <Route path="/product/p7" Component={p7}></Route>
        <Route path="/product/p8" Component={p8}></Route>
      </Routes>
    </div>
  );
}

export default App;
