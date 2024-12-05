import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import InterestedProduct from "./component/InterestedProduct"
import Cart from "./cart/Cart"
import { createContext, useState } from "react"
import Details from "./payment/Details"

export const QuantityContext = createContext();

export default function App() {

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }

  const [quantities, setQuantities] = useState({});

  // Increment quantity for a specific product
  const incrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // Decrement quantity for a specific product
  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <QuantityContext.Provider value={{incrementQuantity, decrementQuantity, quantities,buttonVariants}}>
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
          <Route path="details" element={<Details />}/>
        </Routes>
      </BrowserRouter>
    </QuantityContext.Provider>
  );
}
