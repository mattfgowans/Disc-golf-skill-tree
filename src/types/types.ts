export interface Achievement {
    id: string;
    title: string;
    description: string;
    isUnlocked: boolean;
    progress?: number;
    maxProgress?: number;
    patchAvailable?: boolean;
  }
  
  export interface Branch {
    id: string;
    title: string;
    color: string;
    achievements: Achievement[];
    isCompleted: boolean;
  }
  