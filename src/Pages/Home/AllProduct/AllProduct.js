import React from "react";
import { Button, Card, Col, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const AllProduct = ({item, addToCart}) => {
    const {_id, productName, display, ram, ssd, price, description, img, reating} = item;
    
    console.log(item, _id)

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="package">{productName}</Card.Title>
                    <Card.Text className="package">{display}</Card.Text>
                    <Card.Text className="package">{ram}</Card.Text>
                    <Card.Text className="package">{ssd}</Card.Text>
                    <Card.Text className="package">{description}</Card.Text>
                    <Card.Text className="package">{reating}</Card.Text>
                    <Card.Text className="package">{price}</Card.Text>
                    <div  className="package-btn">
                        <Nav.Link as={HashLink} to={`details/${_id}`}>
                            <Button variant="warning">More Details</Button>
                        </Nav.Link>
                        <Nav.Link as={HashLink} to={`buynaw/${_id}`}>
                            <Button variant="warning">Buy Now</Button>
                        </Nav.Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllProduct;

// .package {
//     margin: 0;
//     padding: 2px 0;
// }

// .package-btn {
//     display: flex;
//     justify-content: space-around;
//     padding-top: 12px;
// }