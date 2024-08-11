import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Welcome from "./Welcome";

function AdminReg() {
    const initialFormData = {
        id: "",
        name: "",
        email: "",
        contact: "",
        username: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Retrieve stored admin data from local storage
        let adminData = JSON.parse(localStorage.getItem("adminData")) || [];

        // Check if username already exists
        const existingAdmin = adminData.find(admin => admin.username === formData.username);
        if (existingAdmin) {
            alert("Username already exists. Please choose a different username.");
            return;
        }

        // Add new admin data to the array
        adminData.push({
            ...formData,
            registrationDate: new Date().toISOString()
        });

        // Store updated admin data back to local storage
        localStorage.setItem("adminData", JSON.stringify(adminData));
        // alert("Admin Registration successful!");
        setSuccessMessage("Admin Registration successful!");
        setFormData(initialFormData);
    };


    return (
        <>
            <Welcome />
            <br /><br />
            <div className="login-form">
                <h2>Admin Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="contact" placeholder="Contact" minLength="10" maxLength="10" value={formData.contact} onChange={handleChange} required />
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <center><button type="submit">Submit</button></center>
                </form>
                {successMessage && <p style={{color:"green"}}>{successMessage}</p>}
                Already have an account? <Link to="/AdminLogin">Login Here</Link>
            </div>
        </>
    );
}

export default AdminReg;
