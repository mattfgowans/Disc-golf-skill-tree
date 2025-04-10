import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';
import { skillAchievements } from '../data/skillAchievements';
import { collectionAchievements } from '../data/collectionAchievements';
import { socialAchievements } from '../data/socialAchievements';
import { Achievement } from '../types/types';

type AchievementContextType = {
  achievements: Achievement[];
  unlockedAchievements: string[];
  unlockAchievement: (id: string) => Promise<void>;
  loading: boolean;
};

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export function AchievementProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Combine all achievements
  const allAchievements = [
    ...skillAchievements,
    ...collectionAchievements,
    ...socialAchievements,
  ];

  // Load unlocked achievements when user changes
  useEffect(() => {
    async function loadUnlockedAchievements() {
      if (!user) {
        setUnlockedAchievements([]);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('achievement_progress')
          .select('achievement_id')
          .eq('user_id', user.id);

        if (error) throw error;

        setUnlockedAchievements(data.map(item => item.achievement_id));
      } catch (error) {
        console.error('Error loading achievements:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUnlockedAchievements();
  }, [user]);

  const unlockAchievement = async (id: string) => {
    if (!user) return;

    try {
      // Add to Supabase
      const { error } = await supabase
        .from('achievement_progress')
        .insert([
          {
            user_id: user.id,
            achievement_id: id,
            unlocked_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      // Update local state
      setUnlockedAchievements(prev => [...prev, id]);
    } catch (error) {
      console.error('Error unlocking achievement:', error);
    }
  };

  // Map achievements with unlocked status
  const achievements = allAchievements.map(achievement => ({
    ...achievement,
    isUnlocked: unlockedAchievements.includes(achievement.id),
  }));

  const value = {
    achievements,
    unlockedAchievements,
    unlockAchievement,
    loading,
  };

  return (
    <AchievementContext.Provider value={value}>
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const context = useContext(AchievementContext);
  if (context === undefined) {
    throw new Error('useAchievements must be used within an AchievementProvider');
  }
  return context;
} 