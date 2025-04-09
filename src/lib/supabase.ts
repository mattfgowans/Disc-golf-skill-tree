import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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