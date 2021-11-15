import React, {useState, useEffect} from "react";
import { Col, Row , Spinner} from "react-bootstrap";
import Product from "../Product/Product";
import useAuth from "../../Hooks/useAuth";

const Products = () => {

    const {isLoading} = useAuth()
    const [laptops, setLaptops] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => {
            setLaptops(data)
            console.log(data)
            });
    }, []);

    const addToCart = () => {
        alert('Add to cart click');
    };

    let count = 0;

    return (
        <div className="mt-4">
            <h1 className="my-4">Top Rated Laptop</h1>
            <Row xs={1} md={2} className="w-100">
                <Col md="4" lg="3" bg="primary">
                    <Row className="bulleting-container">
                        <h2>Left sight</h2>
                    </Row>
                </Col>
                <Col md="8" lg="9">
                    <Row xs={1} md={2} lg={3} className="package-container g-4">
                        {isLoading && <Spinner animation="grow" variant="info" />}
                        {!isLoading && laptops.map( item => {
                                count += 1;
                                if(count < 5) {
                                    return <Product 
                                   key={item._id} 
                                   item={item} 
                                   addToCart={addToCart}
                                   ></Product>
                                } else {
                                    return ;
                                }
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Products;