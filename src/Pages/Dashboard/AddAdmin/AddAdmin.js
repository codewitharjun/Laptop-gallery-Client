import React, {useState} from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";

const AddAdmin = () => {

    const [email, setEmail] = useState('');
    const {authToken, isLoading} = useAuth();
    const history = useHistory();


    const handleCollectData = e => {
        setEmail(e.target.value);
    }
    
    const handleAddAdmin = e => {
        console.log(email);
        const user = {email};
        // sent data to server for Add an Item 
        fetch('https://sheltered-badlands-24462.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Add Admin successfully')
            history.replace('/dashboard');
        })
        e.preventDefault();
}
    
    return (
        <div className="bg-lred2">
            <DashboardNav></DashboardNav>
            <Row xs={1} md={2} className="w-100">
                <Col md="3" lg="2" className="bg-gray">
                    <DashboardMenu className="flex-colum"></DashboardMenu>
                </Col>
               {!isLoading && <Col md="8" lg="9">
                    <Row className="package-container g-4">
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
                </Col>}
                {isLoading && <Spinner animation="grow" variant="info" />}
            </Row>
        </div>
    );
};

export default AddAdmin;