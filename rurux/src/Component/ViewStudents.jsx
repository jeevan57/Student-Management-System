import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ViewStudents() {
    const [students, setStudents] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [updatedStudent, setUpdatedStudent] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
        setStudents(studentData);
    }, []);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = (student) => {
        setSelectedStudent(student);
        setUpdatedStudent({ ...student });
        setShowUpdateModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveChanges = () => {
        const updatedStudents = students.map(student =>
            student.id === selectedStudent.id ? updatedStudent : student
        );
        setStudents(updatedStudents);
        localStorage.setItem("studentData", JSON.stringify(updatedStudents));
        handleCloseUpdateModal();
        setSuccessMessage(`Student ${updatedStudent.name} updated successfully!`);

        // Hide the success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage("");
        }, 6000);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
            const updatedStudents = students.filter(student => student.id !== id);
            setStudents(updatedStudents);
            localStorage.setItem("studentData", JSON.stringify(updatedStudents));
        }
    };

    return (
        <>
            <AdminNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        {successMessage && <h4 style={{ color: "green" }}>{successMessage}</h4>}

                        <table className="table table-striped table-hover mt-3 text-center table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.contact}</td>
                                        <td>{student.username}</td>
                                        <td>{student.password}</td>
                                        <td>
                                            <Button variant="info" onClick={() => handleShowUpdateModal(student)}>Update</Button>{' '}
                                            <Button variant="danger" onClick={() => handleDelete(student.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Student</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name :</Form.Label>
                                        <Form.Control type="text" name="name" value={updatedStudent.name || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email :</Form.Label>
                                        <Form.Control type="email" name="email" value={updatedStudent.email || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicContact">
                                        <Form.Label>Contact :</Form.Label>
                                        <Form.Control type="text" name="contact" minLength="10" maxLength="10" value={updatedStudent.contact || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label>Username :</Form.Label>
                                        <Form.Control type="text" name="username" value={updatedStudent.username || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password :</Form.Label>
                                        <Form.Control type="text" name="password" value={updatedStudent.password || ''} onChange={handleChange} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseUpdateModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSaveChanges}>
                                    Update
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewStudents;
