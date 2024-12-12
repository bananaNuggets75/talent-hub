import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="flex lg:flex-1">
          <Link href="/" className="text-lg font-bold text-gray-800">
            SafeDrive
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/employee-profile">Employees Profile</Link>
          </li>
          <li>
            <Link href="/performance-review">Performance Review</Link>
          </li>
          <li>
            <Link href="/reports">Reports</Link>
          </li>
        </ul>
        <div className="right-nav">
          <button className="login-button">
            <Link href="/login">Log In</Link>
          </button>
          
        </div>
      </nav>
    </header>
  );
}