import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CiUser } from "react-icons/ci"
import { motion } from "framer-motion"


export default function Header(){
    const styleForLinks = {
        textDecoration: "none",
        marginRight: "20px",
        color: "#000",
        fontSize:".8em",
        fontWeight:"500"
    }
    return( 
        <motion.nav className="nav-leaf-logo"
            initial={{y:-250}}
            animate={{y:1}}
            transition={{delay:0.5 , type:"spring", stiffness: 120}}
        >
            <div className="leaf--logo">
                <img className="img-logo-leaf" src="/assets/icon.png" alt="Image of candle logo" />
                <h3>Candleaf</h3>
            </div>
            <div>
                <ul className="leaf-logo-ul-links">
                    <li><Link to="." style={styleForLinks}>Home</Link></li>
                    <li><Link to="#" style={styleForLinks}>About</Link></li>
                    <li><Link to="#" style={styleForLinks}>Contact us</Link></li>
                </ul>
            </div>
            <div className="nav--icons">
                <Link style={{color:"#000"}} to="/cart"><AiOutlineShoppingCart size={21} /></Link>
                <Link style={{color:"#000"}} to="#" id="user"><CiUser size={21} /></Link>
            </div>
        </motion.nav>
    )
}