import React, {useContext} from "react"
import { QuantityContext } from "../App"
import { useNavigate} from "react-router-dom"


export default function Shipping(){
const { setIsShippingView } = useContext(QuantityContext)
const navigate = useNavigate()

const navigateToPayment = () =>{
    navigate("/payment-progress/payment")
    setIsShippingView(false) 
}

    return(
        <div>
            <h1>shippping</h1>
            <button onClick={navigateToPayment}>pay</button>
        </div>  
    )
} 