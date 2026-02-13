
import React from 'react';
import { User } from '../types';

const History: React.FC<{ user: User }> = ({ user }) => (
  <div className="p-12 max-w-6xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-4">Profile Archives</h2>
    <p className="text-[#FAF7F2]/40 text-sm font-bold uppercase tracking-[0.3em] mb-12">Your Strategic Evolution History</p>

    <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-white/5 rounded-[4rem]">
       <div className="w-20 h-20 text-white/10 mb-8 italic text-6xl font-brand">?</div>
       <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em]">No Archived Intelligence Found</p>
    </div>
  </div>
);

export default History;
