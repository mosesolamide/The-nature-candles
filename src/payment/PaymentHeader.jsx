import React , {useContext}from "react"
import { QuantityContext } from "../App"

export default function PaymentLayout(){

    const { isDetailsViewed,viewed,style,isShippingViewed } = useContext(QuantityContext)
    return(
        <>
            <header>
                <div className="leaf--logo">
                    <img className="img-logo-leaf" src="/assets/icon.png" alt="Image of candle logo" />
                    <h3>Candleaf</h3>
                </div>
                <div>
                    <ul className="progress">
                        <li style={style}>Cart  ></li>
                        <li style={isDetailsViewed? viewed: style }>Details   ></li>
                        <li style={isShippingViewed? viewed: style}>Shipping  ></li>
                        <li>Payment</li>
                    </ul>
                </div>
            </header>
        </>
    )
}