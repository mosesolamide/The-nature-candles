import React from "react"
import PaymenHeader from "./PaymentHeader"
import { Outlet } from "react-router-dom"

export default function PaymentLayout(){
    return(
        <div className="paymentBody">
            <PaymenHeader />
            <Outlet />
        </div>
    )
}