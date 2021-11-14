import React from "react";
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
            <div>
                <DashboardMenu url={url}></DashboardMenu>
                <div>
                    {
                        user?.mail? <ManageAllOrder></ManageAllOrder> :
                        <ManageOrder></ManageOrder>
                    }
                </div>
            </div>
        </div>
    );
};


export default DashboardHome;