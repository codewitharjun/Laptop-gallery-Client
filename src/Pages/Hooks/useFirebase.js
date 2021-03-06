import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, getIdToken, signOut } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../Login/firebase/firebase.init";

// initialize firebase from firebase
initializeAuthentication();

const useFirebade = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [authToken, setAuthToken] = useState('');

    const auth = getAuth();
    
    // register user start
    const registerUser = (name, email, password, history ) => {
        setIsLoading(true);
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setError('')
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to  database
            console.log(email, name)
            saveUser(email, name, 'POST');
            setUserName(name);
            history.replace('/');
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    };
    // save user to database 
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName}; 
        console.log(user);

        fetch('https://sheltered-badlands-24462.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    };
    // Add User Name
    const setUserName = name => {
        updateProfile(auth.currentUser, {
            displayName: name})
        .then( () => {
        }).catch((error) => {
            setError(error);
        })
    }

    // register user start
    // LogIn start

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setError('')
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }
    
    // LogIn end
    // LogIn with Google start 
    
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setError('')
            const user = result.user;
            saveUser( user.email, user.displayName, 'PUT' );
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    // LogIn with Google end
    // observe user state change start

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setAuthToken(idToken);
                })
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // observe user state change end

    // Load Admin start

    useEffect(() => {
        fetch(`https://sheltered-badlands-24462.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Load Admin end
    // Logout start

        const logOut = () => {
            setIsLoading(true);
            signOut(auth)
            .then(()=>{})
            .finally(() => setIsLoading(false));
        }

    // Logout end
    
    return {
        user,
        admin,
        authToken,
        error,
        setError,
        isLoading,
        registerUser,
        loginUser,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebade;