import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const SupabaseTest: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        const { error } = await supabase.from('achievement_progress').select('*').limit(1)
        if (error) throw error
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return <div>Supabase connection successful!</div>
}

export default SupabaseTest 