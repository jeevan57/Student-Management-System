import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function StudentNavbar() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">Student Management</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">

                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/StudentDashboard" className="nav-link active" aria-current="page">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/StudentProfile" className="nav-link">Student Profile</Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link to="/ViewStudentMarks" className="nav-link">Student Marks</Link>
                                        </li> */}

                                        <li className="nav-item">
                                            <Link to="/StudentPerformance" className="nav-link">Performance</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/WelcomeDashboard" className="nav-link">Logout</Link>
                                        </li>
                                    </ul>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}

export default StudentNavbar;




// import React from "react";
// import { Link } from 'react-router-dom';

// function StudentNavbar() {

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Student Management</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link active" aria-current="page">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/StudentProfile" className="nav-link">Student Profile</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/ViewStudentMarks" className="nav-link">Student Marks</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/StudentPerformance" className="nav-link">Performance</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/Welcome" className="nav-link">Logout</Link>
//                             </li>
//                         </ul>
//                         <form className="d-flex" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default StudentNavbar;
