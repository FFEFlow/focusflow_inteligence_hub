
export enum UserTier {
  SUMMIT = 'SUMMIT',       // $697 Tier (Summit Architect)
  WHITE_LABEL = 'WHITE_LABEL' // White-Label Partner (Custom)
}

export enum UserRole {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERATOR',
  PARTNER_ADMIN = 'PARTNER_ADMIN'
}

export interface BrandConfig {
  logo?: string;
  primaryColor?: string;
  appName?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  tier: UserTier;
  role: UserRole;
  isAuthorized: boolean; // Global security gate
  avatar?: string;
  isAdmin?: boolean;
  brandConfig?: BrandConfig;
}

export interface ModuleDefinition {
  id: string;
  title: string;
  description: string;
  icon: string;
  tier: UserTier;
  whatYouGet: string[];
  systemPrompt: string;
  initialQuestion: string;
  protocolNotes?: string;
  architectDefinition: string; // High-status tooltip content
  tooltip: string; // Tactical Field Manual: 1-sentence "Why" explanation
  summitDay: 1 | 2; // Linear workflow mapping
}

export interface Attachment {
  name: string;
  type: string;
  data: string; // base64
  mimeType: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  attachments?: Attachment[];
  timestamp: number;
}

export interface SavedReport {
  id: string;
  userId: string;
  moduleId: string;
  moduleName: string;
  title: string;
  content: string;
  timestamp: number;
  media?: { type: 'image' | 'video', url: string, mimeType?: string }[];
}
