import { supabase } from '../lib/supabase'
import type { AchievementProgress } from '../lib/supabase'

export async function getUnlockedAchievements(userId: string) {
  const { data, error } = await supabase
    .from('achievement_progress')
    .select('*')
    .eq('user_id', userId)

  if (error) throw error
  return data as AchievementProgress[]
}

export async function unlockAchievement(userId: string, achievementId: string) {
  const { data, error } = await supabase
    .from('achievement_progress')
    .insert([
      {
        user_id: userId,
        achievement_id: achievementId,
        unlocked_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) throw error
  return data[0] as AchievementProgress
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(userId: string, updates: Partial<{ username: string; avatar_url: string }>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()

  if (error) throw error
  return data[0]
} 