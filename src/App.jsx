import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import InterestedProduct from "./component/InterestedProduct"
import Cart from "./cart/Cart"
import { createContext, useState } from "react"
import Details from "./payment/Details"
import PaymentLayout from "./payment/PaymentLayout"
import Shipping from "./payment/Shipping"
import Payment from "./payment/Payment"

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

const [quantities, setQuantities] = useState({})
const [isDetailsViewed,setIsDetailView] = useState(true)
const [isShippingViewed,setIsShippingView] = useState(true)

  // Increment quantity for a specific product
  const incrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    })) 
  }

  // Decrement quantity for a specific product
  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const style = {
    color: "#56B280"
}
const viewed = {
    color: "#000",
    fontSize: "1rem",
    scale: 1
} 


  return (
    <QuantityContext.Provider value={{
      incrementQuantity,
      decrementQuantity,
      quantities,
      buttonVariants,
      isDetailsViewed,
      setIsDetailView,
      viewed,
      style,
      isShippingViewed,
      setIsShippingView
    }}>
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
          <Route path="/payment-progress" element={<PaymentLayout />}>
            <Route index element={<Details />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuantityContext.Provider>
  );
}
