
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import { MODULES, ICONS, LOGO_SVG } from '../constants';
import { User, Message } from '../types';

interface ModuleWizardProps {
  user: User;
}

const ModuleWizard: React.FC<ModuleWizardProps> = ({ user }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [module, setModule] = useState(MODULES.find(m => m.id === id));
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = MODULES.find(m => m.id === id);
    if (!found) {
      navigate('/');
      return;
    }
    setModule(found);
    setMessages([
      {
        role: 'assistant',
        content: `**[SYSTEM INITIALIZED: ${found.title}]**\n\n${found.architectDefinition}\n\n${found.initialQuestion}`,
        timestamp: Date.now()
      }
    ]);
  }, [id, navigate]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !module) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ||
                     (import.meta as any).env?.VITE_GEMINI_API_KEY ||
                     (window as any).aistudio?.getSelectedApiKey?.();
      if (!apiKey) {
        throw new Error("Neural Uplink Offline: No API Key detected.");
      }

      const genAI = new GoogleGenAI(apiKey);

      // Determine if search grounding is needed (Nexus Intelligence or Search Dominance)
      const useSearch = module.id === 'nexus-intelligence' || module.id === 'authority-agent';

      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: module.systemPrompt,
        tools: useSearch ? [{ googleSearch: {} }] as any : undefined
      });

      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const chat = model.startChat({
        history: history as any,
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();

      const assistantMessage: Message = {
        role: 'assistant',
        content: text,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `**[ERROR: UPLINK FAILED]**\n\n${error.message}`,
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!module) return null;

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-[#0A0E27]">
      {/* Header */}
      <div className="bg-[#0A0E27]/80 backdrop-blur-xl border-b border-[#D4B46C]/10 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 rounded-2xl bg-[#D4B46C]/10 flex items-center justify-center gold-text border border-[#D4B46C]/20 shadow-lg">
              <div className="w-7 h-7">{(ICONS as any)[module.icon]}</div>
           </div>
           <div>
              <h2 className="text-2xl font-brand font-bold text-white tracking-tight">{module.title}</h2>
              <div className="flex items-center gap-3 mt-1">
                 <span className="text-[9px] gold-text font-black uppercase tracking-widest bg-[#D4B46C]/5 px-3 py-1 rounded-full border border-[#D4B46C]/10">Day 0{module.summitDay} Protocol</span>
                 <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest italic">{module.id.toUpperCase()}</span>
              </div>
           </div>
        </div>
        <button onClick={() => navigate('/')} className="text-[10px] text-white/40 hover:text-white font-black uppercase tracking-[0.3em] transition-all">Abort Protocol</button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 scroll-smooth" ref={scrollRef}>
        <div className="max-w-4xl mx-auto w-full space-y-12">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`max-w-[85%] space-y-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.role === 'assistant' && (
                   <div className="flex items-center gap-3 mb-2 opacity-50">
                      <div className="w-5 h-5 gold-text">{LOGO_SVG}</div>
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Intelligence Report</span>
                   </div>
                )}
                <div className={`
                  p-8 rounded-[2.5rem] text-base leading-relaxed whitespace-pre-wrap relative group/msg
                  ${msg.role === 'user'
                    ? 'bg-[#D4B46C] text-[#0A0E27] font-bold rounded-tr-none shadow-xl'
                    : 'bg-white/5 border border-white/10 text-[#FAF7F2]/90 rounded-tl-none font-light'}
                `}>
                  {msg.content}

                  {msg.role === 'assistant' && !isLoading && (
                    <button
                      onClick={() => {
                        const blob = new Blob([msg.content], { type: 'text/markdown' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${module.id}-blueprint.md`;
                        a.click();
                      }}
                      className="absolute -bottom-4 -right-4 bg-[#D4B46C] text-black px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest opacity-0 group-hover/msg:opacity-100 transition-all shadow-xl hover:scale-110"
                    >
                      Download Blueprint
                    </button>
                  )}
                </div>
                <div className="text-[9px] font-black text-white/20 uppercase tracking-widest px-4">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start animate-pulse">
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] rounded-tl-none">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#D4B46C] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#D4B46C] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-[#D4B46C] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-8 md:p-12 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27] to-transparent">
        <div className="max-w-4xl mx-auto relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="TYPE COMMAND OR RESPONSE..."
            className="w-full bg-white/5 border-2 border-white/10 rounded-[2.5rem] px-10 py-8 text-white placeholder:text-white/20 focus:border-[#D4B46C]/40 transition-all outline-none resize-none font-bold tracking-wide shadow-2xl min-h-[100px]"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 gold-gradient rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
        <p className="text-center mt-6 text-[9px] text-white/20 font-black uppercase tracking-[0.5em]">High-Status Implementation Logic Active</p>
      </div>
    </div>
  );
};

export default ModuleWizard;
