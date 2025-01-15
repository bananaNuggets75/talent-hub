// navbar.tsx
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 shadow-md" style={{ backgroundColor: '#4CAF50' }}>
        <div className="flex lg:flex-1">
          <Link href="/" className="text-lg font-bold text-gray-800">
            TalentHub
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard" className="text-gray-800 hover:text-green-600">Dashboard</Link>
          </li>
          <li>
            <Link href="/employee-profile" className="text-gray-800 hover:text-green-600">Employees Profile</Link>
          </li>
          <li>
            <Link href="/performance-review" className="text-gray-800 hover:text-green-600">Performance Review</Link>
          </li>
          <li>
            <Link href="/reports" className="text-gray-800 hover:text-green-600">Reports</Link>
          </li>
        </ul>
        <div className="right-nav">
          <Link href="/login">
            <button className="login-button bg-blue-green text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Log In
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}