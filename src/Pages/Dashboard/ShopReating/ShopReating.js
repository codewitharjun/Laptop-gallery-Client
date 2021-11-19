import React, {useState} from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";

const ShopReating = () => {

    const {user, isLoading, authToken} = useAuth();
    const [userReating, setUserReating] = useState('');
    const history = useHistory()
    
    console.log(user);
    console.log(user.displayName);
    const initialReating = {displayName: user.displayName, img: user.photoURL, email: user.email}
    console.log(initialReating);
    console.log(user.UserImpl);
    
    const handleCollectData = e => {
        const field = (e.target.name);
        const value = (e.target.value);
        const newUserReating = {...userReating};
        newUserReating[field] = value;
        setUserReating(newUserReating);
        // e.preventDefault();
    }
    
    const handleAddReating = e => {
        console.log(initialReating);
        const allReatingData = {...initialReating, ...userReating}
        fetch('https://sheltered-badlands-24462.herokuapp.com/reating', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(allReatingData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Thanks for reating us.')
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
                            <h2 className="text-primary">Reationg Our Shops</h2>
                            <form onSubmit={handleAddReating}>
                                <br/>
                                <br/>
                                <input type="number" name="reating" onBlur={handleCollectData} style={{width: "50%"}} placeholder ="Give a reating number out of 5" required />
                                <br/>
                                <br/>
                                <textarea type="text" name="message" onBlur={handleCollectData} style={{width: "50%"}} placeholder ="Lave a reating message" required/>
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

export default ShopReating;