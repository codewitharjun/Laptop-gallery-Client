import React, { createContext } from "react";
import useFirebade from "../Hooks/useFirebase";

export const AuthContext =  createContext();

 const AuthProvider = ({children}) => {
     const allContext= useFirebade();

     return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
     )
 }

 export default AuthProvider;