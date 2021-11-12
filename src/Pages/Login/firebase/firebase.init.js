import { initializeApp } from "firebase/app";
import firebaseConfig from "./ferebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
};

export default initializeAuthentication;