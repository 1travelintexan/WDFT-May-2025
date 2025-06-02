import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import { AddStudentForm } from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState(studentsData);

  function handleAddStudent(event, newStudent) {
    event.preventDefault();
    setStudents([newStudent, ...students]);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudentForm handleAddStudent={handleAddStudent} />

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
