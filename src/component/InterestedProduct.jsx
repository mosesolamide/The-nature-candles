import React ,{useEffect}from "react"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import {QuantityContext } from "../App"
import { motion } from "framer-motion"

export default function InterestedProduct(){

    const { incrementQuantity, decrementQuantity, quantities,buttonVariants } = useContext(QuantityContext);
    
     const location = useLocation()

     const previewProduct = location.state

     const [selectedOption, setSelectedOption] = useState({
        purchaseType:""
     })
     
     const [isAdded, setIsAdded] = useState(false)    
     

     useEffect(() => {
        // existing cart in the localstorage
        const existingCarts = JSON.parse(localStorage.getItem("cart")) || []

        // check again after rerender if there is another items that are the same in the existing cart
        const productInCart = existingCarts.find(item => item.id === previewProduct.id)

        if (productInCart) {
            setIsAdded(true) // Disable the "Add to Cart" button if the product is in the cart
        }
    }, [])

     function addToCart(e){
        e.preventDefault()
        // get what isi in the localstorage currently
        const existingCart = JSON.parse(localStorage.getItem("cart")) || []

        // take the existing cart in the localstorage and store the current one
        const updateCart = [...existingCart, {...previewProduct}]

        // update the storage with the current added cart
        localStorage.setItem("cart", JSON.stringify(updateCart))

        // update the cart state
        // setCart(updateCart)

        // set isAdded back to true after the user click on the button 
        setIsAdded(true)

        window.alert("Product Added!!!")
     }


    //  function to increment the quattity of product and decrement it also     
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
                    <small>🚚 FREE SHIPPING</small>
                </div>
            </div>

            <div className="second--card">

                <div className="quatity--price">

                    <h3>{`${previewProduct.name} Candleaf®`}</h3>

                    <div className="selected">

                        <div className="general--quatity">
                            <p className="interested--price">${previewProduct.price}</p>
                            <label>Quantity</label>
                            <div className="quatity">
                                <p onClick={() => incrementQuantity(previewProduct.id)}>+</p>
                                <p> {quantities[previewProduct.id] || 1}</p>
                                <p onClick={() => decrementQuantity(previewProduct.id)}>-</p>
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
                                     <motion.button 
                                        className="cart--button left" 
                                        onClick={preceedToPayment}
                                        variants={buttonVariants}
                                        whileHover="hover" // Trigger the hover animation
                                     >
                                        Proceed to payment
                                     </motion.button>
                                     <motion.button 
                                        className="cart--button" 
                                         style={isAdded ? { backgroundColor: "#e0e0e0" , cursor: "not-allowed"} : {}} 
                                         disabled={isAdded} 
                                         onClick={addToCart}
                                         variants={buttonVariants}
                                         whileHover={ !isAdded ? "hover": ""} // Trigger the hover animation
                                         >
                                        + Add to Cart
                                    </motion.button>
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