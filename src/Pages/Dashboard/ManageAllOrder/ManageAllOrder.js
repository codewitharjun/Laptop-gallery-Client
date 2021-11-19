import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import OrderItem from "../OrderItem/OrderItem";

const ManageAllOrder = () => {

    const {user, admin, isLoading, authToken} = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect( () => {
        const url = `https://sheltered-badlands-24462.herokuapp.com/orders`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${authToken}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        });
    }, [user.email, orders]);

    return (
        <div>
            <h2 className= "text-primary mrgn-hdr">Manage All Orders </h2>

            <div className= "Carditem list-bg">
                <h5>Image</h5>
                <h5>Name</h5>
                <h5>Price</h5>
                <h5>Status</h5>
                <h5>Cancel Orders</h5>
            </div>

                {!isLoading && orders.length > 0 && orders.map( order => <OrderItem 
                    key = {order._id} 
                    order = {order}
                ></OrderItem>)}

           {isLoading && <Spinner animation="grow" variant="info" />}
        </div>
    );
};


export default ManageAllOrder;