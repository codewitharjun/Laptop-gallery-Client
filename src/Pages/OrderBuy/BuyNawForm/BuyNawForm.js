import React from "react";
import NavBar from "../../Home/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const BuyNawForm = () => {

    const handleButySubmit = data => {
        console.log(data);
        // sent data to server in order iterms
    }

    return (
        <div className="add-package">
            <NavBar />
            <div>
                <h2>Add Your </h2>
                <form onSubmit={handleButySubmit}>
                    <input type="text" onBlur={handleColectData} name="name" disabled placeholder={pkgname} value={pkgname} />
                    <input type="email" name="email" disabled placeholder={email} value={email} />
                    <input type="text" name="price" disabled placeholder={price} value={price} />
                    <input type="text" onBlur={handleColectData} name="bank"  placeholder= "Bank Name" required />
                    <input type="text" onBlur={handleColectData} name="account"  placeholder= "Account Number" required />
                    <input type="number" onBlur={handleColectData} name="passcode"  placeholder= "Pin Number" required />
                    <input type="text" name="date" disabled placeholder={date} value={date} />
                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BuyNawForm;