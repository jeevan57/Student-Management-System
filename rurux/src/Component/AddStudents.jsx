import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";

function AddStudents() {
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
        let studentData = JSON.parse(localStorage.getItem("studentData")) || [];

        // Check if username already exists
        const existingStudent = studentData.find(student => student.username === formData.username);
        if (existingStudent) {
            alert("Username already exists. Please choose a different username.");
            return;
        }

        // Add new student data to the array
        studentData.push({
            ...formData,
            registrationDate: new Date().toISOString()
        });

        // Store updated student data back to local storage
        localStorage.setItem("studentData", JSON.stringify(studentData));
        // alert("Student Registration successful!");
        setSuccessMessage("Student Added successfull!");
        setFormData(initialFormData);

          // Hide the success message after 3 seconds
          setTimeout(() => {
            setSuccessMessage("");
        }, 6000);
    };


    return (
        <>
            <AdminNavbar />
            <br /><br />``
            <div className="login-form">
                <h2>Student Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="contact" placeholder="Contact" minLength="10" maxLength="10" value={formData.contact} onChange={handleChange} required />
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <center><button type="submit">Submit</button></center>
                </form>
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            </div>
        </>
    );
}

export default AddStudents;


