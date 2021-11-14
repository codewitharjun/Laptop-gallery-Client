import React from "react";
import { Button, Card, Col, Nav } from "react-bootstrap";
import { useParams } from "react-router";
import { HashLink } from "react-router-hash-link";
 
const Details = () => {
    const {productid} = useParams(); 

    return (
        <div>Products id is {productid}</div>
    );
};

export default Details;
