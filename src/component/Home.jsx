import React from "react"
import { arrOfProducts } from "/src/component/candleProductData"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Home(){
   
    const candleProducts = arrOfProducts.map( (item, index) =>(
            <article className="products--items" key={index}>
                <Link to={`candle-product/${item.id}`} state={item}>
                    <img src={`assets/${item.img}`} alt="images of candles" />
                </Link>
                <div className="price--name--tag">
                    <p>{`${item.name}`}</p>
                    <b>{`$${item.price}`}</b>
                </div>
           </article>
    ))

    return(
        <>
            <motion.section
                initial={{opacity:-1000}}
                animate={{opacity:1}}
                transition={{duration:2}}
            >
                    <img className="topImage" src="/assets/topImageHome.png" alt="image of candles and leafs" />
                    <div className="the-nature-candle-container">
                        <h2>The nature candle</h2>
                        <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                        <button className="dicovery-home-button">Discovery our collection</button>
                    </div>
            </motion.section>

            <section className="secondSection">
                <div className="product--header">
                    <b>Products</b>
                    <p>Order it for you or for your beloved ones</p>
                </div>
                <div className="product--flex">
                    {candleProducts}                  
                </div>
            </section>

            <section className="section-three-container">
                <article className="clean--fragrant">
                    <h4>Clean and fragrant soy wax</h4>
                    <p>Made for your home and for your wellness</p>
                    <ul>
                        <li><span>Eco-sustainaspanle:</span>All recyclable materials, 0% C02 emissions</li>
                        <li><span>Hyphoallergic:</span>100% natural, human friendly ingredients</li>
                        <li><span>Handmade:</span>All candles are craftly made with love</li>
                        <li><span>Long burning:</span>No more waste. Created for last long</li>
                    </ul>
                    <button className="learn--more">Learn more</button>
                </article>
                <div className="mockup--image">
                    <img src="/assets/mockups.png" alt="mockup image" />
                </div>
            </section>

            <section className="section--testimonial">

                <h5>Testimonials</h5>
                <p className="testimonial--sub">Some quotes  from our happy customers</p>

                <div className="user--container">
                    <article className="user--box">
                        <img  className="bg--img" src="/assets/firstBeing.png" alt="picture of luisa" />
                        <div className="star--rating">
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/StarHalf.png" alt="stars" />
                        </div>
                        <p>“I love it! No more air fresheners”</p>
                        <small>Luisa</small>
                    </article>

                    <article className="user--box">
                        <img className="bg--img" src="/assets/bg@2x.png" alt="picture of luisa" />
                        <div className="star--rating">
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                        </div>
                        <p>“Raccomended for everyone”</p>
                        <small>Eduardo</small>
                    </article>

                    <article className="user--box">
                        <img className="bg--img" src="/assets/bg.png" alt="picture of luisa" />
                        <div className="star--rating">
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/Star.png" alt="stars" />
                            <img src="/assets/StarHalf.png" alt="stars" />
                        </div>
                        <p>“Looks very natural, the smell is awesome”</p>
                        <small>Mart</small>
                    </article>
                </div>
            </section>

            <section className="last--section">
                <div className="popular-product">
                    <h6>Popular</h6>
                    <p>Our top selling product that you may like</p>
                </div>
                <div className="popular--product">
                    {candleProducts.slice(0,4)}
                </div>
            </section>
        </>
    )
}