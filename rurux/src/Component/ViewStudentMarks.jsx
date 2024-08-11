
import React from 'react';
import StudentNavbar from './StudentNavbar';

function ViewStudentMarks({ username }) {
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

    return (
        <>
            <StudentNavbar />
            <br /><br />

            {/* {fullLoggedInStudentData && (
                <div>
                    <p><strong>Name:</strong> {fullLoggedInStudentData.name}</p>
                    <p><strong>Email:</strong> {fullLoggedInStudentData.email}</p>
                    <p><strong>Contact:</strong> {fullLoggedInStudentData.contact}</p>
                    <p><strong>Username:</strong> {fullLoggedInStudentData.username}</p>
                    <p><strong>Password:</strong> {fullLoggedInStudentData.password}</p>

                    <h5>{fullLoggedInStudentData.name} Marks</h5>
                    {fullLoggedInStudentData && fullLoggedInStudentData.marks ? (
                        <>
                            <div><strong>Sub 1: </strong>{fullLoggedInStudentData.marks.sub1 || 'NA'}</div>
                            <div><strong>Sub 2: </strong>{fullLoggedInStudentData.marks.sub2 || 'NA'}</div>
                            <div><strong>Sub 3: </strong>{fullLoggedInStudentData.marks.sub3 || 'NA'}</div>
                            <div><strong>Sub 4: </strong>{fullLoggedInStudentData.marks.sub4 || 'NA'}</div>
                        </>
                    ) : (
                        <div>No marks available.</div>
                    )}
                </div>
            )} */}

            <div className="login-form">
                <h2>Student Marks</h2>
                <form>
                    <h5><strong>Name:</strong> {fullLoggedInStudentData.name}</h5>
                    {fullLoggedInStudentData && fullLoggedInStudentData.marks ? (
                        <>
                            <div><strong>Sub 1: </strong>{fullLoggedInStudentData.marks.sub1 || 'NA'}</div>
                            <div><strong>Sub 2: </strong>{fullLoggedInStudentData.marks.sub2 || 'NA'}</div>
                            <div><strong>Sub 3: </strong>{fullLoggedInStudentData.marks.sub3 || 'NA'}</div>
                            <div><strong>Sub 4: </strong>{fullLoggedInStudentData.marks.sub4 || 'NA'}</div>
                        </>
                    ) : (
                        <div>No marks available.</div>
                    )}
                </form>
            </div>

        </>
    );
}
export default ViewStudentMarks;
