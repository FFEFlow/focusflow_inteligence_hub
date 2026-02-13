
import React, { useState } from 'react';
import { User } from '../types';
import { ICONS } from '../constants';

const FloatingChat: React.FC<{ user: User }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="w-80 h-96 premium-card rounded-[2.5rem] p-6 shadow-2xl flex flex-col animate-fade-in border-2 border-[#D4B46C]/40">
           <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] gold-text font-black uppercase tracking-widest">Tactical Link</span>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">✕</button>
           </div>
           <div className="flex-1 overflow-y-auto text-xs text-white/60 space-y-4">
              <p className="bg-white/5 p-4 rounded-2xl">I am your quick-access strategic agent. How can I assist your execution right now?</p>
           </div>
           <div className="mt-4 pt-4 border-t border-white/10">
              <input
                placeholder="Ask anything..."
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-xs text-white outline-none focus:border-[#D4B46C]"
              />
           </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,180,108,0.4)] hover:scale-110 transition-all animate-hud-drift"
        >
          <div className="w-10 h-10">{(ICONS as any).AI}</div>
        </button>
      )}
    </div>
  );
};

export default FloatingChat;
