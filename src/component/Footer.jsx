import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    const styleForLinks = {
        textDecoration: "none",
        color: "#fff"
    }
    const specialLinks = {
        textDecoration: "none",
        color: "#56B280"
    }
    return(
        <footer>
            <hr />
            <div className="footer">
                <div className="footer--complete">
                    <div className="footer--logo">
                        <img src="/assets/lastlogofooter.png" alt="logo for candle nature" />
                        <h4>Candleaf</h4>
                    </div>
                    <p>Your natural candle made for your home and for your wellness.</p>
                </div>
                <div className="footer--properties">
                    <div className="footer--links">
                        <ul>
                            <li><Link style={specialLinks} to="#">Discovery</Link></li>
                            <li><Link style={styleForLinks} to="#">New season</Link></li>
                            <li><Link style={styleForLinks} to="#">Most searched</Link></li>
                            <li><Link style={styleForLinks} to="#">Most selled</Link></li>
                        </ul>
                    </div>

                    <div className="footer--links">
                        <ul>
                            <li><Link style={specialLinks} to="#">About</Link></li>
                            <li><Link style={styleForLinks} to="#">Help</Link></li>
                            <li><Link style={styleForLinks} to="#">Shipping</Link></li>
                            <li><Link style={styleForLinks} to="#">Afiliate</Link></li>
                        </ul>
                    </div>

                    <div className="footer--links">
                        <ul>
                            <li><Link style={specialLinks} to="#">Info</Link></li>
                            <li><Link style={styleForLinks} to="#">Contact us</Link></li>
                            <li><Link style={styleForLinks} to="#">Privacy Policies</Link></li>
                            <li><Link style={styleForLinks} to="#">Term & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}