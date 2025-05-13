import { createContext, useEffect, useState, useCallback } from "react";
import { AuthService } from "../services/authService";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const fetchUser = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            try {
                const { user, error, message } = await AuthService.getCurrentUser();
                if (user) setUser(user);
                if (error) setError(error);
                if (message) setMessage(message);
            } catch (err) {
                setUser(null);
                setError(err,"Something went wrong while fetching user.");
            }
        } else {
            setUser(null);
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const login = async (email, password) => {
        setLoading(true);
        setError(null);
        setMessage(null);

        const { user, error, message } = await AuthService.login(email, password);

        setUser(user);
        setError(error);
        setMessage(message);
        setLoading(false);
    };

    const logout = async () => {
        setLoading(true);
        setError(null);
        setMessage(null);

        const { error, message } = await AuthService.logout();
        setError(error);
        setMessage(message);
        setUser(null);
        setLoading(false);
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
                error,
                message,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
