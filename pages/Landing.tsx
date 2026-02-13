
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGO_SVG, SUMMIT_PRICE } from '../constants';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0E27] relative overflow-hidden">
      {/* Hero Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#D4B46C]/10 rounded-full blur-[150px] opacity-50"></div>

      <header className="p-8 flex justify-between items-center relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12">{LOGO_SVG}</div>
           <span className="text-white font-brand font-bold text-2xl tracking-tighter">Coach Kay</span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-3 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
        >
          Intelligence Uplink
        </button>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center pt-32 px-6 text-center max-w-6xl mx-auto">
        <span className="text-[12px] gold-text font-black uppercase tracking-[1em] mb-10 animate-fade-in">Category-of-One AI Intelligence</span>
        <h1 className="text-6xl md:text-[8rem] font-brand font-bold text-white tracking-tighter leading-[0.85] mb-12 animate-fade-in">
           Build Your <br /> <span className="gold-text">Legacy</span> Hub.
        </h1>
        <p className="text-[#FAF7F2]/60 text-xl md:text-3xl font-light leading-relaxed max-w-3xl mb-16 animate-fade-in [animation-delay:0.2s]">
          Transition from operator to architect. The FFE Intelligence Hub is the world's most sophisticated neural engine for high-ticket business owners.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 animate-fade-in [animation-delay:0.4s]">
          <button
            onClick={() => navigate('/login')}
            className="px-16 py-7 gold-gradient text-black text-xs font-black uppercase tracking-[0.4em] rounded-[2rem] shadow-2xl hover:scale-105 transition-all"
          >
            Enter Workspace
          </button>
          <div className="px-10 py-7 border-2 border-[#D4B46C]/30 text-[#D4B46C] text-xs font-black uppercase tracking-[0.4em] rounded-[2rem] flex flex-col justify-center">
             <span>Summit Pass: ${SUMMIT_PRICE}</span>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-left">
           {[
             { title: "Neural Blueprinting", desc: "Automate the deconstruction of your $100K+ business model." },
             { title: "Asset Foundry", desc: "Create elite market-facing assets using Veo and ImageXGen logic." },
             { title: "Search Dominance", desc: "Architect first-page authority for your name and legacy." }
           ].map((feat, i) => (
             <div key={i} className="premium-card p-10 rounded-[3rem] border border-white/5">
                <h4 className="text-2xl font-brand font-bold text-white mb-4">{feat.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>
      </main>

      <footer className="mt-40 p-20 border-t border-white/5 text-center">
         <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.5em]">&copy; 2026 FFE Intelligence Hub. Powered by Google AI Studio.</p>
      </footer>
    </div>
  );
};

export default Landing;
