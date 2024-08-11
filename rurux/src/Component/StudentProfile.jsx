
import React from 'react';
import StudentNavbar from './StudentNavbar';
import { Modal, Button } from 'react-bootstrap';

function StudentProfile({ username }) {
    // Function to get student data by username
    const getStudentData = () => {
        const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
        return studentData.find(student => student.username === username);
    };

    // Function to get full student data by username
    const getFullStudentData = (username) => {
        const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
        return studentData.find(student => student.username === username);
    };

    const student = getStudentData();
    const loggedInStudent = JSON.parse(localStorage.getItem("studentLoggedIn"));
    const fullLoggedInStudentData = loggedInStudent ? getFullStudentData(loggedInStudent.username) : null;

    const [showDetailsModal, setShowDetailsModal] = React.useState(false);

    const handleCloseDetailsModal = () => setShowDetailsModal(false);
    const handleShowDetailsModal = () => setShowDetailsModal(true);

    return (
        <>
            <StudentNavbar />
            <br/><br/>

            {/* {fullLoggedInStudentData && (
                <div className="student-data">
                    <Button variant="primary" onClick={handleShowDetailsModal}>
                        View Your Details
                    </Button>
                </div>
            )}
            
            <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            {fullLoggedInStudentData && (
                <div>
                    <p><strong>Name:</strong> {fullLoggedInStudentData.name}</p>
                    <p><strong>Email:</strong> {fullLoggedInStudentData.email}</p>
                    <p><strong>Contact:</strong> {fullLoggedInStudentData.contact}</p>
                    <p><strong>Username:</strong> {fullLoggedInStudentData.username}</p>
                    <p><strong>Password:</strong> {fullLoggedInStudentData.password}</p>
                </div>
            )}
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailsModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}


            <div className="login-form">
                <h2>Student Profile</h2>
                <form>
                {/* {fullLoggedInStudentData && fullLoggedInStudentData.marks ? ( */}
                    {fullLoggedInStudentData ? (
                        <>
                            <p><strong>Name:</strong> {fullLoggedInStudentData.name}</p>
                            <p><strong>Email:</strong> {fullLoggedInStudentData.email}</p>
                            <p><strong>Contact:</strong> {fullLoggedInStudentData.contact}</p>
                            <p><strong>Username:</strong> {fullLoggedInStudentData.username}</p>
                            <p><strong>Password:</strong> {fullLoggedInStudentData.password}</p>
                        </>
                    ) : (
                        <div>No Profile available.</div>
                    )}
                </form>
            </div>
        </>
    );
}

export default StudentProfile;
