import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

type AuthContextValue = {
  session: Session | null
  user: User | null
  loading: boolean
  profile: { username: string | null } | null
  setProfile: (profile: { username: string | null } | null) => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<{ username: string | null } | null>(null)

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session ?? null)
      setLoading(false)
    }

    init()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const user = session?.user
    if (!user) {
      setProfile(null)
      return
    }

    const metadataUsername =
      (user.user_metadata?.username as string | undefined) ?? null
    setProfile({ username: metadataUsername })

    const loadProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .single()
      if (!error && data) {
        setProfile({ username: data?.username ?? metadataUsername })
        return
      }

      if (metadataUsername) {
        const { data: upserted, error: upsertError } = await supabase
          .from('profiles')
          .upsert({ id: user.id, username: metadataUsername }, { onConflict: 'id' })
          .select('username')
          .single()
        if (!upsertError) {
          setProfile({ username: upserted?.username ?? metadataUsername })
        }
      }
    }

    loadProfile()
  }, [session])

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
      profile,
      setProfile,
    }),
    [session, loading, profile],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
