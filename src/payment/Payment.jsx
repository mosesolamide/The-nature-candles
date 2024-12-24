import React from "react"
import { BsCreditCardFill } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

export default function Payment(){
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"))

    const navigate = useNavigate()
    
    const navigateToDone = () =>{
        navigate("/payment-progress/done")
        setIsShippingView(false) 
    }
    return(
        <form>
             <div className="orderDetails">
                <p>Contact <span>{`${orderDetails.emailOrPhone}`}</span></p>
                <hr />
                <p>Ship to <span>{`${orderDetails.address}, ${orderDetails.postal}, ${orderDetails.city}, ${orderDetails.country}`}</span></p>
                <hr />
                <p>Method <span>Standard Shipping - </span> FREE</p>
            </div>
            <div className="Payment-method">
                <h1>Payment method</h1>
                <div>
                    <div className="card-header">
                        <BsCreditCardFill size={31} style={{ color: '#56B280'}} />
                        <p>Credit Card</p>
                    </div>
                    <div className="credit-card">
                        <input type="text" className="input-card" placeholder="Card Number" required />
                        <input type="text" className="input-card" placeholder="Holder Name" required/>
                        <div className="cvv">
                            <input type="text"  placeholder="Expiration (MM/YY)" required/>
                            <input type="text" placeholder="CVV"  required/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tax-information">
                <h2>Tax Information</h2>
                <div className="tax-form">
                    <input type="text" placeholder="VAT number (optional)" required />
                    <input type="text"  placeholder="PEC (optional)" required/>
                </div>
            </div>
             <div className="back-shipping">
                <Link to="/payment-progress/shipping" className="back">Back to shipping</Link>
                <button onClick={navigateToDone}>Pay Now</button>
            </div>
        </form>  
    )
} 