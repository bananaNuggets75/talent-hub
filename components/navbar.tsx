'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <div className="navbar-brand">
          <Link href="/home">
            <a className="navbar-logo">Dashboard</a>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/employee-profile">
              <a>Employee Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/reports">
              <a>Reports</a>
            </Link>
          </li>
          <li>
            <Link href="/performance-reviews">
              <a>Performance Reviews</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
