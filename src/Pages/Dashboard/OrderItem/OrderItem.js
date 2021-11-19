import React from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const OrderItem = ({order}) => {
    const {admin} = useAuth();
    const { productName, price, orderStatus, img, _id} = order;

    
    
    const cancleOrder = (id) => {
      console.log('cancel order id:', id);
      // sent request to server for delete an order
      const url = `https://sheltered-badlands-24462.herokuapp.com/orders/${id}`;
      console.log(url);
      fetch(url, {
          method: 'DELETE',
        })
      .then(res => {
          console.log(res)
      })
      .then( 
        alert('Order deleted successfully.')
        )
      }

    const handleOrder = () => {
       alert('Hi sorry, I am working this update order status button')
    }

    return (
      <div className= "Carditem list-bg2">
          <img src = {img} alt = ""/>
          <h5>{productName}</h5>
          <h5>${price}</h5>
          {admin && <h5><button onClick={ () => handleOrder(_id)}>{orderStatus}</button></h5>}
          {!admin && <h5>{orderStatus}</h5>}
          <h5><button onClick={ () => cancleOrder(_id)}>Cancel Order</button></h5>
        </div>
    );
};

export default OrderItem;