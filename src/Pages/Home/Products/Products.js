import React, {useState, useEffect} from "react";
import { Col, Row , Spinner} from "react-bootstrap";
import Product from "../Product/Product";
import useAuth from "../../Hooks/useAuth";
import LoadAllData from "../../Shared/LoadAllData/LoadAllData";

const Products = () => {

    const {user, isLoading} = useAuth()
    // const {products} = LoadAllData();

    const [laptops, setLaptops] = useState([]);

    useEffect( () => {
        fetch('https://sheltered-badlands-24462.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => {
            setLaptops(data)
            });
    }, []);

    const addToCart = () => {
        alert('Add to cart click');
    };

let count = 0;

    return (
        <div className="mt-4 bg-lred3">
            <h1 className="text-primary my-4 mrgn-hdr">Top Rated Laptop</h1>
            <Row xs={1} md={2} className="w-100">
                <Col md="4" lg="3" bg="primary">
                    <Row className="bulleting-container">
                    <div className="allImg">
                        <img className="imgstl" src="https://i.ibb.co/FzKr08p/image.png" alt="" ></img>
                    </div>
                    <div className="allImg">
                        <img className="imgstl" src="https://i.ibb.co/pKF87FN/image-6.png" alt="" ></img>
                    </div>
                    <div className="allImg">
                        <img className="imgstl" src="https://i.ibb.co/tD3Z9h9/image-4.png" alt="" ></img>
                    </div>
                    <div className="allImg">
                        <img className="imgstl" src="https://i.ibb.co/CM07pHc/image-1.png" alt="" ></img>
                    </div>
                    </Row>
                </Col>
                <Col md="8" lg="9">
                    <Row xs={1} md={2} lg={3} className="package-container">
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
// I am chenging