
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { User } from '../types';
import { LOGO_SVG, ICONS } from '../constants';

interface WarRoomProps {
  user: User;
  onClose: () => void;
}

const WarRoom: React.FC<WarRoomProps> = ({ user, onClose }) => {
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setImages(prev => [...prev, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const runAudit = async () => {
    if (images.length === 0) return;
    setIsAnalyzing(true);
    setReport(null);

    try {
      const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ||
                     (import.meta as any).env?.VITE_GEMINI_API_KEY ||
                     (window as any).aistudio?.getSelectedApiKey?.();

      if (!apiKey) throw new Error("Neural Link Offline: No API Key.");

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const imageParts = await Promise.all(images.map(async img => {
        const base64 = await fileToBase64(img.file);
        return {
          inlineData: {
            mimeType: img.file.type,
            data: base64
          }
        };
      }));

      const prompt = `You are Coach Kay's Elite Brand Auditor.
You are performing a High-Status Neural Brand Audit for ${user.name}.
Analyze these brand assets (screenshots, logos, ads).
Identify:
1. Brand Consistency (Navy/Gold/High-Status alignment).
2. Messaging Power (Is it commanding or pleading?).
3. Visual Authority (Design quality and elite cues).
4. Conversion Leaks (Where are they losing the high-ticket client?).

Provide a "High-Impact Dominance Report".
Format with these sections:
- MISSION CRITICAL: The #1 thing to fix.
- NEURAL ASSET REVIEW: Analysis of the uploaded assets.
- THE ELITE BLUEPRINT: Step-by-step to reach high-status authority.
- COMMANDER'S DIRECTIVE: Final executive word.
Keep it tactical, high-status, and brutally honest.`;

      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      setReport(response.text());
    } catch (err: any) {
      setReport("AUDIT ERROR: " + err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0A0E27]/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 overflow-y-auto">
      <div className="max-w-6xl w-full min-h-[80vh] flex flex-col animate-fade-in py-8">
        <div className="flex justify-between items-start mb-12">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16">{LOGO_SVG}</div>
              <div>
                <h2 className="text-4xl font-brand font-bold text-white tracking-tighter uppercase">The War Room</h2>
                <p className="text-gold-text text-[10px] font-black uppercase tracking-[0.5em]">High-Velocity Brand Audit</p>
              </div>
           </div>
           <button onClick={onClose} className="px-6 py-2 border border-white/10 text-white/40 hover:text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-white/5">Exit Environment</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-8">
              <div className="premium-card p-8 rounded-[2rem] border-2 border-[#D4B46C]/20 bg-[#D4B46C]/5">
                 <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-6 gold-text">{(ICONS as any).AI}</span>
                    Deploy Assets
                 </h3>
                 <p className="text-white/40 text-xs mb-8 leading-relaxed">Upload screenshots of your website, landing pages, ads, or brand logos for a real-time neural audit.</p>

                 <div
                   onClick={() => fileInputRef.current?.click()}
                   className="border-2 border-dashed border-[#D4B46C]/30 rounded-2xl p-12 text-center cursor-pointer hover:border-[#D4B46C] transition-all group"
                 >
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <div className="w-12 h-12 gold-text mx-auto mb-4 group-hover:scale-110 transition-transform">{(ICONS as any).Asset}</div>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Select Tactical Files</p>
                 </div>

                 {images.length > 0 && (
                   <div className="grid grid-cols-4 gap-4 mt-8">
                      {images.map((img, i) => (
                        <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                           <img src={img.preview} alt="preview" className="w-full h-full object-cover" />
                           <button
                             onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                             className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-5 h-5 flex items-center justify-center text-[8px] hover:bg-red-500"
                           >✕</button>
                        </div>
                      ))}
                   </div>
                 )}

                 <button
                   disabled={images.length === 0 || isAnalyzing}
                   onClick={runAudit}
                   className={`mt-8 w-full py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.3em] transition-all ${
                     images.length > 0 && !isAnalyzing
                     ? 'gold-gradient text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(212,180,108,0.3)]'
                     : 'bg-white/5 text-white/20 cursor-not-allowed'
                   }`}
                 >
                    {isAnalyzing ? 'Analyzing Neural Patterns...' : 'Execute Brand Audit'}
                 </button>
              </div>

              <div className="premium-card p-6 rounded-[2rem] border border-white/5 bg-white/2 opacity-60">
                 <h4 className="text-[9px] gold-text font-black uppercase tracking-[0.4em] mb-4">Tactical Grounding</h4>
                 <div className="space-y-3">
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-1 bg-[#D4B46C] rounded-full"></div>
                       <p className="text-[10px] text-white/60 uppercase">Gemini 2.0 Multimodal Link</p>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-1 bg-[#D4B46C] rounded-full"></div>
                       <p className="text-[10px] text-white/60 uppercase">Navy/Gold Brand Logic</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="h-full min-h-[500px]">
              {report ? (
                <div className="premium-card p-10 rounded-[3rem] border-2 border-[#D4B46C]/40 bg-black/40 h-full overflow-y-auto animate-slide-up">
                   <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/10">
                      <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Dominance Report</h3>
                      <button onClick={() => window.print()} className="text-[9px] gold-text font-black uppercase tracking-widest">Download PDF</button>
                   </div>
                   <div className="prose prose-invert max-w-none text-white/80 leading-relaxed font-light whitespace-pre-wrap">
                      {report}
                   </div>
                </div>
              ) : (
                <div className="h-full border border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center p-12 opacity-20">
                   <div className="w-20 h-20 mb-8">{(ICONS as any).AI}</div>
                   <p className="text-xs uppercase tracking-[0.3em]">Awaiting tactical deployment of brand assets...</p>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default WarRoom;
