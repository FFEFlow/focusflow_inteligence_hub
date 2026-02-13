
import React from 'react';

const FAQ: React.FC = () => (
  <div className="p-12 max-w-4xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-12">Strategic FAQ</h2>
    <div className="space-y-6">
      {[
        { q: "What is FFE?", a: "Focus Flow Elevation is the proprietary methodology for business scaling." },
        { q: "How do I use the tools?", a: "Select a module from the dashboard and follow the tactical prompts." }
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
