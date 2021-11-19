import React, { useEffect, useState } from "react";

const LoadAllData = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect( () => {
        fetch('https://sheltered-badlands-24462.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => {
            setLaptops(data)
            });
    }, []);
    
    return (
        laptops
    );
};


export default LoadAllData;