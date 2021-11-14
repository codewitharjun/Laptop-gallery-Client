import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {

    const laptops = [
        {
            id: 1,
            productName: 'Apple Mac 2017pro',
            display: "14 inch",
            ram: "8GB DDR-4",
            ssd: "256GB",
            price: 1111.99,
            description: "Display 14 inch. Ram 8GB DDR-4, SSD 256GB",
            img: "https://i.ibb.co/tXHnDNQ/lap1.jpg",
            reating: 4.8
        },
        
        {
            id: 2,
            productName: 'Acer Aspire 14pro',
            display: "14 inch",
            ram: "8GB DDR-4",
            ssd: "256GB",
            price: 699.74,
            description: "Display 14 inch. Ram 8GB DDR-4, SSD 256GB",
            img: "https://i.ibb.co/y6MRPzz/Lap2.jpg",
            reating: 4.0
        },
        {
            id: 3,
            productName: 'MSI pro',
            display: "14 inch",
            ram: "8GB DDR-4",
            ssd: "256GB",
            price: 782.74,
            description: "Display 14 inch. Ram 8GB DDR-4, SSD 256GB",
            img: "https://i.ibb.co/ZBrNJ5S/Lap3.jpg",
            reating: 4.1
        },
        {
            id: 4,
            productName: 'Hp vestro',
            display: "14 inch",
            ram: "8GB DDR-4",
            ssd: "256GB",
            price: 886.74,
            description: "Display 14 inch. Ram 8GB DDR-4, SSD 256GB",
            img: "https://i.ibb.co/6vLSw95/Lap4.jpg",
            reating: 4.1
        },
        {
            id: 5,
            productName: 'Lenovo Yega3',
            display: "14 inch",
            ram: "8GB DDR-4",
            ssd: "256GB",
            price: 722.74,
            description: "Display 14 inch. Ram 8GB DDR-4, SSD 256GB",
            img: "https://i.ibb.co/W2mtCBY/Lap6.jpg",
            reating: 4.3
        },
        {
            id: 6,
            productName: 'Dell latituite pro',
            display: "14 inch",
            ram: "8GB DDR-4",
            ssd: "256GB",
            price: 999.99,
            description: "Display 14 inch. Ram 8GB DDR-4, SSD 256GB",
            img: "https://i.ibb.co/DMHPZLz/Lap7.jpg",
            reating: 4.7
        }
        
    ];

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
                        {
                            laptops.map( item => {
                                count += 1;
                                if(count < 5) {
                                    return <Product 
                                   key={item.id} 
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