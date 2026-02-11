
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MODULES, ICONS, PROMPTS_UPLINK, ASSET_FOUNDRY_NAME, GOOGLE_LABS_URL, LOGO_SVG, SUPPORT_EMAIL } from '../constants';
import { User } from '../types';
import WarRoom from './WarRoom';

interface DashboardProps { user: User; }

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const navigate = useNavigate();
  const [showWarRoom, setShowWarRoom] = useState(false);

  const masterModule = MODULES.find(m => m.id === 'legacy-engine');
  const assistantModules = MODULES.filter(m => m.id === 'mogul-engine' || m.id === 'user-guide');
  const gridModules = MODULES.filter(m => m.id !== 'legacy-engine' && m.id !== 'mogul-engine' && m.id !== 'user-guide');

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {showWarRoom && <WarRoom user={user} onClose={() => setShowWarRoom(false)} />}

      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-[#C9A55C]/10">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#C9A55C] rounded-full blur-[300px] animate-pulse"></div>
        </div>
        <div className="relative z-10 animate-fade-in max-w-6xl">
          <div className="flex justify-center mb-10 scale-125">
             {LOGO_SVG}
          </div>
          <span className="text-[14px] gold-text font-black uppercase tracking-[1em] mb-8 block">Legacy Blueprint Protocol</span>
          <h1 className="text-6xl md:text-[10rem] font-brand font-bold text-[#F7F4ED] tracking-tighter leading-[0.85] mb-12">
            The <span className="gold-text">Legacy</span> <br /> Engine.
          </h1>
          <p className="text-[#FAF7F2]/40 text-xl md:text-4xl font-light leading-relaxed max-w-4xl mx-auto mb-16">
            Welcome, {user.name.split(' ')[0]}. Your specialized Focus Flow Elevation (FFE) Intelligence Hub is operational.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button onClick={() => document.getElementById('modules-grid')?.scrollIntoView({ behavior: 'smooth' })} className="px-16 py-7 gold-gradient text-[#0A0E27] text-sm font-black uppercase tracking-[0.4em] rounded-3xl shadow-xl hover:scale-105 transition-all">Enter Workspace</button>
            <button onClick={() => setShowWarRoom(true)} className="px-16 py-7 bg-white/5 border-2 border-[#C9A55C]/30 text-[#C9A55C] text-sm font-black uppercase tracking-[0.4em] rounded-3xl hover:bg-[#C9A55C]/10 transition-all flex items-center">War Room</button>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-[40] bg-[#0A0E27]/95 backdrop-blur-2xl border-b border-[#C9A55C]/20 px-6 py-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="px-5 py-2.5 bg-green-500/10 border border-green-500/30 rounded-full flex items-center shadow-[0_0_20px_rgba(34,197,94,0.1)]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-[10px] text-green-400 font-black uppercase tracking-widest">Summit Live Sync</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href={GOOGLE_LABS_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl flex items-center transition-all group">
              <span className="text-[10px] text-white/60 font-black uppercase tracking-widest group-hover:text-white transition-transform">Google Labs</span>
            </a>
            <a href={PROMPTS_UPLINK} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#C9A55C]/10 border border-[#C9A55C]/40 hover:border-[#C9A55C] rounded-2xl flex items-center transition-all group">
              <span className="text-[10px] gold-text font-black uppercase tracking-widest group-hover:scale-105 transition-transform">Coach Kay Google Prompts</span>
            </a>
          </div>
        </div>
      </div>

      <div id="modules-grid" className="p-6 md:p-20 max-w-[1700px] mx-auto pb-40">
        <section className="space-y-32">
          {masterModule && (
            <div className="premium-card rounded-[4rem] p-12 md:p-24 relative overflow-hidden border-4 border-[#C9A55C]/40 transition-all duration-700">
              <div className="absolute top-0 right-0 gold-gradient px-20 py-4 text-[12px] font-black text-black uppercase tracking-[0.6em] rotate-45 translate-x-16 translate-y-8 z-10 whitespace-nowrap shadow-xl">Featured Asset</div>
              
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div onClick={() => navigate(`/module/${masterModule.id}`)} className="w-64 h-64 rounded-[4rem] bg-[#C9A55C]/10 flex items-center justify-center gold-text border-2 border-[#C9A55C]/30 hover:scale-110 cursor-pointer transition-transform duration-700 shadow-[inset_0_0_40px_rgba(201,165,92,0.1)]">
                   <div className="w-40 h-40">{(ICONS as any)[masterModule.icon]}</div>
                </div>
                <div className="text-center lg:text-left flex-1 min-w-0">
                  <h3 className="text-5xl md:text-8xl font-brand font-bold text-[#F7F4ED] mb-8 tracking-tighter truncate w-full">{masterModule.title}</h3>
                  <p className="text-xl md:text-3xl text-[#FAF7F2]/60 font-light leading-relaxed mb-12 max-w-4xl">{masterModule.description}</p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {assistantModules.map((assistant) => (
                      <button 
                        key={assistant.id}
                        onClick={() => navigate(`/module/${assistant.id}`)}
                        className="px-8 py-4 bg-[#C9A55C]/5 border-2 border-[#C9A55C]/20 rounded-2xl text-[10px] font-black gold-text uppercase tracking-widest hover:bg-[#C9A55C]/15 hover:border-[#C9A55C]/60 transition-all flex items-center gap-3 shadow-lg"
                      >
                        <span className="w-5 h-5">{(ICONS as any)[assistant.icon]}</span>
                        {assistant.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {gridModules.map((module) => (
              <div key={module.id} onClick={() => navigate(`/module/${module.id}`)} className="premium-card p-12 rounded-[3.5rem] relative group transition-all duration-700 hover:cursor-pointer border-2 flex flex-col h-full overflow-hidden">
                <div className="w-20 h-20 rounded-3xl bg-[#C9A55C]/5 flex items-center justify-center gold-text mb-12 border-2 border-[#C9A55C]/20 group-hover:scale-110 transition-all shadow-[inset_0_0_20px_rgba(201,165,92,0.05)]">
                  <div className="w-12 h-12">{(ICONS as any)[module.icon]}</div>
                </div>
                <h5 className="text-3xl font-brand font-bold text-[#F7F4ED] mb-6 group-hover:gold-text transition-colors leading-tight truncate w-full">{module.title}</h5>
                <p className="text-[#FAF7F2]/40 text-base leading-relaxed font-light mb-10 h-20 overflow-hidden line-clamp-3">{module.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                   {module.whatYouGet.slice(0, 2).map((w, i) => (
                     <span key={i} className="text-[9px] font-black gold-text border border-[#C9A55C]/20 px-4 py-2 rounded-full uppercase tracking-widest bg-white/5 whitespace-nowrap">{w}</span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-60 pt-32 border-t border-[#C9A55C]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-[#FAF7F2]/40">
          <div className="space-y-8">
            <div className="mb-4">
               {LOGO_SVG}
            </div>
            <h4 className="text-white font-brand font-bold text-3xl gold-text truncate">Coach Kay</h4>
            <p className="text-[10px] font-black uppercase tracking-widest">&copy; {new Date().getFullYear()} FFE Intelligence Hub. All Rights Reserved.</p>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Operational Sitemap</p>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/" className="hover:text-[#C9A55C] transition-all">Operations Dashboard</Link></li>
              <li><Link to="/guide" className="hover:text-[#C9A55C] transition-all">Master Protocol Guide</Link></li>
              <li><Link to="/chat" className="hover:text-[#C9A55C] transition-all">Strategic AI Chat</Link></li>
              <li><Link to="/history" className="hover:text-[#C9A55C] transition-all">Profile Archives</Link></li>
              <li><Link to="/faq" className="hover:text-[#C9A55C] transition-all">Strategic FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Compliance & Scale</p>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/faq" className="hover:text-[#C9A55C] transition-all">Privacy Protocol</Link></li>
              <li><Link to="/faq" className="hover:text-[#C9A55C] transition-all">White-Label Inquiries</Link></li>
              <li><a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener" className="text-[#C9A55C] hover:underline transition-all">Billing Documentation</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <p className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Uplink</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="block w-full py-5 border border-[#C9A55C]/20 rounded-2xl text-center text-[10px] font-black uppercase tracking-widest hover:border-[#C9A55C] hover:text-[#C9A55C] transition-all shadow-lg">Email Support</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
