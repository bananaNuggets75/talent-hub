import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-lg font-bold">
            TalentHub
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/employee-profile" className="hover:underline">
              Employee Profiles
            </Link>
          </li>
          <li>
            <Link href="/reports" className="hover:underline">
              Reports
            </Link>
          </li>
          <li>
            <Link href="/performance-review" className="hover:underline">
              Performance Reviews
            </Link>
          </li>
        </ul>

        {/* Right Navigation Section */}
        <div className="right-nav">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
            <Link href="/login">Log In</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
