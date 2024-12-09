'use client';

import { useState } from "react";

export default function EmployeeProfile() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bruno Minor",
      role: "Software Engineer",
      skills: ["React", "Node.js", "AWS"],
      certifications: ["AWS Certified Solutions Architect", "React Advanced"],
      feedback: "Exceptional performance in the last quarter.",
    },
    {
      id: 2,
      name: "Lady Gago",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "SQL"],
      certifications: ["Google Data Analytics", "Deep Learning Specialization"],
      feedback: "Excellent problem-solving and analytical skills.",
    },
  ]);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">Employee Profiles</h1>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">Employee Details</h2>
        <ul className="mt-4">
          {employees.map((employee) => (
            <li key={employee.id} className="p-4 border-b">
              <p className="text-lg font-semibold text-gray-700">{employee.name}</p>
              <p className="text-sm text-gray-600">Role: {employee.role}</p>
              <p className="text-sm text-gray-600">
                Skills: {employee.skills.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                Certifications: {employee.certifications.join(", ")}
              </p>
              <p className="text-sm text-gray-600">Feedback: {employee.feedback}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">Add New Employee</h2>
        <p className="text-sm text-gray-600 mt-4">
          A form for adding new employees can be implemented here.
        </p>
      </section>
    </div>
  );
}
