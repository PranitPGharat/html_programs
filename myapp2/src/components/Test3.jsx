import React, { useState, useEffect } from "react";

const LoginPage = () => {
    const [username, setUsername] = useState(""); // State for username
    const [message, setMessage] = useState(""); // State for login message

    // useEffect to log whenever the username changes
    useEffect(() => {
        console.log(`Username updated: ${username}`);
    }, [username]); // Runs only when username changes

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent page reload
        setMessage(username === "student" ? "Login Successful!" : "Invalid Username!");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: "8px", marginBottom: "10px" }}
                />
                <br />
                <button type="submit" style={{ padding: "8px 12px" }}>
                    Login
                </button>
            </form>
            <p style={{ color: message === "Login Successful!" ? "green" : "red" }}>
                {message}
            </p>
        </div>
    );
};

export default LoginPage;
