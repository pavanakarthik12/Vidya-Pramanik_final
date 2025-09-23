import React from 'react';
import { Link } from 'react-router-dom';

import { GridBackground } from './GridBackground';

export function HeroSection() {
  return (
    <>
      <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800">
        <GridBackground />
        
        {/* Unique professional pattern background */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, transparent 25%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 50%, transparent 50%, transparent 75%, rgba(99, 102, 241, 0.03) 75%),
              linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.03) 25%, rgba(139, 92, 246, 0.03) 50%, transparent 50%, transparent 75%, rgba(59, 130, 246, 0.05) 75%)
            `,
            backgroundSize: '200px 200px, 300px 300px, 60px 60px, 80px 80px',
            backgroundPosition: '0 0, 100px 100px, 0 0, 40px 40px'
          }}></div>
        </div>
        
        {/* Subtle geometric elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200 dark:border-blue-800 rounded-lg rotate-12 opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-indigo-200 dark:border-indigo-800 rounded-full opacity-25"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-purple-200 dark:border-purple-800 rounded-full opacity-30"></div>
        
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          {/* Professional badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 shadow-lg mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Secure Certificate Verification Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">Vidya प्रमाणिक</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            A secure, modern platform for certificate verification, trusted by institutions and verifiers across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-xl hover:shadow-2xl backdrop-blur-sm transition-all duration-300 border border-blue-500/20">
              Get Started
            </Link>
            
            <a href="https://vidyapramanik.com/docs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 rounded-lg shadow-xl hover:shadow-2xl backdrop-blur-sm transition-all duration-300">
              Learn More
            </a>
          </div>
          
          {/* Key Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Instant Verification</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Verify certificates in real-time with blockchain-backed security and tamper-proof validation.</p>
            </div>
            
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">End-to-end encryption ensures your data remains private while maintaining verification integrity.</p>
            </div>
            
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Trusted Network</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Connected with 500+ institutions across India for seamless certificate management.</p>
            </div>
          </div>
          
          {/* Professional trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">ISO Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="w-full py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Simple, secure, and efficient certificate verification in three easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Upload Certificate</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Upload your certificate or enter the certificate ID to begin the verification process securely.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Instant Verification</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our system cross-references with issuing institutions and validates authenticity in real-time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Get Results</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Receive detailed verification results with digital proof that can be shared with employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50K+</div>
              <div className="text-slate-600 dark:text-slate-400">Certificates Verified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-400">Partner Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
              <div className="text-slate-600 dark:text-slate-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Vidya प्रमाणिक</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Built with cutting-edge technology to ensure the highest standards of security and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Blockchain Technology</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Immutable records stored on blockchain ensure certificates cannot be forged or tampered with.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-8 rounded-xl border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">API Integration</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Seamless integration with existing systems through our comprehensive REST API.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Multi-Language Support</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Available in Hindi, English, and 10+ regional languages for nationwide accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of institutions and individuals who trust Vidya प्रमाणिक for secure certificate verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-50 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Create Account
            </Link>
            <Link to="/verify" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 border-2 border-blue-400 hover:border-blue-300 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Verify Certificate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}