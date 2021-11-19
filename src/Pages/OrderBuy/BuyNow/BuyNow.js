import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import { Button,  Nav, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useHistory, useParams } from "react-router";
import NavBar from "../../Home/NavBar/NavBar";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";

const BuyNow = () => {
    const {productid} = useParams(); 
    const id = productid;
    const {user, isLoading} = useAuth();
    const history = useHistory();
    const [orderData, setOrderData] = useState({});
    const [cullectData, setCullectData] = useState({});
    const status = "Pending";
    
    useEffect( () => {
        const url = `https://sheltered-badlands-24462.herokuapp.com/laptops/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCullectData(data);
        });
    }, []);
    
    const handleCollectData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const neworderData = {...orderData};
        neworderData[field] = value;
        setOrderData(neworderData);
    }

    // const successAlert = () => {
    //     const AlertDismissibleExample = () => {
    //         return (
    //         <>
    //             <Alert show={show} variant="success">
    //                 <Alert.Heading>How's it going?!</Alert.Heading>
    //                 <hr />
    //                 <div className="d-flex justify-content-end">
    //                     <Button onClick={() => setShow(false)} variant="outline-success">
    //                     Close me y'all!
    //                     </Button>
    //                 </div>
    //             </Alert>
    //         </>
    //         );
    //     }
    //   render(<AlertDismissibleExample />);
    // }

    const handleBuySubmit = e => {
        const initialData = {productName: cullectData.productName, price: cullectData.price,  orderStatus: status, email: user.email, productId: id, img: cullectData.img}
        e.preventDefault();
        const allData = {...initialData, ...orderData}
        // alert('Thanks for buying with us')
        // sent data to server in order iterms
        fetch('https://sheltered-badlands-24462.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                alert('Thaks for buing', cullectData.productName);
                history.replace('/');
            }
        })
    }

    return (
        <div className="bg-lred2">
            <NavBar />
            {!isLoading && <div className="add-package">
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
                    <input type="submit"  variant="warning" />
                    <br/>
                    <br/>
                    <br/>
                </form>
            </div>}
            {isLoading && <Spinner animation="grow" variant="info" />}
            <Footer />
        </div>
    );
};

export default BuyNow;