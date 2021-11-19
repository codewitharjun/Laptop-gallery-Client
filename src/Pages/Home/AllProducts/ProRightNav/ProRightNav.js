import React from "react";
import { Row, Form } from "react-bootstrap";

const ProRightNav = ({items}) => {

    return (
        <div>
            <br/>
            <br/>
            <Row className="bulleting-container">
                <h4 className="text-success">Peocessor Type</h4>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Intel"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <br/>
                        <Form.Check
                            inline
                            label="Raizon"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
                </Form>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row className="bulleting-container">
                <h4 className= "text-success">Ram Capaciti</h4>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="4GB"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                        <br/>
                    <Form.Check
                        inline
                        label="8GB"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <br/>
                    <Form.Check
                        inline
                        label="16GB"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
                </Form>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row className="bulleting-container">
                <h4 className= "text-success">Hard Disc</h4>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="SSD"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <br/>
                    <Form.Check
                        inline
                        label="HDD"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
                </Form>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row className="bulleting-container">
                <h4 className= "text-success">Disc Capacity</h4>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="128GB"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                        <br/>
                    <Form.Check
                        inline
                        label="256GB"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <br/>
                    <Form.Check
                        inline
                        label="512GB"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
                </Form>
            </Row>
        </div>
    );
};

export default ProRightNav;