import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./../../utils/routes";

import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.CART} index element={<Cart />} />
      <Route path={ROUTES.PRODUCT} index element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} index element={<Profile />} />
      <Route path={ROUTES.CATEGORY} index element={<SingleCategory />} />
    </Routes>
  );
};

export default AppRoutes;
