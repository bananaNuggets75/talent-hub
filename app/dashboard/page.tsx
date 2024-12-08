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
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Dashboard</h1>

      {/* High-Potential Employees Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">High-Potential Employees</h2>
        <ul className="mt-4 space-y-4">
          {highPotentialEmployees.map((employee) => (
            <li key={employee.id} className="p-4 border-b border-gray-300 dark:border-gray-700">
              <p className="font-semibold text-gray-700 dark:text-gray-100">{employee.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Score: {employee.score} | Recent: {employee.recentAchievements}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Performance Trends Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Performance Trends</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Visualizations for team performance trends can go here.
        </p>
      </section>

      {/* Feedback Sentiment Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Feedback Sentiment</h2>
        <div className="flex mt-4 gap-6 justify-around">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-green-500 dark:text-green-400">{feedbackSentiment.positive}%</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Positive</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">{feedbackSentiment.neutral}%</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Neutral</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-red-500 dark:text-red-400">{feedbackSentiment.negative}%</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Negative</p>
          </div>
        </div>
      </section>

      {/* Skill Gap Summary Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Skill Gap Summary</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Key skill gaps identified in the organization include: <strong>Leadership</strong>, <strong>Data Analysis</strong>, and <strong>Advanced Programming</strong>.
        </p>
        <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 underline cursor-pointer">
          View detailed analysis →
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Quick Links</h2>
        <div className="flex gap-6 mt-4 justify-around">
          <a href="/employee-profile" className="text-blue-600 dark:text-blue-400 underline">
            Employee Profiles
          </a>
          <a href="/performance-review" className="text-blue-600 dark:text-blue-400 underline">
            Performance Reviews
          </a>
          <a href="/skill-gap-analysis" className="text-blue-600 dark:text-blue-400 underline">
            Skill Gap Analysis
          </a>
          <a href="/survey-feedback" className="text-blue-600 dark:text-blue-400 underline">
            Feedback Surveys
          </a>
        </div>
      </section>
    </div>
  );
}
