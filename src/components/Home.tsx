import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle, BookOpen, Flame, Award } from 'lucide-react'
import { Button } from './ui/button'
import { useAuth } from './AuthProvider'
import { courses } from '../data/courses'
import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { supabase } from '../lib/supabase'

export function Home() {
  const { user, profile } = useAuth()
  const [funFact, setFunFact] = useState<string | null>(null)
  const [funFactError, setFunFactError] = useState<string | null>(null)
  const [lessonProgress, setLessonProgress] = useState<
    {
      course_id: string
      lesson_id: string
      completed: boolean | null
      last_started_at: string | null
    }[]
  >([])
  const [currentStreak, setCurrentStreak] = useState(0)

  const progressData = useMemo(() => {
    const data: Record<string, string[]> = {}
    lessonProgress.forEach((row) => {
      if (row.completed) {
        data[row.course_id] = data[row.course_id] || []
        data[row.course_id].push(row.lesson_id)
      }
    })
    return data
  }, [lessonProgress])

  const enrolledCourses = courses.filter((course) => {
    const completed = progressData[course.id]?.length || 0
    const hasStarted = lessonProgress.some((row) => row.course_id === course.id)
    return (completed > 0 || hasStarted) && completed < course.lessons.length
  })
  const totalLessonsCompleted = Object.values(progressData).reduce(
    (acc, lessons) => acc + lessons.length,
    0,
  )
  const completedCourses = courses.filter((course) => {
    const completed = progressData[course.id]?.length || 0
    return completed === course.lessons.length && completed > 0
  }).length

  const continueTarget = enrolledCourses
    .map((course) => {
      const completed = progressData[course.id] || []
      const lastRow = lessonProgress
        .filter((row) => row.course_id === course.id)
        .sort((a, b) => {
          const aT = a.last_started_at ? Date.parse(a.last_started_at) : 0
          const bT = b.last_started_at ? Date.parse(b.last_started_at) : 0
          return bT - aT
        })[0]
      const lastLesson = course.lessons.find((lesson) => lesson.id === lastRow?.lesson_id)
      const nextLesson =
        lastLesson && !completed.includes(lastLesson.id)
          ? lastLesson
          : course.lessons.find((lesson) => !completed.includes(lesson.id))
      const lastStartedAt = lastRow?.last_started_at
        ? Date.parse(lastRow.last_started_at)
        : 0
      return { course, nextLesson, completedCount: completed.length, lastStartedAt }
    })
    .sort((a, b) => b.lastStartedAt - a.lastStartedAt)[0]

  useEffect(() => {
    const loadFact = async () => {
      try {
        const res = await fetch(
          'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',
        )
        if (!res.ok) throw new Error('Failed to load fact')
        const data = (await res.json()) as { text?: string }
        setFunFact(data.text ?? null)
      } catch {
        setFunFactError('Could not load a fun fact right now.')
      }
    }

    loadFact()
  }, [])

  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return
      const { data } = await supabase
        .from('lesson_progress')
        .select('course_id, lesson_id, completed, last_started_at')
        .eq('user_id', user.id)
      setLessonProgress(data ?? [])

      const { data: streakRow } = await supabase
        .from('user_streaks')
        .select('current_streak')
        .eq('user_id', user.id)
        .maybeSingle()
      setCurrentStreak(streakRow?.current_streak ?? 0)
    }

    loadProgress()
  }, [user])

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-80px)]">
      <div className="space-y-16 pb-16">
        <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              {user && (
                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">
                  Welcome back, {profile?.username || 'there'}
                </p>
              )}
              <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-[1.2] pb-1 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Master the Psychology of Life With Vantage
              </h1>
              <p className="text-xl text-muted-foreground dark:text-white mb-8">
                Explore the fascinating world of psychology through interactive lessons,
                practice exercises, and evidence-based learning. Understand the mind,
                behavior, and human experience.
              </p>

              {!user ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/login">
                    <Button size="lg" className="gap-2">
                      Log in <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="lg" variant="outline">
                      Create account
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/subjects">
                    <Button size="lg" className="gap-2">
                      Explore Psychology Courses <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {!user ? (
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Why Choose Vantage
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Structured Lessons',
                    text: 'Clear, bite-sized modules that build real understanding.',
                  },
                  {
                    title: 'Practice & Quizzes',
                    text: 'Apply concepts with interactive questions and feedback.',
                  },
                  {
                    title: 'Progress Tracking',
                    text: 'See your streaks, completed lessons, and growth.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground dark:text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
            <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground dark:text-white mb-2">
                Fun Fact
              </p>
              <p className="text-lg dark:text-white">
                {funFactError ?? funFact ?? 'Loading a fun fact...'}
              </p>
            </div>

            <div className="mb-10">
              {continueTarget?.nextLesson ? (
                  <Link
                    to={`/subjects/${continueTarget.course.subjectId}/${continueTarget.course.id}/${continueTarget.nextLesson.id}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <PlayCircle className="size-5" />
                          Continue Learning
                        </CardTitle>
                        <p className="text-muted-foreground dark:text-white">
                          {continueTarget.course.title} ·{' '}
                          {continueTarget.nextLesson.title}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button size="lg" className="gap-2">
                          Continue Lesson <ArrowRight className="size-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Link to="/dashboard">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <PlayCircle className="size-5" />
                          Your Dashboard
                        </CardTitle>
                        <p className="text-muted-foreground dark:text-white">
                          Pick up where you left off and track your progress.
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button size="lg" variant="outline" className="gap-2">
                          View Dashboard <ArrowRight className="size-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { label: 'Current Streak', value: currentStreak, icon: Flame },
                  { label: 'Courses Completed', value: completedCourses, icon: Award },
                  { label: 'Lessons Completed', value: totalLessonsCompleted, icon: BookOpen },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground dark:text-white mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className="size-11 rounded-lg bg-muted flex items-center justify-center">
                        <stat.icon className="size-5 text-muted-foreground dark:text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
