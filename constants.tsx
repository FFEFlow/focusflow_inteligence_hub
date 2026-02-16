
import React from 'react';
import { ModuleDefinition, UserTier } from './types';

export const APP_NAME = "Coach Kay | Focus Flow Elevation (FFE) Intelligence Hub";
export const SKOOL_URL = "https://skool.com/focusflow-elevation-hub";
export const GOOGLE_LABS_URL = "https://labs.google/";
export const ASSET_FOUNDRY_NAME = "Mogul Engine";
export const PROMPTS_UPLINK = "https://coachkayprompts.lovable.app/";
export const SUPPORT_EMAIL = "hello@coachkayelevates.org";
export const CALENDLY_URL = "https://calendly.com/ffe_coach_kay/30min-strategy-call";

export const SUMMIT_PRICE = 697;
export const MASTER_ACCESS_CODE = "LEGACY2026";

export const LOGO_SVG = (
  <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-auto md:w-32 drop-shadow-2xl">
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#E8C878" />
      <stop offset="50%" stopColor="#C9A55C" />
      <stop offset="100%" stopColor="#D6B25E" />
    </linearGradient>
    <path d="M50 15C42 15 35 21 33 29C31 37 31 45 33 53C35 61 40 67 48 69C45 74 45 78 50 82C55 86 62 86 62 86C62 86 60 78 65 74C70 69 75 62 75 50C75 35 68 15 50 15Z" fill="url(#gold-grad)" />
    <path d="M25 75C25 75 25 105 50 122C75 105 75 75 75 75L50 82L25 75Z" fill="url(#gold-grad)"/>
  </svg>
);

export const ICONS = {
  Clarity: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196 7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  Leak: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  AI: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  Decision: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
    </svg>
  ),
  Roadmap: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.75 3.75h-1.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 0114.25 4.5h1.5a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0115.75 19.5zM3.75 18h1.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 005.25 4.5h-1.5a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 003.75 18z" />
    </svg>
  ),
  Asset: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  Legacy: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
    </svg>
  ),
  Revenue: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Dashboard: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
    </svg>
  ),
  Guide: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  History: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Logout: (
    <svg className="w-full h-full p-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  ),
};

export const MODULES: ModuleDefinition[] = [
  // DAY 01: THE BLUEPRINT (IMAGE 1 FEATURES)
  { 
    id: 'nano-photo-lab',
    title: 'Nano Photo Lab',
    description: 'Advanced photo editing and neural style shifts. Add objects, remove backgrounds, or change styles by typing.',
    icon: 'AI',
    tier: UserTier.SUMMIT,
    whatYouGet: ['Edited Assets', 'Neural Style Map'],
    systemPrompt: 'You are the Nano Banana Photo Editor. Guide users through advanced photo editing workflows including object addition, background removal, and style transfer logic.',
    initialQuestion: 'Describe the image modification you want to perform (e.g., "Remove the background and add a gold office setting").',
    architectDefinition: 'Neural Asset 01: Nano-Powered Visuals. Leverage on-device neural logic for rapid brand asset iteration.',
    summitDay: 1
  },
  {
    id: 'veo-animator',
    title: 'Veo Animator',
    description: 'Animating images and creating dynamic video ads using Veo 3 visual narrative logic.',
    icon: 'AI',
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Veo Prompt Set', 'Scene Map'],
    systemPrompt: 'Translate brand narrative into cinematic visual prompts for Veo 3 animation. Focus on turning static assets into dynamic video ads.',
    initialQuestion: 'Provide the static image description or product photo we are animating today.',
    architectDefinition: 'Neural Asset 02: Dynamic Motion. Use Veo to turn static authority into cinematic dominance.',
    summitDay: 1
  },
  { 
    id: 'search-dominator',
    title: 'Search Dominator',
    description: 'Connecting to real-time Google Search data to build agents that discuss current events and news.',
    icon: 'Clarity',
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Real-time Report'],
    systemPrompt: 'Use search grounding to identify high-authority keywords and real-time news. Architect content that secures 1st-page dominance.',
    initialQuestion: 'What current event or industry news do we need to synthesize into your legacy strategy today?',
    architectDefinition: 'Neural Asset 03: Real-time Grounding. Your strategy must live in the present. Connect your legacy to the global pulse.',
    summitDay: 1
  },
  { 
    id: 'maps-strategist',
    title: 'Maps Strategist',
    description: 'Leveraging real-time Google Maps data for location-based business intelligence and routing.',
    icon: 'AI', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Geospatial Map'],
    systemPrompt: 'Analyze location-based business opportunities using real-time Google Maps data. Architect routes, place-based authority, and local expansion.',
    initialQuestion: 'What geographic region or location-based business goal are we auditing today?',
    architectDefinition: 'Neural Asset 04: Geospatial Intelligence. Dominating the physical market using neural location data.',
    summitDay: 1
  },
  { 
    id: 'voice-architect',
    title: 'Voice Architect',
    description: 'Creating conversational voice apps using Gemini Live API logic for immersive brand experiences.',
    icon: 'AI',
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Voice Script', 'Interactive Flow'],
    systemPrompt: 'Architect conversational voice experiences. Use Gemini Live API logic to create fluid, natural-sounding interactions for your brand.',
    initialQuestion: 'What is the primary objective of your conversational voice app?',
    architectDefinition: 'Neural Asset 05: Conversational Authority. Engage your market through fluid, neural voice interactions.',
    summitDay: 1
  },
  { 
    id: 'nano-image-gen',
    title: 'Nano Image Gen',
    description: 'Generating high-quality brand assets and heroes from text prompts using Nano Banana logic.',
    icon: 'AI',
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Visual Asset Prompts'],
    systemPrompt: 'Generate high-fidelity image prompts for Nano Banana models. Focus on creating blog heroes, concepts, and unique brand assets.',
    initialQuestion: 'What unique visual asset are we generating for your application today?',
    architectDefinition: 'Neural Asset 06: Proprietary Asset Foundry. Creating custom visual operatives at scale.',
    summitDay: 1
  },
  { 
    id: 'gemini-intel',
    title: 'Gemini Intel Engine',
    description: 'Deep content analysis and high-status editing using the full Gemini intelligence suite.',
    icon: 'AI',
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Analytic Report'],
    systemPrompt: 'Use Gemini intelligence to analyze complex content, make edits, and complete sophisticated tasks. Focus on high-level strategic reasoning.',
    initialQuestion: 'Provide the content or sophisticated task we are analyzing today.',
    architectDefinition: 'Neural Asset 07: High-Tier Reasoning. The ultimate neural engine for strategic execution.',
    summitDay: 1
  },
  { 
    id: 'chatbot-foundry',
    title: 'Chatbot Foundry',
    description: 'Building context-aware, AI-powered chatbots for support and multi-step bookings.',
    icon: 'AI',
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Chatbot Logic'],
    systemPrompt: 'Architect context-aware chatbots that remember conversations and handle multi-step tasks. Perfect for support agents or booking systems.',
    initialQuestion: 'Describe the support agent or multi-step booking task your chatbot will handle.',
    architectDefinition: 'Neural Asset 08: Autonomous Operatives. Scale your support and conversion without human friction.',
    summitDay: 1
  },

  // DAY 02: THE FOUNDRY (IMAGE 2 FEATURES)
  {
    id: 'veo-cinema',
    title: 'Veo Cinema Lab',
    description: 'Prompt-based video generation. Turn blog posts, scripts, or product descriptions into short video clips.',
    icon: 'AI',
    tier: UserTier.WHITE_LABEL,
    whatYouGet: ['Video Script', 'Cinematic Prompt'],
    systemPrompt: 'You are the Veo Cinema Architect. Convert user text (blogs/scripts) into highly detailed cinematic prompts for Google Veo. Focus on visual storytelling, camera angles, and lighting.',
    initialQuestion: 'Provide the script or blog post you want to transform into a cinematic video clip.',
    architectDefinition: 'Neural Asset 09: Prompt-Based Video. Collapsing the distance between idea and cinema.',
    summitDay: 2
  },
  { 
    id: 'aspect-architect',
    title: 'Aspect Architect',
    description: 'Control image aspect ratios. Build apps that create perfect images for vertical phones or horizontal banners.',
    icon: 'Decision', 
    tier: UserTier.WHITE_LABEL,
    whatYouGet: ['Ratio Logic', 'Dimension Map'],
    systemPrompt: 'Architect precise image generation parameters. Focus on aspect ratios, composition, and resolution scaling for different device formats.',
    initialQuestion: 'What is the target format for your visual asset (e.g., Vertical Mobile Wallpaper or Horizontal Web Header)?',
    architectDefinition: 'Neural Asset 10: Ratio Precision. Engineering the exact shape of your brand authority.',
    summitDay: 2
  },
  { 
    id: 'vision-analyst',
    title: 'Vision Intelligence',
    description: 'Analyze images. See and understand receipts, menus, or charts to get instant data extraction and summaries.',
    icon: 'Clarity',
    tier: UserTier.WHITE_LABEL,
    whatYouGet: ['Data Extraction', 'Visual Summary'],
    systemPrompt: 'Analyze visual data with extreme precision. Extract text, identify patterns in charts, and summarize complex visual information.',
    initialQuestion: 'Upload or describe the image (receipt, chart, menu) you need me to analyze and extract data from.',
    architectDefinition: 'Neural Asset 11: Vision Insight. Converting visual chaos into actionable business intelligence.',
    summitDay: 2
  },
  { 
    id: 'flash-velocity',
    title: 'Flash Velocity',
    description: 'Fast AI responses using 2.5 Flash-Lite. Perfect for instant auto-completes and conversational agents.',
    icon: 'Revenue',
    tier: UserTier.WHITE_LABEL,
    whatYouGet: ['Low-Latency Prompt', 'Velocity Script'],
    systemPrompt: 'Optimize for speed and efficiency. Architect prompts that leverage Gemini 2.5 Flash-Lite for near-instantaneous real-time responses.',
    initialQuestion: 'Describe the real-time application (e.g., Chatbot, Auto-complete) where you need maximum response velocity.',
    architectDefinition: 'Neural Asset 12: Real-time Pulse. Eliminating latency in the user experience.',
    summitDay: 2
  },
  { 
    id: 'video-genius',
    title: 'Video Insight Engine',
    description: 'Video understanding. Find key moments in long videos. Analyze content for summaries or marketing highlights.',
    icon: 'Legacy',
    tier: UserTier.WHITE_LABEL,
    whatYouGet: ['Key Moment Map', 'Marketing Highlights'],
    systemPrompt: 'Deconstruct long-form video content. Identify high-impact hooks, key educational moments, and summarize for rapid consumption.',
    initialQuestion: 'Provide the transcript or video description you want me to deconstruct for key moments.',
    architectDefinition: 'Neural Asset 13: Multimodal Mastery. Deconstructing long-form assets for rapid multi-channel distribution.',
    summitDay: 2
  },
  { 
    id: 'audio-scribe',
    title: 'Audio Transcriptionist',
    description: 'Transcribe audio. Live, real-time transcription of any audio feed for immediate documentation.',
    icon: 'Asset',
    tier: UserTier.WHITE_LABEL, 
    whatYouGet: ['Clean Transcript', 'Strategic Summary'],
    systemPrompt: 'Convert audio feeds into pristine, formatted text. Focus on speaker identification, key point highlighting, and strategic summarization.',
    initialQuestion: 'Upload or provide the audio source you need transcribed and summarized.',
    architectDefinition: 'Neural Asset 14: Vocal Documentation. Capturing every high-status idea in real-time.',
    summitDay: 2
  },
  { 
    id: 'thinking-brain',
    title: 'Strategic Thinking Mode',
    description: 'Think more when needed. Enable "Thinking Mode" to handle your most complex business queries.',
    icon: 'Roadmap',
    tier: UserTier.WHITE_LABEL, 
    whatYouGet: ['Deep Reasoning Report'],
    systemPrompt: 'Engage deep-reasoning protocols. Analyze multi-layered business problems, identify hidden risks, and architect complex solutions with chain-of-thought logic.',
    initialQuestion: 'What is the most complex strategic bottleneck you are currently facing?',
    architectDefinition: 'Neural Asset 15: Thinking Mode. Leveraging advanced reasoning for high-stakes decision architecture.',
    summitDay: 2
  },
  {
    id: 'notebook-analyst',
    title: 'NotebookLM Strategic Analyst',
    description: 'Deep synthesis of your business documents and brand assets into a coherent strategic ecosystem.',
    icon: 'Clarity',
    tier: UserTier.WHITE_LABEL,
    whatYouGet: ['Strategic Synthesis', 'Brand Ecosystem Map'],
    systemPrompt: 'You are the NotebookLM Strategic Analyst. Synthesize multi-source business documents and brand data into a unified strategy. Focus on finding connections between disparate assets.',
    initialQuestion: 'Upload or describe the business documents and brand assets we are synthesizing today.',
    architectDefinition: 'Neural Asset 16: Strategic Synthesis. Unified intelligence across your entire brand ecosystem.',
    summitDay: 2
  }
];
