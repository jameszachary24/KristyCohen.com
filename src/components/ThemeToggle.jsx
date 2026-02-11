import React from 'react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white/50 hover:bg-white/80 transition-all text-sm font-medium text-gray-700 shadow-sm"
      title="Switch Theme"
    >
      {theme === 'modern' ? (
        <>
          <span className="w-4 h-4 rounded-full bg-slate-900"></span>
          <span>Modern Tech</span>
        </>
      ) : (
        <>
          <span className="w-4 h-4 rounded-full bg-rose-600"></span>
          <span>Kristy's Brand</span>
        </>
      )}
    </button>
  );
}
