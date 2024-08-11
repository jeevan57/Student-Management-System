import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddStudentMarks() {
    const [students, setStudents] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [updatedStudent, setUpdatedStudent] = useState({});
    const [marks, setMarks] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
        setStudents(studentData);
    }, []);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = (student) => {
        setSelectedStudent(student);
        setUpdatedStudent({ ...student });
        setMarks(student.marks || {}); // Initialize marks state with student's existing marks
        setShowUpdateModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMarks(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveChanges = () => {
        const updatedStudents = students.map(student =>
            student.id === selectedStudent.id ? { ...student, marks } : student
        );
        setStudents(updatedStudents);
        localStorage.setItem("studentData", JSON.stringify(updatedStudents));
        handleCloseUpdateModal();
        setSuccessMessage(`Student ${updatedStudent.name} Marks add/update successfully!`);

        // Hide the success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage("");
        }, 6000);
    };

    return (
        <>
            <AdminNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">

                        {successMessage && <h4 style={{ color: "green" }}>{successMessage}</h4>}

                        <table className="table table-striped table-hover mt-3 text-center table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Marks</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.username}</td>
                                        <td>
                                            {student.marks ? (
                                                <>
                                                    <div><strong>Sub 1: </strong>{student.marks.sub1 || 'NA'}</div>
                                                    <div><strong>Sub 2: </strong>{student.marks.sub2 || 'NA'}</div>
                                                    <div><strong>Sub 3: </strong>{student.marks.sub3 || 'NA'}</div>
                                                    <div><strong>Sub 4: </strong>{student.marks.sub4 || 'NA'}</div>
                                                </>
                                            ) : (
                                                <div>NA</div>
                                            )}
                                        </td>
                                        <td>
                                            <Button variant="info" onClick={() => handleShowUpdateModal(student)}>Add/Update Marks</Button>
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
                    <div className="col-md-6 col-sm-6">
                        <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add/Update Marks</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name :</Form.Label>
                                        <Form.Control type="text" name="name" value={updatedStudent.name || ''} readOnly />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicSub1">
                                        <Form.Label>Sub 1:</Form.Label>
                                        <Form.Control type="text" name="sub1" value={marks.sub1 || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicSub2">
                                        <Form.Label>Sub 2:</Form.Label>
                                        <Form.Control type="text" name="sub2" value={marks.sub2 || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicSub3">
                                        <Form.Label>Sub 3:</Form.Label>
                                        <Form.Control type="text" name="sub3" value={marks.sub3 || ''} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicSub4">
                                        <Form.Label>Sub 4:</Form.Label>
                                        <Form.Control type="text" name="sub4" value={marks.sub4 || ''} onChange={handleChange} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseUpdateModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSaveChanges}>
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddStudentMarks;
