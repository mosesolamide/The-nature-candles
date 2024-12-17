import React, { useEffect, useState, useContext } from "react"
import { QuantityContext } from "../App"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import "./Cart.css"

export default function Cart(){

const { incrementQuantity, decrementQuantity, quantities,buttonVariants } = useContext(QuantityContext)
const [cart, setCart] = useState([])

  useEffect( () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
    console.log(quantities)
  },[])

  const removeItem = (currentId) => {
    // filter out items that are not equall to the item remove from the storage
    const updateCart = cart.filter(item => item.id !== currentId)
    // then update the cart 
    setCart(updateCart)
    // then also update the localstorage
    localStorage.setItem("cart", JSON.stringify(updateCart))
  }
  const navigate = useNavigate()
  const navigateToPayment = () =>{
    navigate("/payment-progress")
  }

  const totalPriceOfCart = cart.reduce((sum, product) => {
    const quantity = quantities[product.id] || 1
    return sum + product.price * quantity
  }, 0)

  const cartProduct = cart.length > 0 ? cart.map((carts, index) =>(
         <article className="cart--main" key={index}>
              <div className="cart--img--name">
                  <img src={`assets/${carts.img}`} alt="img of product" className="carts-product-img" />
                  <p>{`${carts.name}`}</p>
                  <b>{`$${carts.price}`}</b>
              </div>
              <div className="remove--cart">
                <div className="quatity">
                    <p onClick={() => incrementQuantity(carts.id)}>+</p>
                    <p> {quantities[carts.id] || 1}</p>
                    <p onClick={() => decrementQuantity(carts.id)}>-</p>
                </div>
                <motion.button
                  className="remove"
                  onClick={ () => removeItem(carts.id)}
                  variants={buttonVariants}
                  whileHover="hover" // Trigger the hover animation
              >
                Remove
              </motion.button>
              </div>
              <hr />
        </article>

  )):<div className="empty">
      <p>Your cart is empty</p>
  </div>

  
    return (
      <div className="main">
          {cartProduct}
          <div className="cart--summary">
              <h1>CART SUMMARY</h1>
              <div className="sub--total">
                <p>Subtotal</p>
                <p>${totalPriceOfCart}</p>
              </div>
              <motion.button 
                className="checkout"
                variants={buttonVariants}
                whileHover="hover"
                onClick={navigateToPayment}
              >
              Checkout (${totalPriceOfCart})
              </motion.button>
        </div>
      </div>
    )
}
