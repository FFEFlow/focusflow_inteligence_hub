
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { LOGO_SVG, ICONS } from '../constants';

interface ArchiveItem {
  id: string;
  moduleId: string;
  moduleTitle: string;
  content: string;
  timestamp: number;
}

const History: React.FC<{ user: User }> = ({ user }) => {
  const [archives, setArchives] = useState<ArchiveItem[]>([]);
  const [selected, setSelected] = useState<ArchiveItem | null>(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('coach_kay_archives') || '[]');
    setArchives(saved.sort((a: any, b: any) => b.timestamp - a.timestamp));
  }, []);

  return (
    <div className="p-12 max-w-7xl mx-auto h-[calc(100vh-80px)] flex flex-col">
      <div className="mb-12">
        <h2 className="text-4xl font-brand font-bold text-white mb-4 uppercase tracking-tighter">Legacy Asset Tree</h2>
        <p className="text-[#FAF7F2]/40 text-[10px] font-black uppercase tracking-[0.4em]">Chronological Evolution of Your Intelligence</p>
      </div>

      {archives.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[4rem]">
           <div className="w-20 h-20 text-white/5 mb-8 italic text-6xl font-brand">?</div>
           <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">No Strategic Assets Archived Yet</p>
        </div>
      ) : (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12 overflow-hidden">
           <div className="lg:col-span-1 space-y-4 overflow-y-auto pr-4 custom-scrollbar">
              {archives.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer relative group ${selected?.id === item.id ? 'bg-[#D4B46C]/10 border-[#D4B46C]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                   {i < archives.length - 1 && (
                     <div className="absolute left-1/2 bottom-[-1rem] w-[2px] h-4 bg-[#D4B46C]/20 z-0"></div>
                   )}
                   <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selected?.id === item.id ? 'gold-text' : 'text-white/20'}`}>
                         {(ICONS as any).Asset}
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-white uppercase tracking-widest">{item.moduleTitle}</p>
                         <p className="text-[9px] text-white/30 mt-1 uppercase font-bold">{new Date(item.timestamp).toLocaleString()}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="lg:col-span-2 h-full">
              {selected ? (
                <div className="premium-card p-12 rounded-[3rem] border border-[#D4B46C]/30 h-full overflow-y-auto bg-black/40">
                   <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10">
                      <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{selected.moduleTitle}</h3>
                        <p className="text-[9px] gold-text font-black uppercase tracking-[0.3em] mt-2">Archived Build Spec</p>
                      </div>
                      <button
                        onClick={() => {
                          const blob = new Blob([selected.content], { type: 'text/markdown' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `reclaimed-${selected.moduleId}.md`;
                          a.click();
                        }}
                        className="px-6 py-2 bg-white/5 border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest hover:bg-white/10"
                      >
                        Reclaim Asset
                      </button>
                   </div>
                   <div className="prose prose-invert max-w-none text-white/80 whitespace-pre-wrap font-light">
                      {selected.content}
                   </div>
                </div>
              ) : (
                <div className="h-full border border-white/5 rounded-[3rem] flex items-center justify-center text-center opacity-20">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em]">Select an asset node to expand its intelligence</p>
                </div>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default History;
