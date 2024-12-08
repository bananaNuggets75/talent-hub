'use client';

import { useState } from "react";

export default function Dashboard() {
  const [highPotentialEmployees, setHighPotentialEmployees] = useState([
    { id: 1, name: "Bruno Minor", score: 92, recentAchievements: "Team Lead Promotion" },
    { id: 2, name: "Lady Gago", score: 89, recentAchievements: "Completed Advanced Java Training" },
  ]);

  const [feedbackSentiment, setFeedbackSentiment] = useState({
    positive: 60,
    neutral: 30,
    negative: 10,
  });

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">High-Potential Employees</h2>
        <ul className="mt-4">
          {highPotentialEmployees.map((employee) => (
            <li key={employee.id} className="p-4 border-b">
              <p className="font-semibold text-gray-700">{employee.name}</p>
              <p className="text-sm text-gray-600">
                Score: {employee.score} | Recent: {employee.recentAchievements}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">Performance Trends</h2>
        <p className="text-sm text-gray-600 mt-4">
          Visualizations for team performance trends can go here.
        </p>
      </section>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">Feedback Sentiment</h2>
        <div className="flex mt-4 gap-4">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-green-500">{feedbackSentiment.positive}%</p>
            <p className="text-sm text-gray-600">Positive</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-yellow-500">{feedbackSentiment.neutral}%</p>
            <p className="text-sm text-gray-600">Neutral</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-red-500">{feedbackSentiment.negative}%</p>
            <p className="text-sm text-gray-600">Negative</p>
          </div>
        </div>
      </section>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">Skill Gap Summary</h2>
        <p className="text-sm text-gray-600 mt-4">
          Key skill gaps identified in the organization include: <strong>Leadership</strong>, <strong>Data Analysis</strong>, and <strong>Advanced Programming</strong>.
        </p>
        <p className="text-sm text-blue-600 mt-2 underline cursor-pointer">
          View detailed analysis →
        </p>
      </section>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">Quick Links</h2>
        <div className="flex gap-4 mt-4">
          <a href="/employee-profile" className="text-blue-600 underline">
            Employee Profiles
          </a>
          <a href="/performance-review" className="text-blue-600 underline">
            Performance Reviews
          </a>
          <a href="/skill-gap-analysis" className="text-blue-600 underline">
            Skill Gap Analysis
          </a>
          <a href="/survey-feedback" className="text-blue-600 underline">
            Feedback Surveys
          </a>
        </div>
      </section>
    </div>
  );
}
