
import React from 'react';

const MasterGuide: React.FC = () => (
  <div className="p-12 max-w-5xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-4">Master Protocol Guide</h2>
    <p className="text-gold-text text-xs font-black uppercase tracking-[0.4em] mb-12">The Definitive Field Manual for FFE Intelligence</p>

    <div className="prose prose-invert max-w-none space-y-8">
      <section className="premium-card p-10 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-white mb-4">Phase 1: The Blueprint (Day 01)</h3>
        <p className="text-white/60 mb-4">Focus on deconstruction. Use the **Clarity Scan** to find your $100K bottleneck and the **Leak Detector** to stop operational drain.</p>
        <div className="bg-white/5 p-6 rounded-2xl border border-[#D4B46C]/10">
           <p className="text-[10px] gold-text font-black uppercase tracking-widest mb-2">Tactical Step:</p>
           <p className="text-xs text-white/40">Input your current revenue data and let the AI identify exactly where you are losing momentum.</p>
        </div>
      </section>
      <section className="premium-card p-10 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-white mb-4">Phase 2: The Foundry (Day 02)</h3>
        <p className="text-white/60 mb-4">Focus on construction. Use the **Legacy Architect** to build your core offer and **Veo Storyboard** for cinematic brand visuals.</p>
        <div className="bg-white/5 p-6 rounded-2xl border border-[#D4B46C]/10">
           <p className="text-[10px] gold-text font-black uppercase tracking-widest mb-2">Tactical Step:</p>
           <p className="text-xs text-white/40">Download your Blueprints after each session and use them to train your external Google Workspace tools.</p>
        </div>
      </section>
    </div>
  </div>
);

export default MasterGuide;
