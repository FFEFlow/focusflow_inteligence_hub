
import React from 'react';

const MasterGuide: React.FC = () => (
  <div className="p-12 max-w-5xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-4">Master Protocol Guide</h2>
    <p className="text-gold-text text-xs font-black uppercase tracking-[0.4em] mb-12">The Definitive Field Manual for FFE Intelligence</p>

    <div className="prose prose-invert max-w-none space-y-8">
      <section className="premium-card p-10 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-white mb-4">Phase 1: The Blueprint</h3>
        <p className="text-white/60">Start with the Clarity Scan and Leak Detector. Before you scale, you must eliminate friction.</p>
      </section>
      <section className="premium-card p-10 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-white mb-4">Phase 2: The Foundry</h3>
        <p className="text-white/60">Use the Legacy Architect and Veo Storyboard to build high-status assets that attract elite clients.</p>
      </section>
    </div>
  </div>
);

export default MasterGuide;
