import React, {useContext,useState,useEffect} from "react"
import { QuantityContext } from "../App"
import { useNavigate, Link} from "react-router-dom"

export default function Details(){
const { setIsDetailView } = useContext(QuantityContext)
const [formsData, setFormsData] = useState({
    emailOrPhone:"",
    newsletter:false,
    fname:"",
    secondName:"",
    address:"",
    shippingNote:"",
    postal:"",
    city:"",
    province:"",
    country:"",
    saveInfo:false
})

useEffect(()=>{
    const randomId = []
    for(let i = 0; i < 5; i++){
        const generateId = Math.floor(Math.random()*9)
        randomId.push(generateId)
    }

    const newId = randomId.join("")

    setFormsData(prevData => ({
        ...prevData,
        orderId: newId
    }))
},[])

const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormsData(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value
    }))
}
const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate("shipping")
        setIsDetailView(false)
}
localStorage.setItem("orderDetails", JSON.stringify(formsData))
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="contact">
                    <div className="details--first">
                        <h1>Contact</h1>
                        <p>Do you have an account? <Link to="#" className="link"> Login</Link></p>
                    </div>
                    <input
                        type="text" 
                        name="emailOrPhone" 
                        placeholder="Email or mobile phone number" 
                        className="mobile---email"
                        onChange={handleChange}
                        value={formsData.emailOrPhone}
                     />  
                    <div className="checkbox--container">
                        <input 
                            id="checkbox--" 
                            name="newsletter"
                            type="checkbox"
                            onChange={handleChange}
                            checked={formsData.newsletter}
                         />
                        <label htmlFor="checkbox--">Add me to Candleaf newsletter for a 10% discount</label>
                    </div>
                </div>
                <div className="shipping--address">
                    <h2>Shipping Address</h2>
                    <div className="wide">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="fname" 
                            required
                            onChange={handleChange}
                            value={formsData.fname}
                        />
                        <input 
                            type="text" 
                            className="second--name" 
                            placeholder="Second Name" 
                            name="secondName" 
                            required
                            onChange={handleChange}
                            value={formsData.secondName}
                        />
                    </div>
                    <input 
                        type="text" 
                        className="wide" 
                        placeholder="Address and number" 
                        name="address" 
                        required
                        onChange={handleChange}
                        value={formsData.address}
                    />
                    <input 
                        type="text" 
                        className="wide" 
                        placeholder="Shipping note (optional)" 
                        name="shippingNote" 
                        onChange={handleChange}
                        value={formsData.shippingNote}
                    />
                    <div className="wide second--wide">
                        <input 
                            type="text" 
                            placeholder="City" 
                            name="city" 
                            required
                            onChange={handleChange}
                            value={formsData.city}
                        />
                        <input 
                            type="text" 
                            placeholder="Postal Code" 
                            id="postal" 
                            name="postal" 
                            required
                            onChange={handleChange}
                            value={formsData.postal}
                        />
                        <select
                            name="province" 
                            id="province" 
                            className="province" 
                            required 
                            onChange={handleChange}
                            value={formsData.province}
                         >
                            <option value="" disabled>Pick a province</option>
                            <option value="abia">Abia</option>
                            <option value="adamawa">Adamawa</option>
                            <option value="akwa-ibom">Akwa Ibom</option>
                            <option value="anambra">Anambra</option>
                            <option value="bauchi">Bauchi</option>
                            <option value="bayelsa">Bayelsa</option>
                            <option value="benue">Benue</option>
                            <option value="borno">Borno</option>
                            <option value="cross-river">Cross River</option>
                            <option value="delta">Delta</option>
                            <option value="ebonyi">Ebonyi</option>
                            <option value="edo">Edo</option>
                            <option value="ekiti">Ekiti</option>
                            <option value="enugu">Enugu</option>
                            <option value="gombe">Gombe</option>
                            <option value="imo">Imo</option>
                            <option value="jigawa">Jigawa</option>
                            <option value="kaduna">Kaduna</option>
                            <option value="kano">Kano</option>
                            <option value="katsina">Katsina</option>
                            <option value="kebbi">Kebbi</option>
                            <option value="kogi">Kogi</option>
                            <option value="kwara">Kwara</option>
                            <option value="lagos">Lagos</option>
                            <option value="nasarawa">Nasarawa</option>
                            <option value="niger">Niger</option>
                            <option value="ogun">Ogun</option>
                            <option value="ondo">Ondo</option>
                            <option value="osun">Osun</option>
                            <option value="oyo">Oyo</option>
                            <option value="plateau">Plateau</option>
                            <option value="rivers">Rivers</option>
                            <option value="sokoto">Sokoto</option>
                            <option value="taraba">Taraba</option>
                            <option value="yobe">Yobe</option>
                            <option value="zamfara">Zamfara</option>
                            <option value="fct">Federal Capital Territory (FCT)</option>
                        </select>
                    </div>
                    <select 
                        name="country" 
                        id="country" 
                        className="province wide padding" 
                        required  
                        onChange={handleChange}
                        value={formsData.country}
                    >
                          <option value="" disabled required>Pick a country</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="usa">United State</option>
                        <option value="uk">United Kingdom</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Australia">Australia</option>
                    </select>
                    <div className="checkbox--container">
                        <input 
                            id="save-info-checkbox" 
                            type="checkbox" 
                            name="saveInfo" 
                            className="checkbox-"
                            onChange={handleChange}
                            value={formsData.saveInfo}
                        />
                        <label htmlFor="save-info-checkbox">Save this information for a future fast checkout</label>
                    </div>
                </div>
                <div className="back-shipping">
                    <Link to="/cart" className="back">Back to cart</Link>
                    <button type="submit">Go to shipping</button>
                </div>
            </form>
        </div>  
    )
} 