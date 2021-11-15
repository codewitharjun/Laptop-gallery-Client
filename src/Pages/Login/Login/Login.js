import React, {useState} from "react";
import { Button, Spinner} from "react-bootstrap";
import { Link, useLocation, useHistory} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    
    const [loginData, setLoginData] = useState({});
    const { setIsLoading, isLoading, loginUser, signInUsingGoogle, setError, error} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleCollectData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        setLoginData(newLogInData);
    }

    const handleEmailLogIn = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

        const handleGoogleLogIn = () => {
            signInUsingGoogle(location, history)
        };


    return (
       <div className="bg-lred">
            <h2 className="text-primary pt-3">Please Login</h2>
           {!isLoading &&  <div>
               <form onSubmit={handleEmailLogIn}>
                   <input onBlur={handleCollectData} className="my-2" type="email" name="email" id="email" placeholder="Your Email"/>
                   <br/>
                   <input onBlur={handleCollectData} type="password" name="password" id="password" placeholder="Enter Password"/>
                   <br/>
                   <input className="my-2" type="submit" name="" value="Login"/>
               </form>
               <p className="text-danger">{error}</p>
               <p>New to Laptop Gallery? <Link style={{textDecoration: 'none'}} to="/register">Register Here</Link></p>
               <p className="mt-5 text-success">You can also Login using Google</p>
               <Button className="mb-5" onClick={handleGoogleLogIn} variant="warning"><i className="fab fa-google google-style"></i></Button>
           </div>}
           {isLoading && <Spinner animation="grow" variant="info" />}
       </div>
    );
};

export default Login;