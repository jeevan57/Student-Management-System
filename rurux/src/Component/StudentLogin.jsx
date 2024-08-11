import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
// import StudentProfile from './StudentProfile';

function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve stored student    data from local storage
    const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
 
    // Check if studentData exists and username/password match
    const foundStudent = studentData.find(
      (student) =>
        student.username === username && student.password === password
    );
    if (foundStudent) {
      localStorage.setItem("studentLoggedIn", JSON.stringify({ username }));
      // Redirect to the specified route after successful login
      navigate("/StudentDashboard");
    } else {
      // Display error message or handle invalid credentials
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Welcome />
      <br />
      <br />
      <div className="login-form">
        <h2>Student Login</h2>

        {/* {error && <p className="error">{error}</p>} */}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <center>
          <button onClick={handleLogin}>Login</button>
        </center>
        {/* Don't Have an Account <Link to="/StudentReg"><a href="#">Registration Here</a></Link> */}
      </div>

      {/* Display student data */}
      {/* {localStorage.getItem("studentLoggedIn") && (
                <div className="student-data-container">
                    <h2>Your Student Data</h2>
                    <StudentProfile username={JSON.parse(localStorage.getItem("studentLoggedIn")).username} />
                </div>
            )} */}
    </>
  );
}

export default StudentLogin;
