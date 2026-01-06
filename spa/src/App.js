// Import React and required hooks from React library
import React, { useEffect, useState } from "react";

// Functional component named App
function App() {

  // State to store student details (initially empty array)
  const [students, setStudents] = useState([]);

  // State to store internal marks data
  const [imarks, setImarks] = useState([]);

  // State to store external marks data
  const [emarks, setEmarks] = useState([]);

  // useEffect runs once when the component loads
  useEffect(() => {

    // Fetch student data from REST service
    fetch("http://localhost:8080/students")
      .then(res => res.json())      // Convert response to JSON
      .then(data => setStudents(data)); // Store data in students state

    // Fetch internal marks data from REST service
    fetch("http://localhost:8080/imarks")
      .then(res => res.json())      // Convert response to JSON
      .then(data => setImarks(data)); // Store data in imarks state

    // Fetch external marks data from REST service
    fetch("http://localhost:8080/emarks")
      .then(res => res.json())      // Convert response to JSON
      .then(data => setEmarks(data)); // Store data in emarks state

  }, []); // Empty dependency array ensures this runs only once

  // JSX returned to display data on the web page
  return (
    <div style={{ padding: "20px" }}>

      {/* Heading of the SPA */}
      <h2>Single Page Application</h2>

      {/* Students Section */}
      <h3>Students</h3>
      <ul>
        {/* Loop through students array and display each student */}
        {students.map(s => (
          <li key={s.id}>
            {s.name} - {s.dept}
          </li>
        ))}
      </ul>

      {/* Internal Marks Section */}
      <h3>Internal Marks</h3>
      <ul>
        {/* Loop through internal marks */}
        {imarks.map(m => (
          <li key={m.id}>
            {m.subject} - {m.marks}
          </li>
        ))}
      </ul>

      {/* External Marks Section */}
      <h3>External Marks</h3>
      <ul>
        {/* Loop through external marks */}
        {emarks.map(m => (
          <li key={m.id}>
            {m.subject} - {m.marks}
          </li>
        ))}
      </ul>

    </div>
  );
}

// Export App component so it can be used in index.js
export default App;
