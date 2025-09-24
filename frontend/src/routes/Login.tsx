import React, { useState, useEffect } from 'react';

// Mock implementations for the artifacts environment
const mockNavigate = (path) => {
  console.log(`Navigation to: ${path}`);
  alert(`Would navigate to: ${path}`);
};

const mockApi = {
  login: async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email === 'admin@example.com' && password === 'Pass@123') {
      return { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4ifQ.mock' };
    } else if (email === 'verifier@example.com' && password === 'Pass@123') {
      return { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVkVSSUZJRVIifQ.mock' };
    } else {
      throw new Error('Invalid credentials');
    }
  },
  chainAddIssuer: async (addr, name) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (!addr.startsWith('0x') || addr.length !== 42) {
      throw new Error('Invalid address format');
    }
    return { success: true, txHash: '0x123...abc', issuerAddress: addr, institutionName: name };
  }
};

const mockAuthStore = {
  setToken: (token) => {
    console.log('Token set:', token);
  },
  role: null,
  bootstrap: () => {}
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = mockNavigate;
  const { setToken, role, bootstrap } = mockAuthStore;

  useEffect(() => { bootstrap(); }, [bootstrap]);
  useEffect(() => {
    if (role === 'ADMIN') navigate('/admin');
    else if (role === 'VERIFIER') navigate('/verifier');
  }, [role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { token } = await mockApi.login(email, password);
      setToken(token);
      const [, payload] = token.split('.');
      const { role } = JSON.parse(atob(payload));
      navigate(role === 'ADMIN' ? '/admin' : '/verifier');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowLogin(true);
    // Pre-fill demo credentials based on role
    if (role === 'ADMIN') {
      setEmail('admin@example.com');
      setPassword('Pass@123');
    } else {
      setEmail('verifier@example.com');
      setPassword('Pass@123');
    }
  };

  const handleBack = () => {
    setShowLogin(false);
    setSelectedRole(null);
    setEmail('');
    setPassword('');
    setError(null);
    setShowPassword(false);
  };

  // Demo registry tool (unauthenticated)
  const [addr, setAddr] = useState('');
  const [name, setName] = useState('');
  const [regLoading, setRegLoading] = useState(false);
  const [regOut, setRegOut] = useState('');
  const [regErr, setRegErr] = useState('');
  const [showRegistry, setShowRegistry] = useState(false);
  
  const handleRegistry = async (e) => {
    e.preventDefault();
    setRegErr(''); setRegOut(''); setRegLoading(true);
    try {
      const res = await mockApi.chainAddIssuer(addr.trim(), name.trim());
      setRegOut(JSON.stringify(res, null, 2));
    } catch (err) {
      setRegErr(err.message || 'Failed');
    } finally { setRegLoading(false); }
  };

  const isValidAddress = (address) => {
    return address.startsWith('0x') && address.length === 42;
  };

  if (showRegistry) {
    return (
      <div 
        className="min-h-screen w-full flex items-center justify-center p-6"
        style={{
          backgroundColor: '#5a1d0c',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      >
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">Issuer Registry</h2>
              <p className="text-slate-600">Add new issuer to blockchain registry</p>
            </div>

            <form onSubmit={handleRegistry} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Issuer Address</label>
                <div className="relative">
                  <input 
                    type="text"
                    className={`w-full px-4 py-3.5 bg-slate-50/50 border-2 rounded-xl focus:ring-2 focus:ring-emerald-500 transition-all text-slate-800 placeholder-slate-400 ${
                      addr && !isValidAddress(addr) ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                    placeholder="0x742d35Cc6634C0532925a3b8D39463DF37C621"
                    value={addr} 
                    onChange={(e) => setAddr(e.target.value)}
                    required
                  />
                  {addr && (
                    <div className="absolute right-3 top-3.5">
                      {isValidAddress(addr) ? (
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {addr && !isValidAddress(addr) && (
                  <p className="text-red-500 text-xs">Please enter a valid Ethereum address</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Institution Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3.5 bg-slate-50/50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-slate-800 placeholder-slate-400"
                  placeholder="e.g., MIT, Stanford University"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {regErr && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-2 text-red-700 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {regErr}
                  </div>
                </div>
              )}

              {regOut && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Registration Successful
                  </div>
                  <pre className="bg-slate-100 p-3 rounded-lg text-xs overflow-auto text-slate-700 font-mono">
                    {regOut}
                  </pre>
                </div>
              )}

              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowRegistry(false)}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all duration-200"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={regLoading || !addr || !name || !isValidAddress(addr)}
                >
                  {regLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : 'Add to Registry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (showLogin) {
    return (
      <div 
        className="min-h-screen w-full flex items-center justify-center p-6"
        style={{
          backgroundColor: '#5a1d0c',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      >
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                selectedRole === 'ADMIN' 
                  ? 'bg-gradient-to-br from-orange-500 to-red-600' 
                  : 'bg-gradient-to-br from-blue-500 to-indigo-600'
              }`}>
                {selectedRole === 'ADMIN' ? (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                Sign in as {selectedRole === 'ADMIN' ? 'Administrator' : 'Verifier'}
              </h2>
              <p className="text-slate-600">Enter your credentials to continue</p>
              
              {/* Demo credentials notice */}
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-700 text-sm">
                  <strong>Demo Mode:</strong> Credentials are pre-filled for testing
                </p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Email Address</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3.5 bg-slate-50/50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-800 placeholder-slate-400"
                  placeholder="your@email.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3.5 pr-12 bg-slate-50/50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-800 placeholder-slate-400"
                    placeholder="Enter your password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-2 text-red-700 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all duration-200"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : 'Continue →'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        backgroundColor: '#5a1d0c',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Floating geometric shapes for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center shadow-2xl">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-amber-100">
              Vidya <span className="text-orange-300">प्रमाणिक</span>
            </h1>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-100">Welcome to the Future of</h2>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent">
              Credential Verification
            </h3>
            <p className="text-amber-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Secure, blockchain-powered certificate verification system. Choose your role to get started.
            </p>
          </div>
        </div>

        {/* Role Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 relative z-10">
          {/* Admin Card */}
          <div 
            onClick={() => handleRoleSelect('ADMIN')}
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20 hover:border-orange-200/50 hover:scale-105 overflow-hidden"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-orange-500 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
              <div className="w-3 h-3 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Administrator
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Manage the system, oversee verifications, and handle administrative tasks with full control
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">System Management</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full">User Oversight</span>
              </div>
            </div>
          </div>

          {/* Verifier Card */}
          <div 
            onClick={() => handleRoleSelect('VERIFIER')}
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20 hover:border-blue-200/50 hover:scale-105 overflow-hidden"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-300">
              <div className="w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Verifier
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Verify certificates, validate credentials, and perform authentication checks with precision
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Certificate Validation</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Authentication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="text-center relative z-10">
          <div className="inline-block p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
            <p className="text-amber-100 text-sm mb-4">Need to register a new educational institution?</p>
            <button 
              onClick={() => setShowRegistry(true)}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Access Issuer Registry
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-amber-100 mb-1">Blockchain Secured</h4>
            <p className="text-amber-200 text-sm">Immutable and tamper-proof verification</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-amber-100 mb-1">Instant Verification</h4>
            <p className="text-amber-200 text-sm">Real-time credential validation</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3" />
              </svg>
            </div>
            <h4 className="font-semibold text-amber-100 mb-1">Global Access</h4>
            <p className="text-amber-200 text-sm">Worldwide credential recognition</p>
          </div>
        </div>
      </div>
    </div>
  );
}