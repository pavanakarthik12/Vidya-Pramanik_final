import React from 'react';

export function FileDrop({ onFile }: { onFile: (f: File) => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [drag, setDrag] = React.useState(false);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) onFile(f);
  };

  return (
    <div
      ref={ref}
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={onDrop}
      className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 shadow-lg bg-white/80 dark:bg-gray-800/80 hover:border-blue-500 ${drag ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 scale-105' : 'border-gray-300 dark:border-gray-700'}`}
      onClick={() => ref.current?.querySelector('input')?.click()}
    >
      <div className="flex flex-col items-center justify-center mb-3">
        <svg className={`w-12 h-12 mb-2 ${drag ? 'text-blue-500 animate-bounce' : 'text-blue-400 dark:text-blue-300'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" /></svg>
        <span className="font-semibold text-lg">Drag & Drop PDF/PNG/JPG</span>
      </div>
      <span className="text-xs text-gray-500">or click to choose</span>
      <input aria-label="file-picker" className="hidden" type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => {
        const f = e.target.files?.[0];
        if (f) onFile(f);
      }} />
    </div>
  );
}

