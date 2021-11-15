import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardNav from "../DashboardNav/DashboardNav";


const AddProduct = () => {

    const {user} = useAuth();
    const initial = {reating: "0"}
    const [addItem, setAddItem] = useState(initial);


    const handleCollectData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddItem = {...addItem};
        newAddItem[field] = value;
        setAddItem(newAddItem);
    }
    
    const handleAddProduct = e => {
        e.preventDefault();
        console.log(addItem);
        // sent data to server for Add an Item
        fetch('http://localhost:5000/laptops', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Add product successfully');
        })
    }
    
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Row xs={1} md={2} className="w-100">
                <Col md="3" lg="2" className="bg-gray">
                    <DashboardMenu className="flex-colum"></DashboardMenu>
                </Col>
                <Col md="8" lg="9">
                    <Row xs={1} md={2} lg={3} className="package-container g-4">
                        <div className="add-package">
                            <br/>
                            <br/>
                            <h2 className="text-primary">Add New Product :</h2>
                            <form onSubmit={handleAddProduct}>
                                <br/>
                                <br/>
                                <input type="text" name="productName" onBlur={handleCollectData} style={{width: "50%"}} placeholder ="Product Name" />
                                <br/>
                                <br/>
                                <input type="text" name="display" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Product Display" required />
                                <br/>
                                <br/>
                                <input type="text" name="ram" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Pdoduct Ram" required/>
                                <br/>
                                <br/>
                                <input type="text" name="ssd" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Pdoduct SSD" required/>
                                <br/>
                                <br/>
                                <input type="text" name="description" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Pdoduct Description" required />
                                <br/>
                                <br/>
                                <input type="text" name="price" onBlur={handleCollectData} style={{width: "50%"}} placeholder= "Pdoduct Price" required />
                                <br/>
                                <br/>
                                <input type="text" name="img" onBlur={handleCollectData} style={{width: "50%"}} placeholder= "Product image Hosting Link" required />
                                <br/>
                                <br/>
                                <input type="text" name="reating" onBlur={handleCollectData} style={{width: "50%"}} placeholder= "Pdoduct Ratting : 0"  disabled />
                                <br/>
                                <br/>
                                {/* <input type="text" name="date" disabled placeholder={date} value={date} /> */}
                                <input type="submit" placeholder= "Add Product" variant="warning" />
                                <br/>
                                <br/>
                                <br/>
                            </form>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default AddProduct;


{/* 
            <DashboardNav></DashboardNav>
            <div>
                <DashboardMenu></DashboardMenu>
                <div>
                    <br/>
                    <br/>
                    <h2 className="text-primary">Add New Product :</h2>
                    <form onSubmit={handleAddProduct}>
                        <br/>
                        <br/>
                        <input type="text" name="productName" onBlur={handleCollectData} style={{width: "50%"}} placeholder ="Product Name" />
                        <br/>
                        <br/>
                        <input type="text" name="display" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Product Display" required />
                        <br/>
                        <br/>
                        <input type="text" name="ram" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Pdoduct Ram" required/>
                        <br/>
                        <br/>
                        <input type="text" name="ssd" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Pdoduct SSD" required/>
                        <br/>
                        <br/>
                        <input type="text" name="description" onBlur={handleCollectData} style={{width: "50%"}} placeholder="Pdoduct Description" required />
                        <br/>
                        <br/>
                        <input type="text" name="price" onBlur={handleCollectData} style={{width: "50%"}} placeholder= "Pdoduct Price" required />
                        <br/>
                        <br/>
                        <input type="text" name="img" onBlur={handleCollectData} style={{width: "50%"}} placeholder= "Product image Hosting Link" required />
                        <br/>
                        <br/>
                        <input type="text" name="reating" onBlur={handleCollectData} style={{width: "50%"}} placeholder= "Pdoduct Ratting : 0"  disabled />
                        <br/>
                        <br/>
                        {/* <input type="text" name="date" disabled placeholder={date} value={date} /> */}
                //         <input type="submit" placeholder= "Add Product" variant="warning" />
                //         <br/>
                //         <br/>
                //         <br/>
                //     </form>
                // </div> 