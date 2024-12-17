import React, {useContext} from "react"
import { QuantityContext } from "../App"
import { useNavigate} from "react-router-dom"

export default function Details(){
     const { setIsDetailView } = useContext(QuantityContext)

    const navigate = useNavigate()
    const navigateToShipping = () =>{
        navigate("shipping")
        setIsDetailView(false)
      }

    return(
        <div>
            <h1>moses</h1>
            <button onClick={navigateToShipping}>ship</button>
        </div>  
    )
} 