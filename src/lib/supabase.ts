import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Types for our database tables
export type Profile = {
  id: string
  username: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export type AchievementProgress = {
  id: string
  user_id: string
  achievement_id: string
  unlocked_at: string
  created_at: string
}

export type UserPreferences = {
  id: string
  user_id: string
  theme: 'light' | 'dark'
  notifications_enabled: boolean
  created_at: string
  updated_at: string
} 