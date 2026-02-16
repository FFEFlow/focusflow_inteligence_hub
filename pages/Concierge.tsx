
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import { LOGO_SVG, ICONS } from '../constants';
import { User } from '../types';

interface ConciergeProps {
  user: User;
}

const STEPS = [
  { id: 'revenue', label: 'Current Revenue Flow', question: 'What is your current monthly revenue flow?', options: ['0 - $5k', '$5k - $20k', '$20k - $100k', '$100k+'] },
  { id: 'ai_usage', label: 'AI Integration Level', question: 'How deeply is AI currently integrated into your operations?', options: ['None (Manual)', 'Experimenting', 'Consistent Tooling', 'Deep Neural Integration'] },
  { id: 'bottleneck', label: 'Primary Bottleneck', question: 'What is the biggest friction point in your business today?', options: ['Lead Generation', 'Content Delivery', 'Operational Chaos', 'Personal Freedom'] },
];

const Concierge: React.FC<ConciergeProps> = ({ user }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [roadmap, setRoadmap] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    const stepId = STEPS[currentStep].id;
    const newAnswers = { ...answers, [stepId]: answer };
    setAnswers(newAnswers);

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      generateRoadmap(newAnswers);
    }
  };

  const generateRoadmap = async (finalAnswers: Record<string, string>) => {
    setIsCalculating(true);
    try {
      const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ||
                     (import.meta as any).env?.VITE_GEMINI_API_KEY ||
                     (window as any).aistudio?.getSelectedApiKey?.();

      if (!apiKey) throw new Error("Neural Link Offline.");

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `You are Coach Kay's AI Maturity Concierge.
User: ${user.name}
Data:
- Revenue: ${finalAnswers.revenue}
- AI Usage: ${finalAnswers.ai_usage}
- Bottleneck: ${finalAnswers.bottleneck}

Categorize them into one of these AI Maturity Levels:
1. INFANT (Manual, low revenue)
2. BUILDER (Experimenting, $5k-$20k)
3. SCALING (Systems in place, $20k-$100k)
4. LEGACY (Neural integration, $100k+)

Provide a "Roadmap to $10M Legacy".
Format with:
- CURRENT STATUS: [Maturity Level Name]
- THE GAP: Why they aren't at the next level.
- 90-DAY NEURAL ROADMAP: 3 specific steps using Google AI tools (Veo, Nano, Gemini).
- COACH KAY'S DIRECTIVE: A high-status final word.

Tone: High-status, commanding, encouraging but tactical.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setRoadmap(response.text());
    } catch (err: any) {
      setRoadmap("ERROR: " + err.message);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] p-8 md:p-20 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {!roadmap && !isCalculating ? (
          <div className="animate-fade-in">
             <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16">{LOGO_SVG}</div>
                <div>
                   <h2 className="text-4xl font-brand font-bold text-white uppercase tracking-tighter">Maturity Concierge</h2>
                   <p className="text-gold-text text-[10px] font-black uppercase tracking-[0.4em]">Step {currentStep + 1} of {STEPS.length}</p>
                </div>
             </div>

             <div className="premium-card p-12 rounded-[3rem] border-2 border-[#D4B46C]/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 leading-tight">{STEPS[currentStep].question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {STEPS[currentStep].options.map((opt) => (
                     <button
                       key={opt}
                       onClick={() => handleAnswer(opt)}
                       className="p-8 bg-white/5 border border-white/10 rounded-2xl text-left hover:border-[#D4B46C] hover:bg-[#D4B46C]/5 transition-all group"
                     >
                        <p className="text-sm font-bold text-white group-hover:gold-text transition-colors">{opt}</p>
                     </button>
                   ))}
                </div>
             </div>
          </div>
        ) : isCalculating ? (
          <div className="text-center animate-pulse py-20">
             <div className="w-24 h-24 mx-auto mb-12 gold-text">{(ICONS as any).AI}</div>
             <h2 className="text-3xl font-brand font-bold text-white uppercase tracking-widest">Calculating Maturity Index...</h2>
             <p className="text-gold-text text-[10px] font-black uppercase tracking-[0.5em] mt-4">Synthesizing Roadmap</p>
          </div>
        ) : (
          <div className="animate-slide-up space-y-12">
             <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12">{LOGO_SVG}</div>
                   <h2 className="text-2xl font-brand font-bold text-white uppercase tracking-widest">Your Legacy Roadmap</h2>
                </div>
                <button onClick={() => setRoadmap(null)} className="text-[9px] gold-text font-black uppercase tracking-widest">Restart Audit</button>
             </div>

             <div className="premium-card p-12 rounded-[3.5rem] border-4 border-[#D4B46C]/40 bg-black/40 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8">
                   <div className="px-4 py-2 bg-[#D4B46C]/10 border border-[#D4B46C]/30 rounded-full">
                      <span className="text-[10px] gold-text font-black uppercase tracking-widest">Elite Verified</span>
                   </div>
                </div>
                <div className="prose prose-invert max-w-none text-white/90 leading-relaxed whitespace-pre-wrap font-light">
                   {roadmap}
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                   <button onClick={() => window.print()} className="px-8 py-3 gold-gradient text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Download Roadmap</button>
                   <button onClick={() => navigate('/')} className="px-8 py-3 bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">Go to Workspace</button>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Concierge;
