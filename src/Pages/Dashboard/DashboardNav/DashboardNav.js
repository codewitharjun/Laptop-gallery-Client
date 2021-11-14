import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardNav = () => {

    
    return (
        <div className="dash-nav">
            <Link to={"/Home"}><Button >Home</Button></Link>
        </div>
    );
};


export default DashboardNav;