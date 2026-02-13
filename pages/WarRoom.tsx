
import React from 'react';
import { User } from '../types';
import { LOGO_SVG } from '../constants';

interface WarRoomProps {
  user: User;
  onClose: () => void;
}

const WarRoom: React.FC<WarRoomProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 z-[1000] bg-[#0A0E27]/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-12 overflow-y-auto">
      <div className="max-w-7xl w-full h-full flex flex-col animate-fade-in">
        <div className="flex justify-between items-center mb-12">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16">{LOGO_SVG}</div>
              <div>
                <h2 className="text-4xl font-brand font-bold text-white tracking-tighter uppercase">The War Room</h2>
                <p className="text-gold-text text-[10px] font-black uppercase tracking-[0.5em]">High-Velocity Execution Environment</p>
              </div>
           </div>
           <button onClick={onClose} className="px-8 py-3 border border-white/10 text-white/40 hover:text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all">Exit Environment</button>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2 space-y-12">
              <div className="premium-card p-10 rounded-[3rem] border-2 border-[#D4B46C]/20 h-full relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8">
                    <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full flex items-center">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                       <span className="text-[8px] text-green-400 font-black uppercase tracking-widest">Neural Link Active</span>
                    </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Global Status Report</h3>
                 <div className="space-y-6">
                    <p className="text-white/40 text-sm leading-relaxed">System monitoring real-time market shifts for <span className="text-white font-bold">{user.name}</span>.</p>
                    <div className="grid grid-cols-3 gap-4">
                       {[
                         { l: "Revenue Flow", v: "Optimized" },
                         { l: "Asset Health", v: "High Performance" },
                         { l: "Market Dominance", v: "Expanding" }
                       ].map((s, i) => (
                         <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <p className="text-[8px] text-white/30 font-black uppercase tracking-widest mb-1">{s.l}</p>
                            <p className="text-xs font-bold text-white">{s.v}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="premium-card p-8 rounded-[2.5rem] border border-white/10">
                 <h4 className="text-[10px] gold-text font-black uppercase tracking-[0.4em] mb-6">Tactical Alerts</h4>
                 <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border-l-4 border-gold-main">
                       <p className="text-[10px] text-white font-bold">New Market Disruption Detected</p>
                       <p className="text-[9px] text-white/40 mt-1 uppercase tracking-widest">AI Sector Growth +14%</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border-l-4 border-white/20 opacity-50">
                       <p className="text-[10px] text-white font-bold">Legacy Protocol Initialized</p>
                       <p className="text-[9px] text-white/40 mt-1 uppercase tracking-widest">12:00 PM EST</p>
                    </div>
                 </div>
              </div>

              <div className="premium-card p-8 rounded-[2.5rem] gold-gradient text-black">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Urgent Directive</h4>
                 <p className="text-sm font-bold leading-tight">Finalize your VSL Script in the Legacy Architect module to capture today's lead flow.</p>
                 <button className="mt-6 w-full py-3 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-xl">Execute Now</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WarRoom;
