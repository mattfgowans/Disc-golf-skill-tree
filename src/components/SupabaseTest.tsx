import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function SupabaseTest() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('profiles').select('count').single()
        if (error) throw error
        setStatus('connected')
      } catch (err) {
        setStatus('error')
        setError(err instanceof Error ? err.message : 'Unknown error')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Supabase Connection Test</h2>
      <div className="space-y-2">
        <p>Status: <span className={status === 'connected' ? 'text-green-500' : status === 'error' ? 'text-red-500' : 'text-yellow-500'}>
          {status.toUpperCase()}
        </span></p>
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>
    </div>
  )
} 