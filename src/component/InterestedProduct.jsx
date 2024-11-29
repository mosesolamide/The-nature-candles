import React from "react"
import { useLocation } from "react-router-dom"
import { useState } from "react"

export default function InterestedProduct(){
     const location = useLocation()
     const previewProduct = location.state
     const [quatity, setQuatity] = useState(1)
     const [selectedOption, setSelectedOption] = useState({
        purchaseType:""
     })
     
     
     const [cart,setCart] = useState([JSON.parse(localStorage.getItem("cart"))] || [])

     function addToCart(e){
        e.preventDefault()
        const existingCart = JSON.parse(localStorage.getItem("cart")) || []

        const updateCart = [...existingCart, {...previewProduct}]

        localStorage.setItem("cart", JSON.stringify(updateCart))
         
        setCart(updateCart)
     }
//   localStorage.removeItem("cart")

    //  function to increment the quattity of product and decrement it also 
     function incrementQuatity(){
        setQuatity( prev => prev + 1)
     }

     function decrementQuatity(){
        setQuatity( prev => prev - 1)
     }
    
     
     function handleChange(e){  
        const {name, value} = e.target
        setSelectedOption(prev => ({
            ...prev,
            [name]:value
        }))
     }

     function preceedToPayment(e){
        e.preventDefault()
        console.log(e.target.value)
     }


    return(
        <div className="card--interested">
            <div className="box-one-interested">
                <div className="interested-product-img">
                     <img src={`/assets/${previewProduct.img}`} alt="image of the interested product" /> 
                </div>
                <div className="interested-product-shipping">
                    <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
                    <small>🚚 FREE SHIPPI</small>
                </div>
            </div>

            <div className="second--card">

                <div className="quatity--price">

                    <h3>{`${previewProduct.name} Candleaf®`}</h3>

                    <div className="selected">

                        <div className="general--quatity">
                            <p className="interested--price">{previewProduct.price}</p>
                            <label>Quantity</label>
                            <div className="quatity">
                                <p onClick={incrementQuatity}>+</p>
                                <p>{quatity}</p>
                                <p onClick={decrementQuatity}>-</p>
                            </div>
                        </div>

                        <div>
                            <form action="#">
                                <div className="onetime">
                                    <input 
                                        type="radio" 
                                        name="purchaseType" 
                                        value="oneTime" 
                                        id="purchase--oneTime"
                                        onChange={handleChange}
                                     />
                                    <label htmlFor="purchase--oneTime">One time purchase</label>
                                </div>

                                <div className="subcriptions">
                                    <input 
                                        type="radio"
                                        name="purchaseType" 
                                        value="subscription" 
                                        id="subscribe"  
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="subscribe">Subcribe and delivery every</label>
                                    <select name="weeksOfSubcription" id="weeksForsubscription">
                                        <option value="4weeks">4 weeks</option>
                                        <option value="3weeks">3 weeks</option>
                                        <option value="2weeks">2 weeks</option>
                                        <option value="1weeks">1 weeks</option>
                                    </select>
                                    <p>Subscribe now and get the 10% of discount on every recurring order. The discount will be applied at checkout. <span>See details</span></p>
                                </div>
                                <div>
                                     <button className="cart--button left" onClick={preceedToPayment}>Proceed to payment</button>
                                     <button className="cart--button" onClick={addToCart}>+ Add to Cart</button>
                                </div>
                            </form>
                            <div className="product--details">
                                <p><span>Wax:</span>{previewProduct.wax}</p>
                                <p><span>Fragrance:</span>{previewProduct.fragance}</p>
                                <p><span>Burning Time:</span>{previewProduct. burningTime} <span>Dimension:</span>{previewProduct.dimension} <span>Weight:</span>{previewProduct.weight}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}