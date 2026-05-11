import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [courses, setCourses] = useState(
    Array.from({ length: 8 }, (_, i) => ({ id: i }))
  );

  const addCourse = () => {
    setCourses((prev) => [...prev, { id: prev.length }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="gpa-card">
          <div className="gpa-results">
            <div className="gpa-item">
              <div className="gpa-label">Your GPA</div>
              <div className="gpa-value">4.00</div>
            </div>
            <div className="gpa-item">
              <div className="gpa-label">Honours GPA</div>
              <div className="gpa-value">4.00</div>
            </div>
          </div>

          <form className="gpa-form" onSubmit={(e) => e.preventDefault()}>
            {courses.map((course, i) => (
              <div className="course-row" key={course.id}>
                <label htmlFor={`class-${i}`} className="field">
                  <span className="field-label">Class</span>
                  <input type="text" id={`class-${i}`} name={`class-${i}`} placeholder="Course name" />
                </label>

                <label htmlFor={`grade-${i}`} className="field">
                  <span className="field-label">Grade</span>
                  <select id={`grade-${i}`} name={`grade-${i}`}>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                  </select>
                </label>

                <label htmlFor={`level-${i}`} className="field">
                  <span className="field-label">Level</span>
                  <select id={`level-${i}`} name={`level-${i}`}>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </label>
              </div>
            ))}

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={addCourse}>+ Add Course</button>
              <button type="submit" className="btn">Calculate GPA</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
