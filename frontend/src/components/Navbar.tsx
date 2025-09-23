import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export function Navbar() {
  const { role, logout } = useAuthStore();
  const navigate = useNavigate();
  const [dark, setDark] = React.useState(
    () => localStorage.getItem("theme") === "dark"
  );

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const leftLinks =
    role === "ADMIN" ? (
      <>
        <Link className="nav-link" to="/admin/upload">
          Upload
        </Link>
        <Link className="nav-link" to="/admin/audit">
          My Uploads
        </Link>
      </>
    ) : role === "VERIFIER" ? (
      <>
        <Link className="nav-link" to="/verifier/verify">
          Verify
        </Link>
        <Link className="nav-link" to="/verifier/audit">
          Activity
        </Link>
      </>
    ) : null;

  return (
    <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 backdrop-blur sticky top-0 z-20 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo192.png"
              alt="Logo"
              className="h-8 w-8 rounded-full shadow-sm"
            />
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100">
              Vidya Pramanik
            </span>
          </Link>
          <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ml-2 border border-slate-200/60 dark:border-slate-700/60">
            {role || "GUEST"}
          </span>
          <div className="ml-6 hidden sm:flex gap-2">{leftLinks}</div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            className="px-3 py-1.5 rounded-md text-sm font-medium transition bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? "Light" : "Dark"}
          </button>
          {role && (
            <button
              className="px-3 py-1.5 rounded-md text-sm font-semibold transition bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
