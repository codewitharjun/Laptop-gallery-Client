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
            <div className="allImg">
                <img className="imgstl" src="https://i.ibb.co/GMzFRch/ls.jpg" alt='' />
            </div>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;