import React from "react";
import NavBar from "../NavBar/NavBar";
import NavCarousel from "../NavCarousel/NavCarousel";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <NavCarousel></NavCarousel>
            <Products></Products>
        </div>
    );
};

export default Home;