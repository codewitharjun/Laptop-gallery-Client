import React from "react";
import { Button, Card, Col, Nav, Row, Spinner } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

const Product = ({item, addToCart}) => {
    const {_id, productName, display, ram, ssd, price, description, img, reating} = item;
    const {isLoading} = useAuth();
    console.log(isLoading);

    return (
        <div>
            {!isLoading && <Nav.Link className="p-lr-20" as={HashLink} to={`/details/${_id}`}>
                <Col>
                    <Card  bg="Light">
                        <Card.Img className="p-2" variant="top" src={img} />
                        <br/>
                        <Card.Body>
                            <Card.Title className="package">{productName}</Card.Title>
                            <Card.Text className="package text-muted">
                                <Row>
                                    <Col sm={6}>Ram: {ram}GB DDR-4</Col>
                                    <Col sm={6}>Disc: {ssd}GB</Col>
                                </Row>
                            </Card.Text>
                            <Card.Text className="package text-muted" variant="primary">
                                <Row>
                                    <Col sm={6}>Price: ${price}</Col>
                                    <Col sm={6}>{reating}</Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Nav.Link>}
           {isLoading && <Spinner animation="grow" variant="info" />}
        </div>
    );
    
};

export default Product;