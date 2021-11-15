import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";

const AddAdmin = () => {

    const [email, setEmail] = useState('');


    const handleCollectData = e => {
        setEmail(e.target.value);
    }
    
    const handleAddAdmin = e => {
        e.preventDefault();
        // console.log(data);
        console.log(email);
        alert('Add Admin successfully');
        // // sent data to server for Add an Item
        // fetch('http://localhost:5000/laptops', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addItem)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }
    
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Row xs={1} md={2} className="w-100">
                <Col md="3" lg="2" className="bg-gray">
                    <DashboardMenu className="flex-colum"></DashboardMenu>
                </Col>
                <Col md="8" lg="9">
                    <Row xs={1} md={2} lg={3} className="package-container g-4">
                        <div className="add-package">
                            <br/>
                            <br/>
                            <h2 className="text-primary">Add a new Admin</h2>
                            <form onSubmit={handleAddAdmin}>
                                <br/>
                                <br/>
                                <input type="email" name="email" onBlur={handleCollectData} style={{width: "50%"}} placeholder ="Enter Admin Email" />
                                <br/>
                                <br/>
                                <input type="submit" variant="warning" />
                            </form>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default AddAdmin;