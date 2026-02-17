
import React from 'react';

const SalesPage: React.FC = () => (
  <div className="p-12 max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-brand font-bold text-white mb-8">Elevate Your Presence</h2>
    <p className="text-xl text-white/60 mb-12">The FFE Summit is the entry point to a new class of business intelligence.</p>
    <div className="premium-card p-12 rounded-[4rem] border-2 border-[#D4B46C]">
       <h3 className="text-3xl font-bold text-white mb-4">Summit Architect Pass</h3>
       <p className="text-6xl font-brand font-bold gold-text mb-8">$697</p>
       <ul className="text-left space-y-4 mb-12 text-white/60">
          <li>✓ Full Access to 16 AI Modules</li>
          <li>✓ 2-Day Virtual Summit Intensive</li>
          <li>✓ Legacy Blueprint Templates</li>
       </ul>
       <button className="w-full gold-gradient py-6 rounded-2xl text-black font-black uppercase tracking-widest">Secure Your Seat</button>
    </div>
  </div>
);

export default SalesPage;
