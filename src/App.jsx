import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import InterestedProduct from "./component/InterestedProduct"
import Cart from "./cart/Cart"

export default function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true, // Opt into startTransition behavior
          v7_relativeSplatPath: true, // Adjust relative splat route handling
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="candle-product/:id" element={<InterestedProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
