import React, { useEffect, useState, useContext } from "react"
import { Quatity } from "../App"

export default function Cart(){

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
        <article className="products--items mg" key={index}>
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
    </article>
  )):<div className="empty">
      <p>Your cart is empty</p>
  </div>
    return (
      <div className="carts--product">
        {cartProduct}

      </div>
    )
}