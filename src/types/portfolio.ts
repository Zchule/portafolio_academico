export interface PracticeLink {
  label: string;
  url: string;
  type: 'drive' | 'presentation' | 'canva' | 'video' | 'podcast' | 'document' | 'external';
}

export interface PracticeImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface TeamData {
  groupName: string;
  members: string[];
}

export interface Practice {
  id: number;
  numberStr: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  myContribution: string;
  reflection: string;
  tools: string[];
  accentColor: string; // Tailwind color name or hex
  badgeBg: string;
  badgeText: string;
  iconName: string;
  highlights?: string[];
  team?: TeamData;
  chosenStory?: string;
  links?: PracticeLink[];
  images: PracticeImage[];
}

export interface TimelineStep {
  id: number;
  stageNumber: number;
  title: string;
  quote: string;
  practiceId: number;
  practiceTitle: string;
  iconName: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Presentaciones' | 'Videos' | 'Podcast' | 'Documentos' | 'Herramientas';
  description: string;
  url: string;
  iconName: string;
  tag: string;
}
