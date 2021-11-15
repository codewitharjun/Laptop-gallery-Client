import React, {useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
    const [regiData, setRegiData] = useState({});
    const {user, registerUser, isLoading, setError, error} = useAuth();
    const history = useHistory();

    const handleCollectData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegiData = {...regiData};
        newRegiData[field] = value;
        setRegiData(newRegiData);
    }

    const handleRegistration = e => {
        e.preventDefault();
        const password = regiData.password;
        if (password !== regiData.password2) {
            setError('Yoru Password did not match.')
            return;
        };
        
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
            return;
        };
        console.log(regiData);
        registerUser(regiData.name, regiData.email, password, history)
    }


    return (

        <div className="bg-lred">
            <h2 className="text-primary pt-3">Register: Create Account</h2>
            {!isLoading && <div>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleCollectData} type="text" name="name" id="" className="my-2" placeholder="Your Name" required/>
                    <br/>
                    <input onBlur={handleCollectData} type="email" name="email" id="" placeholder="Your Email" required/>
                    <br/>
                    <input onBlur={handleCollectData} type="password" name="password" id="" className="my-2" placeholder="Enter Password" required/>
                    <br/>
                    <input onBlur={handleCollectData} type="password" name="password2" id="" placeholder="Re-Type Password" required/>
                    <br/>
                    <input className="my-2" type="submit" name="" id="" value="Submit"/>
                </form>

                {error && <Alert variant="danger" style={{width: "50%"}} >
                    <p>{error}</p>
                </Alert>}

                <p>Allready You Have Account? <Link to="/login">Login Here</Link></p>
            </div>}
            {isLoading && <Spinner animation="grow" variant="info" />}
            {user?.email && <Alert variant="success" >
                <p>Hi {user.name}, you register successfully</p>
            </Alert>}
        </div>
    );
 };

 export default Register;