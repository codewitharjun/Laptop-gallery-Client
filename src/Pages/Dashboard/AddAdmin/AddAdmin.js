import React from "react";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";

const AddAdmin = () => {

    
    return (
        <div>
            <DashboardNav></DashboardNav>
            <div>
                <DashboardMenu></DashboardMenu>
                <div>
                    <h2>This is Admin</h2>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;