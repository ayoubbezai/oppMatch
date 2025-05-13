import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../assets/background.jpg";
import { useAuth } from "../routes/useAuth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, message, loading, user } = useAuth();
    const navigate = useNavigate();

    // Redirect if user is already authenticated
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div
            className="w-full bg-cover bg-top flex items-center min-h-screen justify-center px-4 pt-16"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="w-full max-w-md bg-white/5 backdrop-blur-[40px] border border-[#BB9BFF]/20 rounded-2xl shadow-[0_0_25px_5px_rgba(187,155,255,0.2)] p-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary-300">
                    Login to Your Account
                </h2>

                {error && (
                    <div className="mb-4 p-2 bg-red-500/20 text-red-300 rounded-lg text-sm">
                        {message || "Login failed"}
                    </div>
                )}

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#BB9BFF]"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#BB9BFF]"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-4 bg-[#BB9BFF] hover:bg-[#a083e9] text-[#0B0121] font-semibold py-2 rounded-lg transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>

                <p className="text-sm text-center mt-6 text-white/70">
                    Don't have an account?{" "}
                    <span className="text-[#BB9BFF] cursor-pointer hover:underline">
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;