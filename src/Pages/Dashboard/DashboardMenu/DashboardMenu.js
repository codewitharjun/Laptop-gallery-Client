import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import {
    useRouteMatch
} from "react-router-dom";




const DashboardMenu = () => {
    
    let { url } = useRouteMatch();
    const { user } = useAuth();

    
    return (
        <div> 
            {user?.email?
                <Link to={`${url}/manageorder`}><Button color="inherit">Manage Orders</Button></Link> :
                <Link to={`${url}/order`}><Button color="inherit">Manage Orders</Button></Link>
            }
            {user?.email && <div>
                <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <Link to={`${url}/addadmin`}><Button color="inherit">Add Admin</Button></Link>
                <Link to={`${url}/addproduct`}><Button color="inherit">Add Product</Button></Link>
            </div>}
        </div>
    );
};


export default DashboardMenu;