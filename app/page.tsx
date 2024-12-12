import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>

      <div className="min-h-screen flex flex-col items-center justify-between p-8 pb-20 sm:p-20 font-sans bg-gray-100">
    {/* Header */}
    <header className="w-full text-center py-6 bg-blue-600 text-white">
      <h1 className="text-2xl sm:text-4xl font-bold">TalentHub</h1>
      <p className="text-sm sm:text-base">
        Empowering organizations with data-driven talent management
      </p>
    </header>

    {/* Main Content */}
    <main className="flex flex-col items-center justify-center gap-12 flex-grow text-center">
      <div className="max-w-xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Welcome to TalentHub
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Manage employee performance, track skills, and identify high-potential employees for promotion, all in one platform.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <Link
          href="/dashboard"
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-left"
        >
          <h3 className="text-lg font-semibold text-blue-600">Dashboard</h3>
          <p className="text-sm text-gray-600">
            View performance trends and employee highlights.
          </p>
        </Link>
        <Link
          href="/employee-profile"
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-left"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            Employee Profiles
          </h3>
          <p className="text-sm text-gray-600">
            Manage employee skills, certifications, and feedback.
          </p>
        </Link>
        <Link
          href="/performance-review"
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-left"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            Performance Reviews
          </h3>
          <p className="text-sm text-gray-600">
            Conduct and track performance evaluations.
          </p>
        </Link>
        <Link
          href="/reports"
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-left"
        >
          <h3 className="text-lg font-semibold text-blue-600">Reports</h3>
          <p className="text-sm text-gray-600">
            Generate insights and download team performance data.
          </p>
        </Link>
      </div>
    </main>

    {/* Footer */}
    <footer className="w-full text-center py-4 bg-gray-200">
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} TalentHub. All Rights Reserved.
      </p>
    </footer>
  </div>
</div>
  );
}
