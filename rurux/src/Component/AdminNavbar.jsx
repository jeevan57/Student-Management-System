import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AdminNavbar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">Student Management</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                        <li class="nav-item">
                                            <Link to="/AdminDashboard" class="nav-link active" aria-current="page">Home</Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/AddStudents" class="nav-link">Add Students</Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/ViewStudents" class="nav-link">View Students</Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/AddStudentMarks" class="nav-link">Add/Update Student Marks</Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/WelcomeDashboard" class="nav-link">Logout</Link>
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
export default AdminNavbar;













// import React from "react";
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Student Management</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">

//                             <li class="nav-item">
//                                 <Link to="/" class="nav-link active" aria-current="page">Home</Link>
//                             </li>

//                             <li class="nav-item">
//                                 <Link to="/AddStudents" class="nav-link">Add Students</Link>
//                             </li>

//                             <li class="nav-item">
//                                 <Link to="/ViewStudents" class="nav-link">View Students</Link>
//                             </li>

//                             <li class="nav-item">
//                                 <Link to="/AddStudentMarks" class="nav-link">Add Student Marks</Link>
//                             </li>

//                             <li class="nav-item">
//                                 <Link to="/Welcome" class="nav-link">Logout</Link>
//                             </li>

//                         </ul>
//                         <form class="d-flex" role="search">
//                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }
// export default Navbar;
