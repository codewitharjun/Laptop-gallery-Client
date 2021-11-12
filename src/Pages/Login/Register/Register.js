import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
    const { handleNameChange, handleEmailChange, handlePasswordChange1, handlePasswordChange2, handleRegistration, error } = useAuth();


    return (

        <div className="bg-lred">
            <div>
                <h2 className="text-primary pt-3">Register: Create Account</h2>

                <form onSubmit={handleRegistration}>
                    <input onBlur={handleNameChange} className="my-2" type="text" name="" id="" placeholder="Your Name" required/>
                    <br/>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required/>
                    <br/>
                    <input onBlur={handlePasswordChange1} className="my-2" type="password" name="" id="" placeholder="Enter Password" required/>
                    <br/>
                    <input onBlur={handlePasswordChange2} type="password" name="" id="" placeholder="Re-Type Password" required/>
                    <br/>
                    <input className="my-2" type="submit" name="" id="" value="Submit"/>
                </form>

                <p className="text-danger">{error}</p>
                <p>Allready You Have Account? <Link to="/login">Login Here</Link></p>
            </div>
        </div>
    );
 };

 export default Register;