import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { User, UserTier } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ModuleWizard from './pages/ModuleWizard';
import History from './pages/History';
import Profile from './pages/Profile';
import Login from './pages/Login';
import GlobalChat from './pages/GlobalChat';
import FloatingChat from './components/FloatingChat';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Landing from './pages/Landing';
import MasterGuide from './pages/MasterGuide';
import SalesPage from './pages/SalesPage';
import { GOOGLE_LABS_URL } from './constants';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('coach_kay_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // GLOBAL KEY CHECK PROTOCOL
  useEffect(() => {
    const checkKeyStatus = async () => {
      if (typeof (window as any).aistudio?.hasSelectedApiKey === 'function') {
        const has = await (window as any).aistudio.hasSelectedApiKey();
        setHasApiKey(has);
        if (!has && user) setShowAuthModal(true);
      } else {
        setHasApiKey(!!process.env.API_KEY);
      }
    };
    checkKeyStatus();
    const interval = setInterval(checkKeyStatus, 5000);
    return () => clearInterval(interval);
  }, [user]);

  const handleAuthorize = async () => {
    if (typeof (window as any).aistudio?.openSelectKey === 'function') {
      await (window as any).aistudio.openSelectKey();
      setHasApiKey(true);
      setShowAuthModal(false);
    }
  };

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('coach_kay_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('coach_kay_user');
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#D4B46C] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-[#0a0a0a] relative overflow-x-hidden">
        {/* GLOBAL AUTH MODAL */}
        {showAuthModal && user && (
          <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-6">
            <div className="max-w-md w-full premium-card p-10 rounded-[3rem] border-2 border-[#D4B46C] text-center space-y-8 animate-fade-in shadow-[0_0_100px_rgba(212,180,108,0.3)]">
              <div className="w-20 h-20 bg-[#D4B46C]/10 rounded-full flex items-center justify-center mx-auto text-gold-text">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-brand font-bold text-white uppercase tracking-tighter">Neural Uplink Required</h2>
                <p className="text-[#FAF7F2]/75 text-sm leading-relaxed italic">
                  Coach Kay's high-ticket strategic reasoning requires an authorized Google AI Studio key to function. Accessing $697+ tier intelligence.
                </p>
              </div>
              <button 
                onClick={handleAuthorize}
                className="w-full py-5 gold-gradient text-black font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-2xl hover:scale-105 transition-all"
              >
                Authorize Intelligence Link
              </button>
              <button onClick={() => setShowAuthModal(false)} className="text-[11px] text-white/65 uppercase font-bold tracking-widest hover:text-white transition-all">Continue in Demo Mode (Restricted)</button>
            </div>
          </div>
        )}

        {user && (
          <>
            <header className="fixed top-0 left-0 right-0 h-20 bg-[#0A0E27]/90 backdrop-blur-3xl border-b border-[#D4B46C]/10 z-[45] flex items-center justify-between px-6 md:px-12 md:ml-72 transition-all">
              <div className="flex items-center gap-6">
                <button onClick={toggleSidebar} className="md:hidden gold-text p-3 hover:bg-[#D4B46C]/10 rounded-2xl transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <div className="hidden md:block">
                   <div className="flex flex-col">
                      <span className="text-[12px] text-white font-black uppercase tracking-[0.8em] opacity-75">Intelligence Hub</span>
                      <span className={`text-[11px] font-bold uppercase tracking-[0.2em] mt-1 italic ${hasApiKey ? 'gold-text opacity-75' : 'text-red-500 animate-pulse'}`}>
                        {hasApiKey ? 'Authorized Sync Active' : 'Uplink Offline'}
                      </span>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-10 md:gap-14">
                <a 
                  href={GOOGLE_LABS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hidden lg:flex items-center gap-3 text-[11px] font-black text-white/65 uppercase tracking-[0.3em] hover:text-white transition-all"
                >
                   Google Labs
                </a>
                <Link to="/chat" className="group flex items-center gap-5 hover:gold-text transition-all">
                   <div className="w-6 h-6 flex items-center justify-center gold-text group-hover:scale-110 transition-transform opacity-65 group-hover:opacity-100">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M11.608 2.323a.75.75 0 0 1 .784 0l9.303 5.347c.23.132.308.427.176.657l-2.012 3.492a.75.75 0 0 1-1.041.275L12 8.12l-6.818 3.974a.75.75 0 0 1-1.04-.275l-2.013-3.492a.498.498 0 0 1 .176-.657l9.303-5.347ZM2.158 10.957a.75.75 0 0 1 .84.14l8.252 19.252a.75.75 0 0 0 1.06 0l8.252-8.252a.75.75 0 0 1 1.258.53v8.373a2.25 2.25 0 0 1-2.25 2.25H4.43a2.25 2.25 0 0 1-2.25-2.25V11.627a.75.75 0 0 1-.022-.67Z" /></svg>
                   </div>
                   <span className="text-[11px] text-white/65 group-hover:text-white font-black uppercase tracking-[0.4em] hidden sm:block">Tactical Briefing</span>
                </Link>
                <Link to="/profile" className="w-11 h-11 rounded-full border border-[#D4B46C]/20 overflow-hidden hover:border-[#D4B46C]/60 transition-all shadow-xl scale-110">
                  <img 
                    src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100"
                  />
                </Link>
              </div>
            </header>
            <Sidebar user={user} onLogout={handleLogout} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            {isSidebarOpen && <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[45] md:hidden" onClick={() => setIsSidebarOpen(false)} />}
          </>
        )}
        <main className={`flex-1 overflow-y-auto w-full transition-all ${user ? 'md:ml-72 pt-20' : ''}`}>
          <Routes>
            {!user ? (
              <>
                <Route path="/home" element={<Landing />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route path="/module/:id" element={<ModuleWizard user={user} />} />
                <Route path="/chat" element={<GlobalChat user={user} />} />
                <Route path="/history" element={<History user={user} />} />
                <Route path="/profile" element={<Profile user={user} onUpdateUser={handleLogin} />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/guide" element={<MasterGuide />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/sales-copy" element={<SalesPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </main>
        {user && <FloatingChat user={user} />}
      </div>
    </Router>
  );
};

export default App;