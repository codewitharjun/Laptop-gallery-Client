import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import OrderItem from "../OrderItem/OrderItem";

const ManageOrder = () => {

    const {user, isLoading, authToken} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        const url = `https://sheltered-badlands-24462.herokuapp.com/orders/${user.email}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${authToken}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        });
    }, [user.email]);
    console.log(orders);

    
    return (
        <div>
            <h2 className = "text-primary mrgn-hdr">Manage Your Orders</h2>
            
            <div className= "Carditem list-bg">
                <h5>Image</h5>
                <h5>Name</h5>
                <h5>Price</h5>
                <h5>Status</h5>
                <h5>Cancel Orders</h5>
            </div>

                {!isLoading && orders.length > 0 && orders.map( order => <OrderItem 
                    key = {order._id} 
                    order={order}
                ></OrderItem>)}



            {isLoading && <Spinner animation="grow" variant="info" />}
        </div>
    );
};


export default ManageOrder;