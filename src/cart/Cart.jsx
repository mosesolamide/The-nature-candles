import React, { useEffect, useState } from "react"

export default function Cart(){

 const [cart, setCart] = useState([])

  useEffect( () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
  },[])

  const removeItem = (currentId) => {
    const updateCart = cart.filter(item => item.id !== currentId)
    setCart(updateCart)
    localStorage.setItem("cart", JSON.stringify(updateCart))
  }

    const cartProduct = cart.length > 0 ? cart.map((carts, index) =>(
      <article className="products--items" key={index}>
          <img src={`assets/${carts.img}`} alt="images of candles" />
          <div className="price--name--tag">
              <p>{`${carts.name}`}</p>
              <b>{`${carts.price}`}</b>
          </div>
          <button onClick={ () => removeItem(carts.id)}>Remove</button>
    </article>
  )):<div className="empty">
      <p>Your cart is empty</p>
  </div>
    return (
      <>
        {cartProduct}
      </>
    )
}