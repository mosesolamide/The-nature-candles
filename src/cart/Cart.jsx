import React, { useEffect, useState, useContext } from "react"
import { Quatity } from "../App"
import { motion } from "framer-motion"
import "./Cart.css"

export default function Cart(){

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

  const {incrementQuatity,decrementQuatity,quatity} = useContext(Quatity)

 const [cart, setCart] = useState([])

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

    const cartProduct = cart.length > 0 ? cart.map((carts, index) =>(
      <article className="cart--main" key={index}>
          <div className="cart--img--name">
            <img src={`assets/${carts.img}`} alt="img of product" className="carts-product-img" />
            <p>{`${carts.name}`}</p>
            <b>{`${carts.price}`}</b>
          </div>
          <div className="remove--cart">
            <div className="quatity">
              <p onClick={incrementQuatity}>+</p>
              <p>{quatity}</p>
              <p onClick={decrementQuatity}>-</p>
            </div>
            <motion.button
            className="remove"
            onClick={removeItem}
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
      <>
        <div className="carts--product">
            {cartProduct}
        </div>
      </>
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