import React from "react";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddProduct from "../AddProduct/AddProduct";
import DashboardHome from "../DashboardHome/DashboardHome";

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    // let newpath = '';
    // if(newpath === '') {
    //     newpath = path;
    // }

    
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome url={url}></DashboardHome>
                </Route>
                <Route path={`${path}/addadmin`}>
                    <AddAdmin></AddAdmin>
                </Route>
                <Route path={`${path}/addproduct`}>
                    <AddProduct></AddProduct>
                </Route>
            </Switch>
        </div>
    );
};


export default Dashboard;
