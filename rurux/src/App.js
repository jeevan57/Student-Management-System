import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Welcome from "./Component/Welcome";
import StudentLogin from "./Component/StudentLogin";
import StudentReg from "./Component/StudentReg";
import AdminLogin from "./Component/AdminLogin";
import AdminNavbar from "./Component/AdminNavbar";
import AddStudents from "./Component/AddStudents";
import ViewStudents from "./Component/ViewStudents";
import AdminReg from "./Component/AdminReg";
import StudentNavbar from "./Component/StudentNavbar";
import StudentProfile from "./Component/StudentProfile";
import AddStudentMarks from "./Component/AddStudentMarks";
// import ViewStudentMarks from "./Component/ViewStudentMarks";
import StudentPerformance from "./Component/StudentPerformance";

import WelcomeDashboard from "./Component/WelcomeDashboard";
import AdminDashboard from "./Component/AdminDashboard";
import StudentDashboard from "./Component/StudentDashboard";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<WelcomeDashboard />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/StudentReg" element={<StudentReg />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminReg" element={<AdminReg />} />
          <Route path="/AdminNavbar" element={<AdminNavbar />} />
          <Route path="/AddStudents" element={<AddStudents />} />
          <Route path="/ViewStudents" element={<ViewStudents />} />
          <Route path="/StudentNavbar" element={<StudentNavbar />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
          <Route path="/AddStudentMarks" element={<AddStudentMarks />} />
          {/* <Route path="/ViewStudentMarks" element={<ViewStudentMarks />} /> */}
          <Route path="/StudentPerformance" element={<StudentPerformance />} />

          <Route path="/WelcomeDashboard" element={<WelcomeDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;