import React from 'react';

type Props<T> = {
  rows: T[];
  columns: { key: keyof T | string; header: string; render?: (row: T) => React.ReactNode }[];
  empty?: string;
};

export function DataTable<T extends Record<string, any>>({ rows, columns, empty }: Props<T>) {
  if (!rows.length) return <div className="card text-center py-12 text-lg text-gray-400">{empty || 'No data'}</div>;
  return (
    <div className="overflow-x-auto card p-0">
      <table className="min-w-full text-base rounded-2xl overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
            {columns.map((c) => (
              <th key={String(c.key)} className="px-4 py-3 font-bold uppercase tracking-wide">{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr
              key={idx}
              className={
                `border-t border-gray-200 dark:border-gray-800 transition-colors duration-100 ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-blue-50 dark:bg-gray-900'} hover:bg-blue-50 dark:hover:bg-blue-800`
              }
            >
              {columns.map((c) => (
                <td key={String(c.key)} className="px-4 py-3 align-top text-gray-700 dark:text-gray-200">{c.render ? c.render(r) : String(r[c.key as keyof T])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

