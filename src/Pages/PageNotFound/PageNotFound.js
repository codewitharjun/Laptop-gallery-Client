import React from "react";
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div>
            <img  src= "https://i.ibb.co/sjMmVhw/404.png" alt=""/>
            <br/>
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default PageNotFound;