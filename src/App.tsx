import { ThemeProvider } from 'next-themes'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from './components/ui/sonner'
import { AuthProvider } from './components/AuthProvider'

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}
