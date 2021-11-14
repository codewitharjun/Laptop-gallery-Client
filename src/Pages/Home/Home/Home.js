import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import NavCarousel from "../NavCarousel/NavCarousel";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <NavCarousel></NavCarousel>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;