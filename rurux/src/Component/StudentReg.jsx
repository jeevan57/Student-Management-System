import React from "react";
import { Link } from 'react-router-dom';
import Welcome from "./Welcome";

function StudentReg() {
    return (
        <>
            <Welcome />
            <br /><br />
            <div className="login-form">
                <h2>Student Registration</h2>
                <input type="text" placeholder="ID" required />
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Contact" minLength="10" maxLength="10" required/>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <center><button type="submit">Submit</button></center>
                Already Have an Account <Link to="/StudentLogin"><a href="#">Login Here</a></Link>
            </div>
        </>

    );
}
export default StudentReg;