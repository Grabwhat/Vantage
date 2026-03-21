import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Home } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-10 mt-10">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="size-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
