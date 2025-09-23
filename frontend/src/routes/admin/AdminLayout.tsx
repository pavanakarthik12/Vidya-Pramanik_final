import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto py-12 px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow p-8 border border-slate-200/60 dark:border-slate-800/60">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-center text-slate-600 dark:text-slate-400 text-base">
            Manage uploads, audits, and registry
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Total Certificates",
              value: "12,847",
              iconBg: "bg-blue-500",
              svg: (
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 
                  2 0 002 2h8a2 2 0 002-2V7.414A2 
                  2 0 0015.414 6L12 2.586A2 2 0 
                  0010.586 2H6zm5 6a1 1 0 10-2 
                  0v3.586l-1.293-1.293a1 1 0 
                  10-1.414 1.414l3 3a1 1 0 
                  001.414 0l3-3a1 1 0 
                  00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                />
              ),
            },
            {
              label: "Pending Audits",
              value: "234",
              iconBg: "bg-amber-500",
              svg: (
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 
                  16zm1-12a1 1 0 10-2 0v4a1 1 0 
                  00.293.707l2.828 2.829a1 1 0 
                  101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              ),
            },
            {
              label: "System Health",
              value: "99.8%",
              iconBg: "bg-emerald-500",
              svg: (
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 
                  16zm3.707-9.293a1 1 0 
                  00-1.414-1.414L9 10.586 7.707 
                  9.293a1 1 0 00-1.414 1.414l2 
                  2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              ),
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 border border-slate-200/60 dark:border-slate-800/60 flex items-center"
            >
              <div
                className={`w-12 h-12 ${stat.iconBg} rounded-lg flex items-center justify-center mr-4`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {stat.svg}
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 border border-slate-200/60 dark:border-slate-800/60">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Add Certificate", color: "bg-blue-500" },
              { label: "Review Audits", color: "bg-emerald-500" },
              { label: "View Registry", color: "bg-indigo-500" },
              { label: "System Logs", color: "bg-violet-500" },
            ].map((action, i) => (
              <button
                key={i}
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 border border-slate-200/60 dark:border-slate-700/60"
              >
                <div
                  className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-2`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 
                      0v-5H4a1 1 0 110-2h5V4a1 1 0 
                      011-1z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 border border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Recent Activity
            </h2>
            <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Certificate approved",
                desc: "Engineering Degree - IIT Delhi • 2 min ago",
                color: "bg-emerald-500",
              },
              {
                title: "New certificate uploaded",
                desc: "MBA Diploma - ISB Hyderabad • 15 min ago",
                color: "bg-blue-500",
              },
              {
                title: "Verification failed",
                desc: "Invalid signature detected • 32 min ago",
                color: "bg-amber-500",
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200/60 dark:border-slate-700/60"
              >
                <div
                  className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center mr-3`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 
                      1.414l-8 8a1 1 0 01-1.414 
                      0l-4-4a1 1 0 011.414-1.414L8 
                      12.586l7.293-7.293a1 1 0 
                      011.414 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {activity.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}
