import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Welcome from "./Welcome";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Retrieve stored admin data from local storage
        const adminData = JSON.parse(localStorage.getItem("adminData")) || [];
      
        // Check if adminData exists and username/password match
        const foundAdmin = adminData.find(admin => admin.username === username && admin.password === password);
        if (foundAdmin) {
            localStorage.setItem("adminLoggedIn", JSON.stringify({ username }));
            // Redirect to the specified route after successful login
            navigate("/AdminDashboard");
        } else {
            // Display error message or handle invalid credentials
            alert("Invalid username or password");
        }
    };
    

    return (
        <>
            <Welcome />
            <br /><br />
            <div className="login-form">
                <h2>Admin Login</h2>
                <input type="text" placeholder="Username" value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />

                <center><button onClick={handleLogin}>Login</button></center>
                Don't Have an Account <Link to="/AdminReg">Registration Here</Link>
            </div>
        </>
    );
}
export default AdminLogin;
