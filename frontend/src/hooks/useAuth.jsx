import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    // Ensure the hook is used within an AuthProvider
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }


    return context;
};