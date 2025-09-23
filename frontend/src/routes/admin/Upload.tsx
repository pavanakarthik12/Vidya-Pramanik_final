import React from 'react';
import { FileDrop } from '../../components/FileDrop';
import { api } from '../../api/client';

export function AdminUpload() {
  const [file, setFile] = React.useState<File | null>(null);
  const [docId, setDocId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [reason, setReason] = React.useState('initial-issue');
  const [studentId, setStudentId] = React.useState('');
  const [studentEmail, setStudentEmail] = React.useState('');
  const [studentName, setStudentName] = React.useState('');
  const [studentRef, setStudentRef] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [result, setResult] = React.useState<any | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setError(null);
    setResult(null);
    setLoading(true);
    setProgress(0);
    try {
      const res: any = await api.issueCertificate(
        {
          docId: docId || undefined,
          title: title || undefined,
          reason: reason || undefined,
          studentId: studentId || undefined,
          studentEmail: studentEmail || undefined,
          studentName: studentName || undefined,
          studentRef: studentRef || undefined,
          kind: 'certificate',
          file
        },
        (pct) => setProgress(pct)
      );
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const API_BASE = (import.meta as any).env.VITE_API_BASE_URL || 'http://localhost:3000';
  const doDownload = async () => {
    if (!result) return;
    const token = sessionStorage.getItem('token') || '';
    const path: string | undefined = result.downloadPath;
    if (!path) return alert('No download path available');
    try {
      const res = await fetch(`${API_BASE}${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = (result.title || 'certificate') + '.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert('Download failed: ' + (e?.message || String(e)));
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Upload Form */}
      <form onSubmit={onSubmit} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Upload Certificate</h2>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Document File</label>
          <FileDrop onFile={setFile} />
          {file && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </p>
          )}
        </div>

        {/* Text Inputs */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Doc ID (optional)</label>
          <input
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={docId}
            onChange={(e) => setDocId(e.target.value)}
            placeholder="Auto-generate if blank"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
          <input
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., B.Tech Degree"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Reason</label>
          <input
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        {/* Student Info */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Student ID</label>
            <input
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Existing student ID"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Student Ref (roll no)</label>
            <input
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={studentRef}
              onChange={(e) => setStudentRef(e.target.value)}
              placeholder="Roll / registration"
            />
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Student Email</label>
            <input
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Student Name</label>
            <input
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Optional"
            />
          </div>
        </div>

        {/* Progress */}
        {progress > 0 && loading && (
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded h-2 mb-3">
            <div className="bg-blue-600 h-2 rounded" style={{ width: `${progress}%` }} />
          </div>
        )}

        {/* Errors */}
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        {/* Submit */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
          disabled={!file || loading || !studentId}
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {/* Result Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Result</h2>
        {!result && <p className="text-sm text-slate-500 dark:text-slate-400">Upload a file to see the result.</p>}

        {result && (
          <div className="space-y-3">
            <div>
              <span className="font-medium">docId:</span> {result.docId}
              <button
                className="ml-2 text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                onClick={() => navigator.clipboard.writeText(result.docId)}
              >
                Copy
              </button>
            </div>
            <div>
              <span className="font-medium">sha256Hex:</span>{' '}
              <span className="break-all text-xs text-slate-600 dark:text-slate-400">{result.sha256Hex}</span>
            </div>
            {result.txHash && (
              <div>
                <span className="font-medium">tx:</span>{' '}
                <a
                  className="text-blue-600 dark:text-blue-400 underline"
                  href={result.explorerUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {result.txHash}
                </a>
              </div>
            )}
            {result.downloadPath && (
              <div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-lg"
                  onClick={doDownload}
                >
                  Download PDF
                </button>
                <span className="text-xs text-slate-500 ml-2">(secure download via server)</span>
              </div>
            )}
            {!result.downloadPath &&
              result.downloadUrl &&
              typeof result.downloadUrl === 'string' &&
              result.downloadUrl.startsWith('http') && (
                <div>
                  <a
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-700"
                    href={result.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open File
                  </a>
                </div>
              )}
            {result.ml && (
              <div className="mt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">ML Analysis</h3>
                <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs overflow-auto text-slate-700 dark:text-slate-300">
                  {JSON.stringify(result.ml, null, 2)}
                </pre>
              </div>
            )}
            <p className="text-xs text-slate-500">Keep the docId for verification.</p>
          </div>
        )}
      </div>
    </div>
  );
}
