import React from "react";
import { Carousel } from "react-bootstrap";

const NavCarousel = () => {
    return (
        <div className="mb-4">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= "https://i.ibb.co/QXNXXnP/crsl1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= "https://i.ibb.co/cbpS9yp/crsl2.jpg"
                        alt="Third slide"
                    />
                    
                    <Carousel.Caption>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default NavCarousel;