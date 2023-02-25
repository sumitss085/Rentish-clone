import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../Pages/Home/Home";
import Location from "../Pages/Home/Location";
import Calender from "../Pages/Home/Calender"
// import Admin from "../Pages/Admin/Admin";
// import Home from "../Pages/Home/Home";
import Payment from "../pages/Payment/Payment";

import Profile from "../Pages/Profile/Profile";

import ProductDetails from "../ProductDetails Page/ProductDetails";
import ProductListing from "../ProductsListing Page/ProductListing";



export default function AllRoutes() {
  return (
    <div>
      <Routes>

       <Route  path="/"  element={<Home/>} />

        <Route  path="/location"  element={<Location/>} />

            <Route  path="/location"  element={<Location/>} />
            <Route  path="/calender"  element={<Calender/>} />
            

        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route
          path="/payment"
          element={<PrivateRoutes> {<Payment />}</PrivateRoutes>}
        /> */}
        <Route path="/payment" element={<Payment />} />

        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route

        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/details" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route

          path="/profile"
          element={ <Profile/>}
        />
        <Route path="/*" element={<> 404 Not Found... </>} />
      </Routes>
    </div>
  );
}
