import React from "react";
import useAuth from "../../Hooks/useAuth";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";


const AddProduct = () => {

    const {user} = useAuth();

    
    return (
        <div>
            <DashboardNav></DashboardNav>
            <div>
                <DashboardMenu></DashboardMenu>
                <div>
                    <h2>This is Add product page</h2>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;