import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import AllProducts from "../AllProducts/AllProducts";
const Laptop = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Laptop;