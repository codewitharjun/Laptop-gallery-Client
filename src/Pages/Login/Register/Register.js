import React, {useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
    const [regiData, setRegiData] = useState({});
    const {registerUser, signInUsingGoogle, setIsLoading, isLoading, setError, error} = useAuth();

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
        registerUser(regiData.name, regiData.email, password)
    }

    const handleGoogleLogIn = () => {
        setIsLoading(true);
        signInUsingGoogle()
        .then((result) => {
            setError('')
            // history.push(redirect_url)
       })
       .catch(error =>{
           setError(error.message);
       })
       .finally(() => setIsLoading(false))
    };


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

                <p className="text-danger">{error}</p>
                <p>Allready You Have Account? <Link style={{textDecoration: 'none'}} to="/login">Login Here</Link></p>
               <p className="mt-5 text-success">You can also Register using Google</p>
               <Button className="mb-5" onClick={handleGoogleLogIn} variant="warning"><i className="fab fa-google google-style"></i></Button>
            </div>}
            {isLoading && <Spinner animation="grow" variant="info" />}
        </div>
    );
 };

 export default Register;