import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const DashboardMenu = () => {

    const url = '/dashboard';
    const { user, admin } = useAuth();

    return (
        <div className="mt-20">
            <Link style={{textDecoration: 'none'}} className="my-2" to='/'>Back to home</Link>
            {!admin && <div className="flex-colum">
                <Link style={{textDecoration: 'none'}} className="my-2" to={`${url}`}>Manage Orders</Link>
                <Link style={{textDecoration: 'none'}} className="my-2" to={`${url}/shopreating`}>Reating us</Link>
            </div>}
            {admin && <div className="flex-colum">
                <Link style={{textDecoration: 'none'}} className="my-2" to={`${url}`}>Manage All Orders</Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/addadmin`}>Add Admin</Link>
                <Link style={{textDecoration: 'none'}} className="my-2" to={`${url}/addproduct`}>Add Product</Link>
            </div>}
        </div>
    );
};


export default DashboardMenu;