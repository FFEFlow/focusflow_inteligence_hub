
import React, { useState } from 'react';
import { User, UserTier, UserRole } from '../types';
import { LOGO_SVG, MASTER_ACCESS_CODE } from '../constants';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [accessCode, setAccessCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate validation
    setTimeout(() => {
      if (accessCode.toUpperCase() === MASTER_ACCESS_CODE) {
        onLogin({
          id: Math.random().toString(36).substr(2, 9),
          name: name || 'Summit Architect',
          email: email || 'guest@coachkay.ai',
          tier: UserTier.SUMMIT,
          role: UserRole.OPERATOR,
          isAuthorized: true
        });
      } else if (accessCode.toUpperCase() === 'PARTNER2026') {
         onLogin({
          id: Math.random().toString(36).substr(2, 9),
          name: name || 'Elite Partner',
          email: email || 'partner@coachkay.ai',
          tier: UserTier.WHITE_LABEL,
          role: UserRole.PARTNER_ADMIN,
          isAuthorized: true
        });
      } else {
        setError('Invalid Intelligence Access Code. Uplink Denied.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#D4B46C]/5 rounded-full blur-[200px] animate-subtle-pulse"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="flex justify-center mb-12">
          <div className="scale-150">{LOGO_SVG}</div>
        </div>

        <div className="premium-card p-12 rounded-[4rem] border-2 border-[#D4B46C]/30 shadow-[0_0_100px_rgba(212,180,108,0.1)]">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-brand font-bold text-white mb-4 tracking-tighter uppercase">Intelligence Uplink</h2>
            <p className="text-[#FAF7F2]/40 text-sm font-light uppercase tracking-[0.3em]">Authorize Your Legacy Protocol</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#D4B46C] uppercase tracking-[0.4em] ml-4">Access Code</label>
              <input
                type="password"
                required
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="ENTER LEGACY KEY"
                className="w-full bg-black/40 border-2 border-[#D4B46C]/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:border-[#D4B46C] transition-all outline-none text-center tracking-[1em] font-black"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] ml-4">Full Name</label>
                 <input
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="NAME"
                   className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-xs font-bold uppercase tracking-widest outline-none focus:border-[#D4B46C]/50"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] ml-4">Email Address</label>
                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="EMAIL"
                   className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-xs font-bold uppercase tracking-widest outline-none focus:border-[#D4B46C]/50"
                 />
               </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-500 text-[10px] font-black uppercase tracking-widest text-center animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full gold-gradient py-6 rounded-3xl text-black text-xs font-black uppercase tracking-[0.5em] shadow-2xl hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50 mt-4"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Syncing...</span>
                </div>
              ) : 'Establish Connection'}
            </button>
          </form>

          <p className="text-center mt-12 text-[10px] text-[#FAF7F2]/20 font-bold uppercase tracking-widest leading-relaxed">
            By accessing this hub, you agree to the <br />
            <span className="text-white/40">Coach Kay Legacy Protocols & Privacy Standards.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
