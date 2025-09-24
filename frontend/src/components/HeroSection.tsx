import React from 'react';
import { Link } from 'react-router-dom';

import { GridBackground } from './GridBackground';

export function HeroSection() {
  return (
    <>
      <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-red-900">
        <GridBackground />
        
        {/* Enhanced professional pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(255, 154, 0, 0.08) 0%, transparent 70%),
              linear-gradient(135deg, transparent 30%, rgba(249, 115, 22, 0.08) 30%, rgba(249, 115, 22, 0.08) 50%, transparent 50%, transparent 80%, rgba(251, 146, 60, 0.05) 80%),
              linear-gradient(45deg, transparent 25%, rgba(255, 149, 0, 0.06) 25%, rgba(255, 149, 0, 0.06) 50%, transparent 50%, transparent 75%, rgba(255, 154, 0, 0.04) 75%)
            `,
            backgroundSize: '300px 300px, 400px 400px, 500px 500px, 80px 80px, 120px 120px',
            backgroundPosition: '0 0, 150px 150px, 75px 75px, 0 0, 60px 60px'
          }}></div>
        </div>
        
        {/* Sophisticated geometric elements with glow effects */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400/30 rounded-lg rotate-12 opacity-40 shadow-lg shadow-orange-500/20"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-amber-400/40 rounded-full opacity-35 shadow-lg shadow-amber-500/20"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg rotate-45 opacity-30 shadow-lg shadow-orange-400/25"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-amber-400/35 rounded-full opacity-40 shadow-lg shadow-amber-500/20"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-orange-400/20 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-10 w-12 h-12 border border-amber-300/25 rounded-lg rotate-45 opacity-50"></div>
        <div className="absolute top-16 right-32 w-6 h-6 bg-orange-400/30 rounded-full opacity-70"></div>
        
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          {/* Enhanced professional badge with glow */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-slate-800/90 backdrop-blur-lg border border-orange-500/30 shadow-2xl shadow-orange-500/20 mb-8 hover:shadow-orange-400/30 transition-all duration-500">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 animate-pulse shadow-lg shadow-orange-500/50"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent">Secure Certificate Verification Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 drop-shadow-2xl">Vidya प्रमाणिक</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            A secure, modern platform for certificate verification, trusted by institutions and verifiers across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/login" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-slate-900 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 hover:from-orange-300 hover:via-amber-300 hover:to-yellow-300 rounded-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-400/40 backdrop-blur-sm transition-all duration-300 border border-orange-300/20 hover:scale-105">
              <span className="mr-2">Get Started</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a href="https://vidyapramanik.com/docs" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-orange-200 bg-slate-800/80 hover:bg-slate-700/80 border-2 border-orange-500/40 hover:border-orange-400/60 rounded-xl shadow-2xl shadow-slate-900/50 hover:shadow-orange-500/20 backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <span className="mr-2">Learn More</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          
          {/* Enhanced Key Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20 shadow-2xl shadow-orange-500/10 hover:shadow-orange-400/20 transition-all duration-500 hover:scale-105 hover:border-orange-400/40">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                <svg className="w-7 h-7 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">Instant Verification</h3>
              <p className="text-slate-400 group-hover:text-slate-300 text-sm transition-colors duration-300">Verify certificates in real-time with blockchain-backed security and tamper-proof validation.</p>
            </div>
            
            <div className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-amber-500/20 shadow-2xl shadow-amber-500/10 hover:shadow-amber-400/20 transition-all duration-500 hover:scale-105 hover:border-amber-400/40">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                <svg className="w-7 h-7 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-200 transition-colors duration-300">Secure & Private</h3>
              <p className="text-slate-400 group-hover:text-slate-300 text-sm transition-colors duration-300">End-to-end encryption ensures your data remains private while maintaining verification integrity.</p>
            </div>
            
            <div className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20 shadow-2xl shadow-yellow-500/10 hover:shadow-yellow-400/20 transition-all duration-500 hover:scale-105 hover:border-yellow-400/40">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30">
                <svg className="w-7 h-7 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">Trusted Network</h3>
              <p className="text-slate-400 group-hover:text-slate-300 text-sm transition-colors duration-300">Connected with 500+ institutions across India for seamless certificate management.</p>
            </div>
          </div>
          
          {/* Enhanced professional trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/70 rounded-full backdrop-blur-lg border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full shadow-lg shadow-emerald-500/50"></div>
              <span className="text-sm font-medium text-emerald-200">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/70 rounded-full backdrop-blur-lg border border-orange-500/30 shadow-lg shadow-orange-500/20">
              <svg className="w-5 h-5 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-orange-200">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/70 rounded-full backdrop-blur-lg border border-amber-500/30 shadow-lg shadow-amber-500/20">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-amber-200">ISO Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Additional Content Sections */}
      <section className="w-full py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent mb-4">How It Works</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Simple, secure, and efficient certificate verification in three easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-400/30 shadow-2xl shadow-orange-500/20 group-hover:scale-110 group-hover:shadow-orange-400/30 transition-all duration-500">
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-orange-200 transition-colors duration-300">Upload Certificate</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Upload your certificate or enter the certificate ID to begin the verification process securely.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-400/30 shadow-2xl shadow-amber-500/20 group-hover:scale-110 group-hover:shadow-amber-400/30 transition-all duration-500">
                <span className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">Instant Verification</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Our system cross-references with issuing institutions and validates authenticity in real-time.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-yellow-400/30 shadow-2xl shadow-yellow-500/20 group-hover:scale-110 group-hover:shadow-yellow-400/30 transition-all duration-500">
                <span className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">Get Results</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Receive detailed verification results with digital proof that can be shared with employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="w-full py-24 bg-gradient-to-r from-slate-800 via-orange-900/20 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-6 bg-slate-800/50 rounded-xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent mb-3">50K+</div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Certificates Verified</div>
            </div>
            <div className="group text-center p-6 bg-slate-800/50 rounded-xl border border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-3">500+</div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Partner Institutions</div>
            </div>
            <div className="group text-center p-6 bg-slate-800/50 rounded-xl border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-3">99.9%</div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Accuracy Rate</div>
            </div>
            <div className="group text-center p-6 bg-slate-800/50 rounded-xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="w-full py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent mb-4">Why Choose Vidya प्रमाणिक</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built with cutting-edge technology to ensure the highest standards of security and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-950/50 to-amber-950/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-400/40 shadow-2xl shadow-orange-500/10 hover:shadow-orange-400/20 transition-all duration-500 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                <svg className="w-7 h-7 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-200 transition-colors duration-300">Blockchain Technology</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Immutable records stored on blockchain ensure certificates cannot be forged or tampered with.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-950/50 to-yellow-950/50 p-8 rounded-2xl border border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 shadow-2xl shadow-amber-500/10 hover:shadow-amber-400/20 transition-all duration-500 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                <svg className="w-7 h-7 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">API Integration</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Seamless integration with existing systems through our comprehensive REST API.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-yellow-950/50 to-orange-950/50 p-8 rounded-2xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-400/40 shadow-2xl shadow-yellow-500/10 hover:shadow-yellow-400/20 transition-all duration-500 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30">
                <svg className="w-7 h-7 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">Multi-Language Support</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Available in Hindi, English, and 10+ regional languages for nationwide accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="w-full py-24 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px, 300px 300px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of institutions and individuals who trust Vidya प्रमाणिक for secure certificate verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-orange-600 bg-white hover:bg-slate-50 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="mr-2">Create Account</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/verify" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-amber-500 hover:bg-amber-400 border-2 border-amber-400 hover:border-amber-300 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="mr-2">Verify Certificate</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}