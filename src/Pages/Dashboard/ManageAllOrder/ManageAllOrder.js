import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const ManageAllOrder = () => {
    const {user, isLoading} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            console.log(data)
            console.log(orders)
        });
    }, []);

    if(orders.length > 0 ) {
        console.log(orders)
    } else {
        console.log(orders)
    }

    
    return (
        <div>
            <h2>Manage All Orders is :</h2>

            {!isLoading && <Table striped bordered hover>
                {/* <tbody>
                    {orders.map( order => {<tr>
                        <td>img</td>
                        <td>name</td>
                        <td><Button>Update Order</Button></td>
                        <td><Button>Cancke Order</Button></td>
                    </tr>})}
                </tbody> */}
            </Table>}
           {isLoading && <Spinner animation="grow" variant="info" />}
        </div>
    );
};


export default ManageAllOrder;