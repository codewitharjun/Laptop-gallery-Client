import React, { useEffect, useState } from "react";
import { Button, Card, Col, Nav, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { HashLink } from "react-router-hash-link";
import NavBar from "../NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../Hooks/useAuth";
 
const Details = () => {
    const {productid} = useParams();
    const {isLoading} = useAuth();
    const [cullectData, setCullectData] = useState({})

    useEffect( () => {
        const url = `https://sheltered-badlands-24462.herokuapp.com/laptops/${productid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCullectData(data);
            console.log(data);
        });
    }, []);

    
    const {productName, price, img, reating, display, ram, ssd, description, _id} = cullectData;

    return (
        <div className= "bg-lred2">
            <NavBar></NavBar>
                {!isLoading && <div>
                    <div>
                        <img src={img} alt=''/>
                    </div>
                    <h5 className="my-2">Product Name: <span className="pr-4">{productName}</span></h5>
                    <h5>Product Price: <span className="pr-4">${price}</span></h5>
                    <h5 className="my-2">Product Reating: <span className="pr-4">{reating} out of 5</span></h5>
                    <h5>Display: <span className="pr-4">{display} inch</span></h5>
                    <h5 className="my-2">Ram: <span className="pr-4">{ram}GB DDR-4</span></h5>
                    <h5>Hard Disc: <span className="pr-4">{ssd}GB</span></h5>
                    <h5 className="my-2">Others Details: <span className="pr-4">{description}</span></h5>
                    <Nav.Link className="my-2" as={HashLink} to={`/buynaw/${_id}`}>
                        <Button variant="warning">Buy Now</Button>
                    </Nav.Link>
                </div>}
           {isLoading && <Spinner animation="grow" variant="info" />}
            <Footer></Footer>
        </div>
    );
};

export default Details;
