import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Subjects } from './components/Subjects'
import { Course } from './components/Course'
import { Lesson } from './components/Lesson'
import { Dashboard } from './components/Dashboard'
import { OurMission } from './components/OurMission'
import { MeetTheCrew } from './components/MeetTheCrew'
import { SearchResults } from './components/SearchResults'
import { NotFound } from './components/NotFound'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { RequireAuth } from './components/RequireAuth'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'subjects', Component: Subjects },
      { path: 'subjects/:subjectId/:courseId/overview', Component: Course },
      {
        path: 'subjects/:subjectId/:courseId/:lessonId',
        element: (
          <RequireAuth>
            <Lesson />
          </RequireAuth>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      { path: 'our-mission', Component: OurMission },
      { path: 'meet-the-crew', Component: MeetTheCrew },
      { path: 'search', Component: SearchResults },
      { path: 'login', Component: Login },
      { path: 'signup', Component: Signup },
      { path: '*', Component: NotFound },
    ],
  },
])
