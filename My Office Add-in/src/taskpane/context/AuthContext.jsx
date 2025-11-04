import React, { createContext, useState, useContext } from "react";
import { login } from "../components/services/azureAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        const account = await login();
        if (account) setUser(account);
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
