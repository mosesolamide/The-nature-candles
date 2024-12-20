import React, {useContext} from "react"
import { QuantityContext } from "../App"
import { useNavigate, Link} from "react-router-dom"


export default function Shipping(){
const { setIsShippingView } = useContext(QuantityContext)
const navigate = useNavigate()

const navigateToPayment = () =>{
    navigate("/payment-progress/payment")
    setIsShippingView(false) 
}
const orderDetails = JSON.parse(localStorage.getItem("orderDetails"))
console.log(orderDetails)

    return(
        <>
            <div className="orderDetails">
                <p>Contact <span>{`${orderDetails.emailOrPhone}`}</span></p>
                <hr />
                <p>Ship to <span>{`${orderDetails.address}, ${orderDetails.postal}, ${orderDetails.city}, ${orderDetails.country}`}</span></p>
            </div> 
            <div className="shipping-method">
                <h1>Shipping method</h1>
                <div className="shipping-method-radio">
                    <input type="radio" />
                    <p>Standard Shipping</p>
                    <b>Free</b>
                </div>
            </div>
           <div className="back-shipping">
                <Link to="/payment-progress" className="back">Back to details</Link>
                <button onClick={navigateToPayment}>Go to Payment</button>
            </div>
        </> 
    )
} 