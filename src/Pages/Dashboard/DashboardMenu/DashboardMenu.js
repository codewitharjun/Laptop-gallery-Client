import React from "react";
import { Button, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import {
    useRouteMatch
} from "react-router-dom";




const DashboardMenu = () => {
    
    const url = '/dashboard';
    const { user } = useAuth();

    
    return (
        <div className="mt-20">
            {!user?.email && <Link>Manage Orders</Link>}
            {user?.email && <div className="flex-colum">
                <Link style={{textDecoration: 'none'}} className="my-2" to={`${url}`}>Dashboard</Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/addadmin`}>Add Admin</Link>
                <Link style={{textDecoration: 'none'}} className="my-2" to={`${url}/addproduct`}>Add Product</Link>
            </div>}
        </div>
    );
};


export default DashboardMenu;