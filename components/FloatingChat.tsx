
import React, { useState, useRef, useEffect } from 'react';
import { User } from '../types';
import { ICONS } from '../constants';
import { GoogleGenAI } from '@google/genai';

const FloatingChat: React.FC<{ user: User }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: 'Neural Link Active. Ready to collapse time.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ||
                     (import.meta as any).env?.VITE_GEMINI_API_KEY ||
                     (window as any).aistudio?.getSelectedApiKey?.();
      if (!apiKey) throw new Error("Offline");
      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: "You are Coach Kay's quick-access tactical agent. Be extremely concise, direct, and brand-aligned."
      });
      const result = await model.generateContent(input);
      const response = await result.response;
      setMessages(prev => [...prev, { role: 'assistant', content: response.text() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Link Failed." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] font-brand">
      {isOpen ? (
        <div className="w-[350px] h-[500px] bg-[#0A0E27]/95 backdrop-blur-2xl rounded-[3rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col animate-fade-in border border-[#D4B46C]/20">
           <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] gold-text font-black uppercase tracking-[0.3em]">Tactical Mini-Uplink</span>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">✕</button>
           </div>
           <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[12px] ${m.role === 'user' ? 'bg-[#D4B46C] text-black font-bold' : 'bg-white/5 text-white/80 border border-white/10 font-light'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-[9px] gold-text animate-pulse font-black uppercase tracking-widest">Processing...</div>}
           </div>
           <div className="mt-6 pt-6 border-t border-white/10">
              <div className="relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[12px] text-white outline-none focus:border-[#D4B46C] transition-all"
                />
                <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 gold-text">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
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
