import React from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
      <footer className="w-full py-4 text-center text-xs text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-gray-900/60 border-t border-gray-200 dark:border-gray-800 mt-8">
  &copy; {new Date().getFullYear()} Vidya Pramanik. All rights reserved.
      </footer>
    </div>
  );
}
