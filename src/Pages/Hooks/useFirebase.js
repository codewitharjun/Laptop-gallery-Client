import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../Login/firebase/firebase.init";

// initialize firebase from firebase
initializeAuthentication();

const useFirebade = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const auth = getAuth();

    // Start Register  New Account 

    const handleNameChange = e => {
        setName(e.target.value);
    }
    console.log(name);
    
    const handleEmailChange = e => {
       setEmail(e.target.value);
    }
    console.log(email);
    
    const handlePasswordChange1 = e => {
        setPassword1(e.target.value);
    }
    console.log(password1);
    
    const handlePasswordChange2 = e => {
        setPassword2(e.target.value);
    }
    
    const handleRegistration = e => {
        e.preventDefault();
        setIsLoading(true);
        
        if (password1 !== password2) {
            setError('Yoru Password did not match.')
            return;
        };
        
        if (password2.length < 6) {
            setError('Password must be at least 6 characters long.')
            return;
        };
        
        createUserWithEmailAndPassword(auth, email, password1)
        .then(result => {
            const user = result.user;
            setError('')
            setUserName();
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
            setIsLoading(false);
        })
        .finally(() => setIsLoading(false))
    }

    // Add User Name
    const setUserName =() => {
        updateProfile(auth.currentUser, {displayName: name})
        .then( result => {

        })
    }

    // LogIn 
    const handleLogIn = e => {
        e.preventDefault();
        setIsLoading(true);
        console.log(email, password1);
        signInWithEmailAndPassword(auth, email, password1)
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
        setIsLoading,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange1,
        handlePasswordChange2,
        handleLogIn,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebade;