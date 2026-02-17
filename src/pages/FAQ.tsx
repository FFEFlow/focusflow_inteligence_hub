
import React from 'react';

const FAQ: React.FC = () => (
  <div className="p-12 max-w-4xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-12">Strategic FAQ</h2>
    <div className="space-y-6">
      {[
        { q: "What is the Focus Flow Elevation (FFE) Hub?", a: "It is an elite AI strategy ecosystem designed to help business owners transition from manual operators to legacy architects using Google's most advanced neural tools." },
        { q: "How do I use the AI modules?", a: "Select a module based on your current business day (Day 01 for Audit, Day 02 for Creation). Follow the prompts to generate blueprints, then use the 'Download' feature to save your assets." },
        { q: "What are Veo, Nano, and ImageXGen?", a: "These are advanced Google-powered engines integrated into the hub. Veo handles cinematic visual logic, Nano optimizes for mobile/on-device tasks, and ImageXGen crafts high-fidelity brand assets." },
        { q: "Do I need a Google AI Studio Key?", a: "Yes, for full high-status strategic reasoning, the hub requires an authorized uplink to your Google AI Studio account." }
      ].map((item, i) => (
        <div key={i} className="premium-card p-8 rounded-3xl border border-white/5">
          <h4 className="text-xl font-bold text-white mb-2">{item.q}</h4>
          <p className="text-white/40 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
