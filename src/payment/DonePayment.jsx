import React from "react"
import { IoCheckmarkDoneCircle } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

export default function DonePayment(){
const orderDetails = JSON.parse(localStorage.getItem("orderDetails"))

const nav = useNavigate()
const backHome = ()=>{
        nav("/")
        localStorage.removeItem("cart")    
      }
    
    return(
        <div className="done-payment">
            <IoCheckmarkDoneCircle size={160} style={{ color: '#56B280', margin: "20px 0" }}/>
            <b>Payment Confirmed</b>
            <small>ORDER #{`${orderDetails.orderId}`}</small>
            <p>
                Thank you {`${orderDetails.fname}`} for buying Candleaf. 
                The nature si grateful to you. Now that your order is confirmed it will be ready to be shiped in 2 days.
                Please check your inboxin the future for your order updates.
            </p>
            <div className="back-shipping">
                <button type="button" onClick={backHome}>Back to shopping</button>
            </div>
            <Link className="print">Print reciept</Link>
        </div>
    )
}