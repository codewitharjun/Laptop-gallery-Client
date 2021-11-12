import React from "react";
import { Button} from "react-bootstrap";
import { Link, useLocation, useHistory} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

 const Login = () => {

    const { setIsLoading, handleEmailChange, handlePasswordChange1, handleLogIn, signInUsingGoogle, setError, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then((result) => {
            setError('')
            history.push(redirect_url)
       })
       .catch(error =>{
           setError(error.message);
       })
       .finally(() => setIsLoading(false))
    };

    // const handleEmailLogIn = () => {
    //     handleLogIn()
    //     .then(result => {
    //         setError('')
    //         history.push(redirect_url)
    //     })
    //     .catch(error =>{
    //         setError(error.message);
    //     })
    //     .finally(() => setIsLoading(false))
    // };

    return (
       <div className="bg-lred">
           <div>
               <h2 className="text-primary pt-3">Please Login</h2>
               <form onSubmit={handleLogIn}>
                   <input onBlur={handleEmailChange} className="my-2" type="email" name="" id="email" placeholder="Your Email"/>
                   <br/>
                   <input onBlur={handlePasswordChange1} type="password" name="" id="password" placeholder="Enter Password"/>
                   <br/>
                   <input className="my-2" type="submit" name="" value="Submit"/>
               </form>
               <p className="text-danger">{error}</p>
               <p>New to Laptop Gallery? <Link to="/register">Register Here</Link></p>
               <p className="mt-5 text-success">You can also Login using Google</p>
               <Button className="mb-5" onClick={handleGoogleLogIn} variant="warning"><i className="fab fa-google google-style"></i></Button>
           </div>
       </div>
    );
};

export default Login;