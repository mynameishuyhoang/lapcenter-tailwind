import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";

const Home = () => {
    return(
        <div className="homeContainer">
            <Navbar/>
            <h1>Home Page</h1>
            <ProductCard/>
        </div>
    )
}

export default Home