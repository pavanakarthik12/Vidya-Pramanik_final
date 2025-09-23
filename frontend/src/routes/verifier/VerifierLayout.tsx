import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

export function VerifierLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-600/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-600/8 to-cyan-500/4 blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/15 to-transparent"></div>
      </div>

      <div className="relative">
        <Navbar />
        <main className="max-w-7xl mx-auto py-12 px-6">
          <div className="bg-slate-100/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-12 mb-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-slate-800">
                  Verifier <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dashboard</span>
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Verify certificates and view activity with our advanced blockchain verification system
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
                <div className="text-center p-6 rounded-xl bg-white/60 border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Instant</div>
                  <div className="text-sm text-slate-500">Verification</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/60 border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">Secure</div>
                  <div className="text-sm text-slate-500">Blockchain</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/60 border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-teal-600 mb-1">Trusted</div>
                  <div className="text-sm text-slate-500">Network</div>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}