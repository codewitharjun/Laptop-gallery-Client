import React from "react";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddProduct from "../AddProduct/AddProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import ShopReating from "../ShopReating/ShopReating";
import Home from "../../Home/Home/Home";


const Dashboard = () => {

    let { path, url } = useRouteMatch();
    // let newpath = '';
    // if(newpath === '') {
    //     newpath = path;
    // }

    
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path={path}>
                    <DashboardHome url={url}></DashboardHome>
                </Route>
                <Route exact path={`${path}/shopreating`}>
                    <ShopReating></ShopReating>
                </Route>
                <AdminRoute path={`${path}/addadmin`}>
                    <AddAdmin></AddAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addproduct`}>
                    <AddProduct></AddProduct>
                </AdminRoute>
            </Switch>
        </div>
    );
};


export default Dashboard;
