
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { LOGO_SVG, ICONS } from '../constants';
import { User, Message } from '../types';

interface GlobalChatProps { user: User; }

const GlobalChat: React.FC<GlobalChatProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to the War Room. I am your strategic tactical agent. What specific bottleneck are we collapsing today?", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', content: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ||
                     (import.meta as any).env?.VITE_GEMINI_API_KEY ||
                     (window as any).aistudio?.getSelectedApiKey?.();
      if (!apiKey) throw new Error("Neural Link Offline: No API Key.");

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: "You are Coach Kay's lead tactical strategist. You provide high-status, direct, and elite business advice. You have access to real-time Google Search data to collapse time and space for the user. Always be tactical, concise, and brand-aligned (Navy/Gold/High-Status).",
        tools: [{ googleSearch: {} }] as any
      });

      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const chat = model.startChat({ history: history as any });
      const result = await chat.sendMessage(input);
      const response = await result.response;

      setMessages(prev => [...prev, { role: 'assistant', content: response.text(), timestamp: Date.now() }]);
    } catch (e: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: "UPLINK ERROR: " + e.message, timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-[#0A0E27]">
      <div className="bg-[#0A0E27]/80 backdrop-blur-xl border-b border-[#D4B46C]/10 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 rounded-2xl bg-[#D4B46C]/10 flex items-center justify-center gold-text border border-[#D4B46C]/20 shadow-lg">
              <div className="w-7 h-7">{(ICONS as any).AI}</div>
           </div>
           <div>
              <h2 className="text-2xl font-brand font-bold text-white tracking-tight uppercase">Tactical Briefing</h2>
              <div className="flex items-center gap-3 mt-1">
                 <span className="text-[9px] gold-text font-black uppercase tracking-widest bg-[#D4B46C]/5 px-3 py-1 rounded-full border border-[#D4B46C]/10">Global Intelligence Link</span>
              </div>
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8" ref={scrollRef}>
        <div className="max-w-4xl mx-auto w-full space-y-8">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`p-6 rounded-[2rem] ${msg.role === 'user' ? 'bg-[#D4B46C] text-[#0A0E27] font-bold' : 'bg-white/5 border border-white/10 text-white font-light'} whitespace-pre-wrap shadow-xl`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && <div className="text-gold-text text-[10px] font-black uppercase tracking-widest animate-pulse">Calculating...</div>}
        </div>
      </div>

      <div className="p-8 bg-black/20">
        <div className="max-w-4xl mx-auto relative flex gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ENTER STRATEGIC QUERY..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-[#D4B46C]"
          />
          <button onClick={handleSend} className="px-8 gold-gradient rounded-2xl text-black font-black uppercase text-[11px] tracking-widest transition-all hover:scale-105 active:scale-95">Execute</button>
        </div>
      </div>
    </div>
  );
};

export default GlobalChat;
