import React from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import { useAuthStore } from '../store/auth';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { setToken, role, bootstrap } = useAuthStore();
  const navigate = useNavigate();

  React.useEffect(() => { bootstrap(); }, [bootstrap]);
  React.useEffect(() => {
    if (role === 'ADMIN') navigate('/admin', { replace: true });
    else if (role === 'VERIFIER') navigate('/verifier', { replace: true });
  }, [role, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { token } = await api.login(email, password);
      setToken(token);
      const [, payload] = token.split('.');
      const { role } = JSON.parse(atob(payload));
      navigate(role === 'ADMIN' ? '/admin' : '/verifier', { replace: true });
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  // Demo registry tool (unauthenticated)
  const [addr, setAddr] = React.useState('');
  const [name, setName] = React.useState('');
  const [regLoading, setRegLoading] = React.useState(false);
  const [regOut, setRegOut] = React.useState<string>('');
  const [regErr, setRegErr] = React.useState<string>('');
  const handleRegistry = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegErr(''); setRegOut(''); setRegLoading(true);
    try {
      const res = await api.chainAddIssuer(addr.trim(), name.trim());
      setRegOut(JSON.stringify(res));
    } catch (err: any) {
      setRegErr(err.message || 'Failed');
    } finally { setRegLoading(false); }
  };

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-600/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-600/8 to-teal-500/4 blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/15 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-9">
        <div className="w-full max-w-[90rem] grid lg:grid-cols-3 gap-8 items-start">

          {/* Left side - Branding & Info */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white">
                  Vidya <span className="text-amber-400">Pramanik</span>
                </h1>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Secure Certificate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300">
                  Verification Platform
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                Advanced blockchain-powered authentication system for academic credentials and professional certifications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-amber-400 mb-1">256-bit</div>
                <div className="text-sm text-slate-400">Encryption</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-teal-400 mb-1">99.9%</div>
                <div className="text-sm text-slate-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right side - Forms side by side */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row gap-6 lg:gap-8">

            {/* Login Form */}
            <div className="flex-1 bg-slate-100/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Sign in to your account</h3>
                  <p className="text-slate-600">Access your secure verification dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all text-slate-800 placeholder-slate-500"
                      placeholder="your@email.com"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                    <input 
                      type="password"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all text-slate-800 placeholder-slate-500"
                      placeholder="Enter your password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                  </div>

                                    {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Signing in...
                      </div>
                    ) : 'Sign in'}
                  </button>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-600 mb-3 text-center">Demo Credentials</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <span className="font-medium text-slate-600">Admin</span>
                        <span className="font-mono text-slate-800">admin@example.com / Pass@123</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <span className="font-medium text-slate-600">Verifier</span>
                        <span className="font-mono text-slate-800">verifier@example.com / Pass@123</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Registry Form */}
            <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Issuer Registry</h3>
                    <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full font-medium">Demo</span>
                  </div>
                  <p className="text-slate-400 text-sm">Add new issuer to blockchain registry</p>
                </div>

                <form onSubmit={handleRegistry} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Issuer Address</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-white placeholder-slate-400"
                      placeholder="0x..."
                      value={addr} 
                      onChange={(e) => setAddr(e.target.value)} 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Institution Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-white placeholder-slate-400"
                      placeholder="Institution name"
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>

                  {regErr && (
                    <div className="p-4 bg-red-900/30 border border-red-800 rounded-xl text-red-300 text-sm">
                      {regErr}
                    </div>
                  )}

                  {regOut && (
                    <div className="p-4 bg-emerald-900/30 border border-emerald-800 rounded-xl">
                      <div className="text-emerald-300 text-sm font-medium mb-2">Success Response:</div>
                      <pre className="bg-slate-800 p-3 rounded-lg text-xs overflow-auto text-slate-300 font-mono">
                        {regOut}
                      </pre>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                    disabled={regLoading || !addr || !name}
                  >
                    {regLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : 'Add to Registry'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}