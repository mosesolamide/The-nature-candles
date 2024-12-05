import React, { useEffect, useState, useContext } from "react"
import { QuantityContext } from "../App"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import "./Cart.css"

export default function Cart(){

  const { incrementQuantity, decrementQuantity, quantities,buttonVariants } = useContext(QuantityContext);

 const [cart, setCart] = useState([])
 
 const pricesOfCartProduct = cart.map( prices => prices.price)

  useEffect( () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
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
    navigate("/details")
  }

  const totalPriceOfCart = pricesOfCartProduct.reduce((sum, price) => sum + price, 0)

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

{/* <article className="products--items mg" key={index}>
<img src={`assets/${carts.img}`} alt="images of candles" />
<div className="price--name--tag">
    <p>{`${carts.name}`}</p>
    <b>{`${carts.price}`}</b>
</div>
<div className="quatity">
    <p onClick={incrementQuatity}>+</p>
    <p>{quatity}</p>
    <p onClick={decrementQuatity}>-</p>
</div>
<button className="cart--button remove" onClick={ () => removeItem(carts.id)}>Remove</button>
</article> */}