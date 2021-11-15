import React, {useState, useEffect} from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";
import useAuth from "../../Hooks/useAuth";

const AllProducts = () => {

    const {isLoading} = useAuth()
    const [laptops, setLaptops] = useState([]);

    useEffect( () => {
        fetch('https://sheltered-badlands-24462.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => {
            setLaptops(data)
            console.log(data)
        });
    }, []);

    const addToCart = item => {
        alert('Add to cart click');
        console.log(item);
    };

    return (
        <div>
            <div className="mt-4">
            <h1 className="my-4">Our Laptop Gallery</h1>
            <Row xs={1} md={2} className="w-100">
                <Col md="4" lg="3" bg="primary">
                    <Row className="bulleting-container">
                        <h2>Left sight</h2>
                    </Row>
                </Col>
                <Col md="8" lg="9">
                    <Row xs={1} md={2} lg={3} className="package-container g-4">
                        {!isLoading &&
                            laptops.map( item => <AllProduct
                                key={item._id} 
                                item={item} 
                                addToCart={addToCart}
                                ></AllProduct>)
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