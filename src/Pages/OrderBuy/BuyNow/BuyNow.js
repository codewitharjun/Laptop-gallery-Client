import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import NavBar from "../../Home/NavBar/NavBar";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";

const BuyNow = () => {
    const {productid} = useParams(); 
    const id = productid;
    const {user} = useAuth();
    const [orderData, setOrderData] = useState({});
    const status = "Pending";
    let itemName;
    let itemImg;
    let itemId;

    
    
    
    useEffect( () => {
        const url = `http://localhost:5000/laptops/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            itemName = (data.productName);
            itemImg = (data.img);
            itemId = (data._id);
        });
    }, []);
    
    
    
    const handleCollectData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const neworderData = {...orderData};
        neworderData[field] = value;
        setOrderData(neworderData);
    }

    const handleBuySubmit = e => {
        const initialData = {productName: itemName, orderStatus: status, email: user.email, productId: itemId, img: itemImg}
        e.preventDefault();
        const allData = {...initialData, ...orderData}
        console.log(initialData);
        console.log(orderData);
        console.log(allData);
        alert('Thanks for buying with us')
        // sent data to server in order iterms
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <NavBar />
            <div className="add-package">
                <br/>
                <br/>
                <h2 className="text-primary">Add your Shipping and Pament information</h2>
                <form onSubmit={handleBuySubmit}>
                    <br/>
                    <br/>
                    <input type="text" name="name" style={{width: "50%"}} placeholder={user.displayName} disabled/>
                    <br/>
                    <br/>
                    <input type="email" name="email" style={{width: "50%"}} placeholder={user.email} disabled />
                    <br/>
                    <br/>
                    <input type="text" name="price" style={{width: "50%"}} disabled />
                    <br/>
                    <br/>
                    <textarea type="text" onBlur={handleCollectData} name="shippingAddress"  style={{width: "50%"}} placeholder= "Shipping Address" required />
                    <br/>
                    <br/>
                    <input type="text" name="bankName"  style={{width: "50%"}} placeholder= "Bank Name" required />
                    <br/>
                    <br/>
                    <input type="text" name="accountNumber"  style={{width: "50%"}} placeholder= "Account Number" required />
                    <br/>
                    <br/>
                    <input type="text" name="pinCode"  style={{width: "50%"}} placeholder= "Pin Number" required />
                    <br/>
                    <br/>
                    {/* <input type="text" name="date" disabled placeholder={date} value={date} /> */}
                    <input type="submit"  variant="warning" />
                    <br/>
                    <br/>
                    <br/>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BuyNow;