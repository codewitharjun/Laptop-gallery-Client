import React, {useState} from "react";
import NavBar from "../../Home/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const BuyNow = () => {

    const [orderData, setOrderData] = useState({});

    const handleCollectData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const neworderData = {...orderData};
        neworderData[field] = value;
        setOrderData(neworderData);
        console.log(neworderData);
    }

    const handleBuySubmit = e => {
        e.preventDefault();
        console.log(orderData);
        // sent data to server in order iterms
    }

    return (
        <div>
            <NavBar />
            <div className="add-package">
                <br/>
                <br/>
                <h2>Add your Shipping and Pament information</h2>
                <form onSubmit={handleBuySubmit}>
                    {/* <input type="text" name="name"  style={{width: "50%"}} disabled placeholder={pkgname} value={pkgname} />
                    <input type="email" name="email"  style={{width: "50%"}} disabled placeholder={email} value={email} />
                    <input type="text" name="price"  style={{width: "50%"}} disabled placeholder={price} value={price} /> */}
                    <br/>
                    <textarea type="text" onBlur={handleCollectData} name="shippingAddress"  style={{width: "50%"}} placeholder= "Shipping Address" required />
                    <br/>
                    <br/>
                    <input type="text" onBlur={handleCollectData} name="bankName"  style={{width: "50%"}} placeholder= "Bank Name" required />
                    <br/>
                    <br/>
                    <input type="text" onBlur={handleCollectData} name="accountNumber"  style={{width: "50%"}} placeholder= "Account Number" required />
                    <br/>
                    <br/>
                    <input type="text" onBlur={handleCollectData} name="pinCode"  style={{width: "50%"}} placeholder= "Pin Number" required />
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