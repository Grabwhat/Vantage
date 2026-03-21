import { Link, useSearchParams } from 'react-router-dom'
import { courses, subjects } from '../data/courses'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Clock, PlayCircle, Search } from 'lucide-react'

export function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const searchResults = query.trim()
    ? courses.filter((course) => {
        const subject = subjects.find((s) => s.id === course.subjectId)
        const searchLower = query.toLowerCase().trim()

        return (
          course.title.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower) ||
          subject?.name.toLowerCase().includes(searchLower) ||
          subject?.description.toLowerCase().includes(searchLower)
        )
      })
    : []

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/subjects" className="text-blue-600 hover:underline">
              Subjects
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Search Results</span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <Search className="size-8 text-gray-400" />
            <h1 className="text-4xl font-bold">Search Results for "{query}"</h1>
          </div>
          <p className="text-lg text-gray-600">
            Found {searchResults.length}{' '}
            {searchResults.length === 1 ? 'course' : 'courses'}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((course) => {
              const subject = subjects.find((s) => s.id === course.subjectId)
              const totalDuration = course.lessons.reduce((acc, lesson) => {
                const lessonMinutes = lesson.components.reduce((sum, component) => {
                  const minutes = parseInt(component.duration, 10)
                  return sum + (Number.isNaN(minutes) ? 0 : minutes)
                }, 0)
                return acc + lessonMinutes
              }, 0)

              return (
                <Link
                  key={course.id}
                  to={`/subjects/${course.subjectId}/${course.id}/overview?from=search&q=${encodeURIComponent(
                    query,
                  )}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`size-12 ${subject?.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <div className="size-6 bg-white/30 rounded" />
                        </div>
                        <Badge variant="secondary">{course.level}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                      <p className="text-sm text-gray-600 mb-3">
                        {course.description}
                      </p>
                      <div className="text-xs text-blue-600 font-medium">
                        {subject?.name}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <PlayCircle className="size-4" />
                          <span>{course.lessons.length} lessons</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-4" />
                          <span>{totalDuration} min</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <Search className="size-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">No courses found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any courses matching "{query}". Try searching with
                different keywords or browse all subjects.
              </p>
              <Link to="/subjects">
                <Button>Browse All Subjects</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
