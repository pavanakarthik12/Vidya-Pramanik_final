import React from 'react';
import { api, VerifyResponse } from '../../api/client';

export function VerifyPage() {
  const [docId, setDocId] = React.useState('');
  const [result, setResult] = React.useState<VerifyResponse | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = file ? await api.verifyWithFile(docId, file) : await api.verify(docId);
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Verification Form */}
      <div className="bg-slate-100/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Verify Certificate</h2>
          </div>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Document ID</label>
              <input 
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-500" 
                placeholder="Enter document ID"
                value={docId} 
                onChange={(e) => setDocId(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Scanned PDF (optional, enables AI)</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  type="file" 
                  accept="application/pdf" 
                  onChange={(e) => setFile(e.target.files?.[0] || null)} 
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">Upload a PDF to enable advanced AI verification checks</p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                {error}
              </div>
            )}

            <button 
              className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50" 
              disabled={!docId || loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying…
                </div>
              ) : 'Verify Certificate'}
            </button>
          </form>
        </div>
      </div>

      {/* Results Panel */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
        <div className="p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Verification Result</h2>
          </div>

          {!result && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-slate-400">Enter a document ID to verify and view results here</p>
            </div>
          )}

          {result && (
            <div className="space-y-6">
              {/* Main Status */}
              <div className="text-center">
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-lg ${result.status === 'PASS' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {result.status === 'PASS' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                  {result.status}
                </div>
              </div>

              {result.reasons?.length > 0 && (
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                  <h4 className="font-semibold text-white mb-3">Details:</h4>
                  <ul className="space-y-2">
                    {result.reasons.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AI Analysis Section */}
              <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  AI Analysis
                </h3>
                
                <div className="mb-4">
                  <span className="text-slate-300 text-sm">Overall Status: </span>
                  {result.ml ? (
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${result.ml.overall_status === 'authentic' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                      {result.ml.overall_status}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-lg text-sm font-medium bg-slate-600/50 text-slate-300 border border-slate-500/30">Not run</span>
                  )}
                </div>

                {!result.ml && (
                  <div className="p-3 bg-slate-600/30 rounded-lg border border-slate-500/30">
                    <p className="text-xs text-slate-400">Attach a scanned PDF to enable AI checks (layout, photo, seal, signature).</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {(['layout','photo','seal','signature'] as const).map((key) => {
                    const item: any = (result as any)?.ml?.[key];
                    const status = item?.status || 'not_run';
                    const badgeClass = status === 'authentic' ? 'bg-green-500/20 text-green-300 border-green-500/30' : (status === 'tampered' ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-slate-600/50 text-slate-300 border-slate-500/30');
                    const label = status === 'not_run' ? 'Not run' : status;
                    const title = key.charAt(0).toUpperCase() + key.slice(1);
                    return (
                      <div key={key} className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-white text-sm">{title}</div>
                          <span className={`text-xs px-2 py-1 rounded border ${badgeClass}`}>{label}</span>
                        </div>
                        {item?.message && (
                          <div className="text-xs text-slate-400 leading-relaxed">{item.message}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                className="w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigator.clipboard.writeText(`Verification ${result.status}${result.reasons?.length ? `: ${result.reasons.join(', ')}` : ''}${result.ml ? ` | AI: ${result.ml.overall_status}` : ''}`)}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Summary
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}