import React from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageOrder from "../ManageOrder/ManageOrder";


const DashboardHome = ({url}) => {
    
    const {user} = useAuth();
    
    console.log(user.email);
    
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Row xs={1} md={2} className="w-100">
                <Col md="3" lg="2" className="bg-gray">
                    <DashboardMenu className="flex-colum" url={url}></DashboardMenu>
                </Col>
                <Col md="8" lg="9">
                    <Row xs={1} md={2} lg={3} className="package-container g-4">
                        {!user.mail ? <ManageAllOrder></ManageAllOrder> :
                            <ManageOrder></ManageOrder>
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};


export default DashboardHome;