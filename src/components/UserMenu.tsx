import { useState } from 'react'
import { useAuth } from './AuthProvider'
import { supabase } from '../lib/supabase'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function UserMenu() {
  const { user, profile, setProfile } = useAuth()
  const [editing, setEditing] = useState(false)
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState(profile?.username ?? '')
  const [saving, setSaving] = useState(false)
  const metadataUsername = (user?.user_metadata?.username as string | undefined) ?? null
  const displayName = profile?.username || metadataUsername || 'Account'

  const startEdit = () => {
    setUsername(profile?.username ?? '')
    setEditing(true)
  }

  const saveName = async () => {
    if (!user) return
    const trimmed = username.trim()
    if (!trimmed) return
    setSaving(true)

    const { error: authError } = await supabase.auth.updateUser({
      data: { username: trimmed },
    })

    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: user.id, username: trimmed }, { onConflict: 'id' })
      .select('username')
      .single()

    setSaving(false)
    if (!authError && !error) {
      setProfile({ username: data?.username ?? trimmed })
      setEditing(false)
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {displayName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {editing ? (
          <div className="px-2 py-2 space-y-2">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Update username"
            />
            <div className="flex items-center gap-2">
              <Button size="sm" onClick={saveName} disabled={saving}>
                {saving ? 'Saving...' : 'Save'}
              </Button>
              <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
                startEdit()
                setOpen(true)
              }}
            >
              Edit name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
              Log out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
