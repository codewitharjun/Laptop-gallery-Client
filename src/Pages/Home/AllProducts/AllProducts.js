import React, {useState, useEffect} from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";
import ProRightNav from "../AllProducts/ProRightNav/ProRightNav";
import useAuth from "../../Hooks/useAuth";
import Product from "../Product/Product";

const AllProducts = () => {

    const {user, isLoading} = useAuth()
    // const {laptops} = LoadAllData();
    
    const [laptops, setLaptops] = useState([]);

    useEffect( () => {
        fetch('https://sheltered-badlands-24462.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => {
            setLaptops(data)
        });
    }, [user.email]);

    const addToCart = item => {
        alert('Add to cart click');
    };
    console.log(laptops);

    return (
        <div className= "bg-lred3">
            <div className="mt-4">
                <div className="allImg">
                    <img className="imgstl" src="https://i.ibb.co/4Vn42Qx/1f8b727fd27e298a.jpg" alt="" ></img>
                </div>
                <h1 className="text-primary pt-3 my-4" >Our Laptop Gallery</h1>
                <Row xs={1} md={2} className="w-100">
                    <Col className="bg-lftbr" md="4" lg="3" bg="primary">
                            <h3 className="text-primary pt-2">Select by catagory</h3>
                            <ProRightNav></ProRightNav>
                    </Col>
                    <Col md="8" lg="9">
                        <Row xs={1} md={2} lg={3} className="package-container">
                            {!isLoading &&
                                laptops.map( item => <Product
                                    key={item._id} 
                                    item={item} 
                                    addToCart={addToCart}
                                    ></Product>)
                            }
                            {isLoading && <Spinner animation="grow" variant="info" />}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AllProducts;