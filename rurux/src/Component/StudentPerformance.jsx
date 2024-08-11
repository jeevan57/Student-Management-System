import React from 'react';
import StudentNavbar from './StudentNavbar';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function StudentPerformance({ username }) {
    // Function to get student data by username
    const getStudentData = (username) => {
        const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
        return studentData.find(student => student.username === username);
    };

    const loggedInStudent = JSON.parse(localStorage.getItem("studentLoggedIn"));
    const fullLoggedInStudentData = loggedInStudent ? getStudentData(loggedInStudent.username) : null;

    const getChartData = () => {
        if (fullLoggedInStudentData && fullLoggedInStudentData.marks) {
            return {
                labels: ['Sub 1', 'Sub 2', 'Sub 3', 'Sub 4'],
                datasets: [
                    {
                        data: [
                            fullLoggedInStudentData.marks.sub1 || 0,
                            fullLoggedInStudentData.marks.sub2 || 0,
                            fullLoggedInStudentData.marks.sub3 || 0,
                            fullLoggedInStudentData.marks.sub4 || 0
                        ],
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0'
                        ]
                    }
                ]
            };
        }
        return null;
    };

    const chartData = getChartData();

    return (
        <>
            <StudentNavbar />
            <br /><br />    

            <div className="login-form">
                <h2>Student Marks</h2>
                {fullLoggedInStudentData ? (
                    <>
                        <h5><strong>Name:</strong> {fullLoggedInStudentData.name}</h5>
                        {fullLoggedInStudentData.marks ? (
                            <>
                                <div><strong>Sub 1: </strong>{fullLoggedInStudentData.marks.sub1 || 'NA'}</div>
                                <div><strong>Sub 2: </strong>{fullLoggedInStudentData.marks.sub2 || 'NA'}</div>
                                <div><strong>Sub 3: </strong>{fullLoggedInStudentData.marks.sub3 || 'NA'}</div>
                                <div><strong>Sub 4: </strong>{fullLoggedInStudentData.marks.sub4 || 'NA'}</div>
                                {chartData && (
                                    <div style={{ width: '50%', margin: '0 auto' }}>
                                        <Pie data={chartData} />
                                    </div>
                                )}
                            </>
                        ) : (
                            <div>No marks available.</div>
                        )}
                    </>
                ) : (
                    <div>No student data found.</div>
                )}
            </div>
        </>
    );
}

export default StudentPerformance;
