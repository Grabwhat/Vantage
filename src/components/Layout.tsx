import { Outlet, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  GraduationCap,
  Home,
  BookOpen,
  LayoutDashboard,
  Search,
  Target,
  Users,
} from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { useEffect, useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useAuth } from './AuthProvider'
import { UserMenu } from './UserMenu'

export function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    document.title = 'Vantage - Psychology Education'
  }, [])

  useEffect(() => {
    if (location.pathname === '/search') {
      const urlQuery = searchParams.get('q') || ''
      setSearchQuery(urlQuery)
    } else {
      setSearchQuery('')
    }
  }, [location.pathname, searchParams])

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedQuery = searchQuery.trim()
    if (trimmedQuery) {
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="size-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="size-6 text-white" />
              </div>
              <span className="font-bold pl-1 pr-3 text-xl lg:inline">Vantage</span>
            </Link>

            <div className="flex-1 min-w-[240px] max-w-3xl">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for courses, topics, or skills..."
                    className="pl-10 pr-4 bg-input-background text-foreground placeholder:text-muted-foreground w-full"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <nav className="flex items-center gap-2 flex-shrink-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/">
                    <Button
                      variant={isActive('/') && location.pathname === '/' ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-1.5"
                    >
                      <Home className="size-4" />
                      <span className="hidden xl:inline">Home</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/subjects">
                    <Button
                      variant={isActive('/subjects') ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-1.5"
                    >
                      <BookOpen className="size-4" />
                      <span className="hidden xl:inline">Subjects</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Subjects</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/dashboard">
                    <Button
                      variant={isActive('/dashboard') ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-1.5"
                    >
                      <LayoutDashboard className="size-4" />
                      <span className="hidden xl:inline">Dashboard</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dashboard</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/our-mission">
                    <Button
                      variant={isActive('/our-mission') ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-1.5"
                    >
                      <Target className="size-4" />
                      <span className="hidden xl:inline">Our Mission</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Our Mission</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/meet-the-crew">
                    <Button
                      variant={isActive('/meet-the-crew') ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-1.5"
                    >
                      <Users className="size-4" />
                      <span className="hidden xl:inline">Meet the Crew</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Meet the Crew</p>
                </TooltipContent>
              </Tooltip>
            </nav>
            <div className="flex items-center gap-4">
              {user ? (
                <UserMenu />
              ) : (
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Log in
                  </Button>
                </Link>
              )}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
