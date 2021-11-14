import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../Login/firebase/firebase.init";

// initialize firebase from firebase
initializeAuthentication();

const useFirebade = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const registerUser = (name, email, password) => {
        setIsLoading(true);
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setError('')
            setUserName(name);
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    // Add User Name
    const setUserName = name => {
        console.log(name);
        updateProfile(auth.currentUser, {displayName: name})
        .then( result => {

        })
    }

    // LogIn 
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setError('')
            // history.push(redirect_url)
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }


    // LogIn with Google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
    }
    
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, [])

    
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(() => setIsLoading(false));
    }
    
    return {
        user,
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