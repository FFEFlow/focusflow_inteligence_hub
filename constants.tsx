
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
  // DAY 01: THE BLUEPRINT
  { 
    id: 'clarity-scan', 
    title: 'The Clarity Scan', 
    description: 'Deconstructing your business model to locate the $100K+ implementation bottleneck.', 
    icon: 'Clarity', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Revenue Audit', 'Clarity Score'], 
    systemPrompt: 'Perform a deep revenue model audit. Identify "fog points" where strategic direction is lost. Use objective metrics to score clarity.', 
    initialQuestion: 'What is your current monthly revenue, and what is the specific number that represents your next legacy milestone?',
    architectDefinition: 'Course Note 01: Baseline Diagnostic. We cannot scale what we cannot define. This identifies the delta between your current capacity and your legacy potential.',
    summitDay: 1
  },
  { 
    id: 'leak-detector', 
    title: 'The Leak Detector', 
    description: 'Conducting a full-spectrum audit of your opportunity costs and operational friction.', 
    icon: 'Leak', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Leak Map', 'Root Cause'], 
    systemPrompt: 'Analyze operational throughput. Identify technical and psychological leaks that prevent scaling. Map root causes of implementation stalling.', 
    initialQuestion: 'In your current daily workflow, where do you feel the most "implementation friction"?',
    architectDefinition: 'Course Note 02: Operational Audit. Founders bleed revenue through friction points they have accepted as normal. We stop the bleed here.',
    summitDay: 1
  },
  { 
    id: 'ai-scorer', 
    title: 'Automation Audit', 
    description: 'A technical scan to identify workflows that can be offloaded to neural infrastructure.', 
    icon: 'AI', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Automation List'], 
    systemPrompt: 'Scrub manual tasks for automation potential. Prioritize tasks based on "Neural ROI" (Hours saved vs. Implementation complexity).', 
    initialQuestion: 'List 3 tasks that currently consume the majority of your weekly cognitive load.',
    architectDefinition: 'Course Note 03: Neural ROI Mapping. High-status operators do not perform repetitive tasks. Transition to neural-driven scaling.',
    summitDay: 1
  },
  { 
    id: 'decision-engine', 
    title: 'Priority Compass', 
    description: 'Filtering multiple opportunities through a high-stakes decision matrix for absolute confidence.', 
    icon: 'Decision', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Priority Matrix'], 
    systemPrompt: 'Apply First Principles and Pareto Analysis to user ideas. Force a definitive ranking of opportunities based on legacy impact.', 
    initialQuestion: 'What are the top 3 major strategic moves you are currently debating?',
    architectDefinition: 'Course Note 04: The Pareto Filter. Strategic fog is the enemy of velocity. This forces absolute prioritization on the one move that collapses time.',
    summitDay: 1
  },
  { 
    id: 'revenue-forecaster', 
    title: 'Revenue Forecaster', 
    description: 'Simulating scaling scenarios to predict long-term fiscal outcomes and capital requirements.', 
    icon: 'Revenue', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Growth Forecast'], 
    systemPrompt: 'Model revenue based on lead flow, conversion rates, and LTV. Forecast 12-month trajectory with neural scaling integrated.', 
    initialQuestion: 'What is your current average client LTV and lead acquisition cost?',
    architectDefinition: 'Course Note 05: Predictive Modeling. A legacy is built on data, not hope. Simulate your scaling path to ensure capital is optimized.',
    summitDay: 1
  },

  // DAY 02: THE FOUNDRY
  { 
    id: 'legacy-engine', 
    title: 'Legacy Architect', 
    description: 'Building the powerhouse neural systems that generate high-ticket revenue for generations.', 
    icon: 'Legacy', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Full Funnel Blueprint', 'VSL Script'], 
    systemPrompt: 'Architect a high-ticket ecosystem. Synthesize VSL hooks, funnel logic, and offer positioning into a unified Legacy Asset.', 
    initialQuestion: 'Define the single most important transformation your high-ticket offer provides to your elite clients.',
    architectDefinition: 'Course Note 06: The Core Synthesis. This is the foundation of your $100K shift—a self-sustaining revenue engine.',
    summitDay: 2
  },
  { 
    id: 'asset-audit', 
    title: 'Conversion Audit', 
    description: 'Polishing existing market-facing assets to increase trust-velocity and closing rates.', 
    icon: 'Asset', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Copy Fixes'], 
    systemPrompt: 'Audit landing pages and VSL scripts for psychological triggers. Recommend high-impact copy pivots to increase conversion.', 
    initialQuestion: 'Provide the primary URL or script for the asset we are auditing today.',
    architectDefinition: 'Course Note 07: Trust-Velocity Refinement. We audit for psychological triggers to increase the speed at which leads become clients.',
    summitDay: 2
  },
  { 
    id: 'sales-factory', 
    title: 'The Sales Lab', 
    description: 'Crafting high-status scripts and protocols that close deals with executive precision.', 
    icon: 'Decision', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['DM Scripts'], 
    systemPrompt: 'Develop sales protocols that maintain high-status positioning. Create DM frameworks and closing scripts for high-ticket offers.', 
    initialQuestion: 'What is the number one objection your ideal client typically has before committing?',
    architectDefinition: 'Course Note 08: Executive Closing Protocols. High-ticket sales require high-status scripts. Conversion must be as elite as the offer.',
    summitDay: 2
  },
  { 
    id: 'veo-scene-map', 
    title: 'Cinematic Storyboard', 
    description: 'Engineering high-fidelity visual narratives for brand authority using Veo logic.', 
    icon: 'AI', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['Veo Prompt Set'], 
    systemPrompt: 'Translate brand narrative into cinematic visual prompts. Use high-end lighting and architectural visual logic for Veo generation.', 
    initialQuestion: 'Describe the atmospheric feeling you want your brand visuals to project to the market.',
    architectDefinition: 'Course Note 09: Visual Authority Mapping. High-fidelity visuals establish immediate market dominance. Engineer brand aesthetic for Veo.',
    summitDay: 2
  },
  { 
    id: 'content-repurposer', 
    title: 'The Content Repurposer', 
    description: 'Fragmenting core strategic ideas into high-impact distribution channels for total dominance.', 
    icon: 'Roadmap', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['20+ Assets'], 
    systemPrompt: 'Deconstruct a master asset (transcript/video) into multi-channel distribution modules (LinkedIn, IG, YT). Maintain core brand authority.', 
    initialQuestion: 'Provide the transcript or core idea we are distributing today.',
    architectDefinition: 'Course Note 10: The Neural Ecosystem. Fragment your Legacy Asset into high-authority distribution channels automatically.',
    summitDay: 2
  },
  { 
    id: 'authority-agent', 
    title: 'Search Dominance', 
    description: 'Architecting your name as the first authority people find when searching for solutions.', 
    icon: 'Clarity', 
    tier: UserTier.SUMMIT, 
    whatYouGet: ['SEO Content'], 
    systemPrompt: 'Use search grounding to identify high-authority keywords. Architect content that secures 1st-page dominance for the user name.', 
    initialQuestion: 'What single keyword or niche do you want your legacy to be definitively associated with?',
    architectDefinition: 'Course Note 11: Legacy Search Protocol. You are who Google says you are. Architect 1st-page dominance.',
    summitDay: 2
  },

  // UTILITY & PARTNER TOOLS (EXECUTIVE ANNEX)
  { 
    id: 'nexus-intelligence', 
    title: 'Market Pulse', 
    description: 'Monitoring real-time shifts in AI and market trends to ensure your lead remains absolute.', 
    icon: 'AI', 
    tier: UserTier.WHITE_LABEL, 
    whatYouGet: ['Nexus Report'], 
    systemPrompt: 'Scan global news and AI updates via search grounding. Synthesize real-time trends into actionable strategic pivots.', 
    initialQuestion: 'Which industry or technical shift are we auditing for competitive advantage today?',
    architectDefinition: 'Partner Note: Real-time competitive intelligence. Pivot as fast as the market moves.',
    summitDay: 2
  },
  { 
    id: 'mogul-engine', 
    title: 'Custom Tools Foundry', 
    description: 'Crafting specialized AI agents to handle the heavy lifting of your specific brand workflows.', 
    icon: 'AI', 
    tier: UserTier.WHITE_LABEL, 
    whatYouGet: ['Custom System Prompts'], 
    systemPrompt: 'Architect complex system instructions for custom AI agents. Focus on technical workflow optimization.', 
    initialQuestion: 'What specific repetitive cognitive task are we building an AI agent to solve today?',
    architectDefinition: 'Partner Note: Proprietary Asset Foundry. Creating custom AI operatives to execute implementations at scale.',
    summitDay: 2
  },
  { id: 'crisis-navigator', title: 'The Pivot Partner', description: 'Executing rapid strategic shifts for when the market moves faster than your current plan.', icon: 'Leak', tier: UserTier.WHITE_LABEL, whatYouGet: ['Pivot Plan'], systemPrompt: 'Conduct high-stakes risk assessment. Develop rapid pivot protocols for market disruption.', initialQuestion: 'What major market shift or internal crisis requires a strategic pivot?', architectDefinition: 'Partner Note: Emergency Strategic Override.', summitDay: 1 },
  { id: 'partner-ecosystem', title: 'Partner Hub', description: 'Internal tools for our inner circle to scale white-label ecosystems.', icon: 'Legacy', tier: UserTier.WHITE_LABEL, whatYouGet: ['Brand Config'], systemPrompt: 'Scale partner ecosystems with white-label brand configuration protocols.', initialQuestion: 'What is the target brand name for this ecosystem expansion?', architectDefinition: 'Partner Note: White-Label Infrastructure.', summitDay: 2 }
];
